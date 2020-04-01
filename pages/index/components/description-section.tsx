import React from "react";
import Section from "../../../components/section";
import Description from "../../../components/description";

interface DescriptionSectionParmas {
  bio: string;
}

const DescriptionSection = ({ bio }: DescriptionSectionParmas) => (
  <Section>
    <Description>{bio}</Description>
  </Section>
);

export default DescriptionSection;
