import { Box, Container, Heading, Text } from "@chakra-ui/react";
import React from "react";
import LinksList, { LinksListSection } from "../components/LinksList";

const usesSections: LinksListSection[] = [
  {
    title: "Desk",
    items: [
      {
        name: "MacBook Pro (16-inch, 2019)",
        description:
          "Definitely looking forward to experimenting with the new M1 chips. ;D",
      },
      {
        name: "GenioDesk PRO",
        link: "https://www.geniodesks.com.br/",
        description:
          "I usually try to not stay sitting on my desk for too long. Focus on the word 'try'.",
      },
      {
        name: "ZSA Moonlander",
        link: "https://www.zsa.io/moonlander/",
        description:
          "if you see some typos in this document, the keyboard  is probably the one to blabe.",
      },
      {
        name: "Regular Dell 27 HD monitor",
        description: "Getting a 4k monitor soon.",
      },
    ],
  },
  {
    title: "Coding",
    items: [
      {
        name: "VSCode",
        link: "https://code.visualstudio.com/",
        description: "Ok, I confess I am using vscode 100% of the time.",
      },
      {
        name: "Github Copilot",
        link: "https://copilot.github.com/",
        description: "IF YOU ARE NOT USING IT, YOU ARE WRONG.",
      },
      {
        name: "Outrun night theme",
        link: "https://github.com/samrap/outrun-theme-vscode",
        description: "I may or may not have copied my website theme from it.",
      },
    ],
  },
];

const UsesPage = () => {
  return (
    <Container>
      <Box py={8}>
        <Heading color="pink" pb={2} as="h1">
          What I use
        </Heading>
        <Text> A living document with everything I use on my day-to-day</Text>
      </Box>

      {usesSections.map((section) => (
        <LinksList pageName="uses" key={section.title} section={section} />
      ))}
    </Container>
  );
};

export default UsesPage;
