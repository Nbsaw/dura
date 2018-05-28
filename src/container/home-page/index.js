import React, { Component } from 'react'
import { Container, Section } from './styled'
import Avatar from '../../components/avatar'
import SocicalList from '../../components/socical-list'
import Icon from 'antd/lib/icon'
import AvatarImg from './images/logo.png'

const socialList = [
  {
    key: 'Zhihu',
    link: 'https://www.baidu.com',
    icon: <Icon type="zhihu" />
  },
  {
    key: 'Github',
    link: 'https://github.com/Nbsaw',
    icon: <Icon type="github" />
  },
  {
    key: 'Twitter',
    link: 'https://twitter.com/nbsaw',
    icon: <Icon type="twitter" />
  },
  {
    key: 'CodePen',
    link: '',
    icon: <Icon type="codepen" />
  }
]

class HomePage extends Component {
  render () {
    return (
      <Container>
        <Section>
          <Avatar src={AvatarImg} />
        </Section>
        <Section>
          <SocicalList list={socialList} />
        </Section>
      </Container>
    )
  }
}

export default HomePage