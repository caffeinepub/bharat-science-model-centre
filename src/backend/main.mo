import Map "mo:core/Map";
import Nat "mo:core/Nat";
import Text "mo:core/Text";
import Time "mo:core/Time";
import Runtime "mo:core/Runtime";
import Storage "blob-storage/Storage";
import Stripe "stripe/stripe";
import OutCall "http-outcalls/outcall";

import AccessControl "authorization/access-control";
import MixinAuthorization "authorization/MixinAuthorization";
import MixinStorage "blob-storage/Mixin";


actor {
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);
  include MixinStorage();

  var nextCatalogueId = 0;
  var nextEnquiryId = 0;
  var nextProjectId = 0;

  // Types
  public type Catalogue = {
    id : Nat;
    title : Text;
    description : Text;
    uploadDate : Time.Time;
    file : Storage.ExternalBlob;
  };

  public type Enquiry = {
    id : Nat;
    name : Text;
    email : Text;
    phone : Text;
    organization : Text;
    message : Text;
    attachment : ?Storage.ExternalBlob;
    submittedAt : Time.Time;
  };

  public type ProjectPDF = {
    id : Nat;
    title : Text;
    subject : Text;
    description : Text;
    downloadLink : Text;
    price : Nat;
    createdAt : Time.Time;
  };

  public type ProjectSummary = {
    id : Nat;
    title : Text;
    subject : Text;
    description : Text;
    price : Nat;
  };

  // Stripe configuration
  var stripeConfig : ?Stripe.StripeConfiguration = null;

  // Storage
  let catalogues = Map.empty<Nat, Catalogue>();
  let enquiries = Map.empty<Nat, Enquiry>();
  let projects = Map.empty<Nat, ProjectPDF>();

  // Transform for HTTP outcalls
  public query func transform(input : OutCall.TransformationInput) : async OutCall.TransformationOutput {
    { input.response with headers = [] };
  };

  // Catalogue Management

  public shared ({ caller }) func uploadCatalogue(title : Text, description : Text, file : Storage.ExternalBlob) : async Nat {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can upload catalogues");
    };

    let id = nextCatalogueId;
    let catalogue : Catalogue = {
      id;
      title;
      description;
      uploadDate = Time.now();
      file;
    };

    catalogues.add(id, catalogue);
    nextCatalogueId += 1;
    id;
  };

  public query func listCatalogues() : async [Catalogue] {
    catalogues.values().toArray();
  };

  public shared ({ caller }) func deleteCatalogue(id : Nat) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can delete catalogues");
    };

    switch (catalogues.get(id)) {
      case (null) { Runtime.trap("Catalogue not found") };
      case (?_) { catalogues.remove(id) };
    };
  };

  // Enquiry Management

  public shared func submitEnquiry(name : Text, email : Text, phone : Text, organization : Text, message : Text, attachment : ?Storage.ExternalBlob) : async Nat {
    let id = nextEnquiryId;
    let enquiry : Enquiry = {
      id;
      name;
      email;
      phone;
      organization;
      message;
      attachment;
      submittedAt = Time.now();
    };

    enquiries.add(id, enquiry);
    nextEnquiryId += 1;
    id;
  };

  public query ({ caller }) func getAllEnquiries() : async [Enquiry] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can view all enquiries");
    };
    enquiries.values().toArray();
  };

  public shared ({ caller }) func deleteEnquiry(id : Nat) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can delete enquiries");
    };

    switch (enquiries.get(id)) {
      case (null) { Runtime.trap("Enquiry not found") };
      case (?_) { enquiries.remove(id) };
    };
  };

  // Stripe Configuration

  public shared ({ caller }) func setStripeConfiguration(secretKey : Text, allowedCountries : [Text]) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can configure Stripe");
    };
    stripeConfig := ?{ secretKey; allowedCountries };
  };

  public query func isStripeConfigured() : async Bool {
    switch (stripeConfig) {
      case (null) { false };
      case (?_) { true };
    };
  };

  // Project PDF Management

  public shared ({ caller }) func addProjectPDF(title : Text, subject : Text, description : Text, downloadLink : Text) : async Nat {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can add projects");
    };

    let id = nextProjectId;
    let project : ProjectPDF = {
      id;
      title;
      subject;
      description;
      downloadLink;
      price = 4900;
      createdAt = Time.now();
    };

    projects.add(id, project);
    nextProjectId += 1;
    id;
  };

  public shared ({ caller }) func deleteProjectPDF(id : Nat) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can delete projects");
    };

    switch (projects.get(id)) {
      case (null) { Runtime.trap("Project not found") };
      case (?_) { projects.remove(id) };
    };
  };

  public query func listProjectsBySubject(subject : Text) : async [ProjectSummary] {
    projects.values()
      .filter(func(p : ProjectPDF) : Bool { p.subject == subject })
      .map(func(p : ProjectPDF) : ProjectSummary {
        { id = p.id; title = p.title; subject = p.subject; description = p.description; price = p.price }
      })
      .toArray();
  };

  public query func listAllProjects() : async [ProjectSummary] {
    projects.values()
      .map(func(p : ProjectPDF) : ProjectSummary {
        { id = p.id; title = p.title; subject = p.subject; description = p.description; price = p.price }
      })
      .toArray();
  };

  public query func getProjectDownloadLink(projectId : Nat) : async ?Text {
    switch (projects.get(projectId)) {
      case (null) { null };
      case (?p) { ?p.downloadLink };
    };
  };

  // Stripe checkout for a single project at Rs 49
  public shared ({ caller }) func createProjectCheckoutSession(projectId : Nat, successUrl : Text, cancelUrl : Text) : async Text {
    let config = switch (stripeConfig) {
      case (null) { Runtime.trap("Stripe is not configured") };
      case (?c) { c };
    };

    let project = switch (projects.get(projectId)) {
      case (null) { Runtime.trap("Project not found") };
      case (?p) { p };
    };

    let items : [Stripe.ShoppingItem] = [{
      currency = "inr";
      productName = project.title;
      productDescription = project.description;
      priceInCents = project.price;
      quantity = 1;
    }];

    await Stripe.createCheckoutSession(config, caller, items, successUrl, cancelUrl, transform);
  };
};
