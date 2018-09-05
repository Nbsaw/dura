import React from 'react';
import styled from 'styled-components';
import { me } from 'constant';
import Row from 'antd/lib/row';

import NikeName from 'elements/NikeName';
import Avatar from 'elements/Avatar';
import Description from 'elements/Description';
import Section from 'elements/Section';
import Division from 'elements/Division';
import SocicalList from 'blocks/SocicalList';

const { NIKENAME, AVATAR, BIO, SOCICAL_LIST } = me;

const Container = styled(Row)`
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

const Aside = () => (
  <Container type="flex" justify="center" align="middle">
    <AvatarSection />
    <NikeNameSection />
    <DescriptionSection />
    <Division />
    <SocicalSection />
  </Container>
);

export default Aside;
