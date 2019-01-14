import React from 'react';
import Section from '../../../elements/Section';
import Avatar from '../../../elements/Avatar';
import { AvatarSectionParmas } from './types';

const AvatarSection = ({ avatar }: AvatarSectionParmas) => (
  <Section>
    <Avatar src={avatar} />
  </Section>
);

export default AvatarSection;
