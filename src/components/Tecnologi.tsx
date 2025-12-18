"use client"
import { useRef } from "react"
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel"
import Autoplay from "embla-carousel-autoplay"


export const Tecnologi = () => {
  const techs = [
    { name:'Html5',src:'/images/html-5.png'},
    { name:'Css3',src:'/images/css-3.png'},
    { name: "React", src: "/images/React.png" },
    { name: "Next.js", src: "/images/Next.png" },
    { name: "TypeScript", src: "/images/Typescript.png" },
    { name: "JavaScript", src: "/images/Javascript.png" },
    { name: "Tailwind CSS", src: "/images/Tailwindcs.png" },
    {name:'Zod',src:'/images/Zod--Streamline-Svg-Logos.png'},
    { name: "Node.js", src: "/images/node.png" },
    { name: "SQL", src: "/images/Sql.png" },
    { name: "PostgreSQL", src: "/images/postgresql.png" },
    { name: "Prisma", src: "/images/prisma.png" },
    { name: "Git" , src: "/images/git.png"},
    {name: "Github",src: "/images/github.png"}
  ]

  const autoplay = useRef(
    Autoplay({
      delay: 800, 
      stopOnInteraction: false, 
    })
  )

  return (
    <section id="skill" className="mb-20">
      <h3 className="text-3xl font-bold text-center mb-10">
        Tecnologias <span className="text-primary">que utilizo</span>
      </h3>

      <div className="flex justify-center">
        <Carousel
          className="w-full max-w-5xl"
          plugins={[autoplay.current]}
        >
          <CarouselContent className="-ml-4">
            {techs.map((tech) => (
              <CarouselItem
                key={tech.name}
                className="
                  pl-4
                  basis-1/2
                  sm:basis-1/3
                  md:basis-1/4
                "
              >
                <div className="flex flex-col items-center">
                  <img
                    src={tech.src}
                    alt={tech.name}
                    className="w-16 h-16 mb-2"
                  />
                  <span className="text-sm font-medium">
                    {tech.name}
                  </span>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  )
}
