import React, { useState } from 'react'
import { Link } from 'react-scroll'
import logo from '../../assets/img/logo.png'
import close from '../../assets/img/close.png'
import { setActiveLink } from 'react-scroll/modules/mixins/scroller'

export default (props) => {
    const [sidebar, setSidebar] = useState(false)
    const closeMenu = () => setSidebar(false)

    return (
        <>
            <div className={'nav-mobile' + (sidebar ? ' show' : '')}>
                <img src={close} onClick={() => setSidebar(false)} />
                <div className="menu-mobile">
                    <li>
                        <Link
                            to="story"
                            spy={true}
                            smooth={true}
                            offset={-64}
                            duration={500}
                            onClick={closeMenu}
                        >
                            ABOUT
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="feature"
                            spy={true}
                            smooth={true}
                            offset={-64}
                            duration={500}
                            onClick={closeMenu}
                        >
                            FEATURES
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="gameplay"
                            spy={true}
                            smooth={true}
                            offset={-64}
                            duration={500}
                            onClick={closeMenu}
                        >
                            GAME PLAY
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="fishpage"
                            spy={true}
                            smooth={true}
                            offset={-72}
                            duration={500}
                            onClick={closeMenu}
                        >
                            ITEMS
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="earning"
                            spy={true}
                            smooth={true}
                            offset={-72}
                            duration={500}
                            onClick={closeMenu}
                        >
                            EARNING
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="tokenomics"
                            spy={true}
                            smooth={true}
                            offset={-64}
                            duration={500}
                            onClick={closeMenu}
                        >
                            TOKENOMICS
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="roadmap"
                            spy={true}
                            smooth={true}
                            offset={-64}
                            duration={500}
                            onClick={closeMenu}
                        >
                            ROADMAP
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="team"
                            spy={true}
                            smooth={true}
                            offset={-64}
                            duration={500}
                            onClick={closeMenu}
                        >
                            TEAM
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="partners"
                            spy={true}
                            smooth={true}
                            offset={-64}
                            duration={500}
                            onClick={closeMenu}
                        >
                            PARTNER
                        </Link>
                    </li>
                </div>
            </div>
            <nav className="nav">
                <img
                    src={logo}
                    onClick={() => {
                        window.scrollTo({
                            top: 0,
                            left: 0,
                            behavior: 'smooth',
                        })
                        setSidebar(false)
                    }}
                />
                <div className="menu">
                    <li>
                        <Link
                            to="story"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                            onClick={closeMenu}
                        >
                            ABOUT
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="feature"
                            spy={true}
                            smooth={true}
                            offset={-64}
                            duration={500}
                            onClick={closeMenu}
                        >
                            FEATURES
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="gameplay"
                            spy={true}
                            smooth={true}
                            offset={-64}
                            duration={500}
                            onClick={closeMenu}
                        >
                            GAME PLAY
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="fishpage"
                            spy={true}
                            smooth={true}
                            offset={-64}
                            duration={500}
                            onClick={closeMenu}
                        >
                            ITEMS
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="earning"
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={500}
                            onClick={closeMenu}
                        >
                            EARNING
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="tokenomics"
                            spy={true}
                            smooth={true}
                            offset={-64}
                            duration={500}
                            onClick={closeMenu}
                        >
                            TOKENOMICS
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="roadmap"
                            spy={true}
                            smooth={true}
                            offset={-64}
                            duration={500}
                            onClick={closeMenu}
                        >
                            ROADMAP
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="team"
                            spy={true}
                            smooth={true}
                            offset={-40}
                            duration={500}
                            onClick={closeMenu}
                        >
                            TEAM
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="partners"
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={500}
                            onClick={closeMenu}
                        >
                            PARTNER
                        </Link>
                    </li>
                </div>
                <div
                    className="nav-burger"
                    onClick={() => {
                        setSidebar(true)
                    }}
                >
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </nav>
        </>
    )
}
