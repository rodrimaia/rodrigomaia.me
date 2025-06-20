import { Box, Container, Heading, Text } from "@chakra-ui/react";
import React from "react";
import LinksList, { LinksListSection } from "../components/LinksList";

const usesSections: LinksListSection[] = [
  {
    title: "Desk",
    items: [
      {
        name: "MacBook Pro M1 (14-inch, 2021)",
        description:
          "A powerful laptop with a beautiful display. Way better than the 2019 intel version.",
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
        name: `Monitor 165Hz 27" Dell S2721DGF`,
        link: "https://www.dell.com/pt-br/shop/monitor-165hz-gamer-27-dell-s2721dgf/apd/210-bbmu/monitores-e-acess%C3%B3rios",
        description:
          "Work and play monitor. (by play I mean figuring out how to survive on Oxygen Not Included)",
      },
    ],
  },
  {
    title: "Tools/Apps",
    items: [
      {
        name: "Raycast",
        link: "https://raycast.com/",
        description: "A better launcher than Alfred and Spotlight.",
      },
      {
        name: "Obsidian",
        link: "https://obsidian.md/",
        description:
          "I use it to take notes and to keep track of my projects. Syncing with a custom plugin hosted on my own server.",
      },
      {
        name: "Dozer",
        link: "https://github.com/Mortennn/Dozer",
        description:
          "Hide menu bar on macOS. (must have for the new macbook pro with the notch)",
      },
    ],
  },
  {
    title: "Coding",
    items: [
      {
        name: "Cursor",
        link: "https://www.cursor.com/",
        description: "I am using it to write this document.",
      },
      {
        name: "Outrun night theme",
        link: "https://github.com/samrap/outrun-theme-vscode",
        description: "I may or may not have copied my website theme from it.",
      },
      {
        name: "asdf",
        link: "https://github.com/asdf-vm/asdf",
        description: "Finally a multi-language version tool to rule them all.",
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
        <Text> A living document with a few things I use on my day-to-day</Text>
      </Box>

      {usesSections.map((section) => (
        <LinksList pageName="uses" key={section.title} section={section} />
      ))}
    </Container>
  );
};

export default UsesPage;
