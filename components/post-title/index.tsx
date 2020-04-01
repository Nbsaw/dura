import React from "react";
import Link from "next/link";
import style from "./index.module.scss";

interface PostTitleProps {
  number: string;
  title: string;
}

const PostTitle = ({ number, title }: PostTitleProps) => (
  <p className={style.post_title}>
    <Link href={`post/${number}`}>
      <a>{title}</a>
    </Link>
  </p>
);

export default PostTitle;
