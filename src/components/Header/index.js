import React from 'react'
import './Header.css'

function Header({black}){
    return(
        <header className={black?"black":""}>

            <div className="header--logo">
                <a href="https://netflix.com">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/1/15/Logonfx.png" alt="Netflix"/>
                </a>
            </div>

            <div className="header--user">
                <a href="https://netflix.com">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="user"/>
                </a>
            </div>

        </header>
    )
}

export default Header;