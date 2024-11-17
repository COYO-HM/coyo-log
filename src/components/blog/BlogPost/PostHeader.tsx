import { CiCalendar } from "react-icons/ci";

import getDate from "@utils/getDate";
import { PostAttributeType } from "@models/post";
import CATEGORY from "@constants/category";
import Link from "next/link";

type PostHeaderPropsType = Pick<PostAttributeType, "title" | "date">;

const PostHeader = ({ title, date }: PostHeaderPropsType) => {
  const { dateStr } = getDate(date);
  return (
    <header className={`pt-28 pb-4 text-center`}>
      <Link href={CATEGORY.post.link} className={`category-title`}>
        {CATEGORY.post.label}
      </Link>
      <h1 className={`post-series-title mx-10`}>{title}</h1>
      <p
        className={`text-sm text-neutral-500 mt-10 font-light flex items-center gap-1`}
      >
        <CiCalendar size={20} />
        {dateStr}
      </p>
    </header>
  );
};

export default PostHeader;