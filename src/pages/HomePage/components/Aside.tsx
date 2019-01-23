import React from 'react';
import Division from '../../../elements/Division';

import { githubApi } from '../../../api';
import { AsideParmas } from './types';
import { me } from '../../../constant';
const { NIKENAME, AVATAR, BIO } = me;

import {
  AvatarSection,
  NikeNameSection,
  DescriptionSection,
  SocicalSection
} from './';

const Aside = ({ nickname, avatar, bio }: AsideParmas) => (
  <>
    <AvatarSection avatar={avatar} />
    <NikeNameSection nickname={nickname} />
    <DescriptionSection bio={bio} />
    <Division />
    <SocicalSection />
  </>
);

class AsideHoc extends React.Component {
  state = { nickname: '', avatar: '', bio: '' };

  async componentDidMount() {
    const res = await githubApi.user.getUserInfo();
    this.setState({
      nickname: res.name,
      avatar: res.avatar_url,
      bio: res.bio
    });
    this.setState({ nickname: NIKENAME, avatar: AVATAR, bio: BIO });
  }

  render() {
    const { nickname, avatar, bio } = this.state;
    return <Aside nickname={nickname} avatar={avatar} bio={bio} />;
  }
}

export default AsideHoc;
