import { Box, Container, Flex, Link, Text } from "@chakra-ui/react";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Container fontSize={["4xl", "6xl"]} pl={["8", "24"]} pt="40">
      Hi, I'm <br />
      <Text as="span" color="pink" fontWeight="bold">Rodrigo Maia</Text>, <br />
      a <Text as="span" fontWeight="bold" color="blue" fontStyle="italic">full stack developer</Text>.

    </Container>
  );
};

export default Home;
