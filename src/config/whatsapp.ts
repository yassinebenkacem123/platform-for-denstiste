export const WHATSAPP_CONFIG = {
  /**
   * Phone number in international format without leading + or 00.
   * Can be configured via NEXT_PUBLIC_WHATSAPP_NUMBER environment variable.
   * Default: Moroccan clinic number (212522200000)
   */
  phoneNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "212522200000",

  /**
   * Default pre-filled message sent when starting a WhatsApp conversation.
   * Can be configured via NEXT_PUBLIC_WHATSAPP_MESSAGE environment variable.
   */
  defaultMessage:
    process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE ||
    "Bonjour, j'ai visité votre site web et je souhaite obtenir plus d'informations.",
} as const;

/**
 * Builds the official WhatsApp link with phone number and pre-filled message.
 */
export function getWhatsAppLink(message?: string): string {
  const rawNumber = WHATSAPP_CONFIG.phoneNumber;
  // Clean phone number (strip spaces, +, dashes, brackets)
  const cleanNumber = rawNumber.replace(/\D/g, "");
  const text = message ?? WHATSAPP_CONFIG.defaultMessage;
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(text)}`;
}
