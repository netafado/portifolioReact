import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import Values from './valuesList'
//import ModalHeader from './modalHeader'
import './modal.css'
const Modal = (props) => {
    let dataInicial = new moment(props.meta.initialDate);
    let dataFinal = new moment(props.meta.deadline);
    let today = new moment(Date.now());
    const lestMonths = dataFinal.diff(today, 'months')
    let valorTotal = props.meta.initialValue;
    for(let i = 0; i < props.meta.values.length; i++){
        valorTotal += props.meta.values[i].value
    }
    let valorMensal = -(valorTotal - props.meta.valueGoal) / (lestMonths > 0.1 ? lestMonths  : 1);
    return(

        <div className="modal-financas" >
            <div className="modal-body">
                <header>
                    <div className="info">
                        <h4>{props.meta.name}</h4>
                        <p>{props.meta.desc}</p>
                        <small>
                            <span>{valorTotal.toFixed(2)}</span> de <span>{props.meta.valueGoal.toFixed(2)}</span>
                        </small>
                        <p>
                            <small>Inicio: {dataInicial.format('MM/YYYY')} | fim: {dataFinal.format('MM/YYYY')}</small>
                        </p>
                        <p> Acaba em {dataFinal.diff(today, 'months')} meses | Valor mensal: <label className="label-danger" >R${valorMensal.toFixed(2)}</label></p>
                    </div>
                    <div className="porc">
                        <small>
                            <span style={{with: '100%', display: 'block'}}>Atingido:</span>
                            <span>{((valorTotal / props.meta.valueGoal) * 100).toFixed(2)}%</span>
                        </small>
                    </div>
                </header>
                <article>
                    <Values values={props.meta.values}/>
                </article>
                <div id="fechar" onClick={props.f_modal}>
                    <span>X</span>
                </div>
                <footer>
                    <label> Adicionar </label>
                    <div>
                        <input type="number" className="input-lg" onChange={props.f_changeValue} placeholder="valor"/>
                        <input type="text" className="input-lg" onChange={props.f_changeDesc}  placeholder="descrição"/>
                        <button className="btn btn-primary" onClick={()=> props.f_addValue(props.meta._id)}> Adicionar </button>
                    </div>
                </footer>
            </div>
        </div>
    )
}

Modal.propTypes = {
    show: PropTypes.bool.isRequired,
    f_modal: PropTypes.func.func,
    meta: PropTypes.object.isRequired
}
export default Modal;
