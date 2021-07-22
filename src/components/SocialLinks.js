import React from "react";
import Link from "next/link";
import IconLink from "./IconLink";

// Icons
import { IconContext } from "react-icons";
import {
  FaGithubAlt,
  FaLinkedinIn,
  FaGitlab,
  FaTwitter,
  FaFacebookF,
} from "react-icons/fa";

class SocialLinks extends React.Component {
  render() {
    let itemStyles =
      "border-2 border-primary rounded-full transition ease-in duration-400 bg-transparent hover:bg-primary";

    return (
      <>
        <ul className="flex flex-row justify-center lg:justify-start align-items-center space-x-3">
          <li className={itemStyles}>
            <IconLink
              url="https://www.linkedin.com/in/csoon1992/"
              title="LinkedIn"
              className="w-2"
              icon={<FaLinkedinIn size={24} />}
            />
          </li>

          <li className={itemStyles}>
            <IconLink
              url="https://github.com/csoon1992"
              title="GitHub"
              className="w-2"
              icon={<FaGithubAlt size={24} />}
            />
          </li>

          <li className={itemStyles}>
            <IconLink
              url="https://gitlab.com/csoon1992"
              title="Gitlab"
              className="w-2"
              icon={<FaGitlab size={24} />}
            />
          </li>

          <li className={itemStyles}>
            <IconLink
              url="https://twitter.com/cso1992"
              title="Twitter"
              className="w-2"
              icon={<FaTwitter size={24} />}
            />
          </li>

          <li className={itemStyles}>
            <IconLink
              url="https://www.facebook.com/cso1992"
              title="Facebook"
              className="w-2"
              icon={<FaFacebookF size={24} />}
            />
          </li>
        </ul>
      </>
    );
  }
}

export default SocialLinks;
