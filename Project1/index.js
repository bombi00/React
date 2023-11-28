/*
import React from "react"
import ReactDOM from "react-dom"
*/

import Header from "../../my-app/src/Header"
import Footer from "../../my-app/src/Footer"
import MainContent from "../../my-app/src/MainContent"

function App() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
} 

ReactDOM.render(<App />, document.getElementById("root"))

