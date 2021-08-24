import React from 'react'
import BodyOptions from './BodyOptions'
import BodyEmailCount from './BodyEmailCount'
import EmailList from './EmailList'
import Footer from './Footer'

import '../css/App.css'
import '../css/MainBody.css'

export default function MainBody() {
    return (
        <div className="main-body">
            <BodyOptions/>
            <BodyEmailCount/>
            <EmailList/>
            <Footer/>
        </div>
    )
}
