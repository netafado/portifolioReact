import React from 'react'
import PropTypes from 'prop-types';
import moment from 'moment';
const List = (values)=>{
    moment.locale('pt-br');
    const list = values.map( (value, i)=> {
        return (
        <li key={i}>
            <span>{value.value.toFixed(2)}</span>
            <span>{value.desc}</span>
            <span>{moment(value.createdAt).format('DD/MM/YYYY')}</span>
        </li>
    )
    })
    return list
}

const Values = (props)=> (
    <ul className="flex">
        {List(props.values)}
    </ul>
)

Values.propTypes = {
    values: PropTypes.array.isRequired
}

export default Values