import { Button } from "@/components/ui/button";
import { useActor } from "@/hooks/useActor";
import { useSEO } from "@/hooks/useSEO";
import type { ExtendedBackend } from "@/types/projects";
import { useNavigate } from "@tanstack/react-router";
import { CheckCircle, Download, Loader2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function PaymentSuccessPage() {
  const navigate = useNavigate();
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const { actor } = useActor();
  const fetchedRef = useRef(false);

  useSEO({
    title: "Payment Successful – Download Your Project | Bharat EduMart",
    description: "Your payment was successful. Download your project PDF now.",
  });

  useEffect(() => {
    if (fetchedRef.current || !actor) return;
    fetchedRef.current = true;

    const fetchLink = async () => {
      const params = new URLSearchParams(window.location.search);
      const projectIdStr =
        params.get("projectId") || localStorage.getItem("pendingProjectId");

      if (!projectIdStr) {
        setIsLoading(false);
        setError(true);
        return;
      }

      try {
        const projectId = BigInt(projectIdStr);
        const result = await (
          actor as unknown as ExtendedBackend
        ).getProjectDownloadLink(projectId);
        if (result.__kind__ === "Some") {
          setDownloadUrl(result.value);
        } else {
          setError(true);
        }
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLink();
  }, [actor]);

  const handleDownload = () => {
    if (downloadUrl) {
      window.open(downloadUrl, "_blank");
      localStorage.removeItem("pendingProjectId");
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-12">
      <div
        className="max-w-md w-full bg-white rounded-2xl border border-card-border shadow-card p-8 text-center"
        data-ocid="payment_success.card"
      >
        {isLoading && (
          <div data-ocid="payment_success.loading_state">
            <Loader2 className="w-12 h-12 animate-spin text-teal mx-auto mb-4" />
            <p className="text-muted-foreground">Preparing your download...</p>
          </div>
        )}

        {!isLoading && !error && downloadUrl && (
          <div data-ocid="payment_success.success_state">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="text-2xl font-bold text-foreground mb-2">
              Payment Successful! 🎉
            </h1>
            <p className="text-muted-foreground text-sm mb-6">
              Your project PDF is ready to download.
            </p>

            <Button
              onClick={handleDownload}
              className="w-full bg-teal hover:bg-teal-hover text-white rounded-full font-semibold mb-4"
              data-ocid="payment_success.download_button"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Your Project PDF
            </Button>

            <p className="text-xs text-muted-foreground">
              Thank you for your purchase. For any issues, contact us on
              WhatsApp:{" "}
              <a
                href="https://wa.me/919999899973"
                className="text-teal font-semibold hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                9999899973
              </a>
            </p>
          </div>
        )}

        {!isLoading && error && (
          <div data-ocid="payment_success.error_state">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Download className="w-8 h-8 text-amber-600" />
            </div>
            <h1 className="text-xl font-bold text-foreground mb-2">
              Download Link Not Found
            </h1>
            <p className="text-muted-foreground text-sm mb-4">
              We couldn't retrieve your download link. Please contact us and
              we'll send it to you directly.
            </p>
            <a
              href="https://wa.me/919999899973"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full py-2.5 rounded-full bg-teal text-white font-semibold text-sm hover:bg-teal/90 transition-colors mb-3"
              data-ocid="payment_success.whatsapp_button"
            >
              📲 Contact on WhatsApp: 9999899973
            </a>
            <Button
              variant="outline"
              className="w-full rounded-full"
              onClick={() => navigate({ to: "/download-projects" })}
              data-ocid="payment_success.back_button"
            >
              Back to Projects
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
