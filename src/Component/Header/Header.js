import React from 'react'
import './Header.css'
import HeaderSocial from './HeaderSocial'
import External from './External'
import Typewriter from "typewriter-effect";
const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h3>Hello I'm</h3>
                <h1>Rishabh Gorakhpuriya</h1>
                <h1 className="text-light my-5"><Typewriter
                    options={{
                        strings: ["FullStack Web Developer", "Software Developer", "Nature Lover"],
                        autoStart: true,
                        loop: true,
                        delay: 50
                    }}
                /></h1>
                <External />

                <HeaderSocial />
                <a href="#contact" className="scroll__down">
                    Scroll Down
                </a>
            </div>
        </header>
    )
}

export default Header
