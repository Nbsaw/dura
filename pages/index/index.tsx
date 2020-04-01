import FullScreenContainer from "../../components/full-screen-container";
import SiteTitle from "../../components/site-title";
import Aside from "./components/aside";
import Footer from "../../components/footer";
import { USERNAME } from "../../constant/me";

const Home = ({ userAgent }) => (
  <FullScreenContainer>
    <SiteTitle>首页</SiteTitle>
    <Aside />
    <Footer>© 2018 {USERNAME} </Footer>
  </FullScreenContainer>
);

Home.layout = "wuwuwu";

Home.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers["user-agent"] : navigator.userAgent;
  return { userAgent };
};

export default Home;
