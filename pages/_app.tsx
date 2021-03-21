import "../styles/globals.css";
import { AppProps } from "next/app";
import * as React from "react";
import CustomAppBar from "../src/components/CustomAppBar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <CustomAppBar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
