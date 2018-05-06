import React from 'react'
import PropTypes from 'prop-types'
 const ScreenSize = props => {
    let screenW = window.innerHeight;
    screenW = screenW - document.querySelector('header').clientHeight;
    return(
        <div className={`biggerScreen ${props.classes}`} style={{minHeight: screenW}}>
            {props.children}
        </div>
    )
 }

 ScreenSize.prototypes = {
    classes: PropTypes.string
 }

 export default ScreenSize;