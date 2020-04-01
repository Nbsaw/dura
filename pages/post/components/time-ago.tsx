import * as React from "react";
import { timeAgo } from "../../../utils/time";
import { ClockCircleFilled, ClockCircleOutlined } from "@ant-design/icons";
import style from "./index.module.scss";

interface TimeAgoProps {
  created_at: string;
  updated_at: string;
}

export default function TimeAgo({ created_at, updated_at }: TimeAgoProps) {
  return (
    <div className={style.timeago}>
      <span>
        <ClockCircleOutlined /> 创建于 : {timeAgo(created_at)}&nbsp;&nbsp;更新于
        : {timeAgo(updated_at)}
      </span>
    </div>
  );
}
