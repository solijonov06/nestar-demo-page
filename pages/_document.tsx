import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  console.log("-------Document Pages Router-------");
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8"/>
        <meta name="title" content = "Nestar Demo"/>
        <meta name ="robots"  content = "index, follow"/>
        <link  rel="icon"  type = "img/png" href = "/img/logo/favicon.svg"/>

        <meta  name="keyword" content="nestar, nestar.uz,  mern nestjs fullstack, devex mern"/>
        <meta name="description" content={"Buy and sell properties anywhere at any time in South Korea. | " +
           "대한민국 어디서나 언제든지 부동산을 사고팔 수 있습니다." + 
           "Покупайте и продавайте недвижимость в любое время и в любом месте по всей Южной Корее"}/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
