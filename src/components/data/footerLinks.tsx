import { CgWebsite } from "react-icons/cg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const iconSize = 20;
export const links = [
  {
    name: "portfolio",
    href: "https://wissemjderi.vercel.app/",
    icon: <CgWebsite size={iconSize} />,
  },
  {
    name: "github",
    href: "https://github.com/WissemJderi",
    icon: <FaGithub size={iconSize} />,
  },
  {
    name: "linkedin",
    href: "https://www.linkedin.com/in/wissem-jderi-a15765386/",
    icon: <FaLinkedin size={iconSize} />,
  },
  {
    name: "email",
    href: "mailto:wissemjderi@outlook.com",
    icon: <MdEmail size={iconSize} />,
  },
];
