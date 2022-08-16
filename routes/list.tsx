/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { asset } from "$fresh/runtime.ts";
import InvitationList from "../islands/list.tsx";

export default function HomeList() {
  
  return (
    <div class={tw`max-w-screen h-screen bg-cover bg-no-repeat bg-bottom`} style={{backgroundImage: `url(${asset('/images/background.jpg')})`}}>
      <InvitationList/>
    </div>
  );
}
