import React from 'react';
import styled from 'styled-components';
import { me } from '../constant';
import Row from 'antd/lib/row';

import NikeName from '../elements/NikeName';
import Avatar from '../elements/Avatar';
import Description from '../elements/Description';
import Section from '../elements/Section';
import Division from '../elements/Division';
import SocicalList from './SocicalList';
import { githubApi } from '../api';
const { USER_INFO_MODE, NIKENAME, AVATAR, BIO, SOCICAL_LIST } = me;

import {
  PNikeNameSection,
  PAvatarSection,
  PDescriptionSection,
  PAside
} from './types';

const Container = styled(Row)`
  flex-flow: column !important;
  border-right: 5px solid;
  border-image: linear-gradient(#fff, 10%, #82def3, 90%, #fff) 1;
  padding: 0 16px;
  width: 260px;
  height: 100vh;
  text-align: center;
  flex-direction: column;
  @media (max-width: 590px) {
    position: absolute;
    left: -255px;
    background: #ffffff;
  }
`;

const NikeNameSection = ({ nickname }: PNikeNameSection) => (
  <Section>
    <NikeName>{nickname}</NikeName>
  </Section>
);

const AvatarSection = ({ avatar }: PAvatarSection) => (
  <Section>
    <Avatar src={avatar} />
  </Section>
);

const DescriptionSection = ({ bio }: PDescriptionSection) => (
  <Section>
    <Description>{bio}</Description>
  </Section>
);

const SocicalSection = () => (
  <Section>
    <SocicalList list={SOCICAL_LIST} />
  </Section>
);

const Aside = ({ nickname, avatar, bio }: PAside) => (
  <Container type="flex" justify="center" align="middle">
    <AvatarSection avatar={avatar} />
    <NikeNameSection nickname={nickname} />
    <DescriptionSection bio={bio} />
    <Division />
    <SocicalSection />
  </Container>
);

class AsideHoc extends React.Component {
  state = { nickname: '', avatar: '', bio: '' };

  async componentDidMount() {
    if (USER_INFO_MODE === 'CUSTOM') {
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
    return <Aside nickname={nickname} avatar={avatar} bio={bio} />;
  }
}

export default AsideHoc;
