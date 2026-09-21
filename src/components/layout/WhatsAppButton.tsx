import { WhatsAppLink } from "@/components/layout/WhatsAppLink";
import { getTranslations } from "next-intl/server";

export async function WhatsAppButton() {
  const t = await getTranslations("whatsapp");
  return <WhatsAppLink floating label={t("label")} />;
}
