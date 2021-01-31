import React from 'react'
import PropTypes from 'prop-types'

export default function Main({ children }) {
    return (
        <section className="main-container p-10 space-y-10">
            {children}
        </section>
    )
}

Main.propTypes = {
    children: PropTypes.node.isRequired
}