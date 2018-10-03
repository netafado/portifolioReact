import React, { Component } from 'react'
import { connect } from 'react-redux'
import Layout from '../components/layout'
import PageAnimation from '../components/animation/PageAnimation'
import {Link} from 'react-router-dom';
import {getPostByAuthor, deletePostById} from '../actions/index'
class UserPost extends Component {
    componentWillMount(){
        console.log(this.props.match.params.id)
        this.props.dispatch(getPostByAuthor(this.props.match.params.id))
    }

    deletar = async (id)=>{
        await this.props.dispatch(deletePostById(id))
        this.props.dispatch(getPostByAuthor(this.props.match.params.id))
    }
    render() { 
        console.log(this.props)
        return ( 
            <Layout >
                <PageAnimation type="fade">
                    <div className="container pd-80-top">
                        <h1>Seus posts:</h1>
                        <table className="table">
                            <tbody>
                            {this.props.posts && Array.isArray(this.props.posts) ?                   
                                
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
                                        <td>
                                            <Link to={`/user/post/edit/${item._id}`}>Editar</Link>
                                        </td>
                                    </tr>
                                )
                            })
                                
                            : <tr>
                                <td>Nenhum post encontrado</td>
                               </tr>
                            }
                            </tbody>
                        </table>                    
                    </div>
                </PageAnimation>
            </Layout>
        )
    }
}

function MapStateToProps( state ){
    return {
        posts: state.posts.post
    }
}
 
export default connect(MapStateToProps, null)(UserPost);