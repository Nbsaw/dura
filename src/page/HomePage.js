import React, { Component } from 'react';
import { me } from 'constant';

import SiteTitle from 'elements/SiteTitle';
import Avatar from 'elements/Avatar';
import FullScreenContainer from 'elements/FullScreenContainer';
import Section from 'elements/Section';
import Description from 'elements/Description';
import Division from 'elements/Division';
import NikeName from 'elements/NikeName';
import Footer from 'elements/Footer';
import SocicalList from 'blocks/SocicalList';

import { githubApi } from 'api';

const { USER_INFO_MODE, NIKENAME, AVATAR, BIO, SOCICAL_LIST } = me;

const NikeNameSection = ({ nickname }) => (
  <Section>
    <NikeName>{nickname}</NikeName>
  </Section>
);

const AvatarSection = ({ avatar }) => (
  <Section>
    <Avatar src={avatar} />
  </Section>
);

const DescriptionSection = ({ bio }) => (
  <Section>
    <Description>{bio}</Description>
  </Section>
);

const SocicalSection = () => (
  <Section>
    <SocicalList list={SOCICAL_LIST ? SOCICAL_LIST : []} />
  </Section>
);

const Aside = ({ nickname, avatar, bio }) => (
  <React.Fragment>
    <AvatarSection avatar={avatar} />
    <NikeNameSection nickname={nickname} />
    <DescriptionSection bio={bio} />
    <Division />
    <SocicalSection />
  </React.Fragment>
);

class AsideHoc extends React.Component {
  state = { nickname: '', avatar: '', bio: '' };

  async componentDidMount() {
    if (USER_INFO_MODE === 'GITHUB') {
      const res = await githubApi.user.getUserInfo();
      this.setState({
        nickname: res.name,
        avatar: res.avatar_url,
        bio: res.bio,
      });
    } else {
      this.setState({ nickname: NIKENAME, avatar: AVATAR, bio: BIO });
    }
  }

  render() {
    const { nickname, avatar, bio } = this.state;
    return <Aside nickname={nickname} avatar={avatar} bio={bio} />;
  }
}

class HomePage extends Component {
  render() {
    return (
      <FullScreenContainer>
        <SiteTitle>首页</SiteTitle>
        <AsideHoc />
        <Footer>© 2018 nbsaw </Footer>
      </FullScreenContainer>
    );
  }
}

export default HomePage;
