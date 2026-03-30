import { Button } from "@/components/ui/button";
import { useSEO } from "@/hooks/useSEO";
import { useNavigate } from "@tanstack/react-router";
import { XCircle } from "lucide-react";

export default function PaymentFailurePage() {
  const navigate = useNavigate();

  useSEO({
    title: "Payment Cancelled | Bharat EduMart",
    description: "Your payment was cancelled. You can try again anytime.",
  });

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-12">
      <div
        className="max-w-md w-full bg-white rounded-2xl border border-card-border shadow-card p-8 text-center"
        data-ocid="payment_failure.card"
      >
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <XCircle className="w-8 h-8 text-red-500" />
        </div>
        <h1 className="text-2xl font-bold text-foreground mb-2">
          Payment Cancelled
        </h1>
        <p className="text-muted-foreground text-sm mb-6">
          Your payment was not completed. No charges were made.
        </p>

        <Button
          onClick={() => navigate({ to: "/download-projects" })}
          className="w-full bg-teal hover:bg-teal-hover text-white rounded-full font-semibold mb-3"
          data-ocid="payment_failure.retry_button"
        >
          Try Again
        </Button>

        <a
          href="https://wa.me/919999899973"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-sm text-teal font-semibold hover:underline"
          data-ocid="payment_failure.whatsapp_link"
        >
          📲 Need help? Contact on WhatsApp: 9999899973
        </a>
      </div>
    </div>
  );
}
