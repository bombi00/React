import React from "react"
import reactLogo from "../image/react-logo.png"

export default function Header() {
    return (
        <header>
            <nav className="nav">
                <img src={reactLogo} alt="logo" />
                <h1>ReactFacts</h1>
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav> 
        </header>
    )
}
