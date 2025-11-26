import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 " />

      <div className="absolute inset-0 pointer-events-none">
        <div
          className="
      absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl animate-pulse
      bg-primary/30 dark:bg-primary/25
    "
        />
        <div
          className="
      absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl animate-pulse delay-1000
      bg-primary/20 dark:bg-primary/10
    "
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 animate-fade-in">
            <span className="text-primary font-semibold text-lg">
              Olá, eu sou Leonardo De Souza
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in delay-100">
            Desenvolvedor
            <span className="block bg-clip-text ">Web</span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in delay-200">
            Criando experiências digitais modernas e responsivas com React,
            TypeScript e as melhores práticas de desenvolvimento.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in delay-300">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground "
            >
             <a href="#projetos">Ver Projetos</a> 
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-foreground hover:bg-primary/10"
            >
              <a href="#contato">Entre em Contato</a>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6 animate-fade-in delay-500">
            <a
              href="https://github.com/Leooozzz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/leoozzz/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:leozeraffcanal2405@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
