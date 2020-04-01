import * as React from "react";
import { timeAgo } from "../../utils/time";
import { ClockCircleFilled } from "@ant-design/icons";
import style from "./index.module.scss";

interface TimeAgoProps {
  created_at: string;
  updated_at: string;
}

export default function TimaAgo({ created_at, updated_at }: TimeAgoProps) {
  return (
    <div className={style.timeago}>
      <span>
        <ClockCircleFilled /> 创建于 : {timeAgo(created_at)}
      </span>
      <span>
        <ClockCircleFilled /> 更新于 : {timeAgo(updated_at)}
      </span>
    </div>
  );
}
