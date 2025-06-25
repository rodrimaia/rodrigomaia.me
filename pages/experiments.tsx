import { Container, Box, Heading, Text } from "@chakra-ui/react";
import LinksList, { LinksListSection } from "../components/LinksList";

const experiments: LinksListSection[] = [
  {
    title: "",
    items: [
      {
        name: "Sudoku",
        link: "/sudoku",
        description:
          "A simple sudoku game. I made it to test heavy validations on a complex react state.",
      },
    ],
  },
];

const ExperimentsPage = () => {
  return (
    <Container>
      <Box py={8}>
        <Heading color="pink" pb={2} as="h1">
          Experiments
        </Heading>
        <Text>
          Sometimes I like to code things up to see how they work (or don`t
          work). Here are some of my experiments:
        </Text>
      </Box>

      {experiments.map((section) => (
        <LinksList pageName={section.title ?? ""} key={section.title} section={section} />
      ))}
    </Container>
  );
};

export default ExperimentsPage;
