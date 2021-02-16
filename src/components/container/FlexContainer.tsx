import React from 'react'
import PropTypes from 'prop-types'

const FlexContainer = ({ direction, children }) => (
    <div className={`flex ${direction} justify-between h-full`} >
        { children}
    </div >
)

export default FlexContainer;