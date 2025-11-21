export const Tecnologi = () => {
  const techs = [
    { name: "React", src: "/images/React.png" },
    { name: "Next.js", src: "/images/Next.png" },
    { name: "TypeScript", src: "/images/Typescript.png" },
    { name: "JavaScript", src: "/images/Javascript.png" },
    { name: "Tailwind CSS", src: "/images/Tailwindcs.png" },
    { name: "Node.js", src: "/images/node.png" },
    { name: "SQL", src: "/images/Sql.png" },
  ];

  return (
    <section id="skill" className="mb-20">
      <h3 className="text-3xl font-bold text-center mb-10">
        Tecnologias <span className="text-primary">que utilizo</span>
      </h3>

        <div className="flex justify-center">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 ">
        {techs.map((tech) => (
          <div
            key={tech.name}
            className="
              group p-6 rounded-xl
              bg-card border border-border/40
              hover:border-primary/50
              shadow-sm hover:shadow-lg
              transition-all duration-300 cursor-pointer
              flex flex-col items-center gap-4
            "
          >

            <div
              className="
                p-4 rounded-full bg-muted 
                group-hover:bg-primary/20
                transition-all duration-300
                group-hover:scale-110
              "
            >
              <img
                src={tech.src}
                alt={tech.name}
                className="h-12 w-12 object-contain"
              />
            </div>


            <span className="text-base font-medium text-foreground/90 group-hover:text-primary transition-all">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};
