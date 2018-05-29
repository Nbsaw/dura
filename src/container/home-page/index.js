import React, { Component } from 'react'
import { Avatar, Container, Section, Description, Division, NikeName, Footer } from './styled'
import SocicalList from '../../components/socical-list'

const socialList = [
  {
    key: 'Zhihu',
    link: 'https://www.zhihu.com/people/nbsaw',
  },
  {
    key: 'Github',
    link: 'https://github.com/Nbsaw',
  },
  {
    key: 'Twitter',
    link: 'https://twitter.com/nbsaw',
  },
  {
    key: 'CodePen',
    link: 'https://codepen.io/nbsaw'
  }
]

const NikeNameSection = () => (
  <Section>
    <NikeName>Gavin Phang</NikeName>
  </Section>
)

const AvatarSection = () => (
  <Section>
    <Avatar src="https://avatars1.githubusercontent.com/u/12481935?s=460&v=4" />
  </Section>
)

const DescriptionSection = () => (
  <Section>
    <Description>
      Gavin >> [ 'FE' , 'CS' , 'OTAKU' ]
    </Description>
  </Section>
)

const SocicalSection = () => (
  <Section>
    <SocicalList list={socialList} />
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