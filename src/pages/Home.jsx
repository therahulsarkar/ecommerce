import React from 'react'
import Navbar from '../components/Navbar'
import TopAnnouncement from '../components/TopAnnouncement'
import Slider from '../components/Slider'
// import CategoryItems from '../components/CategoryItems'
import Categories from '../components/Categories'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'
import Footer from '../components/Footer'

function Home() {
    return (
        <>
            <TopAnnouncement/>
            <Navbar />
            <Slider />
            <Categories/>
            <Products/>
            <Newsletter/>
            <Footer/>
        </>
    )
}

export default Home
