import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useInternetIdentity } from "@/hooks/useInternetIdentity";
import {
  useDeleteCatalogue,
  useDeleteEnquiry,
  useGetAllEnquiries,
  useIsAdmin,
  useListCatalogues,
} from "@/hooks/useQueries";
import { useQueryClient } from "@tanstack/react-query";
import {
  BookOpen,
  Download,
  FileText,
  Loader2,
  LogIn,
  Trash2,
  Users,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

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
  const deleteEnquiry = useDeleteEnquiry();
  const deleteCatalogue = useDeleteCatalogue();
  const [activeTab, setActiveTab] = useState("enquiries");

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
        </Tabs>
      </div>
    </div>
  );
}
