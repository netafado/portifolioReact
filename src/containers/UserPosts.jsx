import React, { Component } from 'react'
import { connect } from 'react-redux'
import {getPostByAuthor, deletePostById} from '../actions/index'
class UserPost extends Component {
    componentWillMount(){
        console.log(this.props.match.params.id)
        this.props.dispatch(getPostByAuthor(this.props.match.params.id))
    }

    deletar = (id)=>{
        deletePostById(id)
        this.props.dispatch(deletePostById(id))
        this.props.dispatch(getPostByAuthor(this.props.match.params.id))
    }
    render() { 
        console.log(this.props);
        return ( 
            <table className="table">
                <tbody>
                {this.props.posts ?                   
                    
                   this.props.posts.map((item, i)=>{
                       return (
                           <tr id={item._id} key={i}>
                               <td>
                                   {item.title}
                               </td>
                               <td>
                                   {item.createdAt}
                               </td>
                               <td>
                                   <button  onClick={() => this.deletar(item._id)}>deletar</button>
                               </td>
                           </tr>
                       )
                   })
                    
                : null}
                </tbody>
            </table>
        )
    }
}

function MapStateToProps( state ){
    return {
        posts: state.posts.post
    }
}
 
export default connect(MapStateToProps, null)(UserPost);