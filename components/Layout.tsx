import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Container,
  Flex,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import splitbee from "@splitbee/web";
import Head from "next/head";
import NextLink from "next/link";

export const linksTopbar = [
  { href: "/", label: "home" },
  { href: "/resume.pdf", label: "resume", isExternal: true },
  { href: "http://github.com/rodrimaia", label: "github", isExternal: true },
  {
    href: "http://linkedin.com/in/rodrimaia",
    label: "linkedin",
    isExternal: true,
  },
];

export const TextLink = ({ label }: { label: string }) => (
  <Text fontSize="2xl" letterSpacing="widest" fontWeight="semibold">
    {label}
  </Text>
);

export const Layout: React.FC = ({ children }) => {
  const links = linksTopbar.map((l) => (
    <NextLink key={l.href} href={l.href} passHref>
      <Link
        isExternal={l.isExternal}
        onClick={() => {
          splitbee.track(`click-${l.label}`);
        }}
      >
        <TextLink label={l.label} />
      </Link>
    </NextLink>
  ));

  return (
    <Box
      bg="haiti"
      position="fixed"
      height="100%"
      minHeight="100vh"
      minWidth="100vw"
      textColor={"lightGray"}
    >
      <Head>
        <title>Rodrigo Maia</title>
        <meta name="description" content="Rodrigo's personal site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box 
      as="main"
      >
        <Flex display={{ base: "none", md: "flex" }} pl="7" py="5" sx={{ gap: "24px" }}>
          {links}
        </Flex>
        <Flex display={{ base: "flex", md: "none" }} px="7" py="5" justify={"flex-end"} >
          <Box>
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon />}
                variant="outline"
              />
              <MenuList>
                {linksTopbar.map((l) => (
                  <MenuItem key={l.href}>
                    <NextLink key={l.href} href={l.href} passHref>
                      <Link
                        isExternal={l.isExternal}
                        onClick={() => {
                          splitbee.track(`click-${l.label}`);
                        }}
                      >
                        <Text
                          fontSize="2xl"
                          color="haiti"
                          letterSpacing="widest"
                          fontWeight="semibold"
                        >
                          {l.label}
                        </Text>
                      </Link>
                    </NextLink>
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
          </Box>
        </Flex>
        {children}
      </Box>

      <footer></footer>
    </Box>
  );
};
