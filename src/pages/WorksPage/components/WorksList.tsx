import React from 'react';
import { Works } from './';
import { WorksListProps } from '../types';

const WorksList = ({ works }: WorksListProps) => {
  return (
    <div>
      {works.map(({ title, desc }, idx) => (
        <Works key={idx} title={title} desc={desc} />
      ))}
    </div>
  );
};

export default WorksList;
