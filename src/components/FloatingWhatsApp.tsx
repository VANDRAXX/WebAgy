import { MessageCircle } from "lucide-react";
import { company } from "@/data/company";
import { whatsappLink } from "@/lib/utils";

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink(company.contact.whatsappNumber, company.contact.message)}
      target="_blank"
      rel="noreferrer"
      aria-label={`Hubungi ${company.name} via WhatsApp`}
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-premium transition hover:-translate-y-1 hover:shadow-glow"
    >
      <MessageCircle size={27} aria-hidden="true" />
    </a>
  );
}
