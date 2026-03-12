import React from 'react'
import Slider from './Slider'
import Hero from './Hero'
import { Categories } from './Categories'
import Featured from './Featured'
import Services from './Services'
import { Contact } from './Contact'


const Home = () => {
    return (
        <>
            <Slider />
            <Hero />
            <Categories />
            <Featured />
            <Services />
            <Contact />
        </>
    )
}

export default Home