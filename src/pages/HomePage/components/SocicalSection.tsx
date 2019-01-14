import React from 'react';
import { me } from '../../../constant';
import Section from '../../../elements/Section';
import SocicalList from '../../../blocks/SocicalList';
const { SOCICAL_LIST } = me;

const SocicalSection = () => (
  <Section>
    <SocicalList list={SOCICAL_LIST ? SOCICAL_LIST : []} />
  </Section>
);

export default SocicalSection;
