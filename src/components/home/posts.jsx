import React from 'react'
import PropsTypes from 'prop-types'
import {Link} from 'react-router-dom'
function Itens(posts){
    if(!posts)
        return
    return posts.map((item, i)=>{
        return (
        <div className="col-sm-4 containerBlog " key={i}>
            <div className="img-container" style={{backgroundImage:`url(http://api.isaiasfrancisco.com.br/upload/${item.img})`}}>
                <div className="desc">
                    <Link to={`/post/${item._id}`}>
                        <h5>{item.title}</h5>
                    </Link>                    
                    <p >
                        {item.desc}
                    </p>
                </div>
            </div>
        </div>
        )
    })
}

const BlogItem = (props) => {
    console.log(props)
    return(
    <div className="container-fluid">
        <div className="row">
            <h1 className="text-center">Ultimas noticias</h1>
            {props.posts ? Itens(props.posts)  : null}
        </div>
    </div>
    )
}

BlogItem.propTypes = {
    posts: PropsTypes.array
}

export default BlogItem