import FullScreenContainer from "../../components/full-screen-container";
import SiteTitle from "../../components/site-title";
import { WECAHT } from "../../constant/me";
import style from "./index.module.scss";

export default function About() {
  return (
    <FullScreenContainer>
      <SiteTitle>关于我</SiteTitle>
      <div className={style.about}>
        <p className={style.right}>JUST CALL ME :P</p>
        <p>YOU CAN ADD ME BY WECHAT</p>
        <p>{WECAHT} 👈</p>
      </div>
    </FullScreenContainer>
  );
}
