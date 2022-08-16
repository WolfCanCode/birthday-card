/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { asset } from "$fresh/runtime.ts";
import { TextEffect } from "../components/TextEffect.tsx";

export default function Home() {
  
  return (
    <div class={tw`max-w-screen h-screen bg-cover bg-no-repeat bg-bottom`} style={{backgroundImage: `url(${asset('/images/background.jpg')})`}}>
      <TextEffect/>
    </div>
  );
}
