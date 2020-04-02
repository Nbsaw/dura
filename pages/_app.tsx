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

console.log(
  "%c ",
  `
    background:url(https://pics.manqian.com/mq-pim/202004021585808377599.png) no-repeat;
    background-size: 100%;
    padding-left:200px;
    padding-bottom:100px;
    border-radius:10px;
    margin:5px 0;
  `
);
console.log("EI HEI, WHY YOU OPEN THE DEVTOOLS ?");
console.log("WOULD YOU LIKE TO SEE THE CODE FIRST OR EAT SOME KEMOMIMI ...");

// getInitialProps , layout
function App({ Component, pageProps }: AppProps & CustomAppProps) {
  console.log(Component.layout?.name);
  return <Component {...pageProps} />;
}

export default App;
