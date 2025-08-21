interface IProjectsProps {
  image: string,
  title: string
  description: string
  icons: string[]
  liveLink: string
}

export const Project: IProjectsProps[] = [
  {
    image: "/assets/img/home/projects/images/vila-de-natal-picture.jpg",
    title: "Villa de Natal",
    description: "Em colaboração com a Summus, fui responsável por desenvolver boa parte do código do site da Villa de Natal São Paulo, um evento natalino que ocorre anualmente no Parque Villa-Lobos.",
    icons: [
      "/assets/img/home/projects/icons/next-icon.svg",
      "/assets/img/home/projects/icons/ts-icon.svg",
    ],
    liveLink: "https://www.villadenatalsaopaulo.com.br/",
  },
  {
    image: "/assets/img/home/projects/images/oktoberfest-picture.jpg",
    title: "São Paulo Oktoberfest",
    description: "Em parceria com a Summus, atuei no desenvolvimento do site da São Paulo Oktoberfest, festival que celebra a cultura alemã no Jockey Club com música, gastronomia e cervejas típicas.",
    icons: [
      "/assets/img/home/projects/icons/next-icon.svg",
      "/assets/img/home/projects/icons/ts-icon.svg",
    ],
    liveLink: "https://www.saopaulooktoberfest.com.br/",
  },
  {
    image: "/assets/img/home/projects/images/coffee-delivery-picture.png",
    title: "Coffee Delivery",
    description: "Um case de estudo que simula uma plataforma de e-commerce para entrega de café. O projeto permite ao usuário selecionar a quantidade de cada café, adicionar os itens ao carrinho e simular a finalização de um pedido.",
    icons: [
      "/assets/img/home/projects/icons/next-icon.svg",
      "/assets/img/home/projects/icons/ts-icon.svg",
    ],
    liveLink: "https://coffee-delivery-eta-ochre.vercel.app/",
  },
  {
    image: "/assets/img/home/projects/images/ignite-timer-picture.png",
    title: "Ignite Timer",
    description: "Este projeto é um aplicativo que implementa a técnica Pomodoro. A ferramenta permite que você defina um tempo e título para uma tarefa, inicie o temporizador e visualize um histórico de suas atividades concluídas.",
    icons: [
      "/assets/img/home/projects/icons/next-icon.svg",
      "/assets/img/home/projects/icons/ts-icon.svg",
    ],
    liveLink: "https://ignite-timer-gamma-two.vercel.app/",
  },
]
