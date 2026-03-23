import { ExternalBlob } from "@/backend";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useInternetIdentity } from "@/hooks/useInternetIdentity";
import {
  useDeleteCatalogue,
  useListCatalogues,
  useUploadCatalogue,
} from "@/hooks/useQueries";
import { useIsAdmin } from "@/hooks/useQueries";
import { useSEO } from "@/hooks/useSEO";
import { Download, FileText, Loader2, Trash2, Upload } from "lucide-react";
import { useRef, useState } from "react";
import { toast } from "sonner";

function formatDate(ns: bigint) {
  return new Date(Number(ns / BigInt(1_000_000))).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function CataloguePage() {
  useSEO({
    title:
      "Product Catalogues | Science Lab Equipment & Educational Supplies | BSMC",
    description:
      "Download BSMC product catalogues for science lab equipment, chemistry glassware, biology instruments, physics apparatus, STEM kits, and school educational supplies.",
  });
  const { identity } = useInternetIdentity();
  const { data: isAdmin } = useIsAdmin();
  const { data: catalogues, isLoading } = useListCatalogues();
  const upload = useUploadCatalogue();
  const deleteCat = useDeleteCatalogue();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [uploadFile, setUploadFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const fileRef = useRef<HTMLInputElement>(null);

  const canUpload = identity && isAdmin;

  const handleUpload = async () => {
    if (!uploadFile || !title.trim()) {
      toast.error("Please provide a title and file.");
      return;
    }
    const bytes = new Uint8Array(await uploadFile.arrayBuffer());
    const blob = ExternalBlob.fromBytes(bytes).withUploadProgress((p) =>
      setUploadProgress(p),
    );
    try {
      await upload.mutateAsync({
        title: title.trim(),
        description: description.trim(),
        file: blob,
      });
      toast.success("Catalogue uploaded successfully!");
      setTitle("");
      setDescription("");
      setUploadFile(null);
      setUploadProgress(0);
      if (fileRef.current) fileRef.current.value = "";
    } catch {
      toast.error("Upload failed. Please try again.");
    }
  };

  const handleDelete = async (id: bigint) => {
    if (!confirm("Delete this catalogue?")) return;
    try {
      await deleteCat.mutateAsync(id);
      toast.success("Catalogue deleted.");
    } catch {
      toast.error("Delete failed.");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Page header */}
      <div className="bg-navy py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-2">
            Resources
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Product Catalogues
          </h1>
          <p className="text-white/60 max-w-xl mx-auto text-sm">
            Download our product catalogues to explore our complete range of
            science education equipment.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        {/* Admin Upload Form */}
        {canUpload && (
          <div
            className="bg-white rounded-xl border border-card-border shadow-card p-6 mb-10"
            data-ocid="catalogue.upload_panel"
          >
            <h2 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              <Upload className="w-5 h-5 text-teal" />
              Upload New Catalogue
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="space-y-1">
                <Label htmlFor="cat-title">Title *</Label>
                <Input
                  id="cat-title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. Biology Equipment Catalogue 2024"
                  data-ocid="catalogue.title_input"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="cat-file">PDF File *</Label>
                <Input
                  id="cat-file"
                  type="file"
                  accept=".pdf"
                  ref={fileRef}
                  onChange={(e) => setUploadFile(e.target.files?.[0] ?? null)}
                  data-ocid="catalogue.upload_button"
                />
              </div>
            </div>
            <div className="mb-4 space-y-1">
              <Label htmlFor="cat-desc">Description</Label>
              <Textarea
                id="cat-desc"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Brief description of the catalogue contents..."
                rows={3}
                data-ocid="catalogue.description_textarea"
              />
            </div>
            {upload.isPending && uploadProgress > 0 && (
              <div className="mb-4">
                <div className="flex justify-between text-xs text-muted-text mb-1">
                  <span>Uploading...</span>
                  <span>{uploadProgress}%</span>
                </div>
                <div className="h-2 bg-section-alt rounded-full overflow-hidden">
                  <div
                    className="h-full bg-teal rounded-full transition-all"
                    style={{ width: `${uploadProgress}%` }}
                  />
                </div>
              </div>
            )}
            <Button
              onClick={handleUpload}
              disabled={upload.isPending}
              className="bg-teal hover:bg-teal-hover text-white rounded-full"
              data-ocid="catalogue.submit_button"
            >
              {upload.isPending ? (
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              ) : (
                <Upload className="w-4 h-4 mr-2" />
              )}
              {upload.isPending ? "Uploading..." : "Upload Catalogue"}
            </Button>
          </div>
        )}

        {/* Catalogue List */}
        {isLoading ? (
          <div
            className="flex items-center justify-center py-20"
            data-ocid="catalogue.loading_state"
          >
            <Loader2 className="w-8 h-8 animate-spin text-teal" />
          </div>
        ) : !catalogues || catalogues.length === 0 ? (
          <div className="text-center py-20" data-ocid="catalogue.empty_state">
            <FileText className="w-12 h-12 text-muted-text mx-auto mb-4" />
            <p className="text-muted-text font-medium">
              No catalogues available yet.
            </p>
            {!canUpload && (
              <p className="text-sm text-muted-text mt-1">
                Check back soon or contact us for product information.
              </p>
            )}
          </div>
        ) : (
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            data-ocid="catalogue.list"
          >
            {catalogues.map((cat, i) => (
              <div
                key={String(cat.id)}
                className="bg-white rounded-xl border border-card-border shadow-card hover:shadow-card-hover transition-shadow p-6 flex flex-col gap-3"
                data-ocid={`catalogue.item.${i + 1}`}
              >
                <div className="w-10 h-10 rounded-full bg-teal-light flex items-center justify-center shrink-0">
                  <FileText className="w-5 h-5 text-teal" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-foreground text-sm mb-1">
                    {cat.title}
                  </h3>
                  {cat.description && (
                    <p className="text-xs text-muted-text leading-relaxed mb-2 line-clamp-2">
                      {cat.description}
                    </p>
                  )}
                  <p className="text-xs text-muted-text">
                    {formatDate(cat.uploadDate)}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={cat.file.getDirectURL()}
                    download
                    className="flex items-center gap-1.5 text-xs font-semibold text-white bg-teal hover:bg-teal-hover px-4 py-2 rounded-full transition-colors"
                    data-ocid={`catalogue.download_button.${i + 1}`}
                  >
                    <Download className="w-3.5 h-3.5" />
                    Download
                  </a>
                  {canUpload && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDelete(cat.id)}
                      disabled={deleteCat.isPending}
                      className="text-destructive hover:text-destructive hover:bg-destructive/10 rounded-full"
                      data-ocid={`catalogue.delete_button.${i + 1}`}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
