/**
 * Placeholder number — override with the real business WhatsApp line via
 * VITE_WHATSAPP_NUMBER in .env (digits only, with country code, no "+").
 */
const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER ?? "573000000000";

export function buildWhatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
