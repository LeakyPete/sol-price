import React from "react";
import Logo from "../images/clam-logo-no-bg.png"

export default function Header() {
    return(
        <div className="header--container">
            <img className="proj--logo" src={Logo} />
            <div className="header--title">
                <h2 className="proj--title">Project Mollusk</h2>
                <h3 className="page--title">Solana Price Tracker</h3>
            </div>
        </div>
    )
}