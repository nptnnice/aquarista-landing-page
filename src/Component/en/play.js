import ex1 from '../../assets/img/ex_fish.png'
import ex2 from '../../assets/img/ex_maingame.png'
import ex3 from '../../assets/img/ex_buy.png'
import ex4 from '../../assets/img/ex_fishdetail.png'
import icon1 from '../../assets/img/bt_gasha.png'
import icon2 from '../../assets/img/bt_feed.png'
import icon3 from '../../assets/img/bt_shop.png'
import icon4 from '../../assets/img/bt_revive.png'

export default () => {
    return (
        <div>
            <div className="line"></div>
            <div className="gameplay">
                <h1>GAMEPLAY</h1>
                <div className="play-grid">
                    <div className="container">
                        <img src={ex1} className="img" />
                        <img src={icon1} className="icon" />
                        <p>
                            Obtain a fish from buying a gashapon and your fish will appear in your
                            inventory.
                        </p>
                    </div>
                    <div className="container">
                        <img src={ex2} className="img" />
                        <img src={icon2} className="icon" />
                        <p>
                            Release your fish into the realm (20 maximum). They
                            will start the game and swim to earn. Collect the
                            coins that drop from the fish.
                        </p>
                    </div>
                    <div className="container">
                        <img src={ex3} className="img" />
                        <img src={icon3} className="icon" />
                        <p>
                            You can purchase a pet, which is “Snail”, to feed
                            your fish too.
                        </p>
                    </div>
                    <div className="container">
                        <img src={ex4} className="img" />
                        <img src={icon4} className="icon" />
                        <p>
                            If your fish change their status to hungry level,
                            coins will no longer drop. If your fish are hungry
                            too long, the fish will die and you will have to
                            revive your fish.
                        </p>
                    </div>
                </div>
            </div>
            <div className="line"></div>
        </div>
    )
}
