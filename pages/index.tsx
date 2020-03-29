import FullScreenContainer from "../components/full-screen-container";
import Link from "next/link";

const Home = ({ userAgent }) => (
  <FullScreenContainer>
    Hello world! - user agent: {userAgent}
    <Link href="/about">
      <a>About Page</a>
    </Link>
    <Link href="/post?title=123">
      <a>Post Page</a>
    </Link>
  </FullScreenContainer>
);

Home.layout = "wuwuwu";

Home.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers["user-agent"] : navigator.userAgent;
  return { userAgent };
};

export default Home;
