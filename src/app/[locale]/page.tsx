import { Coverage } from "@/components/home/Coverage";
import { Founder } from "@/components/home/Founder";
import { Hero } from "@/components/home/Hero";
import { HowItWorks } from "@/components/home/HowItWorks";
import { LeadForm } from "@/components/home/LeadForm";
import { NoPromise } from "@/components/home/NoPromise";
import { Owners } from "@/components/home/Owners";
import { ReviewsBlock } from "@/components/home/ReviewsBlock";
import { Services } from "@/components/home/Services";
import { Story } from "@/components/home/Story";
import { Trust } from "@/components/home/Trust";
import { WhyUs } from "@/components/home/WhyUs";
import { setRequestLocale } from "next-intl/server";

type Props = { params: { locale: string } };

export default async function HomePage({ params }: Props) {
  setRequestLocale(params.locale);

  return (
    <>
      <Hero />
      <WhyUs />
      <Services />
      <Trust />
      <NoPromise />
      <Story />
      <HowItWorks />
      <Owners />
      <Founder />
      <ReviewsBlock compact />
      <Coverage />
      <LeadForm source="home" />
    </>
  );
}
