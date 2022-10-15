import tokenomics from '../../assets/img/tokenomics.png'

export default () => {
    return (
        <div className="tokenomics">
            <h1>TOKENOMICS</h1>
            <div className="container">
                <img src={tokenomics} />
                <div>
                    <li className="one">
                        <div className="color"></div>
                        <div>4.5% DEX LIQUIDITY<br></br><span>22,500,000 tokens</span></div>
                    </li>
                    <li className="two">
                        <div className="color"></div>
                        <div>3% PARTNER AND ADVISER<br></br><span>15,000,000 tokens</span></div>
                    </li>
                    <li className="three">
                        <div className="color"></div>
                        <div>4.5% SEED FUND<br></br><span>22,500,000 tokens</span></div>
                    </li>
                    <li className="four">
                        <div className="color"></div>
                        <div>3.5% RESERVE<br></br><span>17,500,000 tokens</span></div>
                    </li>
                    <li className="five">
                        <div className="color"></div>
                        <div>1.5% PPRIVATE PRESALE<br></br><span>7,500,000 tokens</span></div>
                    </li>
                    <li className="six">
                        <div className="color"></div>
                        <div>4% IDO<br></br><span>20,000,000 tokens</span></div>
                    </li>
                    <li className="seven">
                        <div className="color"></div>
                        <div>4% MARKETING AND AIRDROP<br></br><span>20,000,000 tokens</span></div>
                    </li>
                    <li className="eight">
                        <div className="color"></div>
                        <div>5% TEAM AND DEVELOPER<br></br><span>25,000,000 tokens</span></div>
                    </li>
                    <li className="nine">
                        <div className="color"></div>
                        <div>70% PLAY TO EARN<br></br><span>350,000,000 tokens</span></div>
                    </li>
                </div>
            </div>
            <h2>Total 500,000,000 tokens</h2>
        </div>
    )
}
