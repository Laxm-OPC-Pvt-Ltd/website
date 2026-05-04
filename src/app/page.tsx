import { GenerativeHero } from "@/components/GenerativeHero";
import ProofSection from "@/components/ProofSection";
import { ProjectConfigurator } from "@/components/ProjectConfigurator";

export default function Home() {
  return (
    <main>
      <GenerativeHero />
      <ProofSection />
      <ProjectConfigurator />
    </main>
  );
}
