/* eslint-disable */
import * as React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { Builder } from "@builder.io/react";

export const App = (props) => (
    <SyntaxHighlighter language={props.language}>123</SyntaxHighlighter>
);

Builder.registerComponent(App, {
  name: "Code Block",
  inputs: [
    {
      name: "code",
      type: "string",
      defaultValue: "const incr = num => num + 1",
    },
    {
      name: "language",
      type: "string",
      defaultValue: "javascript",
    },
  ],
});