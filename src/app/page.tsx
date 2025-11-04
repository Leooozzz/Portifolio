import { ModeToggle } from "@/components/ui/modle-toggle";
import { Separator } from "@/components/ui/separator";

const Page = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10 font-sans">

      <header className="flex items-center justify-between mb-10">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          <span className="text-blue-500">L</span>S
        </h1>
        <nav>
          <ul className="flex items-center gap-6 text-lg font-medium text-gray-700 dark:text-gray-300">
            {["Sobre", "Tecnologias", "Projetos", "Contato"].map((item) => (
              <li
                key={item}
                className="transition-all duration-200 hover:text-blue-500 hover:scale-105 cursor-pointer"
              >
                {item}
              </li>
            ))}
            <ModeToggle />
          </ul>
        </nav>
      </header>

      <Separator className="mb-10" />

      <section className="flex flex-col-reverse md:flex-row items-center gap-10 mb-16">
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Olá, me chamo{" "}
            <span className="text-blue-500">Leonardo De Souza</span>
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Tenho 19 anos, sou estudante de Análise e Desenvolvimento de
            Sistemas pela
            <span className="font-semibold text-blue-500"> UNIP-SP</span>. Sou
            apaixonado por tecnologia e estou focado em me tornar um
            desenvolvedor <span className="font-semibold">Fullstack</span>.
          </p>
        </div>
        <div className="flex-1 flex justify-center">
          <img
            src="/images/Personagem.png"
            alt="Ilustração de Leonardo"
            className="w-64 h-auto rounded-lg shadow-lg"
          />
        </div>
      </section>
      
      <main>
        <section className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Tecnologias
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-gray-300 dark:text-gray-300">
            {[
              { name: "React", src: "/images/React.png" },
              { name: "Next.js", src: "/images/Next.png" },
              { name: "TypeScript", src: "/images/Typescript.png" },
              { name: "JavaScript", src: "/images/Javascript.png" },
              { name: "Tailwind CSS", src: "/images/Tailwindcs.png" },
              { name: "Node.js", src: "/images/node.png" },
              { name: "SQL", src: "/images/Sql.png" },
            ].map((tech) => (
              <div
                key={tech.name}
                className="group p-6 bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center gap-3 hover:bg-gray-700"
              >
                <div className="bg-gray-700 p-4 rounded-full group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={tech.src}
                    alt={tech.name}
                    className="h-10 w-10 object-contain"
                  />
                </div>
                <span className="text-base font-semibold group-hover:text-blue-400 transition-colors duration-300">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </section>
        <section>
          ...
        </section>
      </main>
    </div>
  );
};

export default Page;
