import { type GetStaticPaths, Metadata, InferGetStaticPropsType } from "next";
import { getPostBySlug, getAllPosts, type Post } from "../../lib/blogApi";
import { remark } from "remark";
import html from "remark-html";
import { Box, Container, Heading, Link, Text } from "@chakra-ui/react";
import { parseISO, format } from "date-fns";
import { ptBR } from "date-fns/locale";
import markdownStyles from "./markdown-styles.module.css";
import Head from "next/head";

async function markdownToHtml(markdown: string) {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}

const DateFormatter = ({ dateString }: { dateString: string }) => {
  const date = parseISO(dateString);
  return (
    <time dateTime={dateString}>
      {format(date, "LLLL	d, yyyy", { locale: ptBR })}
    </time>
  );
};

export const getStaticPaths = (async () => {
  const posts = getAllPosts();

  const staticPaths = {
    paths: posts.map((p) => ({
      params: {
        slug: p.slug,
      },
    })), // See the "paths" section below
    fallback: true, // false or "blocking"
  };

  return staticPaths;
}) satisfies GetStaticPaths;

export async function getStaticProps({ params }: Params) {
  const slug = params.slug;
  const post = getPostBySlug(slug);
  const content = await markdownToHtml(post.content || "");
  return {
    props: { post, content },
  };
}

export default function Post({
  post,
  content,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  if(!post) return null
  return (
    <Container>
      <Head>
        <title>{`${post.title} - Rodrigomaia.me`}</title>
        <meta name="description" content={post.excerpt} key="desc" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
      </Head>
      <article className="mb-32">
        <Box>
          <Heading size="lg" color="pink" marginBlockEnd={"2px"}>
            {post.title}
          </Heading>
          <Text fontSize={"sm"} marginY={"10px"}>
            <DateFormatter dateString={post.date} />
          </Text>
        </Box>
        <div className="max-w-2xl mx-auto">
          <div
            className={markdownStyles["markdown"]}
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </article>
    </Container>
  );
}

type Params = {
  params: {
    slug: string;
  };
};
