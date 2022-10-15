import React from 'react'
import Home from './Component/en/home'
import Nav from './Component/en/nav'
import Story from './Component/en/story'
import Feature from './Component/en/feature'
import Play from './Component/en/play'
import Earning from './Component/en/earning'
import Fishpage from './Component/en/fishpage'
import Arcade from './Component/en/arcade'
import Treasure from './Component/en/treasure'
import Tokenomics from './Component/en/tokenomics'
import Roadmap from './Component/en/roadmap'
import Team from './Component/en/team'
import Partners from './Component/en/partners'
import Contact from './Component/en/contact'

export default () => {
    return (
        <div>
            <Nav />
            <Home />
            <Story  />
            <Feature  />
            <Play  />
            <Arcade />
            <Treasure />
            <Fishpage  />
            <Earning  />
            <Tokenomics  />
            <Roadmap  />
            <Team  />
            <Partners  />
            <Contact />
        </div>
    )
}
