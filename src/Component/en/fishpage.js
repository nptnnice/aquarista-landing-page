import button from '../../assets/img/button.png'
import bg from '../../assets/img/mainbg.png'
import bubble from '../../assets/img/bubble.png'
import clownfish from '../../assets/img/fish/clownfish.png'
import goldfish from '../../assets/img/fish/goldfish.png'
import yellowtang from '../../assets/img/fish/yellowtang.png'
import zebrafish from '../../assets/img/fish/zebrafish.png'
import bluetang from '../../assets/img/fish/bluetang.png'
import betta from '../../assets/img/fish/betta.png'
import fancycrap from '../../assets/img/fish/fancycrap.png'
import puffer from '../../assets/img/fish/puffer.png'
import whiteshark from '../../assets/img/fish/whiteshark.png'
import triggerfish from '../../assets/img/fish/triggerfish.png'
import sailfish from '../../assets/img/fish/sailfish.png'
import lionfish from '../../assets/img/fish/lionfish.png'
import flyingfish from '../../assets/img/fish/flyingfish.png'
import dolphin from '../../assets/img/fish/dolphin.png'
import angler from '../../assets/img/fish/sailfish.png'
import sunfish from '../../assets/img/fish/sunfish.png'
import bluewhale from '../../assets/img/fish/bluewhale.png'
import narwhal from '../../assets/img/fish/narwhal.png'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

export default () => {
    return (
        <div className="fishpage">
            <img src={bg} className="bg" />
            <div className="fish-flex center">
                <Carousel
                    autoPlay={true}
                    swipeable={true}
                    infiniteLoop={true}
                    interval={5000}
                    emulateTouch={true}
                    showStatus={false}
                >
                    <div className="container">
                        <div className="fish-type">
                            <img src={button} className="button" />
                            <h2 className="center">COMMON</h2>
                        </div>
                        <div className="top">
                            <div className="fish">
                                <img src={bubble} className="bubble" />
                                <img src={clownfish} className="img" />
                                <h3>Clownfish</h3>
                            </div>
                            <div className="fish">
                                <img src={bubble} className="bubble" />
                                <img src={goldfish} className="img" />
                                <h3>Goldfish</h3>
                            </div>
                        </div>
                        <div className="bottom">
                            <div className="fish">
                                <img src={bubble} className="bubble" />
                                <p>Coming soon</p>
                                <h3>Angel fish</h3>
                            </div>
                            <div className="fish">
                                <img src={bubble} className="bubble" />
                                <img src={yellowtang} className="img" />
                                <h3>Yellow tang</h3>
                            </div>
                            <div className="fish">
                                <img src={bubble} className="bubble" />
                                <img src={zebrafish} className="img" />
                                <h3>Zebra zebrafish</h3>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="fish-type">
                            <img src={button} className="button" />
                            <h2 className="center">UNCOMMON</h2>
                        </div>
                        <div className="top">
                            <div className="fish">
                                <img src={bubble} className="bubble" />
                                <img src={bluetang} className="img" />
                                <h3>Blue tang</h3>
                            </div>
                            <div className="fish">
                                <img src={bubble} className="bubble" />
                                <img src={betta} className="img" />
                                <h3>Betta fish</h3>
                            </div>
                        </div>
                        <div className="bottom">
                            <div className="fish">
                                <img src={bubble} className="bubble" />
                                <img src={fancycrap} className="img" />
                                <h3>Fancy crap</h3>
                            </div>
                            <div className="fish">
                                <img src={bubble} className="bubble" />
                                <img src={puffer} className="img" />
                                <h3>Pufferfish</h3>
                            </div>
                            <div className="fish">
                                <img src={bubble} className="bubble" />
                                <p>Coming soon</p>
                                <h3>Royal gramma</h3>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="fish-type">
                            <img src={button} className="button" />
                            <h2 className="center">RARE</h2>
                        </div>
                        <div className="top">
                            <div className="fish">
                                <img src={bubble} className="bubble" />
                                <img src={whiteshark} className="img" />
                                <h3>White shark</h3>
                            </div>
                            <div className="fish">
                                <img src={bubble} className="bubble" />
                                <p>Coming soon</p>
                                <h3>Hammerhead shark</h3>
                            </div>
                        </div>
                        <div className="bottom">
                            <div className="fish">
                                <img src={bubble} className="bubble" />
                                <img src={triggerfish} className="img" />
                                <h3>Triggerfish</h3>
                            </div>
                            <div className="fish">
                                <img src={bubble} className="bubble" />
                                <p>Coming soon</p>
                                <h3>Angel fish</h3>
                            </div>
                            <div className="fish">
                                <img src={bubble} className="bubble" />
                                <img src={sailfish} className="img" />
                                <h3>Sailfish</h3>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="fish-type">
                            <img src={button} className="button" />
                            <h2 className="center">EPIC</h2>
                        </div>
                        <div className="top">
                            <div className="fish">
                                <img src={bubble} className="bubble" />
                                <img src={lionfish} className="img" />
                                <h3>Red lionfish</h3>
                            </div>
                            <div className="fish">
                                <img src={bubble} className="bubble" />
                                <p>Coming soon</p>
                                <h3>Cardinalfish</h3>
                            </div>
                        </div>
                        <div className="bottom">
                            <div className="fish">
                                <img src={bubble} className="bubble" />
                                <img src={flyingfish} className="img" />
                                <h3>Flyingfish</h3>
                            </div>
                            <div className="fish">
                                <img src={bubble} className="bubble" />
                                <p>Coming soon</p>
                                <h3>Mandarinfish</h3>
                            </div>
                            <div className="fish">
                                <img src={bubble} className="bubble" />
                                <img src={dolphin} className="img" />
                                <h3>Pink dolphin</h3>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="fish-type">
                            <img src={button} className="button" />
                            <h2 className="center">Legendary</h2>
                        </div>
                        <div className="top">
                            <div className="fish">
                                <img src={bubble} className="bubble" />
                                <img src={angler} className="img" />
                                <h3>Angler fish</h3>
                            </div>
                            <div className="fish">
                                <img src={bubble} className="bubble" />
                                <img src={sunfish} className="img" />
                                <h3>Sunfish</h3>
                            </div>
                        </div>
                        <div className="bottom">
                            <div className="fish">
                                <img src={bubble} className="bubble" />
                                <img src={bluewhale} className="img" />
                                <h3>Blue whale</h3>
                            </div>
                            <div className="fish">
                                <img src={bubble} className="bubble" />
                                <img src={narwhal} className="img" />
                                <h3>Narwhal</h3>
                            </div>
                            <div className="fish">
                                <img src={bubble} className="bubble" />
                                <p>Coming soon</p>
                                <h3>Axolotl</h3>
                            </div>
                        </div>
                    </div>
                </Carousel>
            </div>
            <h2 className="center">
                The higher the rarity of the fish,<br></br>the more tokens will be
                generated!
            </h2>
        </div>
    )
}
