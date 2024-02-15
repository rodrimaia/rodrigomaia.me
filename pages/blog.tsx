import {
  Box,
  Container,
  Divider,
  Flex,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { parseISO, format } from "date-fns";
import { getAllPosts, type Post, type Author } from "../lib/blogApi";
import { ptBR } from "date-fns/locale";

export async function getStaticProps() {
  const posts = getAllPosts();
  return {
    props: { posts },
  };
}

export default function Index({ posts }: { posts: Post[] }) {
  if (posts.length === 0) {
    return (
      <Container>
        <Text fontSize="2xl" letterSpacing="widest" fontWeight="semibold">
          No posts yet
        </Text>
      </Container>
    );
  }
  return (
    <Container maxW="container.sm">
      <Text my={8}>Some notes I keep for myself that maybe can be useful for someone else...</Text>
      <VStack>
        {posts.map((post) => (
          <>
            <PostPreview
              key={post.slug}
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              author={post.author}
              slug={post.slug}
              excerpt={post.excerpt}
            />
            <Divider style={{ margin: "1rem" }} />
          </>
        ))}
      </VStack>
    </Container>
  );
}

const DateFormatter = ({ dateString }: { dateString: string }) => {
  const date = parseISO(dateString);
  return (
    <time dateTime={dateString}>
      {format(date, "LLLL	d, yyyy", { locale: ptBR })}
    </time>
  );
};

type PostPreviewProps = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: PostPreviewProps) {
  return (
    <Box>
      <Heading size="lg" color="pink" marginBlockEnd={"2px"}>
        <Link
          as={`/posts/${slug}`}
          href="/posts/[slug]"
          className="hover:underline"
        >
          {title}
        </Link>
      </Heading>
      <Text fontSize={"sm"} marginY={"10px"}>
        <DateFormatter dateString={date} />
      </Text>
      <Text>{excerpt}</Text>
    </Box>
  );
}
