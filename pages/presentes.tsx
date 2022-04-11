import { Box, Container, Heading, Text } from "@chakra-ui/react";
import React from "react";
import LinksList, { LinksListSection } from "../components/LinksList";

const usesSections: LinksListSection[] = [
  {
    title: "Livros",
    items: [
      {
        name: "Liquid Intelligence: The Art and Science of the Perfect Cocktail!",
        link: "https://www.amazon.com.br/Liquid-Intelligence-Science-Perfect-Cocktail/dp/0393089037/ref=sr_1_17?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=cocktails&qid=1639070775&sr=8-17&ufe=app_do%3Aamzn1.fos.4bb5663b-6f7d-4772-84fa-7c7f565ec65b",
      },
      {
        name: "Session Cocktails: Low-Alcohol Drinks for Any Occasion",
        link: "https://www.amazon.com.br/Session-Cocktails-Low-Alcohol-Drinks-Occasion/dp/0399580867/ref=tmm_hrd_swatch_0?_encoding=UTF8&qid=&sr=",
      },
    ],
  },
  {
    title: "Outros",
    items: [
      {
        name: "Tabuleiro de xadrez"
      },
      {
        name: "Mixing Glass!",
        link: "https://produto.mercadolivre.com.br/MLB-2018259069-copo-mixing-glass-720ml-timeless-bartender-coquetel-bar-_JM?matt_tool=40168140&matt_word=&matt_source=google&matt_campaign_id=14302215507&matt_ad_group_id=134553697108&matt_match_type=&matt_network=g&matt_device=c&matt_creative=539425477636&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=109453460&matt_product_id=MLB2018259069&matt_product_partition_id=1403983331189&matt_target_id=pla-1403983331189&gclid=CjwKCAiA78aNBhAlEiwA7B76p6MfqC4X2LGBuwVChj9Ut8pF74P9N6W3EoYIg0zraHP68rWI7mU5bBoCAIEQAvD_BwE",
      },
      {
        name: "Taca Martini",
        link: "https://www.google.com/search?q=taca+martini&biw=1920&bih=976&sxsrf=AOaemvKZmmvH4TkfJAE5hIgHrV6hgc8Zkg%3A1639072522600&ei=CkOyYd6tI_nI5OUPoo2z6Ao&ved=0ahUKEwje2uD7pNf0AhV5JLkGHaLGDK0Q4dUDCA4&uact=5&oq=taca+martini&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeOgcIABBHELADSgQIQRgASgQIRhgAUJYOWJUTYOcTaAJwAngAgAGcAYgBtAaSAQMwLjaYAQCgAQHIAQjAAQE&sclient=gws-wiz",
      },
      {
        name: "Copos longos",
        link: "https://produto.mercadolivre.com.br/MLB-1570945607-jogo-12-copos-long-drink-vidro-aiala-vicrila-310ml-_JM?matt_tool=40168140&matt_word=&matt_source=google&matt_campaign_id=14302215507&matt_ad_group_id=134553697108&matt_match_type=&matt_network=g&matt_device=c&matt_creative=539425477636&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=252522575&matt_product_id=MLB1570945607&matt_product_partition_id=1403983331189&matt_target_id=pla-1403983331189&gclid=CjwKCAiA78aNBhAlEiwA7B76p7Ot71j2EzPB_Lt6P_c9A6i3JyWJL1q_Qx9o4AtUBA721hKXETv-0hoCJVYQAvD_BwE",
      },
      {
        name: "Roupas",
        link: "https://www.google.com/search?q=roupas+pro+rodrigo+parecer+o+david+beckham&sxsrf=AOaemvJCWNeQkq26AinzjfL8cqv6mpXT5Q%3A1639073177753&ei=mUWyYbzvLJi_5OUP_v-PuA0&ved=0ahUKEwj8n5S0p9f0AhWYH7kGHf7_A9cQ4dUDCA4&uact=5&oq=roupas+pro+rodrigo+parecer+o+david+beckham&gs_lcp=Cgdnd3Mtd2l6EAM6BwgAEEcQsAM6BQghEKABOgcIIRAKEKABSgQIQRgASgQIRhgAUJcQWP0pYJcraAJwAngAgAHPAYgB5xqSAQYwLjIyLjGYAQCgAQHIAQbAAQE&sclient=gws-wiz",
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
