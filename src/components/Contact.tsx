import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

export const Contact = () => {
  return (
    <section id="contato" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold mb-4 text-center">
          Entre em <span className="text-primary">Contato</span>
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-12" />

        <Card className="p-8 bg-card border-border ">
          <p className="text-center text-lg text-muted-foreground mb-8">
            Estou sempre aberto a novas oportunidades e projetos interessantes.
            Vamos conversar sobre como posso contribuir com sua equipe!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <a
              href="mailto:seuemail@example.com"
              className="flex items-center gap-4 p-4 bg-secondary rounded-lg hover:bg-primary/10 hover:border-primary border border-transparent transition-all group"
            >
              <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <div className="font-semibold">Email</div>
                <div className="text-sm text-muted-foreground">
                  leozeraffcanal2405@gmail.com
                </div>
              </div>
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-secondary rounded-lg hover:bg-primary/10 hover:border-primary border border-transparent transition-all group"
            >
              <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                <Linkedin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <div className="font-semibold">LinkedIn</div>
                <div className="text-sm text-muted-foreground">
                  https://www.linkedin.com/in/leoozzz/
                </div>
              </div>
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-secondary rounded-lg hover:bg-primary/10 hover:border-primary border border-transparent transition-all group"
            >
              <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                <Github className="h-6 w-6 text-primary" />
              </div>
              <div>
                <div className="font-semibold">GitHub</div>
                <div className="text-sm text-muted-foreground">
                  https://github.com/Leooozzzz
                </div>
              </div>
            </a>

            <div className="flex items-center gap-4 p-4 bg-secondary rounded-lg">
              <div className="p-3 bg-primary/10 rounded-lg">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <div className="font-semibold">Localização</div>
                <div className="text-sm text-muted-foreground">
                  Araçatuba/Sp
                </div>
              </div>
            </div>
          </div>

        </Card>
      </div>
    </section>
  );
};
