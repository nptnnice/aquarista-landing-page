import bg from '../../assets/img/bg2.png'
import popup from '../../assets/img/popup_02.png'
import sea_12 from '../../assets/img/sea_12.png'

export default () => {
    return (
        <div className="feature">
            <img src={bg} alt="background" className="bg" />
            <h1 className="center">FEATURES</h1>
            <div className="feature-flex center">
                <div className="left">
                    <img src={popup} />
                    <p className="center">
                        Feeding and protect all the magical aquatic creatures
                        from the malevolent Aliens. If you believe you have what
                        it takes to protect Aquarista’s creatures and battle off
                        those terrible Aliens, come and join the fight to retire
                        peace to Aquarista and get reward.
                    </p>
                </div>
                <div className="right">
                    <div className="li move">
                        <img src={sea_12} />
                        Play Relax Earn
                    </div>
                    <div className="li">
                        <img src={sea_12} />
                        Feeding fish
                    </div>
                    <div className="li move">
                        <img src={sea_12} />
                        Decorating aquarium
                    </div>
                    <div className="li">
                        <img src={sea_12} />
                        Combating aliens
                    </div>
                    <div className="li move">
                        <img src={sea_12} />
                        Collect token
                    </div>
                    <div className="li">
                        <img src={sea_12} />
                        Arcade and treasure mode (Coming soon)
                    </div>
                </div>
            </div>
        </div>
    )
}
