import * as React from 'react';
import styled from 'styled-components';
import { timeAgo } from '../../../utils/time';
import Icon from 'antd/lib/icon';

interface TimeAgoProps {
  created_at: string;
  updated_at: string;
}

const Container = styled.div`
  margin-top: 15px;
  font-size: 14px;
  font-weight: 700;

  span > i {
    margin-right: 5px;
  }

  span + span {
    margin-left: 15px;
  }
`;

export default function TimaAgo({ created_at, updated_at }: TimeAgoProps) {
  return (
    <Container>
      <span>
        <Icon type="clock-circle" /> 创建于 : {timeAgo(created_at)}
      </span>
      <span>
        <Icon type="clock-circle" /> 更新于 : {timeAgo(updated_at)}
      </span>
    </Container>
  );
}
