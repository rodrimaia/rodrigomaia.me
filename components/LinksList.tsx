import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Box,
  Text,
  Heading,
  UnorderedList,
  ListItem,
  Link,
} from "@chakra-ui/react";

export type ListItem = {
  name: string;
  link?: string;
  description?: string;
  strikethrough?: boolean;
} & (
  | { link: string; isExternal: boolean }
  | { link?: undefined }
);

export type LinksListSection = {
  title?: string;
  items: ListItem[];
};

const LinksList = ({
  section,
}: {
  section: LinksListSection;
}) => {
  return (
    <Box key={section.title} pb={5}>
      {section.title && (
        <Heading as="h2" size="lg" pb={3}>
          {section.title}
        </Heading>
      )}
      <UnorderedList>
        {section.items.map((thing) => (
          <ListItem key={thing.name} py={2}>
            <Text as="span" color="blue" fontWeight={"bold"}>
              {" "}
              {thing.link ? (
                <Link
                  color="blue"
                  href={thing.link}
                  isExternal={thing.isExternal}
                >
                  {thing.name} {thing.isExternal && <ExternalLinkIcon mx="2px" />}
                </Link>
              ) : (
                <span
                  style={
                    thing.strikethrough
                      ? { textDecoration: "line-through" }
                      : undefined
                  }
                >
                  {thing.name}
                </span>
              )}
              {thing.description && `: `}
              &nbsp;
            </Text>
            <Text as="span" fontWeight="hairline">
              {thing.description}
            </Text>
          </ListItem>
        ))}
      </UnorderedList>
    </Box>
  );
};

export default LinksList;
