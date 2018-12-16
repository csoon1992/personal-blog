import React from 'react';
import CookieConsent from 'react-cookie-consent'

class MyCookieConsent extends React.Component {
    render() {
        return (
            <CookieConsent
                location="top"
                buttonText="OK"
                cookieName="cookieConsent"
                style={{ background: "rgba(1, 22, 39, .8)", fontSize: ".7rem", zIndex: "9999" }}
                contentClasses="content my-1 text-center"
                buttonStyle={{ color: "#011627", background: "#2EC4B6" }}
                buttonClasses="my-1"
                expires={150}
            >
                Estoy obligada a molestarte con este mensaje. Para seguir navegando por mi sitio, acepta las cookies utilizadas en él con el fin de mejorar la experiencia de usuario.
            </CookieConsent>
        )
    }
}

export default MyCookieConsent;


