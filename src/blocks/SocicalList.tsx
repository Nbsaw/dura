import React from 'react';
import styled from 'styled-components';
import A from '../elements/A';

import { PSocicalList } from './types';

const Navigation = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  min-width: 280px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  li {
    display: inline-block;
    list-style: none;
    margin: 0 5px;
  }
`;

const SocicalList = ({ list }: PSocicalList) => (
  <Navigation>
    {list.map((item, idx) => {
      return (
        <li key={idx}>
          <A href={item.link}>{item.key}</A>
        </li>
      );
    })}
  </Navigation>
);

export default SocicalList;
