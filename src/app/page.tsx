import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Header } from "@/components/Header";
import { Projetos } from "@/components/Projetos";
import { Hero } from "@/components/Section";
import { Tecnologi } from "@/components/Tecnologi";
import { Separator } from "@/components/ui/separator";

const Page = () => {
  return (
    <div>
      <Header />
      <Separator />
      <Hero />
      <About/>
      <Tecnologi/>
      <Projetos/>
      <Contact/>
    </div>
  );
};

export default Page;
