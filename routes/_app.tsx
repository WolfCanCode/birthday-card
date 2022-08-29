/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from "preact";
import { AppProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export default function App({ Component }: AppProps) {
  return (
    <>
      <Head>
        <title>Ngọt Birthday</title>
        <meta
          property="og:url"
          content="https://sweetbirthday.deno.dev/"
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Ngọt said, I am one year old"
        />
        <meta
          property="og:description"
          content="Đây là thiệp sinh nhật điện tử, có giá trị để Ngọt biết bạn có đi hay không. Ngoài ra nó cũng là vé để bốc thăm trúng thưởng đó nha"
        />
        <meta
          property="og:image"
          content="https://i.ibb.co/58ffyC0/avatar.png"
        />
      </Head>
      <Component />
    </>
  );
}
