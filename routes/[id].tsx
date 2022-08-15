/** @jsx h */
import { h } from "preact";
import { PageProps } from "$fresh/server.ts";
import Invitations from "../islands/Invitations.tsx";

export default function Greet(props: PageProps) {
  return <div> <Invitations id={props.params.id}/></div>;
}
