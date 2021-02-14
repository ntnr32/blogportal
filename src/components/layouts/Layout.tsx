import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import Sidebar from './../sidebar/SideBar';
import Main from '../container/Main';
import NavBar from '../navbar/NavBar';

import "./layout.css"

export default function Layout({ children }) {

    // TODO: Move logic out of components
    const mainContainerRef = useRef(null);

    const scrollToUpHandler = () => {
        console.log('mainContainerScrollToUp clicked');
        mainContainerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <main className="grid-container h-screen overflow-hidden font-opensans">
            <Sidebar />
            <Main containerRef={mainContainerRef}>
                {children}
            </Main>
            <NavBar scrollHandler={scrollToUpHandler} />
        </main>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired
}