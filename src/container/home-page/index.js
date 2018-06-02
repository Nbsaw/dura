import React, { Component } from 'react'
import { NIKENAME, AVATAR, BIO, SOCICAL_LIST } from '../../constant'
import { Avatar, Container, Section, Description, Division, NikeName, Footer } from './styled'
import SocicalList from '../../blocks/socical-list'

const NikeNameSection = () => (
  <Section>
    <NikeName>{ NIKENAME ? NIKENAME : '' }</NikeName>
  </Section>
)

const AvatarSection = () => (
  <Section>
    <Avatar src={AVATAR ? AVATAR : ''} />
  </Section>
)

const DescriptionSection = () => (
  <Section>
    <Description>
      { BIO ? BIO : '' }
    </Description>
  </Section>
)

const SocicalSection = () => (
  <Section>
    <SocicalList list={SOCICAL_LIST ? SOCICAL_LIST : []} />
  </Section>
)

class HomePage extends Component {
  render () {
    return (
      <Container>
        <AvatarSection />
        <NikeNameSection />
        <DescriptionSection />
        <Division />
        <SocicalSection />
        <Footer>© 2018 nbsaw </Footer>
      </Container>
    )
  }
}

export default HomePage