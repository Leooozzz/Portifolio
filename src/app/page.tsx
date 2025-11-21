import { About } from "@/components/About";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Section";
import { Separator } from "@/components/ui/separator";

const Page = () => {
  return (
    <div>
      <Header />
      <Separator />
      <Hero />
      <About/>
    </div>
  );
};

export default Page;
