import React from 'react'

import '../css/App.css'
import '../css/Footer.css'

export default function Footer() {
    return (
        <div className="footer">
            <ul className="footer-content">
                <li>Storage</li>
                
                <ul className="footer-content-terms">
                    <li>Terms</li>
                    <li>Privacy</li>
                    <li>Program Policies</li>
                </ul>

                <ul>
                    <li>Last account activity : 30 minutes ago</li>
                    <li className="footer-content-terms-right-align">Details</li>
                </ul>

            </ul>
        </div>
    )
}
