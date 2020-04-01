import React from "react";
import Division from "../../../components/division";
import { me } from "../../../constant";
import githubApi from "../../../services/github";
const { USER_INFO_MODE, NIKENAME, AVATAR, BIO } = me;

import AvatarSection from "./avatar-section";
import NikeNameSection from "./nikename-section";
import DescriptionSection from "./description-section";
import SocicalSection from "./socical-section";

export interface AsideParmas {
  nickname: string;
  avatar: string;
  bio: string;
}

const _Aside = ({ nickname, avatar, bio }: AsideParmas) => (
  <>
    <AvatarSection avatar={avatar} />
    <NikeNameSection nickname={nickname} />
    <DescriptionSection bio={bio} />
    <Division />
    <SocicalSection />
  </>
);

class Aside extends React.Component {
  state = { nickname: "", avatar: "", bio: "" };

  async componentDidMount() {
    if (USER_INFO_MODE === "CUSTOM") {
      this.setState({ nickname: NIKENAME, avatar: AVATAR, bio: BIO });
    } else {
      const res = await githubApi.user.getUserInfo();
      this.setState({
        nickname: res.name,
        avatar: res.avatar_url,
        bio: res.bio
      });
    }
  }

  render() {
    const { nickname, avatar, bio } = this.state;
    return <_Aside nickname={nickname} avatar={avatar} bio={bio} />;
  }
}

export default Aside;
