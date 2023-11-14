import DefaultLayout from "@/layouts/default-layout";
import store from "@/store";
import "@/styles/globals.scss";
import { GoogleOAuthProvider } from "@react-oauth/google";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import '../node_modules/bootstrap/dist/css/bootstrap.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GoogleOAuthProvider clientId="1091851264293-rjetgf1fetcv18aes1d9g2cu7ir1am53.apps.googleusercontent.com">
      <Provider store={store}>
        <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>
      </Provider>
    </GoogleOAuthProvider>
  );
}
