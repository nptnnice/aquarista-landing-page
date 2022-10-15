import logo from '../../assets/img/logo.png'
import worldwide from '../../assets/img/worldwide.png'
import email from '../../assets/img/email.png'
import telegram from '../../assets/img/telegram.png'
import { Link } from 'react-router-dom'

export default () => {
    let url = 'https://www.aquarista.io/'
    let channel = 'https://t.me/aquaristachannel'
    const ButtonMailto = ({ mailto }) => {
        return (
            <Link
                to="#"
                onClick={(e) => {
                    window.location.href = mailto
                    e.preventDefault()
                }}
            >
                <img src={email} className="email" />
            </Link>
        )
    }

    return (
        <div className="contact">
            <div className="flex">
                <img src={logo} className="logo" />
                <div className="contact-icon">
                    <h2>CONTACT US</h2>
                    <div className="container">
                        <a href={url} target="_blank">
                            <img src={worldwide} />
                        </a>
                        <ButtonMailto mailto="mailto:contact@aquarista.io" />
                        <a href={channel} target="_blank">
                            <img src={telegram} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
