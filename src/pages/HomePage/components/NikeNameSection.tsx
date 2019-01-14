import React from 'react';
import Section from '../../../elements/Section';
import NikeName from '../../../elements/NikeName';
import { NikeNameSectionParmas } from './types';

const NikeNameSection = ({ nickname }: NikeNameSectionParmas) => (
  <Section>
    <NikeName>{nickname}</NikeName>
  </Section>
);

export default NikeNameSection;
