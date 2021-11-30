import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text
} from "@chakra-ui/react";
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
      <Link isExternal={l.isExternal}>
        <TextLink label={l.label} />
      </Link>
    </NextLink>
  ));
  return (
    <Box as="body" bg="haiti" minHeight="100vh" textColor={"lightGray"}>
      <Head>
        <title>Rodrigo Maia</title>
        <meta name="description" content="Rodrigo's personal site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Flex pl="7" py="5" justify="space-between">
          <Flex
            visibility={{ base: "hidden", md: "visible" }}
            sx={{ gap: "24px" }}
          >
            {links}
          </Flex>
          <Box display={{ base: "block", md: "none" }} pr="7">
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
                      <Link isExternal={l.isExternal}>
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
      </main>

      <footer></footer>
    </Box>
  );
};
