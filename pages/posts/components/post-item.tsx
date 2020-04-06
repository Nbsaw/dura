// the post item to render posts list
import removeMd from "remove-markdown";
import PostTitle from "../../../components/post-title";
import Link from "next/link";
import LabelTitle from "../../../components/label-title";
import style from "./index.module.scss";

export default function PostItem(props) {
  const { created_at, title, number, body, img, ...args } = props;
  const plainText = removeMd(body);
  return (
    <div className={style.block} key={number}>
      <div className={style.block_text}>
        <div className={style.block_header}>
          <PostTitle number={number} title={title} />
          <div className={style.post_at}>{created_at?.substr(0, 10)}</div>
          {args?.labels?.map((item) => (
            <div
              className={style.block_label_title}
              key={`${number}-${item.id}`}
            >
              <LabelTitle name={item.name} color={`#${item.color}`} />
            </div>
          ))}
        </div>
        <p className={style.block_content}>{`${plainText.substr(
          0,
          120
        )} ...`}</p>
      </div>
      <div
        className={style.block_image}
        style={{ backgroundImage: `url(${img})` }}
      />
      <Link href={`post/${number}`}>
        <a className={style.block_read_more}>Read More ...</a>
      </Link>
    </div>
  );
}
