import { AppProps } from "next/app";
import { useEffect } from "react";
import { initMouseEffect, removeMouseEffect } from "../lib/mouseEffect";

import "../styles/index.css";
import "../lib/mouseEffect/index.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    initMouseEffect();
    return () => {
      removeMouseEffect();
    };
  }, []);
  return <Component {...pageProps} />;
}
