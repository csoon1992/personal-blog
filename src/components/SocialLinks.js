import React from "react";
import Link from "next/link";

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
    let iconStyles = { color: "white", fontSize: "1.5em" };

    return (
      <>
        <ul className="flex flex-row align-items-center space-x-3">
          <li className="border border-primary rounded-full transition ease-in duration-500 bg-transparent hover:bg-primary">
            <Link
              href="https://www.linkedin.com/in/csoon1992/"
              title="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="w-2"
            >
              <a className="block p-3">
                <IconContext.Provider
                  value={{ size: "24px" }}
                  style={iconStyles}
                >
                  <FaLinkedinIn size={24} />
                </IconContext.Provider>
              </a>
            </Link>
          </li>
          <li className="border border-primary rounded-full transition ease-in duration-500 bg-transparent hover:bg-primary">
            <Link
              href="https://github.com/csoon1992"
              title="Github"
              target="_blank"
              rel="noopener noreferrer"
              className="w-2"
            >
              <a className="block p-3">
                <IconContext.Provider
                  value={{ size: "24px" }}
                  style={iconStyles}
                >
                  <FaGithubAlt size={24} />
                </IconContext.Provider>
              </a>
            </Link>
          </li>
          <li className="border border-primary rounded-full transition ease-in duration-500 bg-transparent hover:bg-primary">
            <Link
              href="https://gitlab.com/csoon1992"
              title="Gitlab"
              target="_blank"
              rel="noopener noreferrer"
              className="w-2"
            >
              <a className="block p-3">
                <IconContext.Provider
                  value={{ size: "24px" }}
                  style={iconStyles}
                >
                  <FaGitlab size={24} />
                </IconContext.Provider>
              </a>
            </Link>
          </li>
          <li className="border border-primary rounded-full transition ease-in duration-500 bg-transparent hover:bg-primary">
            <Link
              href="https://twitter.com/cso1992"
              title="Twitter"
              target="_blank"
              rel="noopener noreferrer"
              className="w-2"
            >
              <a className="block p-3">
                <IconContext.Provider
                  value={{ size: "24px" }}
                  style={iconStyles}
                >
                  <FaTwitter size={24} />
                </IconContext.Provider>
              </a>
            </Link>
          </li>
          <li className="border border-primary rounded-full transition ease-in duration-500 bg-transparent hover:bg-primary">
            <Link
              href="https://www.facebook.com/cso1992"
              title="Facebook"
              target="_blank"
              rel="noopener noreferrer"
              className="w-2"
            >
              <a className="block p-3">
                <IconContext.Provider
                  value={{ size: "24px" }}
                  style={iconStyles}
                >
                  <FaFacebookF size={24} />
                </IconContext.Provider>
              </a>
            </Link>
          </li>
        </ul>
      </>
    );
  }
}

export default SocialLinks;
