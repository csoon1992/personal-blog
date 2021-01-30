import React from 'react'
import FooterLinks from './FooterLinks';

function Footer() {
    return (
        <footer className="fixed-bottom px-4 px-sm-5 pb-2">
            <div className="contact d-flex align-items-center justify-content-center">
                <div className="made-by d-inline-block mr-4">
                    <small>Hecho por&nbsp;
                        <span className="font-weight-bold">Cristina Soler</span>
                    </small>
                </div>

                <div className="links d-inline-block">
                    <FooterLinks/>
                </div>
            </div>
        </footer>
    )
}

export default Footer;