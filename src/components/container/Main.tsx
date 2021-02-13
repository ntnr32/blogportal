import React, { useRef } from 'react'
import PropTypes from 'prop-types'

export default function Main({ containerRef, children }) {

    return (
        <section ref={containerRef} id="main-container" className="main-container p-10 space-y-10 overflow-y-auto">
            {children}
        </section>
    )
}

Main.propTypes = {
    containerRef: PropTypes.node.isRequired,
    children: PropTypes.node.isRequired
}