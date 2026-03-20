import { ExternalBlob } from "@/backend";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useSubmitEnquiry } from "@/hooks/useQueries";
import {
  CheckCircle,
  FlaskConical,
  Loader2,
  Paperclip,
  Send,
} from "lucide-react";
import { useRef, useState } from "react";
import { toast } from "sonner";

export default function EnquiryPage() {
  const submit = useSubmitEnquiry();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    message: "",
  });
  const [file, setFile] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const set =
    (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((p) => ({ ...p, [k]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    let attachment: ExternalBlob | null = null;
    if (file) {
      const bytes = new Uint8Array(await file.arrayBuffer());
      attachment = ExternalBlob.fromBytes(bytes);
    }
    try {
      await submit.mutateAsync({
        name: form.name,
        email: form.email,
        phone: form.phone,
        organization: form.organization,
        message: form.message,
        attachment,
      });
      setSubmitted(true);
    } catch {
      toast.error("Submission failed. Please try again.");
    }
  };

  if (submitted) {
    return (
      <div
        className="min-h-screen bg-background flex items-center justify-center px-4"
        data-ocid="enquiry.success_state"
      >
        <div className="text-center max-w-md">
          <div className="w-20 h-20 rounded-full bg-teal-light flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-teal" />
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-3">
            Enquiry Submitted!
          </h2>
          <p className="text-muted-text mb-6">
            Thank you for reaching out. We&apos;ve received your enquiry and
            will get back to you within 24 hours.
          </p>
          <Button
            onClick={() => {
              setSubmitted(false);
              setForm({
                name: "",
                email: "",
                phone: "",
                organization: "",
                message: "",
              });
              setFile(null);
            }}
            className="bg-teal hover:bg-teal-hover text-white rounded-full"
            data-ocid="enquiry.new_enquiry_button"
          >
            Send Another Enquiry
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-navy py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-2">
            Get in Touch
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Send an Enquiry
          </h1>
          <p className="text-white/60 max-w-xl mx-auto text-sm">
            Tell us what you need and we&apos;ll provide a customized quote for
            your school or institution.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <div
          className="bg-white rounded-2xl border border-card-border shadow-card p-8"
          data-ocid="enquiry.form_panel"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-teal-light flex items-center justify-center">
              <FlaskConical className="w-5 h-5 text-teal" />
            </div>
            <div>
              <h2 className="font-bold text-foreground">
                Product / Service Enquiry
              </h2>
              <p className="text-xs text-muted-text">
                Fields marked * are required
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <Label htmlFor="enq-name">Full Name *</Label>
                <Input
                  id="enq-name"
                  value={form.name}
                  onChange={set("name")}
                  placeholder="Your full name"
                  required
                  data-ocid="enquiry.name_input"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="enq-email">Email *</Label>
                <Input
                  id="enq-email"
                  type="email"
                  value={form.email}
                  onChange={set("email")}
                  placeholder="your@email.com"
                  required
                  data-ocid="enquiry.email_input"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="enq-phone">Phone Number *</Label>
                <Input
                  id="enq-phone"
                  value={form.phone}
                  onChange={set("phone")}
                  placeholder="+91 XXXXX XXXXX"
                  required
                  data-ocid="enquiry.phone_input"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="enq-org">Organization / School</Label>
                <Input
                  id="enq-org"
                  value={form.organization}
                  onChange={set("organization")}
                  placeholder="Your school or organization"
                  data-ocid="enquiry.organization_input"
                />
              </div>
            </div>

            <div className="space-y-1">
              <Label htmlFor="enq-message">Product / Requirement *</Label>
              <Textarea
                id="enq-message"
                value={form.message}
                onChange={set("message")}
                placeholder="Describe what products or services you need, quantities, and any specific requirements..."
                rows={5}
                required
                data-ocid="enquiry.message_textarea"
              />
            </div>

            <div className="space-y-1">
              <Label htmlFor="enq-file">Attach File (optional)</Label>
              <div className="flex items-center gap-3">
                <label
                  htmlFor="enq-file"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border border-card-border bg-section-alt text-sm text-muted-text hover:bg-teal-light hover:text-teal cursor-pointer transition-colors"
                  data-ocid="enquiry.upload_button"
                >
                  <Paperclip className="w-4 h-4" />
                  {file ? file.name : "Choose file"}
                </label>
                <input
                  id="enq-file"
                  type="file"
                  className="hidden"
                  ref={fileRef}
                  onChange={(e) => setFile(e.target.files?.[0] ?? null)}
                />
                {file && (
                  <button
                    type="button"
                    className="text-xs text-muted-text hover:text-destructive"
                    onClick={() => {
                      setFile(null);
                      if (fileRef.current) fileRef.current.value = "";
                    }}
                  >
                    Remove
                  </button>
                )}
              </div>
              <p className="text-xs text-muted-text">
                Any file type accepted (max 10MB)
              </p>
            </div>

            <Button
              type="submit"
              disabled={submit.isPending}
              className="w-full bg-teal hover:bg-teal-hover text-white font-semibold rounded-full py-3 h-auto"
              data-ocid="enquiry.submit_button"
            >
              {submit.isPending ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Submit Enquiry
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
