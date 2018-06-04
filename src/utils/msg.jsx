import React from 'react'

const Msg =(props) => {
    switch (props.type){
        case 'err':
            <div className="alert alert-danger">
                {props.msg}
            </div>
            break;
        case 'info':
            <div class="alert alert-info" role="alert">
                {props.msg}
            </div>  
            break;
        case 'alert':
            <div class="alert alert-info" role="alert">
                {props.msg}
            </div>  
            break; 
        default:
            null
            break; 
    }
}

export default Msg