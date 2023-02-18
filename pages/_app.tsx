import { Header } from "components/header";
import type { AppProps } from "next/app";
import "../css/styles.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
