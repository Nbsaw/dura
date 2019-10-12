import React from 'react';
import { LabelTitleProps } from '../types';

const LabelTitle = ({ name, color }: LabelTitleProps) => (
  <h3 style={{ marginBottom: '16px' }}>
    <span
      style={{
        display: 'inline-block',
        background: color,
        color: '#FFFFFF',
        fontSize: 13,
        padding: '2px 12px',
        fontWeight: 700
      }}
    >
      {name}
    </span>
  </h3>
);

export default LabelTitle;
