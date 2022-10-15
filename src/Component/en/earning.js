import treasure from '../../assets/img/treasure.png'
import sea_4 from '../../assets/img/sea_4.png'
import sea_17 from '../../assets/img/sea_17.png'
import token from '../../assets/img/token.png'
import starfish from '../../assets/img/starfish.png'

export default () => {
    return (
        <div>
            <div className="line"></div>
            <div className="earning">
                <h1>EARNING</h1>
                <div className="earn-flex">
                    <div className="left">
                        <img src={treasure} className="treasure" />
                        <img src={token} className="token" />
                    </div>
                    <div className="right">
                        <div className="list">
                            <img src={starfish} className="starfish" />
                            <p>
                                From the coins that are dropped by your fish in the
                                realm
                            </p>
                        </div>
                        <div className="list">
                            <img src={starfish} className="starfish" />
                            <p>Participating in competitions event</p>
                        </div>
                        <div className="list">
                            <img src={starfish} className="starfish" />
                            <p>Community events</p>
                        </div>
                        <div className="list">
                            <img src={starfish} className="starfish" />
                            <p>Community airdrop</p>
                        </div>
                        <div className="list">
                            <img src={starfish} className="starfish" />
                            <p>Reward from arcade mode and treasure mode</p>
                        </div>
                        <div className="list">
                            <img src={starfish} className="starfish" />
                            <p>Selling fish and items in marketplace (Coming soon)</p>
                        </div>
                    </div>
                </div>
                <img src={sea_4} className="sea4" />
                <img src={sea_17} className="sea17" />
            </div>
            {/* <div className="line"></div> */}
        </div>
    )
}
