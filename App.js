import React from 'react'
import About from './Components/About'
import Footer from './Components/Footer'
import Info from './Components/Info'
import Interests from './Components/Interests'

export default function App(){
    return(
        <div className="app-container">
            <Info/>
            <div className="body-content">
                <About/>
                <Interests/>
            </div>
            <Footer/>
        </div>
        
    )
}