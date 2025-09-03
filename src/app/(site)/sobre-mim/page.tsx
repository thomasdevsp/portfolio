"use client"

import { useBreakpoint } from "@/hooks/useBreakpoints"
import { Box, Button, Divider, Stack, Typography } from "@mui/material"
import { empresas } from "./data"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { SiGoogledocs } from "react-icons/si";
import useQueryParams from "@/hooks/useQueryParams"
import { sendGAEvent } from "@next/third-parties/google"
import { useEffect } from "react"

export default function SobreMim() {
  const isMobile = useBreakpoint("md")
  const { setParam } = useQueryParams()

  useEffect(() => {
    sendGAEvent("event", "Sobre Mim")
  }, [])

  const handleHistoryButton = () => {
    setParam("modal", "da-curiosidade-a-carreira")
    sendGAEvent("event", "buttonClicked", {
      value: "botão da historia",
      date: new Date().toISOString(),
    })
  }

  return (
    <Stack
      sx={{
        width: "100%",
        padding: isMobile ? "6.5rem 1.5rem" : "6.25rem 0",

        alignItems: "center",
        justifyContent: "center",

      }}
    >
      <Stack
        sx={{
          maxWidth: "1200px",
          width: "100%",

          gap: "4rem",

          color: "#fff",
        }}
      >
        <Stack
          sx={{
            gap: "2rem",
          }}
        >
          <Stack
            sx={{
              gap: isMobile ? "0.75rem" : "1rem",
            }}
          >
            <Typography
              sx={{
                color: "#CBACF9",
                fontSize: isMobile ? "1.5rem" : "1.875rem",
                fontWeight: 500,
              }}
            >
              Sobre
            </Typography>

            <Stack
              sx={{
                gap: isMobile ? "0.5rem" : "0.75rem",
              }}
            >
              <Typography
                sx={{
                  fontSize: isMobile ? "2.5rem" : "3.75rem",
                  fontWeight: "bold",
                  "span": {
                    color: "#CBACF9",
                  }
                }}
              >
                Thomas <span>Fernando</span>
              </Typography>

              <Typography
                sx={{
                  fontSize: isMobile ? "1.5rem" : "2rem",
                  "span": {
                    color: "#CBACF9",
                  }
                }}
              >
                Desenvolvedor Front End, Inquieto e <span>curioso</span>
              </Typography>
            </Stack>
          </Stack>

          <Typography
            sx={{
              maxWidth: "860px",
              fontSize: isMobile ? "0.9rem" : "1rem",
            }}
          >
            Gostaria de contextualizar um pouco sobre minha pessoa, estou na corrida da casa dos 20 anos
            para descobrir novos amores, gostos e paixões. Atualmente tenho olhado para a jardinagem,
            tecnologia, games e meu desenvolvimento pessoal.
            <br />
            <br />
            Hoje em dia tudo que eu faço está ligado com algum dos itens a cima, gosto muito dessas
            coisas e tento unir elas de alguma forma, ainda estou me conhecendo e me aprofundando e
            cada assunto citado.
            <br />
            <br />
            Atualmente trabalho com Desenvolvimento Web, mas especificamente páginas web para grandes
            eventos em sua maioria, mas também estou trabalhando paralelamente no maior projeto pessoal
            que tenho em minha vida(eu mesmo). Também estive fazendo isso nos últimos meses:
          </Typography>

          {/* Empresas */}

          <Stack
            sx={{
              gap: "0.75rem"
            }}
          >
            {empresas.map((empresa, index) => (
              <Stack
                key={index}
                sx={{

                  flexDirection: "row",
                  gap: "1.5rem",
                }}
              >
                <Stack
                  sx={{
                    alignItems: "center",
                    gap: "0.75rem",
                  }}
                >
                  <Box
                    sx={{
                      width: "18px",
                      height: "18px",

                      background: empresa.isPresent ? "#A265FB" : "#D9D9D9",
                      borderRadius: "100%",
                    }}
                  />
                  <Divider
                    sx={{
                      width: "1px",
                      flex: 1,

                      background: empresa.isPresent ? "#A265FB" : "#D9D9D9",
                    }}
                  />

                </Stack>
                <Stack
                  sx={{
                    maxWidth: "280px",

                    gap: "0.5rem"
                  }}
                >
                  <Stack
                    sx={{
                      gap: "0.25rem"
                    }}
                  >
                    <Typography
                      sx={{
                        color: empresa.isPresent ? "#A265FB" : "#ffff",
                        fontSize: isMobile ? "1rem" : "1.125rem",
                        fontWeight: empresa.isPresent ? "bold" : "regular",
                      }}
                    >
                      {empresa.title}
                    </Typography>

                    <Typography
                      sx={{
                        color: "#E5E2E2",
                        fontSize: isMobile ? "0.9rem" : "1rem",
                      }}
                    >
                      {empresa.date}
                    </Typography>
                  </Stack>

                  <Typography
                    sx={{
                      fontSize: isMobile ? "0.9rem" : "1rem",
                    }}
                  >
                    {empresa.desc}
                  </Typography>
                </Stack>
              </Stack>
            ))}
          </Stack>

          <Stack
            sx={{
              width: "100%",
              maxWidth: "350px",

              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Button
              href="/download/Cv - Thomas Fernando.pdf"
              download
              startIcon={<SiGoogledocs />}
              sx={{
                maxWidth: "180px",
                width: "100%",

                background: "#A265FB",
                borderRadius: "0.5rem",
                color: "#fff",
                ":hover": {
                  background: "#8034F2",
                }
              }}
            >
              DOWNLOAD CV
            </Button>

            <Stack
              sx={{
                flexDirection: "row",
                gap: "0.5rem",
              }}
            >
              <Stack
                component={"a"}
                href="https://github.com/thomasdevsp"
                target="_blank"
                sx={{
                  padding: "0.625rem",

                  background: "#A265FB",
                  borderRadius: "0.5rem",
                  color: "#fff",
                  transition: "all 0.2s ease",
                  ":hover": {
                    transition: "all 0.2s ease",
                    background: "#8034F2",
                    scale: 1.1,
                  }
                }}
              >
                <FaGithub
                  size={24}
                />
              </Stack>

              <Stack
                component={"a"}
                href="https://www.linkedin.com/in/thomas-sampaio/"
                target="_blank"
                sx={{
                  padding: "0.625rem",

                  background: "#A265FB",
                  borderRadius: "0.5rem",
                  color: "#fff",
                  transition: "all 0.2s ease",
                  ":hover": {
                    transition: "all 0.2s ease",
                    background: "#8034F2",
                    scale: 1.1,
                  }
                }}
              >
                <FaLinkedin
                  size={24}
                />
              </Stack>

            </Stack>
          </Stack>
        </Stack>

        <Stack
          sx={{
            gap: "1.5rem",
          }}
        >
          <Typography
            sx={{
              fontSize: isMobile ? "2.35rem" : "3rem",
              fontWeight: "bold",
              "span": {
                color: "#CBACF9",
              }
            }}
          >
            O caminho até <span>aqui</span>
          </Typography>

          <Typography
            sx={{
              maxWidth: "860px",

              fontSize: isMobile ? "0.9rem" : "1rem",
              "a": {
                color: "#CBACF9",
                cursor: "pointer",
              }
            }}
          >
            Sempre fui uma criança curiosa e inquieta. Desde que me entendo por gente, sou
            apaixonado por jogos e tecnologia. Tenho a habilidade de aprender coisas muito rápido,
            executando tarefas muitas vezes sem precisar ver uma segunda vez.
            <br />
            <br />
            Meu contato com os jogos começou muito cedo. Nunca precisei da ajuda de ninguém para
            “montar” meu videogame na TV, mesmo sendo bem jovem. As coisas se intensificaram com o
            Xbox 360, por volta dos meus 12 anos, o que me levou a conhecer os jogos online e como
            consequência, a desejar um computador.
            <br />
            <br />
            Antes de realizar esse sonho, ganhei um notebook que se tornou meu fiel companheiro.
            Durante esse período, rapidamente me tornei o &quot;técnico de TI júnior&quot; da casa,
            pois qualquer problema com o notebook era resolvido por mim. Para realizar meu sonho de
            montar um computador gamer, acabei vendendo o notebook para o meu pai. Em um acordo,
            troquei o notebook pelo computador dele e com o dinheiro que tinha guardado, fiz um
            upgrade. Esse foi o meu primeiro computador gamer.
            <br />
            <br />
            Passei um tempo gravando minhas partidas de jogos online e postando com frequência no
            meu canal do YouTube. Essa atividade me ajudou a adquirir certas habilidades com edição
            de vídeo e design. Nesse ponto da minha vida, eu já havia tentado aprender programação
            com meu irmão, que me passava algumas atividades de lógica com Visual G e Portugol. No
            entanto, o aprendizado só decolou de verdade quando entrei para o ensino médio técnico
            no UNASP, onde finalmente percebi que queria trabalhar com Programação e Tecnologia....
            <br />
            <br />
            <a
              onClick={() => handleHistoryButton()}
            >
              Ler história completa
            </a>
          </Typography>
        </Stack>

      </Stack>

    </Stack >
  )
}
