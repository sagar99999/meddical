import TitleSection from "@/components/app/title-section";
import InfoSection from "@/components/app/info-section";

type ContactCtaSectionProps = {
  sectionClassName?: string;
};

export default function ContactCtaSection({ sectionClassName = "" }: ContactCtaSectionProps) {
  return (
    <div className={sectionClassName}>
      <div className="max-w-340 mx-auto">
        <TitleSection title="Get in touch" subtitle="Contact" />
        <InfoSection containerClass="grid grid-cols-4 gap-6" />
      </div>
    </div>
  );
}
