import React from 'react'
import config from '../../config'
const ItemBlog = (props)=>{
    
        return(
        <div className="row">
            {props.blog.map((item, i)=>{
                return(
                    <div className="col-sm-4 containerBlog " key={i}>
                        <div className="img-container" style={{backgroundImage:`url(${config.DOMAIN}/upload/${item.img})`}}>
                            <div className="desc">
                                <a href={`/post/${item._id}`}>
                                    <h5>{item.title}</h5>
                                    <p >
                                        {item.desc}
                                    </p>
                                </a>
                            </div>
                        </div>
                    </div>
                    )
                })
            }
        </div>
        )    
}

export default ItemBlog