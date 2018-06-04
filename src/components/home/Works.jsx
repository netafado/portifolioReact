import React from 'react'
import WorkItem from './WorkItem'
let obj = [
    {
        image: 'img/w-1-150x150.png',
        name: "Web",
        video:"w"
    },
    {
        image: 'img/d-1-150x150.png',
        name: "Designer Digital",
        video:"d"
    },
    {
        image: 'img/g-1-150x150.png',
        name: "Designer Gráfico",
        video:"g"
    },
    {
        image: 'img/3d-1-150x150.png',
        name: "3d / Games",
        video: "3d"
    }
]
const Works = (props) =>(
    <div className="container section">
    <div className="col-sm-12 pd-40-top">
      <div className="align-center port-container">
        {obj.map((item, i)=>{
            return <WorkItem image={item.image} name={item.name} video={item.video} key={i}/>
        })}
      </div>
    </div>
  </div>
)

export default Works

