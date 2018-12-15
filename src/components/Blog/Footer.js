import React from 'react';
import FooterLinks from './FooterLinks';

class Footer extends React.Component {
    render() {
        return(
            <footer id="footer">
                <div className="footer-wrapper">
                    <div className="follow-me text-center">
                        <div>
                            Si quieres seguirme o contactarme, puedes hacerlo en:
                        </div>

                        <FooterLinks/>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;