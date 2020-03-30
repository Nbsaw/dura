import FullScreenContainer from "../components/full-screen-container";
import SiteTitle from "../components/site-title";
import { Aside } from "../components/home-page";
import Footer from "../components/footer";

const Home = ({ userAgent }) => (
  <FullScreenContainer>
    <SiteTitle>首页</SiteTitle>
    <Aside />
    <Footer>© 2018 nbsaw </Footer>
  </FullScreenContainer>
);

Home.layout = "wuwuwu";

Home.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers["user-agent"] : navigator.userAgent;
  return { userAgent };
};

export default Home;
