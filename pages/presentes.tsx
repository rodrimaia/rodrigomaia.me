import { Box, Container, Heading, Text } from "@chakra-ui/react";
import React from "react";
import LinksList, { LinksListSection } from "../components/LinksList";

const usesSections: LinksListSection[] = [
  {
    title: "O principal presente",
    items: [
      {
        name: "Olha, eu nunca sonhei que eu teria uma vida tao completa e feliz e cheia de realizaçoes como a que eu tenho hoje. Eu tenho muita muita sorte de ter tudo (e todos) que eu preciso . Infelizmente, sabemos que isso é a realidade de uma parcela cada vez menor da população (Especialmente depois desses ultimos anos, né?).Eu vou amar qualquer presente, mas o melhor presente que eu posso ganhar nesse momento é se voce fizesse uma doacao em meu nome para alguma instituição de caridade. Eu vou deixar alguns links abaixo, mas se voce quiser fazer uma doacao em outro lugar, fique a vontade. Eu vou amar qualquer doacao que voce fizer, e vou ficar muito feliz em saber que voce fez uma doacao em meu nome. Obrigado por tudo, e feliz natal! <3",
      },
      {
        name: "CAVIVER",
        link: "https://doebem.org.br/caviver/"
      },
      {
        name: "DARA",
        link: "https://doebem.org.br/dara/"
      }
    ]
  },
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
        name: "Discos de vinil de algum artista que eu gosto",
        link: "https://www.last.fm/pt/user/driguh/library/albums?from=2020-01-01&to=2022-10-26"
      },
      {
        name: "outro link pros discos de vinil da minha wishlist ",
      link: "https://imgur.com/a/xo7PVid"},
      {
        name: "mini parafusadeira (tipo essa da bosch)",
        link: "https://www.amazon.com.br/Parafusadeira-Bateria-Bosch-BIVOLT-Bits/dp/B08K3F6VZB/ref=asc_df_B08K3F6VZB/?tag=googleshopp00-20&linkCode=df0&hvadid=379787210777&hvpos=&hvnetw=g&hvrand=17000147941697629415&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1001566&hvtargid=pla-1259756850872&psc=1"
      },
      {
        name: "ou essa da xiaomi",
        link: "https://produto.mercadolivre.com.br/MLB-2935128152-kit-chave-de-fenda-eletrica-recarregavel-xiaomi-mijia-_JM?matt_tool=73118705&matt_word=&matt_source=google&matt_campaign_id=14302215555&matt_ad_group_id=134553706788&matt_match_type=&matt_network=g&matt_device=c&matt_creative=539425529245&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=607493558&matt_product_id=MLB2935128152&matt_product_partition_id=1469248455037&matt_target_id=aud-615548715344:pla-1469248455037&gclid=Cj0KCQiA7bucBhCeARIsAIOwr-_im2YPkCP2SqKpjShboeUzSDpt3LCgYvBHoDo9SQnOVeeFkzx0EUMaAtGEEALw_wcB"
      },
      {
        name: "uns filamentos 3d bonitoes",
        link: "https://3dlab.com.br/categoria-produto/filamento-para-impressora-3d/filamento-pla-silk/"
      },
            {
        name: "camisetas sempre bom"
      },
      {
        name: "meia branca cano alto macias e confortaveis hmmm",
        link: "https://www.nike.com.br/meia-nike-everyday-cushioned-6-pares-masculina-015769.html?cor=51&utm_source=googleshop&utm_medium=CPC&utm_campaing=Top_Sellers_PRS&gclid=Cj0KCQiA7bucBhCeARIsAIOwr-_FWs9C79XvGArQUQBO8xOpT8VnqM2cGwq6alXs8c9G7hjsMec7d08aAk-lEALw_wcB"
      },
      {
        name: "Calca chino com elastano hering tamanho 50",
        link: "https://produto.mercadolivre.com.br/MLB-1266627460-calca-basica-masculina-chino-com-elastano-hering-_JM?variation=174954007280"
      },
      {
        name: "Mais ferramentas de manutenção de casa/eletronica que eu nao tenho",
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
