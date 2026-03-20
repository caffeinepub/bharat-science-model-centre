import Map "mo:core/Map";
import Nat "mo:core/Nat";
import Time "mo:core/Time";
import Iter "mo:core/Iter";
import Runtime "mo:core/Runtime";
import Storage "blob-storage/Storage";

import AccessControl "authorization/access-control";
import MixinAuthorization "authorization/MixinAuthorization";
import MixinStorage "blob-storage/Mixin";


actor {
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);
  include MixinStorage();

  var nextCatalogueId = 0;
  var nextEnquiryId = 0;

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

  // Storage
  let catalogues = Map.empty<Nat, Catalogue>();
  let enquiries = Map.empty<Nat, Enquiry>();

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

  public query ({ caller }) func listCatalogues() : async [Catalogue] {
    catalogues.values().toArray();
  };

  public shared ({ caller }) func deleteCatalogue(id : Nat) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can delete catalogues");
    };

    switch (catalogues.get(id)) {
      case (null) { Runtime.trap("Catalogue not found") };
      case (?_) {
        catalogues.remove(id);
      };
    };
  };

  // Enquiry Management

  public shared ({ caller }) func submitEnquiry(name : Text, email : Text, phone : Text, organization : Text, message : Text, attachment : ?Storage.ExternalBlob) : async Nat {
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
      case (?_) {
        enquiries.remove(id);
      };
    };
  };
};
