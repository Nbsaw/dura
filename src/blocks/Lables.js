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
        padding: '0px 12px',
        borderRadius: 5,
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
          {items.map((post, idx) => (
            <PostTitle key={idx} {...post} />
          ))}
        </div>
      ) : (
        []
      )
  );

export default Lables;
