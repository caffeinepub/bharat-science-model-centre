import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919999899973"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat with us on WhatsApp"
      data-ocid="floating.whatsapp_button"
    >
      <div className="relative">
        <div className="w-14 h-14 rounded-full bg-wa-green hover:bg-wa-green-hover shadow-lg hover:shadow-xl flex items-center justify-center transition-all hover:-translate-y-1">
          <MessageCircle className="w-7 h-7 text-white" />
        </div>
        <span className="absolute bottom-full right-0 mb-2 bg-navy text-white text-xs font-semibold px-3 py-1.5 rounded-full whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
          WhatsApp Us
        </span>
      </div>
    </a>
  );
}
