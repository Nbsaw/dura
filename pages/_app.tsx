import { AppProps } from "next/app";
import "../style/index.scss";
import NProgress from "nprogress";
import Router from "next/router";

Router.events.on("routeChangeStart", NProgress.start);
Router.events.on("routeChangeComplete", NProgress.done);
Router.events.on("routeChangeError", NProgress.done);

interface CustomAppProps {
  Component: {
    layout: {
      name: string;
      [key: string]: any;
    };
  };
}

// getInitialProps , layout
function App({ Component, pageProps }: AppProps & CustomAppProps) {
  console.log(Component.layout?.name);
  return <Component {...pageProps} />;
}

export default App;
