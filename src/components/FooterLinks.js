import React from "react";
import Link from "next/link;

// Icons
import { IconContext } from "react-icons";
import {
  FaGithubAlt,
  FaLinkedin,
  FaGitlab,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";

class FooterLinks extends React.Component {
  render() {
    return (
      <div className="networks py-2 flex space-x-6">
        <Link
          href="https://www.linkedin.com/in/csoon1992/"
          title="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <a>
          <IconContext.Provider value={{ size: "34px" }}>
            <FaLinkedin />
            </IconContext.Provider>
            </a>
        </Link>

        <Link
          href="https://github.com/csoon1992"
          title="Github"
          target="_blank"
          rel="noopener noreferrer"
        >
         <a> <IconContext.Provider value={{ size: "34px" }}>
            <FaGithubAlt />
          </IconContext.Provider></a>
        </Link>

        <Link
          href="https://gitlab.com/csoon1992"
          title="Gitlab"
          target="_blank"
          rel="noopener noreferrer"
        >
         <a> <IconContext.Provider value={{ size: "34px" }}>
            <FaGitlab />
          </IconContext.Provider></a>
        </Link>

        <Link
          href="https://twitter.com/cso1992"
          title="Twitter"
          target="_blank"
          rel="noopener noreferrer"
        >
         <a> <IconContext.Provider value={{ size: "34px" }}>
            <FaTwitter />
          </IconContext.Provider></a>
        </Link>

        <Link
          href="https://www.facebook.com/cso1992"
          title="Facebook"
          target="_blank"
          rel="noopener noreferrer"
        >
         <a> <IconContext.Provider value={{ size: "34px" }}>
            <FaFacebook />
          </IconContext.Provider></a>
        </Link>
      </div>
    );
  }
}

export default FooterLinks;
