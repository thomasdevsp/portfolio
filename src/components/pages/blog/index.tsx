import { useBreakpoint } from "@/hooks/useBreakpoints";
import { Stack, Typography } from "@mui/material";
import { GoX, GoXCircle } from "react-icons/go";

export default function Blog({ onClose }: { onClose: () => void }) {
  const isMobile = useBreakpoint("md")


  return (
    <Stack
      sx={{
        padding: isMobile ? "6.5rem 1.5rem" : "6.25rem 0",
        position: "relative",
        width: "100%",

        alignItems: "center",

        background: "#000319",
        color: "#fff"
      }}
    >
      <Stack
        component={"div"}
        onClick={onClose}
        sx={{
          position: "absolute",
          top: 40,
          left: 40,

          cursor: "pointer",
          transition: "all 0.3s ease-in",
          ":hover": {
            transition: "all 0.3s ease-in",
            color: "#d8d8d8",
          }
        }}
      >
        <GoX
          size={32}
        />
      </Stack>


      <Stack
        sx={{
          widt: "100%",
          maxWidth: "1000px",
        }}
      >
        <Typography
          sx={{
            fontSize: "2rem",
            fontWeight: "bold",
          }}
        >
          Minha Jornada com a Tecnologia: Da Curiosidade à Carreira
        </Typography>
        <br />

        Sempre fui uma criança curiosa e inquieta. Desde que me entendo por gente, sou apaixonado por
        jogos e tecnologia. Tenho a habilidade de aprender coisas muito rápido, executando tarefas
        muitas vezes sem precisar ver uma segunda vez.
        <br />
        <br />

        Meu contato com os jogos começou muito cedo. Nunca precisei da ajuda de ninguém para “montar”
        meu videogame na TV, mesmo sendo bem jovem. As coisas se intensificaram com o Xbox 360, por
        volta dos meus 12 anos, o que me levou a conhecer os jogos online e como consequência, a
        desejar um computador.
        <br />
        <br />

        Antes de realizar esse sonho, ganhei um notebook que se tornou meu fiel companheiro. Durante
        esse período, rapidamente me tornei o &quot;técnico de TI júnior&quot; da casa, pois qualquer problema
        com o notebook era resolvido por mim. Para realizar meu sonho de montar um computador gamer,
        acabei vendendo o notebook para o meu pai. Em um acordo, troquei o notebook pelo computador
        dele e com o dinheiro que tinha guardado, fiz um upgrade. Esse foi o meu primeiro computador
        gamer.
        <br />
        <br />

        Passei um tempo gravando minhas partidas de jogos online e postando com frequência no meu
        canal do YouTube. Essa atividade me ajudou a adquirir certas habilidades com edição de vídeo
        e design. Nesse ponto da minha vida, eu já havia tentado aprender programação com meu irmão,
        que me passava algumas atividades de lógica com Visual G e Portugol. No entanto, o aprendizado
        só decolou de verdade quando entrei para o ensino médio técnico no UNASP, onde finalmente
        percebi que queria trabalhar com Programação e Tecnologia.
        <br />
        <br />

        <Typography
          sx={{
            fontSize: "2rem",
            fontWeight: "bold",
          }}
        >
          O Papel da Mentoria e os Desafios Pessoais
        </Typography>
        <br />

        Logo na primeira semana do curso técnico, soube que aquele era o meu caminho. Como em outras
        coisas na minha vida, não fiquei parado. Voltei a procurar meu irmão Vitor, que depois de me
        indicar o ensino médio técnico, me mostrou o caminho para a minha carreira em programação.
        Ele me ajudou indicando cursos, canais, livros, artigos e o mais importante, me ofereceu uma
        mentoria que me guiou e me deixou bem encaminhado para me desenvolver e crescer na área.
        <br />
        <br />

        No entanto, nem tudo foram flores. Nessa época, minha família estava sofrendo muito com a
        recente separação dos meus pais e uma briga crescente que abalou a todos. Durante esse
        período, comecei e parei de estudar programação diversas vezes. Felizmente, no final do ensino
        médio, as coisas ficaram um pouco mais tranquilas e finalmente decidi, de uma vez por todas,
        escolher a programação como minha profissão.
        <br />
        <br />

        <Typography
          sx={{
            fontSize: "2rem",
            fontWeight: "bold",
          }}
        >
          O Início da Carreira

        </Typography>
        <br />

        Tudo teria ido muito bem se o meu primeiro ano de faculdade não tivesse sido tão conturbado.
        No começo do ano, uma mudança repentina e indesejada, somada a uma nova realidade e rotina,
        fez com que eu começasse a faculdade de Ciência da Computação no mesmo local em que fiz meu
        ensino técnico, mas logo precisei abandoná-la.
        <br />
        <br />

        Fiquei o restante do ano de 2024 tentando achar um emprego na área, trabalhando e tentando me
        reestruturar depois de algumas quedas e batidas de frente com a parede. No final desse mesmo
        ano, fui chamado para uma entrevista. Passei, e então comecei a colocar em prática toda a
        minha bagagem no meu primeiro emprego. Na VTT, coloquei a mão na massa, sendo responsável por
        desenhar a interface de usuário de um novo produto e, em seguida, por escolher e criar toda a
        estrutura front-end. Ao mesmo tempo, tive a oportunidade de instruir um estagiário que
        rapidamente se tornou um amigo e colega de trabalho. Após alguns meses nessa experiência, meu
        bom desempenho me levou a ser indicado para uma vaga na Summus Marketing. Lá, uma nova fase se
        iniciou: entrei para auxiliar nas tarefas e, em poucos meses, meu papel evoluiu rapidamente
        até me tornar o responsável pelo front-end da empresa.
        <br />
        <br />

        Agora, estou no processo de criação do meu site pessoal, pensando em como posso misturar
        minhas paixões e influenciar as pessoas para o bem.
      </Stack>

    </Stack>
  )
}
