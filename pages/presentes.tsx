import { Box, Container, Heading, Text } from "@chakra-ui/react";
import React from "react";
import LinksList, { LinksListSection } from "../components/LinksList";

const usesSections: LinksListSection[] = [
  {
    title: "Livros",
    items: [
      {
        name: "How to make the best coffee at home - James Hoffman <3",
        link: "https://www.amazon.com.br/How-Make-Best-Coffee-Home/dp/1784727245"
      }
    ]
  }
  ,
  {
    title: "Outros",
    items: [
      {
        name: "jarra de café da hario que eu tinha e quebrou"
      },
      {
        name: "Carteira de Couro (normal, bonita, cansei das 'moderninhas')"
      },
      {
        name: "Mais ferramentas de manutenção de casa que eu nao tenho",
      },
      {
        name: "Alguma coisa relacionada a impressao 3D",
      },
      {
        name: "Camisetas lisa branca ou preta pra usar com blazer =D",
      },
      {
        name: "Discos de vinil de algum artista que eu gosto",
        link: "https://www.last.fm/pt/user/driguh/library/albums?from=2020-01-01&to=2022-10-26"
      },
      {
        name: "Joias",
        link: "https://www.google.com/search?sxsrf=AOaemvLzt4M7CUujLBkcAvC_IkcrUVpBNA:1640026011643&q=joias+bonitas+mas+que+nao+me+deixam+parecendo+o+johnny+depp&spell=1&sa=X&ved=2ahUKEwj8iuL-hPP0AhV-LLkGHcfqDtkQBSgAegQIARA2&biw=1344&bih=679&dpr=2",
      },
    ],
  },
];

const UsesPage = () => {
  return (
    <Container>
      <Box py={8}>
        <Heading color="pink" pb={2} as="h1">
          Lista de presentes
        </Heading>
        <Text> Só uma sugestão só ;P</Text>
      </Box>

      {usesSections.map((section, index) => (
        <LinksList
          pageName="presentes"
          key={section.title || index}
          section={section}
        />
      ))}
    </Container>
  );
};

export default UsesPage;
