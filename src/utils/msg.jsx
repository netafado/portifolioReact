import React from 'react'

const Msg =(props) => {
    switch (props.type){
        case 'err':
            return(
                <div className="alert alert-danger">
                    {props.msg}
                </div>
            )

            break;
        case 'info':
            return(
                <div className="alert alert-info" role="alert">
                    {props.msg}
                </div>
            )
    
            break;
        case 'alert':
            <div className="alert alert-info" role="alert">
                {props.msg}
            </div>  
            break; 
        default:
            <h1>teste</h1>
            break; 
    }
}

export default Msg