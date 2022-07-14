import React from "react"
import ProfilePic from "../images/ProfilePic.png"

export default function InfoTab() {
    return (
        <main className="main">
            <div className="profPicContainer">
            <img src={ProfilePic} className="ProfilePic" />
            </div>
            <div className="nameTitle">
                <h1 className="myName">Jordan Moldovan</h1>
                <h5 className="role">Software Engineer/Full Stack Developer</h5>
                <span className="portfolio" ><a href={'jordan-moldovan.netlify.app'}></a>Jordan-Moldovan.netlify.app</span>
            </div>
            <div className="buttonGroup">
                {/* <button>email</button>
                <button>linkedin</button> */}
            </div>
        </main>
    )
}