import { Header } from "components/header";
import { SelectedFiltersProvider } from "context/filterContext";
import type { AppProps } from "next/app";
import "../css/styles.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SelectedFiltersProvider>
        <Header />
        <Component {...pageProps} />
      </SelectedFiltersProvider>
    </>
  );
}
