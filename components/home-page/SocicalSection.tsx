import React from "react";
import Section from "../section";
import SocicalList from "../socical-list";
import { me } from "../../constant";
const { SOCICAL_LIST } = me;

const SocicalSection = () => (
  <Section>
    <SocicalList list={SOCICAL_LIST ? SOCICAL_LIST : []} />
  </Section>
);

export default SocicalSection;
