
import { Stack } from "@mui/material"
import TrackerGa from "@/lib/googleAnalytics/trackerComponent"
import BlogCard from "@/components/pages/blog/components/blogCard"
import { generateNotionPageSlug, getDatabaseItems, parseDateDisplay, richTextRender } from "@/lib/notion"
import { PostProps } from "@/types/notion.type"

export default async function Blog() {

  const { results } = await getDatabaseItems<PostProps>({
    sorts: [
      { property: "Publicado Em", direction: "descending" },
    ],
    where: {
      and: [
        { property: "Publicado Em", type: "date", op: "is_not_empty" },
      ],
    },
  })

  return (
    <>
      <Stack
        sx={{
          width: "100%",
          height: "100dvh",

          alignItems: "center",
          justifyContent: "center",
          gap: "2rem",

        }}
      >

        <Stack
          sx={{
            gap: "1.5rem",
          }}
        >
          {results.map((item, index) => {
            const title = richTextRender(item.properties.Nome.title)
            const description = richTextRender(item.properties.Descricao.rich_text)
            const tags = item.properties.Tags.multi_select
            const publishedIn = item.properties["Publicado Em"].date?.start as string

            const slug = generateNotionPageSlug(item.url)
            const dateDisplay = parseDateDisplay(publishedIn)

            return (
              <BlogCard
                key={index}
                title={title}
                dateDisplay={dateDisplay}
                description={description}
                slug={slug}
                tags={tags}
              />
            )
          })}
        </Stack>
      </Stack>

      <TrackerGa
        eventName="Blog - Page"
        params={{
          page: "Blog"
        }}
      />
    </>
  )
}
