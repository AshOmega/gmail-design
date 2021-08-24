import React from 'react'

import '../css/MainBody.css'

export default function BodyEmailCount() {
    return (
        <div>
            <ul className="body-email-count">
                <a className="body-email-count-a" href="#">
                    <li >Unread</li>
                </a>
                <a className="body-email-count-a" href="#">
                    <li >1-50 of 150</li>
                </a>
            </ul>
        </div>
    )
}
