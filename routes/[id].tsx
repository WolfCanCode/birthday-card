/** @jsx h */
import { h } from "preact";
import { PageProps } from "$fresh/server.ts";
import Invitations from "../islands/Invitations.tsx";
import { TextEffect } from "../components/TextEffect.tsx";
import { asset } from "$fresh/runtime.ts";
import { tw } from "@twind";

export default function Greet(props: PageProps) {
  return (
    <div
      class={tw`max-w-screen h-screen bg-contain lg:bg-cover bg-no-repeat bg-top lg:bg-bottom`}
      style={{ backgroundImage: `url(${asset("/images/background.jpg")})`, backgroundColor:'#C8F7ED' }}
    >
      <Invitations id={props.params.id} />
    </div>
  );
}
