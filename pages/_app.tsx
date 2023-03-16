import { Header } from "components/header";
import { PaginationProvider } from "contexts/pagination/paginationContext";
import type { AppProps } from "next/app";

import "../css/styles.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <PaginationProvider>
        <Header />
        <Component {...pageProps} />
      </PaginationProvider>
    </>
  );
}
