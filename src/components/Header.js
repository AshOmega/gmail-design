import React from 'react'
import Hamburger from '../components/Hamburger'
import SearchBar from '../components/SearchBar'

import '../css/App.css'
import '../css/Header.css'

export default function Header() {
    return (
        <div className="header-grid">
            <div className="header header-left">
                <ul>
                    <li><Hamburger/></li>
                    <li className="title">Logo + Gmail</li>
                </ul>
            </div>

            <div className="header-centre"> 
                <SearchBar/>
            </div>
            
            <div className="header header-right"> 
                <ul>
                    <li>Support</li>
                    <li>Settings</li>
                    <li>Apps</li>
                    <li>Profile</li>
                </ul>
            </div>
        </div>
    )
}
