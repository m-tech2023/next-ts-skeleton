import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import "@/styles/globals.scss";
import "@/styles/admin.scss";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "bootstrap/dist/css/bootstrap.css";
config.autoAddCss = false;

import DefaultLayout from "@/layouts/default-layout";
import store from "@/store";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { GoogleOAuthProvider } from "@react-oauth/google";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(
    <GoogleOAuthProvider clientId="1091851264293-rjetgf1fetcv18aes1d9g2cu7ir1am53.apps.googleusercontent.com">
      <Provider store={store}>
        <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>
      </Provider>
    </GoogleOAuthProvider>
  );


}
