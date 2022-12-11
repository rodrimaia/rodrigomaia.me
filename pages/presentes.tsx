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
      },
      { name: "Alimentando Necessidades =X", strikethrough: true },
    ]
  },
  {
    title: "Jogos de Tabuleiro",
    items: [
      {
        name: "Wingspan",
        link: "https://www.amazon.com.br/Wingspan-Jogo-de-tabuleiro-Grok/dp/B07PT68643"
      },
      {
        name: "Chronicles of Crime",
        link: "https://www.amazon.com.br/Gal%C3%A1pagos-Jogos-COC001-Chronicles-Crime/dp/B082578W25"
      },
      {
        name: "Detective",
        link: "https://www.amazon.com.br/Gal%C3%A1pagos-Jogos-DET001-Detective/dp/B08CS7QHFB/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=82IXCP6EIGHR&keywords=detective&qid=1670800402&s=toys&sprefix=detectiv%2Ctoys%2C346&sr=1-1&ufe=app_do%3Aamzn1.fos.4bb5663b-6f7d-4772-84fa-7c7f565ec65b"
      },
      {
        name: "Cascadia",
        link: "https://www.amazon.com.br/Grok-Games-Cascadia-Modelo-Diversos/dp/B0B8PDYQD9/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=M73SRCGN700P&keywords=cascadia&qid=1670338320&s=toys&sprefix=casca%2Ctoys%2C268&sr=1-1&ufe=app_do%3Aamzn1.fos.fcd6d665-32ba-4479-9f21-b774e276a678"
      },
      {
        name: "A tripulacao",
        link: "https://www.amazon.com.br/TRIPULA%C3%87%C3%83O-Jogo-Tabuleiro-Devir/dp/B08W1KQFKB/ref=sr_1_4?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1PZA44850GYL2&keywords=a+tripula%C3%A7%C3%A3o&qid=1670337382&s=toys&sprefix=a+tripulac%2Ctoys%2C226&sr=1-4&ufe=app_do%3Aamzn1.fos.db68964d-7c0e-4bb2-a95c-e5cb9e32eb12"
      },
      {
        name: "Sherlock Holmes",
        link: "https://www.mundogalapagos.com.br/sherlock-holmes-consulting-detective-os-assassinatos-do-tamisa-e-outros-casos/produto/SHC001"
      },
      {
        name: "Terraforming Mars",
        link: "https://www.amazon.com.br/Meeple-BR-Jogos-751320317506-Terraforming/dp/B07DCZZ8QD/ref=sr_1_4?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1FK78WQ8TQ2T4&keywords=terraforming+mars&qid=1670796024&s=toys&sprefix=terraforming+m%2Ctoys%2C295&sr=1-4&ufe=app_do%3Aamzn1.fos.e05b01e0-91a7-477e-a514-15a32325a6d6"
      },
      {
        name: "Mansions of Madness",
        link: "https://www.amazon.com.br/Gal%C3%A1pagos-Jogos-MOM001-Mansions-Madness/dp/B07CLGVK44/ref=asc_df_B07CLGVK44/?tag=googleshopp00-20&linkCode=df0&hvadid=379699826596&hvpos=&hvnetw=g&hvrand=9880358519994071747&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1001566&hvtargid=pla-616496505246&psc=1"
      },
      {
        name: "Ark Nova",
        link: "https://grokgames.com.br/loja/ark-nova/"
      },
      {
        name: "MicroMacro",
        link: "https://www.amazon.com.br/MicroMacro-Cidade-Crime-Gal%C3%A1pagos-Multicolor/dp/B09G3J45W2/ref=asc_df_B09G3J45W2/?tag=googleshopp00-20&linkCode=df0&hvadid=393609811349&hvpos=&hvnetw=g&hvrand=1396745862847367808&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1001566&hvtargid=pla-1506729643157&psc=1",
      },
      {
        name: "Spirit Island",
        link: "https://bravojogos.com.br/jogos-de-tabuleiro-e-cardgames/jogo-spirit-island--p?gclid=Cj0KCQiAnNacBhDvARIsABnDa68E3tOqyKcfTuN-7d9ozvEASoiq-6HbxmdRjl8MJWDm8DzUA9Zmp_waAjxIEALw_wcB"
      },
      {
        name: "Root",
        link: "https://www.amazon.com.br/Meeple-BR-Jogos-Jogo-Tabuleiro/dp/B07S2ZW2W6/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2C07ZE81T9RMD&keywords=root&qid=1670338603&sprefix=so+clover%2Caps%2C331&sr=8-1&ufe=app_do%3Aamzn1.fos.4bb5663b-6f7d-4772-84fa-7c7f565ec65b"
      },
      {
        name: "Ticket to Ride",
        link: "https://www.amazon.com.br/Gal%C3%A1pagos-Jogos-TTR001-Ticket-Ride/dp/B07BHW19H6?ref_=ast_sto_dp"
      },
      {
        name: "Gloomhaven (eh tao caro e denso que quem comprar vai ter que ser obrigado a jogar comigo e eu animo ajudar a comprar)",
        link: "https://www.amazon.com.br/Gal%C3%A1pagos-Jogos-GAM10-GLH001-Gloomhaven/dp/B087WDYL5F?ref_=ast_sto_dp"

      }
    ]
  },
  {
    title: "Bebidas",
    items: [
      {
        name: "Kahlua",
        link: "https://www.amazon.com.br/Licor-Creme-Caf%C3%A9-Kahlua-750ml/dp/B01N58C3CQ/ref=asc_df_B01N58C3CQ/?tag=googleshopp00-20&linkCode=df0&hvadid=404773626903&hvpos=&hvnetw=g&hvrand=4745045580191494946&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1001566&hvtargid=pla-329122067235&psc=1"
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
