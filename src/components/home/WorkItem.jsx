import React from 'react'
import PropsTypes from 'prop-types'


let WorkItem = props =>(
    <div className="item-port">
        <img className="img-responsive" src={props.image} alt="web" />
        <p>{props.name}</p>
  </div>
)

WorkItem.propTypes = {
    image: PropsTypes.string.isRequired,
    name: PropsTypes.string.isRequired
}

export default WorkItem