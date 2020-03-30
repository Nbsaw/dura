import React from "react";
import Section from "../section";
import Avatar from "../avatar";
import { AvatarSectionParmas } from "./types";

const AvatarSection = ({ avatar }: AvatarSectionParmas) => (
  <Section>
    <Avatar src={avatar} />
  </Section>
);

export default AvatarSection;
