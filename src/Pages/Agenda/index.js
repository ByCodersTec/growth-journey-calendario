import axios from 'axios';
import React, { Component } from 'react'
import { BiTrash } from 'react-icons/bi';
import {Link} from 'react-router-dom';
import api from '../../api';

import './agenda.css';

class Agenda extends Component{

    state = {
        atvs: [],
        usuarios: [],
    };

    async componentDidMount(){     
        api.get('')
        .then(response => response.data)
        .then((data) => {
            this.setState({atvs: data})
        });
    
        axios.get('https://bycoders-agendei.herokuapp.com/api/profissional')
            .then(response => response.data)
            .then((data) => {
                this.setState({usuarios: data})
            });
    }
    


    onDelete = (id) => {
        axios.delete('https://bycoders-agendei.herokuapp.com/eventos/delete/' + id)
            .then(response => {
            if(window.confirm('Deseja realmente deletar essa atividade?')){
                this.setState({
                    atvs: this.state.atvs.filter(atv => atv.id !== id)
                });
            }
        });
    } 

    render(){   
        const {usuarios} = this.state;
        const {atvs} = this.state;


        return ( 
            <div className="agenda">
                <div className="agenda-box">
                        <div className="agenda-left" >
                        {usuarios.map(usuario => (
                            <h1 key={usuario.id}> 
                                {usuario.nome} 
                            </h1>
                        ))}
                            <br/>
                            <Link to="/">
                                <h4 className='logout'>
                                    Logout
                                </h4>
                            </Link>
                            <Link to='/agendamento'>
                                <button className="agendar">
                                    Agendar
                                </button>
                            </Link>
                        </div>
                    <div className="agenda-right">
                        {atvs.map (atv => (
                            <div className="agenda-boxone" key={atv.id}>
                                <h2> 
                                    {atv.atividade}
                                </h2>
                                <p> 
                                    Dia agendado: {atv.dia}
                                    <br/>
                                    Hora inicio: {atv.horaInicio}  Hora término: {atv.horaFim}
                                    <br/>
                                    Descrição: {atv.descricao}
                                </p>
                                <button type="button" className="lixeira" onClick={this.onDelete.bind(this, atv.id)}>
                                    <BiTrash/>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>    
        )
    }
}

export default Agenda;