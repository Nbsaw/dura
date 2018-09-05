import React, { Component } from 'react';
import { me } from 'constant';
import axios from 'axios';

import SiteTitle from 'elements/SiteTitle';
import Avatar from 'elements/Avatar';
import FullScreenContainer from 'elements/FullScreenContainer';
import Section from 'elements/Section';
import Description from 'elements/Description';
import Division from 'elements/Division';
import NikeName from 'elements/NikeName';
import Footer from 'elements/Footer';
import SocicalList from 'blocks/SocicalList';

const { NIKENAME, AVATAR, BIO, SOCICAL_LIST } = me;

const NikeNameSection = () => (
  <Section>
    <NikeName>{NIKENAME ? NIKENAME : ''}</NikeName>
  </Section>
);

const AvatarSection = () => (
  <Section>
    <Avatar src={AVATAR ? AVATAR : ''} />
  </Section>
);

const DescriptionSection = () => (
  <Section>
    <Description>{BIO ? BIO : ''}</Description>
  </Section>
);

const SocicalSection = () => (
  <Section>
    <SocicalList list={SOCICAL_LIST ? SOCICAL_LIST : []} />
  </Section>
);

class HomePage extends Component {
  componentDidMount() {
    console.log('123');
    axios.post;
  }
  render() {
    return (
      <FullScreenContainer>
        <SiteTitle>首页</SiteTitle>
        <AvatarSection />
        <NikeNameSection />
        <DescriptionSection />
        <Division />
        <SocicalSection />
        <Footer>© 2018 nbsaw </Footer>
      </FullScreenContainer>
    );
  }
}

export default HomePage;
