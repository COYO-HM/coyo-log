import Link from "next/link";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import getHeaders from "@utils/getHeaders";

const TableOfContents = ({ content }: { content: string }) => {
  const headers = getHeaders(content);
  const activeHeader = "";

  const onClickUp = () => {
    window.scrollTo(0, 0);
  };

  const onClickDownButton = () => {
    console.log(window.outerHeight, document.body.scrollHeight);
    document.body.scrollTop = document.body.scrollHeight;
    window.scrollTo(0, document.body.scrollHeight);
    // const contentWrapperRef = document.getElementById("contentWrapper");
    // if (contentWrapperRef) {
    //   contentWrapperRef.scrollTo(0, window.scrollHeight);
    // }
  };

  return (
    <div
      className={`shrink-0 h-screen sticky flex flex-col flex-nowrap justify-center items-center top-0`}
      id={"toc"}
    >
      <button onClick={onClickUp} className={`hover:text-blue-700`}>
        <FaChevronUp size={32} />
      </button>
      <div className={`grid gap-1.5 py-1 border-l border-l-blue-700 my-4`}>
        {headers.map(({ title, count }) => {
          console.log(title, count);
          return (
            <Link
              key={title}
              href={`#${title.replace(/[^ㄱ-ㅎ|ㅏ-ㅣ|가-힣\w$-+]/gi, "")}`}
              className={`hover:text-blue-700 ${
                activeHeader === title ? "bg-blue-100" : ""
              } header-${count}`}
            >
              {title}
            </Link>
          );
        })}
      </div>
      <button onClick={onClickDownButton}>
        <FaChevronDown size={32} className={`hover:text-blue-700`} />
      </button>
    </div>
  );
};

export default TableOfContents;
