import Masthead from "@/components/Masthead";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Masthead />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
