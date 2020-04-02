import FullScreenContainer from "../../components/full-screen-container";
import SiteTitle from "../../components/site-title";
import Aside from "./components/aside";
import Footer from "../../components/footer";
import { USERNAME } from "../../constant/me";
import style from "./index.module.scss";

const Home = () => (
  <FullScreenContainer className={style.index}>
    <SiteTitle>首页</SiteTitle>
    <Aside />
    <Footer>© 2018 {USERNAME} </Footer>
  </FullScreenContainer>
);

export default Home;
