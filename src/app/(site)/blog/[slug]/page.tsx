import { generateNotionPageID, getAllBlockChildren, getPageById, PageRenderer, parseDateDisplay, richTextRender } from "@/lib/notion"
import { PostProps } from "@/types/notion.type"
import { Stack, Typography } from "@mui/material"
import { GoX } from "react-icons/go"

interface IPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function PostPage({ params }: IPostPageProps) {
  const { slug } = await params

  if (typeof slug !== "string") {
    return (
      <Stack>
        <Typography>
          Desculpe!!!
        </Typography>

        <Typography>
          Post não encontrado.
        </Typography>
      </Stack>
    )
  }

  const pageId = generateNotionPageID(slug)

  const page = await getPageById<PostProps>(pageId)

  if (!page) {
    return (
      <Stack>
        <Typography>
          Desculpe!!!
        </Typography>

        <Typography>
          Post não encontrado.
        </Typography>
      </Stack>
    )
  }

  const title = richTextRender(page.properties.Nome.title)
  const description = richTextRender(page.properties.Descricao.rich_text)
  const tags = page.properties.Tags.multi_select
  const publishedIn = page.properties["Publicado Em"].date?.start
  const dateDisplay = parseDateDisplay(publishedIn)

  const blocks = await getAllBlockChildren(pageId, { deep: true })

  return (
    <Stack
      sx={{
        paddingTop: "8rem",
        minHeight: "100dvh",

        alignItems: "center",
        gap: "2rem",

        color: "#fff",
      }}
    >

      <Stack
        sx={{
          padding: "1.5rem",

          alignItems: "center",
          gap: "1rem",

          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            color: "#E5E2E2",
            fontWeight: "bold",
          }}
        >
          {dateDisplay}

        </Typography>

        <Stack>
          <Typography
            sx={{
              fontSize: "2rem",
              fontWeight: "bold",
            }}
          >
            {title}

          </Typography>

          <Typography
            sx={{
              color: "#E5E2E2",
            }}
          >
            {description}
          </Typography>
        </Stack>

        <Stack
          sx={{
            flexDirection: "row",
            flexWrap: "wrap",
            gap: "0.5rem",
          }}
        >
          {tags.map((tag, index) => (
            <Typography
              key={index}
              sx={{
                padding: "0.25rem 0.5rem",

                background: "#202448",
                borderRadius: "1rem",
                color: "#fff",
                fontSize: "0.875rem",
                fontWeight: "bold",

              }}
            >
              {tag.name}
            </Typography>
          ))}
        </Stack>
      </Stack>

      <Stack
        sx={{
          maxWidth: "1200px",
          width: "100%",

          padding: "1.5rem",
        }}>
        <PageRenderer blocks={blocks} />

      </Stack>

    </Stack>
  )
}
