import { SectionHeading } from "@/components/ui/SectionHeading";

export function PageIntro({
  eyebrow,
  title,
  intro,
}: {
  eyebrow?: string;
  title: string;
  intro: string;
}) {
  return (
    <section className="bg-sandfade pb-8 pt-16">
      <div className="container-site max-w-3xl">
        <SectionHeading as="h1" eyebrow={eyebrow} title={title} subtitle={intro} />
      </div>
    </section>
  );
}
