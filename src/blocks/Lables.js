import React from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';

const LabelTitle = ({ name, color }) => (
  <h3 style={{ marginBottom: '16px' }}>
    <span
      style={{
        display: 'inline-block',
        background: color,
        color: '#FFFFFF',
        fontSize: 13,
        padding: '2px 12px',
        fontWeight: 700,
      }}
    >
      {name}
    </span>
  </h3>
);

const PostTitle = ({ number, title }) => (
  <p style={{ fontSize: '15px' }}>
    <Link to={`post/${number}`}>{title}</Link>
  </p>
);

const Lables = ({ labels }: { labels: [] }) =>
  _.map(
    labels,
    ({ items, color }, name) =>
      name !== 'WIP' ? (
        <div key={name} style={{ marginBottom: '16px' }}>
          <LabelTitle name={name} color={color} />
          {items.map((post, idx) => <PostTitle key={idx} {...post} />)}
        </div>
      ) : (
        []
      )
  );

export default Lables;
