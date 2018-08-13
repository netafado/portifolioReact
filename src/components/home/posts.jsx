import React from 'react'
import PropsTypes from 'prop-types'
import Config from '../../config'
import {Link} from 'react-router-dom'
function Itens(posts){
    
    if(posts.err){
        console.log(posts.err);
        return
    }
        
    return posts.map((item, i)=>{
        return (
        <div className="col-sm-4 col-md-3 containerBlog" key={i}>
            <div className="img-container" style={{backgroundImage:`url(${Config.DOMAIN}/upload/${item.thumb})`}}>
                <div className="desc">
                    <Link to={`/post/${item._id}`}>
                        <h5>{item.title}</h5>
                    </Link>                    
                </div>
            </div>
        </div>
        )
    })
}

const BlogItem = (props) => {
    return(
    <div id={props.id} className="container pd-40-top pd-80-bottom">
        <div className="row">
            <h1 className="text-center pd-40-bottom">Ultimos trabalhos</h1>
            {props.posts ? Itens(props.posts)  : null}
        </div>
    </div>
    )
}

BlogItem.propTypes = {
    posts: PropsTypes.array
}

export default BlogItem