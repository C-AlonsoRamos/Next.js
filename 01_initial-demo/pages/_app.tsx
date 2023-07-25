import { NextPage } from "next";
import "../styles/globals.css";
import { AppProps } from "next/app";

type NextPageWithLayout = NextPage

type AppPropsWithLayout = AppProps & {
  component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  return <Component {...pageProps} />;
}
