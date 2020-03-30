import React from "react";
import Section from "../section";
import Description from "../description";
import { DescriptionSectionParmas } from "./types";

const DescriptionSection = ({ bio }: DescriptionSectionParmas) => (
  <Section>
    <Description>{bio}</Description>
  </Section>
);

export default DescriptionSection;
