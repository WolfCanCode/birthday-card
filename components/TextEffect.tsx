/** @jsx h */
import { h } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { tw } from "@twind";
import { textStyles } from "../styles/text.ts";
import * as css from "https://esm.sh/css@3.0.0";

export function TextEffect() {

  return (
    <div class="container">
      <h1>
        <span>
          Sweet<br /> 1st
        </span>
      </h1>
      <div class="blobs_1"></div>
      <div class="blobs_2"></div>
      <div class="blobs_3"></div>
      <div class="blobs_4"></div>
      <div class="blobs_5"></div>
      <div class="blobs_6"></div>
      <div class="blobs_7"></div>
      <style>
        {css.stringify(textStyles)}
      </style>
    </div>
  );
}

