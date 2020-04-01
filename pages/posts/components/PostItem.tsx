import removeMd from "remove-markdown";
import PostTitle from "../../../components/post-title";
import Link from "next/link";
import LabelTitle from "../../../components/label-title";
import style from "./index.module.scss";

// the post item to render posts list
export default function PostItem(props) {
  console.log(props);
  const { updated_at, title, number, body, img, ...args } = props;
  const plainText = removeMd(body);
  return (
    <div className={style.block} key={number}>
      <div className={style.block_text}>
        <div>
          <PostTitle number={number} title={title} />
          <div className={style.post_at}>发布于 {updated_at.slice(0, 10)}</div>
          {args.labels.map((item: any, idx: number) => (
            <div
              className={style.block_label_title}
              key={`${number}-${item.id}`}
            >
              <LabelTitle
                name={item.name}
                color={`#${item.color}`}
              ></LabelTitle>
            </div>
          ))}
        </div>
        <p>{`${plainText.slice(0, 120)} ...`}</p>
      </div>
      <div>
        <div
          className={style.block_image}
          style={{ backgroundImage: `url(${img})` }}
        />
      </div>
      <Link href={`post/${number}`}>
        <a className={style.block_read_more}>Read More ...</a>
      </Link>
    </div>
  );
}
