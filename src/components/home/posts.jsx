import React from 'react'
import PropsTypes from 'prop-types'
import {Link} from 'react-router-dom'
function Itens(posts){
    
    return posts.map((item, i)=>{
        return (
        <div className="col-sm-4 col-md-3 containerBlog" key={i}>
            <div className="img-container" style={{backgroundImage:`url(http://api.isaiasfrancisco.com.br/upload/${item.thumb})`}}>
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
    return(
    <div className="container pd-40-top pd-80-bottom">
        <div className="row">
            <h1 className="text-center pd-40-bottom">Ultimas notícias</h1>
            {props.posts ? Itens(props.posts)  : null}
        </div>
    </div>
    )
}

BlogItem.propTypes = {
    posts: PropsTypes.array
}

export default BlogItem