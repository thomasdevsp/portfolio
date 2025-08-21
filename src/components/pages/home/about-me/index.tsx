import { useBreakpoint } from "@/hooks/useBreakpoints";
import { Stack, Typography } from "@mui/material";

export default function AboutMe() {
  const isMobile = useBreakpoint("md")

  return (
    <Stack
      sx={{
        padding: isMobile ? "3rem 1.5rem" : "5rem 0",

        alignItems: "center",
        gap: isMobile ? "2rem" : "5rem",
      }}
    >
      <Stack
        sx={{
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            color: "#fff",
            fontSize: isMobile ? "2rem" : "3rem",
            "span": {
              color: "#CBACF9",
            }
          }}
        >
          Sobre <span>mim</span>
        </Typography>

        <Typography
          sx={{
            color: "#fff",
            fontSize: isMobile ? "2rem" : "3rem",
            fontWeight: "bold",
            "b": {
              color: "#CBACF9",
            }
          }}
        >
          Trajetória, código e <b>paixões</b>
        </Typography>
      </Stack>

      <Stack
        sx={{
          maxWidth: "1000px",
          width: "100%",

          flexDirection: isMobile ? "column" : "row",
          justifyContent: "space-between",
          gap: "3rem",
        }}
      >
        <img
          src={isMobile ?
            "/assets/img/home/about-me/me-image-mb.svg"
            :
            "/assets/img/home/about-me/me-image.svg"
          }
          alt=""
          style={{
            borderRadius: "1rem",
            objectFit: "cover",
          }}
        />

        <Stack
          sx={{
            maxWidth: "522px",

            gap: "1.5rem",

            color: "#fff",
          }}
        >
          <Typography>
            <b>Desenvolvedor Front-end | Next.js | TypeScript | Material UI</b>
            <br /><br />
            Atualmente, sou responsável pelo desenvolvimento e manutenção de websites na Summus
            Marketing, com foco em plataformas para grandes eventos como o São Paulo Oktoberfest,
            Villa de Natal SP, Expoflora e Natal de Holambra. Minha atuação é centrada na criação de
            novas funcionalidades e na otimização das plataformas, garantindo que os sites estejam
            sempre em seu melhor desempenho e visual.
          </Typography>

          <Typography
            sx={{
              "a": {
                color: "#CBACF9",
                textDecoration: "none",

              }
            }}
          >
            Minha paixão por tecnologia começou na infância com jogos, mas foi na pré-adolescência,
            após montar meu primeiro computador e ser influenciado fortemente pelo meu irmão
            <a href="https://www.vitorsampaio.com.br/" target="_blank"> @vitor</a>, que me
            aventurei na lógica de programação. Essa curiosidade me levou a cursar o ensino médio
            técnico no UNASP, onde aprofundei meus conhecimentos em desenvolvimento web. Durante
            essa jornada, também busquei cursos por conta própria para expandir minhas habilidades,
            e confesso que minhas experiências na adolescência, criando canais no YouTube, me deram
            uma base sólida em edição de foto e vídeo, facilitando o aprendizado de conceitos de
            inovação e criatividade.
          </Typography>

          <Typography>
            Essa jornada me preparou para o desenvolvimento web. Na VTT, atuei como desenvolvedor
            front-end, colaborando na construção e evolução da interface de um produto. Além de
            implementar interfaces modernas e responsivas e cultivar uma amizade e espécie de
            &quot;apadrinhamento&quot; com o estagiário  que estava guiando no mundo da programação,
            também participei ativamente dos planejamentos, contribuindo com ideias e
            melhorias.

          </Typography>
        </Stack>
      </Stack>


    </Stack>
  )
}
