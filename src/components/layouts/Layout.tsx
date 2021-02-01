import React from 'react'
import PropTypes from 'prop-types'

import Sidebar from './Sidebar'
import Main from './Main'
import NavBar from './NavBar'

import "./layout.css"

export default function Layout({ children }) {
    return (
        <main className="grid-container h-screen overflow-hidden font-opensans">
            <Sidebar />
            <Main>
                {children}
            </Main>
            <NavBar />
        </main>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired
}