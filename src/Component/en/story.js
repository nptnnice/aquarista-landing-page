import React from 'react'
import ex1 from '../../assets/img/ex_maingame.png'
import ex2 from '../../assets/img/ex_fish.png'
import sea_4 from '../../assets/img/sea_4.png'
import sea_17 from '../../assets/img/sea_17.png'

export default (props) => {
    return (
        <div ref={props.storyRef}>
            <div className="line"></div>
            <div className="story">
                <div className="exgame">
                    <img src={ex1} id="ex1" />
                    <img src={ex2} id="ex2" />
                </div>
                <div className="text">
                    <h3>WELCOME</h3>
                    <h1>AQUARISTA</h1>
                    <p>
                        <span>AQUARISTA</span> is a fish tank simulator game
                        under concept{' '}
                        <span className="highlight">Play-Relax-Earn</span> based
                        on one of the most popular video games of the 2000s.
                        <br></br>
                        <br></br> <span>AQUARISTA</span> is a blockchain-based
                        game on Binance Smart chain. Our game is suitable for
                        people of all ages and genders. The goal of the game is
                        to feed your fish, keeping them alive in the realm while{' '}
                        <span className="highlight">
                            protecting them from alien invasions
                        </span>
                        , and they will reward you with in-game tokens.
                    </p>
                </div>
                <img src={sea_4} className="sea4" />
                <img src={sea_17} className="sea17" />
            </div>
            <div className="line"></div>
        </div>
    )
}
