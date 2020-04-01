import React from "react";
import { githubApi } from "../../services";
import SiteTitle from "../../components/site-title";
import PostItem from "./components/PostItem";
import { getPixivList } from "../../services/pixiv";
import style from "./index.module.scss";

// post page props
interface PPostPage {
  resultList: any;
}

const PostsPage = (props: PPostPage) => {
  return (
    <div className={style.container}>
      <SiteTitle>Blog</SiteTitle>
      {props.resultList.map((props, idx) => (
        <PostItem key={idx} {...props} />
      ))}
    </div>
  );
};

PostsPage.getInitialProps = async () => {
  const resultList: any = await githubApi.issues.getAll();
  const pixivList = await getPixivList();
  resultList.forEach(
    (_: string, idx: number) => (resultList[idx].img = pixivList[idx])
  );
  if (resultList.length > 50) {
    for (let idx = 50; idx < resultList.length; idx++)
      resultList[idx].img = `https://picsum.photos/500/300?number=${idx}`;
  }
  return { resultList };
};

export default PostsPage;
