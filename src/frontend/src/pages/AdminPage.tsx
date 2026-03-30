import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { useInternetIdentity } from "@/hooks/useInternetIdentity";
import {
  useAddProjectPDF,
  useDeleteCatalogue,
  useDeleteEnquiry,
  useDeleteProjectPDF,
  useGetAllEnquiries,
  useIsAdmin,
  useIsStripeConfigured,
  useListAllProjects,
  useListCatalogues,
  useSetStripeConfiguration,
} from "@/hooks/useQueries";
import { useQueryClient } from "@tanstack/react-query";
import {
  BookOpen,
  Download,
  FileText,
  Loader2,
  LogIn,
  Plus,
  Settings,
  Trash2,
  Users,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const SUBJECTS = [
  "physics",
  "chemistry",
  "biology",
  "economics",
  "accountancy",
  "business-studies",
  "physical-education",
  "political-science",
  "sociology",
  "psychology",
  "history",
];

const SUBJECT_LABELS: Record<string, string> = {
  physics: "Physics",
  chemistry: "Chemistry",
  biology: "Biology",
  economics: "Economics",
  accountancy: "Accountancy",
  "business-studies": "Business Studies",
  "physical-education": "Physical Education",
  "political-science": "Political Science",
  sociology: "Sociology",
  psychology: "Psychology",
  history: "History",
};

function formatDate(ns: bigint) {
  return new Date(Number(ns / BigInt(1_000_000))).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default function AdminPage() {
  const { identity, login, clear, loginStatus } = useInternetIdentity();
  const queryClient = useQueryClient();
  const { data: isAdmin, isLoading: adminLoading } = useIsAdmin();
  const { data: enquiries, isLoading: enquiriesLoading } = useGetAllEnquiries();
  const { data: catalogues, isLoading: cataloguesLoading } =
    useListCatalogues();
  const { data: projects, isLoading: projectsLoading } = useListAllProjects();
  const { data: stripeConfigured } = useIsStripeConfigured();
  const deleteEnquiry = useDeleteEnquiry();
  const deleteCatalogue = useDeleteCatalogue();
  const deleteProject = useDeleteProjectPDF();
  const addProject = useAddProjectPDF();
  const setStripeConfig = useSetStripeConfiguration();
  const [activeTab, setActiveTab] = useState("enquiries");

  // Add project form state
  const [projectForm, setProjectForm] = useState({
    subject: "",
    title: "",
    description: "",
    downloadLink: "",
  });

  // Stripe form state
  const [stripeKey, setStripeKey] = useState("");

  const handleLogin = async () => {
    try {
      await login();
    } catch (e: any) {
      if (e?.message === "User is already authenticated") {
        await clear();
        setTimeout(() => login(), 300);
      }
    }
  };

  const handleLogout = async () => {
    await clear();
    queryClient.clear();
  };

  const handleDeleteEnquiry = async (id: bigint) => {
    if (!confirm("Delete this enquiry?")) return;
    try {
      await deleteEnquiry.mutateAsync(id);
      toast.success("Enquiry deleted.");
    } catch {
      toast.error("Failed to delete.");
    }
  };

  const handleDeleteCatalogue = async (id: bigint) => {
    if (!confirm("Delete this catalogue?")) return;
    try {
      await deleteCatalogue.mutateAsync(id);
      toast.success("Catalogue deleted.");
    } catch {
      toast.error("Failed to delete.");
    }
  };

  const handleDeleteProject = async (id: bigint) => {
    if (!confirm("Delete this project?")) return;
    try {
      await deleteProject.mutateAsync(id);
      toast.success("Project deleted.");
    } catch {
      toast.error("Failed to delete.");
    }
  };

  const handleAddProject = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !projectForm.subject ||
      !projectForm.title ||
      !projectForm.downloadLink
    ) {
      toast.error("Please fill all required fields.");
      return;
    }
    try {
      await addProject.mutateAsync(projectForm);
      toast.success("Project added successfully!");
      setProjectForm({
        subject: "",
        title: "",
        description: "",
        downloadLink: "",
      });
    } catch {
      toast.error("Failed to add project.");
    }
  };

  const handleSaveStripe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripeKey) {
      toast.error("Please enter your Stripe Secret Key.");
      return;
    }
    try {
      await setStripeConfig.mutateAsync({
        secretKey: stripeKey,
        allowedCountries: ["IN"],
      });
      toast.success("Stripe configured successfully!");
      setStripeKey("");
    } catch {
      toast.error("Failed to configure Stripe.");
    }
  };

  // Not logged in
  if (!identity) {
    return (
      <div
        className="min-h-screen bg-background flex items-center justify-center px-4"
        data-ocid="admin.login_panel"
      >
        <div className="bg-white rounded-2xl border border-card-border shadow-card p-10 max-w-sm w-full text-center">
          <div className="w-16 h-16 rounded-full bg-teal-light flex items-center justify-center mx-auto mb-6">
            <LogIn className="w-8 h-8 text-teal" />
          </div>
          <h1 className="text-xl font-bold text-foreground mb-2">
            Admin Login
          </h1>
          <p className="text-sm text-muted-text mb-6">
            Sign in with Internet Identity to access the admin dashboard.
          </p>
          <Button
            onClick={handleLogin}
            disabled={loginStatus === "logging-in"}
            className="w-full bg-teal hover:bg-teal-hover text-white rounded-full"
            data-ocid="admin.login_button"
          >
            {loginStatus === "logging-in" ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Logging in...
              </>
            ) : (
              <>
                <LogIn className="w-4 h-4 mr-2" />
                Login with Internet Identity
              </>
            )}
          </Button>
        </div>
      </div>
    );
  }

  // Logged in but not admin
  if (!adminLoading && !isAdmin) {
    return (
      <div
        className="min-h-screen bg-background flex items-center justify-center px-4"
        data-ocid="admin.access_denied"
      >
        <div className="bg-white rounded-2xl border border-card-border shadow-card p-10 max-w-sm w-full text-center">
          <h1 className="text-xl font-bold text-foreground mb-2">
            Access Denied
          </h1>
          <p className="text-sm text-muted-text mb-6">
            You do not have admin privileges.
          </p>
          <Button
            onClick={handleLogout}
            variant="outline"
            className="border-teal text-teal hover:bg-teal hover:text-white rounded-full"
            data-ocid="admin.logout_button"
          >
            Logout
          </Button>
        </div>
      </div>
    );
  }

  if (adminLoading) {
    return (
      <div
        className="min-h-screen bg-background flex items-center justify-center"
        data-ocid="admin.loading_state"
      >
        <Loader2 className="w-8 h-8 animate-spin text-teal" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-navy py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          <div>
            <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-1">
              Admin Panel
            </p>
            <h1 className="text-2xl font-bold text-white">Dashboard</h1>
          </div>
          <Button
            onClick={handleLogout}
            variant="outline"
            className="border-white/30 text-white hover:bg-white/10 rounded-full"
            data-ocid="admin.logout_button"
          >
            Logout
          </Button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-6" data-ocid="admin.tabs">
            <TabsTrigger
              value="enquiries"
              className="flex items-center gap-2"
              data-ocid="admin.enquiries_tab"
            >
              <Users className="w-4 h-4" />
              Enquiries ({enquiries?.length ?? 0})
            </TabsTrigger>
            <TabsTrigger
              value="catalogues"
              className="flex items-center gap-2"
              data-ocid="admin.catalogues_tab"
            >
              <BookOpen className="w-4 h-4" />
              Catalogues ({catalogues?.length ?? 0})
            </TabsTrigger>
            <TabsTrigger
              value="projects"
              className="flex items-center gap-2"
              data-ocid="admin.projects_tab"
            >
              <FileText className="w-4 h-4" />
              Projects ({projects?.length ?? 0})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="enquiries" data-ocid="admin.enquiries_panel">
            <div className="bg-white rounded-xl border border-card-border shadow-card overflow-hidden">
              <div className="p-4 border-b border-card-border">
                <h2 className="font-bold text-foreground">All Enquiries</h2>
              </div>
              {enquiriesLoading ? (
                <div
                  className="flex items-center justify-center py-16"
                  data-ocid="admin.enquiries_loading_state"
                >
                  <Loader2 className="w-6 h-6 animate-spin text-teal" />
                </div>
              ) : !enquiries || enquiries.length === 0 ? (
                <div
                  className="text-center py-16 text-muted-text"
                  data-ocid="admin.enquiries_empty_state"
                >
                  No enquiries yet.
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <Table data-ocid="admin.enquiries_table">
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Phone</TableHead>
                        <TableHead>Organization</TableHead>
                        <TableHead>Message</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Attachment</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {enquiries.map((enq, i) => (
                        <TableRow
                          key={String(enq.id)}
                          data-ocid={`admin.enquiries_row.${i + 1}`}
                        >
                          <TableCell className="font-medium">
                            {enq.name}
                          </TableCell>
                          <TableCell>{enq.email}</TableCell>
                          <TableCell>{enq.phone}</TableCell>
                          <TableCell>{enq.organization || "-"}</TableCell>
                          <TableCell className="max-w-xs">
                            <p className="truncate text-sm" title={enq.message}>
                              {enq.message}
                            </p>
                          </TableCell>
                          <TableCell className="text-xs whitespace-nowrap">
                            {formatDate(enq.submittedAt)}
                          </TableCell>
                          <TableCell>
                            {enq.attachment ? (
                              <a
                                href={enq.attachment.getDirectURL()}
                                download
                                className="flex items-center gap-1 text-teal hover:underline text-xs"
                                data-ocid={`admin.download_button.${i + 1}`}
                              >
                                <Download className="w-3.5 h-3.5" />
                                Download
                              </a>
                            ) : (
                              <span className="text-xs text-muted-text">
                                None
                              </span>
                            )}
                          </TableCell>
                          <TableCell>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleDeleteEnquiry(enq.id)}
                              disabled={deleteEnquiry.isPending}
                              className="text-destructive hover:text-destructive hover:bg-destructive/10"
                              data-ocid={`admin.delete_button.${i + 1}`}
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="catalogues" data-ocid="admin.catalogues_panel">
            <div className="bg-white rounded-xl border border-card-border shadow-card overflow-hidden">
              <div className="p-4 border-b border-card-border">
                <h2 className="font-bold text-foreground">Catalogues</h2>
                <p className="text-xs text-muted-text mt-1">
                  Go to the Catalogue page to upload new catalogues.
                </p>
              </div>
              {cataloguesLoading ? (
                <div
                  className="flex items-center justify-center py-16"
                  data-ocid="admin.catalogues_loading_state"
                >
                  <Loader2 className="w-6 h-6 animate-spin text-teal" />
                </div>
              ) : !catalogues || catalogues.length === 0 ? (
                <div
                  className="text-center py-16 text-muted-text"
                  data-ocid="admin.catalogues_empty_state"
                >
                  No catalogues uploaded yet.
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <Table data-ocid="admin.catalogues_table">
                    <TableHeader>
                      <TableRow>
                        <TableHead>Title</TableHead>
                        <TableHead>Description</TableHead>
                        <TableHead>Upload Date</TableHead>
                        <TableHead>File</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {catalogues.map((cat, i) => (
                        <TableRow
                          key={String(cat.id)}
                          data-ocid={`admin.catalogues_row.${i + 1}`}
                        >
                          <TableCell className="font-medium">
                            {cat.title}
                          </TableCell>
                          <TableCell className="text-sm text-muted-text max-w-xs">
                            <p className="truncate">{cat.description || "-"}</p>
                          </TableCell>
                          <TableCell className="text-xs whitespace-nowrap">
                            {formatDate(cat.uploadDate)}
                          </TableCell>
                          <TableCell>
                            <a
                              href={cat.file.getDirectURL()}
                              download
                              className="flex items-center gap-1 text-teal hover:underline text-xs"
                            >
                              <FileText className="w-3.5 h-3.5" />
                              Download
                            </a>
                          </TableCell>
                          <TableCell>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleDeleteCatalogue(cat.id)}
                              disabled={deleteCatalogue.isPending}
                              className="text-destructive hover:text-destructive hover:bg-destructive/10"
                              data-ocid={`admin.catalogue_delete_button.${i + 1}`}
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="projects" data-ocid="admin.projects_panel">
            {/* Stripe configuration */}
            <div className="bg-white rounded-xl border border-card-border shadow-card p-6 mb-6">
              <div className="flex items-center gap-2 mb-4">
                <Settings className="w-5 h-5 text-teal" />
                <h2 className="font-bold text-foreground">
                  Stripe Payment Configuration
                </h2>
                {stripeConfigured ? (
                  <span className="ml-auto text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold">
                    ✓ Configured
                  </span>
                ) : (
                  <span className="ml-auto text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-semibold">
                    Not configured
                  </span>
                )}
              </div>
              {stripeConfigured ? (
                <p className="text-sm text-muted-foreground">
                  Stripe is configured. To update the key, enter a new one
                  below.
                </p>
              ) : (
                <p className="text-sm text-amber-700 mb-3">
                  ⚠️ Stripe is not configured. Students cannot pay until you add
                  your Stripe Secret Key.
                </p>
              )}
              <form onSubmit={handleSaveStripe} className="flex gap-3 mt-3">
                <Input
                  type="password"
                  placeholder="Stripe Secret Key (sk_live_... or sk_test_...)"
                  value={stripeKey}
                  onChange={(e) => setStripeKey(e.target.value)}
                  className="flex-1"
                  data-ocid="admin.stripe_key_input"
                />
                <Button
                  type="submit"
                  disabled={setStripeConfig.isPending}
                  className="bg-teal hover:bg-teal-hover text-white rounded-full whitespace-nowrap"
                  data-ocid="admin.stripe_save_button"
                >
                  {setStripeConfig.isPending ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    "Save Key"
                  )}
                </Button>
              </form>
              <p className="text-xs text-muted-foreground mt-2">
                Countries allowed for payment: India (IN). Contact support to
                add more.
              </p>
            </div>

            {/* Add Project form */}
            <div className="bg-white rounded-xl border border-card-border shadow-card p-6 mb-6">
              <div className="flex items-center gap-2 mb-4">
                <Plus className="w-5 h-5 text-teal" />
                <h2 className="font-bold text-foreground">
                  Add New Project PDF
                </h2>
              </div>
              <form
                onSubmit={handleAddProject}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                data-ocid="admin.add_project_form"
              >
                <div>
                  <Label
                    htmlFor="project-subject"
                    className="text-sm font-medium mb-1 block"
                  >
                    Subject *
                  </Label>
                  <Select
                    value={projectForm.subject}
                    onValueChange={(v) =>
                      setProjectForm((p) => ({ ...p, subject: v }))
                    }
                  >
                    <SelectTrigger
                      id="project-subject"
                      data-ocid="admin.project_subject_select"
                    >
                      <SelectValue placeholder="Select subject" />
                    </SelectTrigger>
                    <SelectContent>
                      {SUBJECTS.map((s) => (
                        <SelectItem key={s} value={s}>
                          {SUBJECT_LABELS[s]}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label
                    htmlFor="project-title"
                    className="text-sm font-medium mb-1 block"
                  >
                    Title *
                  </Label>
                  <Input
                    id="project-title"
                    placeholder="e.g. Study of Ohm's Law"
                    value={projectForm.title}
                    onChange={(e) =>
                      setProjectForm((p) => ({ ...p, title: e.target.value }))
                    }
                    data-ocid="admin.project_title_input"
                  />
                </div>
                <div className="sm:col-span-2">
                  <Label
                    htmlFor="project-desc"
                    className="text-sm font-medium mb-1 block"
                  >
                    Description
                  </Label>
                  <Textarea
                    id="project-desc"
                    placeholder="Brief description of the project content..."
                    value={projectForm.description}
                    onChange={(e) =>
                      setProjectForm((p) => ({
                        ...p,
                        description: e.target.value,
                      }))
                    }
                    rows={2}
                    data-ocid="admin.project_description_textarea"
                  />
                </div>
                <div className="sm:col-span-2">
                  <Label
                    htmlFor="project-link"
                    className="text-sm font-medium mb-1 block"
                  >
                    Google Drive Download Link *
                  </Label>
                  <Input
                    id="project-link"
                    placeholder="https://drive.google.com/file/d/.../view"
                    value={projectForm.downloadLink}
                    onChange={(e) =>
                      setProjectForm((p) => ({
                        ...p,
                        downloadLink: e.target.value,
                      }))
                    }
                    data-ocid="admin.project_link_input"
                  />
                </div>
                <div className="sm:col-span-2">
                  <Button
                    type="submit"
                    disabled={addProject.isPending}
                    className="bg-teal hover:bg-teal-hover text-white rounded-full"
                    data-ocid="admin.add_project_submit_button"
                  >
                    {addProject.isPending ? (
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    ) : (
                      <Plus className="w-4 h-4 mr-2" />
                    )}
                    Add Project
                  </Button>
                </div>
              </form>
            </div>

            {/* Projects table */}
            <div className="bg-white rounded-xl border border-card-border shadow-card overflow-hidden">
              <div className="p-4 border-b border-card-border">
                <h2 className="font-bold text-foreground">
                  All Projects ({projects?.length ?? 0})
                </h2>
              </div>
              {projectsLoading ? (
                <div
                  className="flex items-center justify-center py-16"
                  data-ocid="admin.projects_loading_state"
                >
                  <Loader2 className="w-6 h-6 animate-spin text-teal" />
                </div>
              ) : !projects || projects.length === 0 ? (
                <div
                  className="text-center py-16 text-muted-text"
                  data-ocid="admin.projects_empty_state"
                >
                  No projects added yet. Use the form above to add projects.
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <Table data-ocid="admin.projects_table">
                    <TableHeader>
                      <TableRow>
                        <TableHead>Subject</TableHead>
                        <TableHead>Title</TableHead>
                        <TableHead>Description</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {projects.map((project, i) => (
                        <TableRow
                          key={String(project.id)}
                          data-ocid={`admin.projects_row.${i + 1}`}
                        >
                          <TableCell className="font-medium">
                            {SUBJECT_LABELS[project.subject] ?? project.subject}
                          </TableCell>
                          <TableCell>{project.title}</TableCell>
                          <TableCell className="text-sm text-muted-text max-w-xs">
                            <p className="truncate">
                              {project.description || "-"}
                            </p>
                          </TableCell>
                          <TableCell className="font-semibold text-teal">
                            ₹{Number(project.price)}
                          </TableCell>
                          <TableCell>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleDeleteProject(project.id)}
                              disabled={deleteProject.isPending}
                              className="text-destructive hover:text-destructive hover:bg-destructive/10"
                              data-ocid={`admin.project_delete_button.${i + 1}`}
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6">
          <h3 className="font-bold text-blue-900 mb-3">
            📊 SEO Setup Guidance
          </h3>
          <div className="space-y-4 text-sm text-blue-800">
            <div>
              <h4 className="font-semibold mb-1">Google Search Console</h4>
              <ol className="list-decimal ml-4 space-y-1">
                <li>
                  Go to{" "}
                  <a
                    href="https://search.google.com/search-console"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    search.google.com/search-console
                  </a>
                </li>
                <li>Add your property URL</li>
                <li>Verify ownership via HTML tag or DNS</li>
                <li>
                  Submit your sitemap:{" "}
                  <code className="bg-blue-100 px-1 rounded">
                    https://bharatedumart.com/sitemap.xml
                  </code>
                </li>
              </ol>
            </div>
            <div>
              <h4 className="font-semibold mb-1">Google Analytics 4</h4>
              <ol className="list-decimal ml-4 space-y-1">
                <li>
                  Go to{" "}
                  <a
                    href="https://analytics.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    analytics.google.com
                  </a>
                </li>
                <li>Create a GA4 property for your website</li>
                <li>Copy your Measurement ID (format: G-XXXXXXXXXX)</li>
                <li>
                  Add the GA4 script to your website's index.html head section
                </li>
              </ol>
            </div>
            <div>
              <h4 className="font-semibold mb-1">Backlink Strategy</h4>
              <ul className="list-disc ml-4 space-y-1">
                <li>
                  Register on JustDial, IndiaMart, TradeIndia with your business
                  details
                </li>
                <li>
                  List on Google My Business with photos and product categories
                </li>
                <li>Get listed in school supplier directories across India</li>
                <li>
                  Share product catalogues on educational forums and WhatsApp
                  groups
                </li>
                <li>Request reviews from schools you've supplied to</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
