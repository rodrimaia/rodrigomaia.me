import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Box,
  Container,
  Heading,
  Link,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import splitbee from "@splitbee/web";

type UsesSection = {
  title: string;
  things: {
    name: string;
    link?: string;
    description: string;
  }[];
};

const usesSections: UsesSection[] = [
  {
    title: "Desk",
    things: [
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
    things: [
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
        <Box key={section.title} pb={5}>
          <Heading as="h2" size="lg"> {section.title} </Heading>
          <UnorderedList>
            {section.things.map((thing) => (
              <ListItem key={thing.name} py={2}>
                <Text as="span" color="blue" fontWeight={"bold"}>
                  {" "}
                  {thing.link ? (
                    <Link
                      color="blue"
                      href={thing.link}
                      onClick={() => splitbee.track(`click-uses-${thing.name}`)}
                      isExternal
                    >
                      {thing.name} <ExternalLinkIcon mx="2px" />
                    </Link>
                  ) : (
                    thing.name
                  )}
                  : &nbsp;
                </Text>
                <Text as="span" fontWeight="hairline">
                  {thing.description}
                </Text>
              </ListItem>
            ))}
          </UnorderedList>
        </Box>
      ))}
    </Container>
  );
};

export default UsesPage;
