import FullScreenContainer from "../components/full-screen-container";
import SiteTitle from "../components/site-title";
import { WECAHT } from "../constant/me";
import Footer from "../components/footer";
import Avatar from "../components/avatar";

export default function About() {
  return (
    <FullScreenContainer>
      <SiteTitle>关于我</SiteTitle>
      <div>
        <p>I AM A MOTHER FUCKER STARANGER PEOPLE.</p>
        <p>The wechat 👉 {WECAHT}</p>
      </div>
    </FullScreenContainer>
  );
}
