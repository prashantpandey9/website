import React, { useEffect, useState } from "react";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import "../styles/globals.css";
import "styles/notebook.css";
import "devicon/devicon.min.css";
import { useRouter } from "next/router";
import NextNprogress from "nextjs-progressbar";
import { AppProps } from "next/app";
import { lightTheme, darkTheme } from "hooks/themes";
import Jumbo from "components/jumbo";
import Navbar from "components/navbar";
import SearchBar from "components/searchBar";
import Footer from "components/footer";
import Head from "components/head";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [query, setQuery] = useState((router.query.q as string) || "");
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    setIsDarkTheme((localStorage.getItem("theme") || "light") === "dark");
  }, []);

  const searchBar = (
    <SearchBar small={router.route !== "/"} query={query} setQuery={setQuery} />
  );

  return (
    <div style={{ height: "100%" }} className={isDarkTheme ? "dark" : ""}>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <Head />
        <CssBaseline />
        <NextNprogress
          color="#fff"
          height={2}
          options={{ showSpinner: false }}
        />
        <Navbar
          search={router.route !== "/" && searchBar}
          darkTheme={isDarkTheme}
          setDarkTheme={setIsDarkTheme}
        />
        {router.route === "/" && <Jumbo search={searchBar} />}
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default MyApp;
