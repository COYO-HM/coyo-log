import { FaEnvelope, FaGithub } from "react-icons/fa";
import metadata from "@config/index";

import ProfileIcon from "@icons/profile.svg";

const Footer = () => {
  return (
    <footer
      className={`flex flex-col items-center pb-7 text-neutral-700 dark:text-neutral-500`}
    >
      <div className={"flex justify-center mb-2 gap-4"}>
        <a
          href="https://github.com/coyo-hm"
          target={"_blank"}
          rel="noreferrer"
          className={`hover:text-blue-700`}
        >
          <FaGithub size={24} />
        </a>
        <a href="mailto:bsydwp@gmail.com" className={`hover:text-blue-700`}>
          <FaEnvelope size={24} />
        </a>
        <a
          href="https://bouts.vercel.app/"
          target={"_blank"}
          rel="noreferrer"
          className={`hover:text-blue-700`}
        >
          <ProfileIcon height={24} width={"auto"} />
        </a>
      </div>
      <div className={`col-span-2 font-extralight`}>{metadata.copyright}</div>
    </footer>
  );
};

export default Footer;
