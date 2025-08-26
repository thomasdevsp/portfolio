interface IBlogProps {
  title: string;
  description: string;
  tags: string[];
  date: string;
  link: string;
}

export const blog: IBlogProps[] = [
  {
    title: "Minha Jornada com a Tecnologia: Da Curiosidade à Carreira",
    description: "Descrevo como vejo o inicio da minhas paixões e consequentemente minha carreira",
    tags: ["blog"],
    date: "26 de agosto de 2025",
    link: "da-curiosidade-a-carreira",
  },
]
