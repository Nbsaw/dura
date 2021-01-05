import React, { useState, useEffect } from "react";
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

const Aside = () => {
  const [isMounted, setIsMounted] = useState(false);

  const [data, setData] = useState<{
    nickname?: string;
    avatar?: string;
    bio?: string;
  }>({});

  useEffect(() => setIsMounted(true), []);

  useEffect(() => {
    let didCancel = false;
    async function fetchUserInfo() {
      if (USER_INFO_MODE === "CUSTOM") {
        setData({ nickname: NIKENAME, avatar: AVATAR, bio: BIO });
      } else if (!didCancel) {
        const res = await githubApi.user.getUserInfo();
        setData({
          nickname: res.name,
          avatar: res.avatar_url,
          bio: res.bio
        });
      }
    }

    fetchUserInfo();

    return () => {
      didCancel = true;
    };
  }, [isMounted]);

  const { nickname, avatar, bio } = data;

  return <_Aside nickname={nickname} avatar={avatar} bio={bio} />;
};

export default Aside;
