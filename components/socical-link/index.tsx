// common link style
import style from "./index.module.scss";
import Link from "next/link";

// check is a relative path
const isRelativePath = path => /^(.*)s?:\/\/.*/.test(path) === false;

export default function SocicalLink({ children, href = "", ...props }) {
  return isRelativePath(href) ? (
    <Link href={href}>
      <a className={style.link} {...props}>
        {children}
      </a>
    </Link>
  ) : (
    <a href={href} className={style.link} {...props} target="_blank">
      {children}
    </a>
  );
}
