import React from 'react'
const ItemBlog = (props)=>{
    
        return(
        <div className="row">
            {props.blog.map((item, i)=>{
                return(
                    <div className="col-sm-4 containerBlog " key={i}>
                        <div className="img-container" style={{backgroundImage:`url(${item.img})`}}>
                            <div className="desc">
                                <h5>{item.title}</h5>
                                <p >
                                    {item.desc}
                                </p>
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