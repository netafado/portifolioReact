import React from 'react'
import PropTypes from 'prop-types';
import moment from 'moment';

const ModalHeader = (props)=> (
    <ul className="flex">
        <header>
            <div className="info">
                <h3>{props.name}</h3>
                <p>
                    <span>{props.meta.initialValue.toFixed(2)}</span> de <span>{props.meta.valueGoal.toFixed(2)}</span>
                </p>
                <p>
                    <span>Inicio: {props.dataInicial.format('MM/YYYY')} | fim: {props.dataFinal.format('MM/YYYY')}</span>
                </p>
                <p> Acaba em {props.dataFinal.diff(today, 'months')} meses | Valor mensal: R${props.valorMensal.toFixed(2)}</p>
            </div>
            <div className="porc">
                <p>
                    <span style={{with: '100%', display: 'block'}}>Atingido:</span>
                    
                </p>
            </div>
        </header>
    </ul>
)

Values.propTypes = {
    values: PropTypes.array.isRequired
}

export default ModalHeader