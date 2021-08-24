import React from 'react'
import LeftSidebar from '../components/LeftSidebar'
import RightSidebar from '../components/RightSidebar'
import MainBody from '../components/MainBody'

import '../css/App.css'
import '../css/MainArea.css'

export default function MainArea() {
    return (
        <div className="main-area-grid">
            <aside><LeftSidebar/></aside>
            <main><MainBody/></main>
            <aside><RightSidebar/></aside>
        </div>
    )
}
