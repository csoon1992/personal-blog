import React from 'react';

// Icons
import { IconContext } from 'react-icons';
import { FaGithubAlt, FaLinkedin, FaGitlab, FaTwitter, FaFacebook } from 'react-icons/fa';


class FooterLinks extends React.Component {
    render() {
        return(
            <div className="networks py-2">
                <a href="https://www.linkedin.com/in/csoon1992/" title="LinkedIn" className="pr-2">
                    <IconContext.Provider value={{ className: 'icon big-icon'}}>
                        <FaLinkedin />
                    </IconContext.Provider>
                </a>

                <a href="https://github.com/csoon1992" title="Github" className="pr-2">
                    <IconContext.Provider value={{ className: 'icon big-icon'}}>
                        <FaGithubAlt />
                    </IconContext.Provider>
                </a>

                <a href="https://gitlab.com/csoon1992" title="Gitlab" className="pr-2">
                    <IconContext.Provider value={{ className: 'icon big-icon'}}>
                        <FaGitlab />
                    </IconContext.Provider>
                </a>

                <a href="https://twitter.com/cso1992" title="Twitter" className="pr-2">
                    <IconContext.Provider value={{ className: 'icon big-icon'}}>
                        <FaTwitter />
                    </IconContext.Provider>
                </a>

                <a href="https://www.facebook.com/cso1992" title="Facebook">
                    <IconContext.Provider value={{ className: 'icon big-icon'}}>
                        <FaFacebook />
                    </IconContext.Provider>
                </a>
            </div>
        );
    }
}

export default FooterLinks;