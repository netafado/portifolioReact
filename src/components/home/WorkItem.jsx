import React from 'react'
import PropsTypes from 'prop-types'
import './style.css'

function playVideo(){
    let videos = document.querySelectorAll('videoplay');
    videos.forEach(function(ele){
        ele.play();
    })
}

let WorkItem = props =>(
    <div className="item-port">
        <video autoPlay loop playsInline poster={props.image} className="videoplay">
            <source src={`videos/${props.video}.mp4`} type="video/mp4" />
            <source src={`videos/${props.video}.ogg`} type="video/ogg" />
            <img className="img-responsive" src={props.image} alt="web" />
        </video>
        
        <p>{props.name}</p>
        {playVideo()}
  </div>
)

WorkItem.propTypes = {
    image: PropsTypes.string.isRequired,
    name: PropsTypes.string.isRequired
}

export default WorkItem