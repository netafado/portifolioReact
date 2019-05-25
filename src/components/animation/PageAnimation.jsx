import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'
import PropTypes from 'prop-types'
import './styles.css'
class PageAnimation extends Component{
    state = {
        show: false
    }
    render(){
        return(
            <CSSTransition
                in={this.state.show}
                timeout={200}
                classNames={this.props.type}
                unmountOnExit
            >            
            {
            s => {
                return(
                    <div className="pageAnimation">
                        {this.props.children}
                    </div>
                )

            }}                
            </CSSTransition>
        )
    }
    componentDidMount(){
        this.setState({
            show: true
        })
    }

    static propTypes = {
        type: PropTypes.string.isRequired,
        children: PropTypes.element.isRequired
    }
}

export default PageAnimation