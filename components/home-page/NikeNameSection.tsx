import React from "react";
import Section from "../section";
import NikeName from "../nikeName";
import { NikeNameSectionParmas } from "./types";

const NikeNameSection = ({ nickname }: NikeNameSectionParmas) => (
  <Section>
    <NikeName>{nickname}</NikeName>
  </Section>
);

export default NikeNameSection;
