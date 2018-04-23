import React from 'react'
import WorkItem from './WorkItem'
let obj = [
    {
        image: 'img/w-1-150x150.png',
        name: "Web"
    },
    {
        image: 'img/d-1-150x150.png',
        name: "Designer Digital"
    },
    {
        image: 'img/g-1-150x150.png',
        name: "Designer Gráfico"
    },
    {
        image: 'img/3d-1-150x150.png',
        name: "3d / Games"
    }
]
const Works = (props) =>(
    <div className="container section">
    <div className="col-sm-12 pd-40-top">
      <div className="align-center port-container">
        {obj.map((item, i)=>{
            return <WorkItem image={item.image} name={item.name} key={i}/>
        })}
      </div>
    </div>
  </div>
)

export default Works

