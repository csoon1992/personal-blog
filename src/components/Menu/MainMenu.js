import React from 'react'
import MenuLink from './MenuLink'
import {Link} from 'gatsby'

function MainMenu() {
    return (
        <div id="menu-items" className="flex justify-between items-center">
            <div>
                <Link to="/" active="false" className="font-black text-2xl">
                    <span>Cristina</span>
                    <span className="text-primary">Soler</span>
                </Link>
            </div>

            <div className="space-x-6">
                <MenuLink to="/#about" title="Sobre mí" active="false" anchor="true" />
                <MenuLink to="/#portfolio" title="Portfolio" active="false" anchor="true" />
                <MenuLink to="/#references" title="Referencias" active="false" anchor="true" />
                <MenuLink to="/#referents" title="Referentes" active="false" anchor="true" />
                <MenuLink to="/blog" title="Blog" active="false" />
            </div>

            <div>Botón menu</div>
            
        </div>
    )
}

export default MainMenu;