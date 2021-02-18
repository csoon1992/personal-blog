import React from 'react'
import Menu from './MainMenu'

function StickyMenu() {
    return (
        <div className="menu sticky top-0 z-10 py-4 bg-white">
            <div className="container mx-auto">
                <Menu/>
            </div>
        </div>
    )
}

export default StickyMenu;