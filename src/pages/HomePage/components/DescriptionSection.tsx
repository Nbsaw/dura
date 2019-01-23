import React from 'react';
import Section from '../../../elements/Section';
import Description from '../../../elements/Description';
import { DescriptionSectionParmas } from '../types';

const DescriptionSection = ({ bio }: DescriptionSectionParmas) => (
  <Section>
    <Description>{bio}</Description>
  </Section>
);

export default DescriptionSection;
