import sea_17 from '../../assets/img/sea_17.png'

export default () => {
    return (
        <div className="roadmap">
            <h1>ROADMAP</h1>
            <div className="line"></div>
            <div className="flex right">
                <h2 className="">1</h2>
                <ul>
                    <li>Game Design Concept</li>
                    <li>Tokenomics design</li>
                    <li>Game development</li>
                    <li>Website landing</li>
                    <li>Project introduction and marketing</li>
                    <li>Whitepaper release</li>
                    <li>Game Smart Contract Audits Complete</li>
                </ul>
                <div className="rightbg"></div>
            </div>
            <div className="flex left">
                <h2>2</h2>
                <ul>
                    <li>Selling NFTs</li>
                    <li>Private sale</li>
                    <li>Public sale</li>
                    <li>Whitelist testnet version</li>
                    <li>Game launch mainnet version</li>
                </ul>
                <div className="leftbg"></div>
            </div>
            <div className="flex right">
                <h2>3</h2>
                <ul>
                    <li>Leaderboard</li>
                    <li>Add more aquarium decoration</li>
                    <li>Add fish collection</li>
                    <li>Competition event</li>
                    <li>Fish realm contest</li>
                    <li>Treasure mode</li>
                    <li>Arcade mode</li>
                </ul>
            </div>
            <div className="flex left">
                <h2>4</h2>
                <ul>
                    <li>Marketplace</li>
                    <li>Scholarship system</li>
                    <li>Voting system</li>
                    <li>Achievement system</li>
                    <li>Metaverse</li>
                    <li>Upgrade system</li>
                    <li>New pets and alien</li>
                    <li>Book Collection for NFT</li>
                </ul>
            </div>
            <img src={sea_17} className="sea17" />
        </div>
    )
}
