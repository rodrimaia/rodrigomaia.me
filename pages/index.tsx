import { Container, Text } from "@chakra-ui/react";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Container fontSize={["5xl", "6xl"]} pl={["8", "24"]} pt={["16","40"]}>
      Hi, I&apos;m <br />
      <Text as="span" color="pink" fontWeight="bold">Rodrigo Maia</Text>, <br />
      a <Text as="span" fontWeight="bold" color="blue" fontStyle="italic">full stack developer</Text>.

    </Container>
  );
};

export default Home;
