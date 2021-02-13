import React, { useRef } from 'react'
import PropTypes from 'prop-types'

export default function Main({ containerRef, children, ...rest }) {

    return (
        <section ref={containerRef} id="main-container" className="main-container p-10 space-y-10 overflow-y-auto">
            {children}
        </section>
    )
}

Main.propTypes = {
    containerRef: PropTypes.object,
    children: PropTypes.node
}