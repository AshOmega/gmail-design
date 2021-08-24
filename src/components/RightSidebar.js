import React from 'react'
import MeetingsAndChat from '../components/MeetingsAndChat'

import '../css/App.css'
import '../css/RightSidebar.css'

export default function RightSidebar() {
    return (
        <div className="right-sidebar">
            <MeetingsAndChat/>

            <div className="apps">
                apps
            </div>  

        </div>
    )
}
