import React from "react";
import Price from './Price'

export default function Body() {
    return(
        <div className="body--body">
            <div className="body--container">
                <h3>Sol Price in USD:</h3>
                <h3 className="body--text--center"><Price/></h3>
            </div>
        </div>
    )
}