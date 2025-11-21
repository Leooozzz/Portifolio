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
          <p className="text-lg text-muted-foreground leading-relaxed">
            Sou estudante de{" "}
            <span className="font-semibold">
              Análise e Desenvolvimento de Sistemas
            </span>{" "}
            pela
            <span className="font-semibold"> UNIP-SP</span>, atualmente cursando
            o 2º semestre. A tecnologia sempre fez parte da minha vida, e hoje
            estou totalmente focado em evoluir como desenvolvedor{" "}
            <span className="font-semibold">Fullstack</span>.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Tenho me dedicado diariamente ao estudo de ferramentas e tecnologias
            modernas, com foco em criar soluções eficientes, acessíveis e
            visualmente atraentes. Meu objetivo é construir aplicações que unam
            boa experiência de usuário, organização de código e performance.
          </p>
        </Card>
      </div>
      
    </section>
    
  );
};
