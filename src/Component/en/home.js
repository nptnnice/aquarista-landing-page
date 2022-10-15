import React from 'react'
import logo from '../../assets/img/logo.png'
import bg from '../../assets/img/mainbg.png'
import btn from '../../assets/img/button.png'

export default () => {
    let link = 'https://www.aquarista.io/'

    return (
        <div className="home">
            <img src={bg} alt="background" className="bg" />
            <div className="home-flex center">
                <div>
                    <img src={logo} className="logo" />
                </div>
                <div className="flex">
                    <h1>PLAY-PROTECT-EARN</h1>
                    <h3><span>AQUARISTA</span> the next generation of fish simulation</h3>
                    <a href={link}>
                        <img src={btn} className="btn"/>
                        <h2>Play game</h2>
                    </a>
                </div>
            </div>
        </div>
    )
}
