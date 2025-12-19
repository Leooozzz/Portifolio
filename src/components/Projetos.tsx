import { Github } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

export const Projetos = () => {
  const projects = [
    {
      title: "Assasin`s Creed landPage",
      description: "Land Page do jogo assasin`s creed valhalla.",
      tags: ["React", "TypeScript", "Tailwind", "ShadcnUI"],
      url: "https://github.com/Leooozzz/Assasin-s-Creed-landPage.git",
      image: "images/assasin`screedLandPage.png  ",
    },
    {
      title: "Petshop",
      description: "Petshop em com exibição dos animais.",
      tags: ["React","Node","Next","Tailwind","Axios","ShadcnUi","Express",],
      url: "https://github.com/Leooozzz/Projeto-full-stack-canil",
      image: "images/PETSHOP.png",
    },
    {
      title: "FAKESTORES",
      description: "Loja usando api da fakestoreApi para exibição de produtos.",
      url: "https://github.com/Leooozzz/FakeStoreApi",
      tags: ["React", "TypeScript", "Api", "Axios", "ShadcnUI"],
      image: "images/FAKESTORE.png",
    },
    {
      title: "TodoList",
      description:"TodoList com banco de dados postgreSQL",
      url:"https://github.com/Leooozzz/Todo-list-fullstack-with-prisma-and-postgreSQL",
      tags:["React","TypeScript","Axios","Zod","ShadcnUI","Prisma","Node","Express","PostgreSQl"],
      image:"images/TodoList.png"
    },
    {
      title:"Tabacreme",
      description:"Crud completo e-commerce de loja de tabacos e produtos relacionado",
      url:"https://github.com/Leooozzz/Project-ecommerce-with-node.git",
      tags:["React","Next","Zustand","TypeScript","Axios","Zod","ShadcnUI","Prisma","Node","Express","Jwt","PostgreSQl"],
      image:"images/Tabacreme.png"
    },
    {
      title:"MuayThai Land Page",
      description:"Land page de muaythai",
      url:"https://github.com/Leooozzz/LandPageMuayThai.git",
      tags:["React","TypeScript","Javascript","Vite"],
      image:'images/landpage.png'
    }
  ];

  return (
    <section id="projetos" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold mb-4 text-center">
          Meus <span className="text-primary">Projetos</span>
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-(--shadow-glow) group"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0  from-background to-transparent opacity-60" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    asChild
                    size="sm"
                    variant="outline"
                    className="flex-1 border-primary text-foreground hover:bg-primary/10"
                  >
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Código
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
