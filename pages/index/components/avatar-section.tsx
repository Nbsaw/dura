import React from "react";
import Section from "../../../components/section";
import Avatar from "../../../components/avatar";

interface AvatarSectionParmas {
  avatar: string;
}

const AvatarSection = ({ avatar }: AvatarSectionParmas) => (
  <Section>
    <Avatar src={avatar} />
  </Section>
);

export default AvatarSection;
