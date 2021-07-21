import React from 'react'
import Social from "./Social"

export default function Nav() {
    return (
        <div className="nav">
            <div className="charles-gosme-title">
            <h1>Charles Gosme</h1>
            </div>
            <div className="links">
            <div className="page-links">
            <h3>MUSIC</h3>
            <h3>ABOUT</h3>
            <h3>CONTACT</h3>
            </div>
            <div className="social-links">
            <Social />
            </div>
            </div>
        </div>
    )
}
