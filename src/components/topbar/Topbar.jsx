import React from 'react'
import './topbar.scss'
import { Person, Mail } from '@material-ui/icons'

export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className='logo'>genius</a>
                    <div className="itemContainer">
                        <Person className='icon' />
                        <span>+44 808 0880</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className='icon' />
                        <span>wheelyhog@mail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line"></span>
                        <span className="line"></span>
                        <span className="line"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
