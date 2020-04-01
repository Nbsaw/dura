import React from "react";
import Section from "../../../components/section";
import NikeName from "../../../components/nikeName";
import { NikeNameSectionParmas } from "./types";

const NikeNameSection = ({ nickname }: NikeNameSectionParmas) => (
  <Section>
    <NikeName>{nickname}</NikeName>
  </Section>
);

export default NikeNameSection;
