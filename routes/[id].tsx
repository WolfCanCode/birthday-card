/** @jsx h */
import { h } from "preact";
import { PageProps } from "$fresh/server.ts";
import Invitations from "../islands/Invitations.tsx";
import { TextEffect } from "../components/TextEffect.tsx";
import { asset } from "$fresh/runtime.ts";
import { tw } from "@twind";

export default function Invitation(props: PageProps) {
  return (
    <div
      class={tw`max-w-screen h-screen bg-cover bg-no-repeat bg-top overflow-hidden`}
      style={{
        backgroundImage: `url(${asset("/images/background.jpg")})`,
        backgroundColor: "#C8F7ED",
      }}
    >
      <image
        src="/images/avatar.png"
        className={tw`top-[10%] fixed left-[50%] translate-x-[-50%] h-36 w-36 rounded-full`}
      />
      <Invitations id={props.params.id} />
    </div>
  );
}
