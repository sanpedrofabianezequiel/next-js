import "../styles/globals.css";
import { NextPage } from "next";
import React from "react";
import { AppProps } from "next/app";

type NextPageWithoutLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithoutLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);

  // return (
  //   <>
  //     <Component {...pageProps} />
  //   </>
  // )
  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
