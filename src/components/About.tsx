import { Card } from "@/components/ui/card";

export const About = () => {
  return (
    <section id="sobre" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold mb-4 text-center">
          Sobre <span className="text-primary">Mim</span>
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-12" />

        <Card className="p-8 bg-card border-border ">
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Sou um desenvolvedor web apaixonado por criar soluções digitais que
            fazem a diferença. Com foco em desenvolvimento front-end, tenho
            experiência em construir aplicações modernas, responsivas e
            acessíveis.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Minha jornada na programação começou com curiosidade e se
            transformou em uma dedicação constante ao aprendizado. Estou sempre
            buscando novos desafios e oportunidades para crescer
            profissionalmente.
          </p>
        </Card>
      </div>
    </section>
  );
};
