/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Invitations from "../islands/Invitations.tsx";
import { PageProps } from "https://deno.land/x/fresh@1.0.2/server.ts";

export default function Home() {
  
  return (
    <div class={tw`max-w-screen h-screen bg-red-500`}>
     
      <Invitations/>
    </div>
  );
}
