import React from "react"
import Footer from "./components/Footer"
import About from "./components/About"
import Interests from "./components/Interests"
import InfoTab from "./components/InfoTab"

export default function App() {
    return (
        <div className="InfoContainer">
            <div className="content">
            <InfoTab />
            <About />
            <Interests />
            <Footer />
            </div>
        </div>
    )
}