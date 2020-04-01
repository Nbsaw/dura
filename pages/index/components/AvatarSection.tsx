import React from "react";
import Section from "../../../components/section";
import Avatar from "../../../components/avatar";
import { AvatarSectionParmas } from "./types";

const AvatarSection = ({ avatar }: AvatarSectionParmas) => (
  <Section>
    <Avatar src={avatar} />
  </Section>
);

export default AvatarSection;
