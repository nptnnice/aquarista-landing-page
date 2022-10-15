import bubble from '../../assets/img/bubble.png'
import tag from '../../assets/img/tag.png'
import ceo from '../../assets/img/team/ceo.png'
import cpo from '../../assets/img/team/cpo.png'
import cto from '../../assets/img/team/cto.png'
import artist from '../../assets/img/team/artist.png'
import marketing from '../../assets/img/team/marketing.png'
import gamedesign from '../../assets/img/team/gamedesign.png'

export default () => {
    return (
        <div className="team">
            <h1>TEAM</h1>
            <div className="team-flex">
                <div className="member">
                    <img src={bubble} className="bubble" />
                    <img src={ceo} className="member-img" />
                    <img src={tag} className="tag" />
                    <h2>CEO</h2>
                    <h3>Antony Anderson</h3>
                </div>
                <div className="member">
                    <img src={bubble} className="bubble" />
                    <img src={cto} className="member-img" />
                    <img src={tag} className="tag" />
                    <h2>CTO</h2>
                    <h3>Lami White</h3>
                </div>
                <div className="member">
                    <img src={bubble} className="bubble" />
                    <img src={cpo} className="member-img" />
                    <img src={tag} className="tag" />
                    <h2>CPO</h2>
                    <h3>Tim Clark</h3>
                </div>
                <div className="member">
                    <img src={bubble} className="bubble" />
                    <img src={marketing} className="member-img" />
                    <img src={tag} className="tag" />
                    <h2 className="move">Lead Marketing</h2>
                    <h3>Chloe Kim</h3>
                </div>
                <div className="member">
                    <img src={bubble} className="bubble" />
                    <img src={artist} className="member-img" />
                    <img src={tag} className="tag" />
                    <h2>Lead Artist</h2>
                    <h3>Viviana Elia</h3>
                </div>
                <div className="member">
                    <img src={bubble} className="bubble" />
                    <img src={gamedesign} className="member-img" />
                    <img src={tag} className="tag" />
                    <h2 className="move">Lead Game Design</h2>
                    <h3>Ken Sato</h3>
                </div>
            </div>
        </div>
    )
}
