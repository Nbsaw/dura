import { AppProps } from "next/app";
import "../style/index.scss";

// getInitialProps , layout
function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default App;
