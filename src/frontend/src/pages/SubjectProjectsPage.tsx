import { Button } from "@/components/ui/button";
import {
  useCreateProjectCheckoutSession,
  useIsStripeConfigured,
  useListProjectsBySubject,
} from "@/hooks/useQueries";
import { useSEO } from "@/hooks/useSEO";
import { useNavigate, useParams } from "@tanstack/react-router";
import { ArrowLeft, Download, Loader2, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

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

const SUBJECT_EMOJIS: Record<string, string> = {
  physics: "⚛️",
  chemistry: "🧪",
  biology: "🧬",
  economics: "📊",
  accountancy: "📒",
  "business-studies": "💼",
  "physical-education": "🏃",
  "political-science": "🏛️",
  sociology: "👥",
  psychology: "🧠",
  history: "📜",
};

export default function SubjectProjectsPage() {
  const { subject } = useParams({ from: "/download-projects/$subject" });
  const navigate = useNavigate();
  const [buyingId, setBuyingId] = useState<bigint | null>(null);

  const subjectLabel = SUBJECT_LABELS[subject] ?? subject;
  const subjectEmoji = SUBJECT_EMOJIS[subject] ?? "📄";

  useSEO({
    title: `${subjectLabel} Project PDFs – ₹49 | Download | Bharat EduMart`,
    description: `Download handwritten ${subjectLabel} project PDFs for CBSE/ICSE students at ₹49 each. Instant download after payment.`,
    canonical: `https://bharatedumart.com/download-projects/${subject}`,
  });

  const { data: projects, isLoading } = useListProjectsBySubject(subject);
  const { data: stripeConfigured } = useIsStripeConfigured();
  const createCheckout = useCreateProjectCheckoutSession();

  const handleBuy = async (projectId: bigint) => {
    setBuyingId(projectId);
    try {
      const successUrl = `${window.location.origin}/payment-success?projectId=${projectId.toString()}`;
      const cancelUrl = `${window.location.origin}/download-projects/${subject}`;

      localStorage.setItem("pendingProjectId", projectId.toString());
      const result = await createCheckout.mutateAsync({
        projectId,
        successUrl,
        cancelUrl,
      });

      const session = JSON.parse(result) as { url: string };
      window.location.href = session.url;
    } catch (_err) {
      toast.error(
        "Failed to initiate payment. Please try again or contact us on WhatsApp.",
      );
      setBuyingId(null);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-navy text-white py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <button
            type="button"
            onClick={() => navigate({ to: "/download-projects" })}
            className="flex items-center gap-1.5 text-white/70 hover:text-white text-sm mb-4 transition-colors"
            data-ocid="subject_projects.back_button"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to subjects
          </button>
          <div className="flex items-center gap-3">
            <span className="text-4xl">{subjectEmoji}</span>
            <div>
              <h1 className="text-2xl font-bold">{subjectLabel} Projects</h1>
              <p className="text-white/70 text-sm">
                Handwritten CBSE/ICSE project PDFs — ₹49 each
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        {/* Stripe not configured */}
        {stripeConfigured === false && (
          <div
            className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-6 text-center"
            data-ocid="subject_projects.stripe_warning"
          >
            <p className="text-amber-800 font-medium text-sm">
              Payment system is being set up. Please contact us via WhatsApp.
            </p>
            <a
              href="https://wa.me/919999899973"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-sm font-semibold text-teal hover:underline"
            >
              📲 WhatsApp: 9999899973
            </a>
          </div>
        )}

        {/* Loading */}
        {isLoading && (
          <div
            className="flex items-center justify-center py-16"
            data-ocid="subject_projects.loading_state"
          >
            <Loader2 className="w-8 h-8 animate-spin text-teal" />
          </div>
        )}

        {/* Empty state */}
        {!isLoading && projects && projects.length === 0 && (
          <div
            className="text-center py-16 bg-muted/30 rounded-xl border border-border"
            data-ocid="subject_projects.empty_state"
          >
            <span className="text-5xl mb-4 block">📭</span>
            <h2 className="font-bold text-foreground text-lg mb-2">
              Projects Coming Soon!
            </h2>
            <p className="text-muted-foreground text-sm mb-4">
              We're preparing {subjectLabel} projects. Check back soon or
              contact us.
            </p>
            <a
              href="https://wa.me/919999899973"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm font-semibold text-teal hover:underline"
            >
              📲 Contact us on WhatsApp: 9999899973
            </a>
          </div>
        )}

        {/* Projects list */}
        {!isLoading && projects && projects.length > 0 && (
          <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            data-ocid="subject_projects.list"
          >
            {projects.map((project, i) => (
              <div
                key={project.id.toString()}
                className="bg-white rounded-xl border border-card-border shadow-card p-5 flex flex-col gap-3"
                data-ocid={`subject_projects.item.${i + 1}`}
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center flex-shrink-0">
                    <Download className="w-5 h-5 text-teal" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-foreground text-sm leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-border">
                  <span className="text-lg font-bold text-teal">
                    ₹{Number(project.price)}
                  </span>
                  <Button
                    size="sm"
                    onClick={() => handleBuy(project.id)}
                    disabled={
                      buyingId === project.id || stripeConfigured === false
                    }
                    className="bg-teal hover:bg-teal-hover text-white rounded-full text-xs font-semibold"
                    data-ocid={`subject_projects.buy_button.${i + 1}`}
                  >
                    {buyingId === project.id ? (
                      <Loader2 className="w-3.5 h-3.5 animate-spin mr-1" />
                    ) : (
                      <ShoppingCart className="w-3.5 h-3.5 mr-1" />
                    )}
                    Buy & Download — ₹49
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
