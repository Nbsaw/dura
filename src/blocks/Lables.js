// @flow
import React from 'react'
import { Link } from 'react-router-dom'
import _ from 'lodash'

type LableTitleParams = { name: string, color: string }
type PostTitleParams = { number: number, title: string}

const LabelTitle = ({ name, color } : LableTitleParams) => (
  <h3 style={{ marginBottom: '16px' }}>
    <span style={{ display: 'inline-block', background: color, color: '#FFFFFF', padding: '0px 12px', borderRadius: 5 }}>{ name }</span>
  </h3>
)

const PostTitle = ({ number, title } : PostTitleParams) => (
  <p style={{ fontSize: '15px' }}>
    <Link to={`post/${number}`}>
      { title }
    </Link>
  </p>
)

const Lables = ({ labels }) => _.map(labels, ({ items, color }, name) => (
  <div key={name} style={{ marginBottom: '16px' }}>
    <LabelTitle name={name} color={color} />
    {
      items.map((post, idx) => (<PostTitle key={idx} {...post} />))
    }
  </div>
))

export default Lables