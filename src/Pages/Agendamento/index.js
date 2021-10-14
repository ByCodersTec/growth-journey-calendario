import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';

import {Link} from 'react-router-dom';

import './agendamento.css';

function formatDate(str){
    return str.split('/').reverse().join('-');
}

function formatHour(hour){
    return hour + ":00"
}


function Agendamento(){

    const [atividade, setAtividade] = useState('');
    const [descricao, setDescricao] = useState('');
    const [horaIni, setHoraIni] = useState('');
    const [horaFim, setHoraFim] = useState('');
    const [dia, setDia] = useState('');


    const history = useHistory();

    async function Agendar(ev){

        ev.preventDefault();
    
        const data = {
            'id' : 2,
            'atividade' : atividade,
            'descricao' : descricao,
            'codUsuario' : 2,
            'horaInicio' : formatHour(horaIni),
            'horaFim' : formatHour(horaFim),
            'dia' : formatDate(dia)
        }
    
        if (atividade !== '' && descricao !== '' && horaIni !== '' && horaFim !== '' && dia !== ''){
            await axios.post('https://bycoders-agendei.herokuapp.com/eventos/salvar', data)
                    .then((response) => {
                        history.push('/agenda');
                    });
            
            console.log(data);
        } else {
            alert("Preencha todos os Campos!")
        }
    
    }
    return(
        <div className="agendamento">
            <div className="agendamento-box">
                <div className="agendamento-left">
                    <h1> Nome </h1>
                    <br/>
                    <Link to="/">
                        <h4 className='logout'>
                            Logout
                        </h4>
                    </Link>
                    <button className="agendar">
                        Agendar
                    </button>
                </div>
                <div className="agendamento-right">
                    <div className="agendamento-input1">
                        <h1> Atividade: </h1>
                        <br/>
                        <input 
                            required
                            type="text" 
                            value={atividade}
                            onChange={e => setAtividade(e.target.value)}
                        />
                    </div>
                    <div className="agendamento-input2">
                        <h1> Dia: </h1>
                        <br/>
                        <input 
                            required
                            type="date" 
                            value={dia}
                            onChange={e => setDia(e.target.value)}
                        />
                    </div>
                    <div className="agendamento-input3">
                        <h1> Horario de Fim: </h1>
                        <br/>
                        <input 
                            required
                            type="time" 
                            value={horaFim}
                            onChange={e => setHoraFim(e.target.value)}
                        />
                    </div>
                    <div className="agendamento-input4">
                        <h1> Horario de Inicio: </h1>
                        <br/>
                        <input 
                            required
                            type="time" 
                            value={horaIni}
                            onChange={e => setHoraIni(e.target.value)}
                        />
                    </div>
                    <div className="agendamento-input5">
                        <h1> Descrição: </h1>
                        <br/>
                        <input 
                            required
                            type="text" 
                            value={descricao}
                            onChange={e => setDescricao(e.target.value)}
                        />
                    </div>

                    {/* <Link to='/agenda'> */}
                        <button className="concluir" onClick={Agendar}>
                            Concluir
                        </button>
                    {/* </Link> */}

                </div>
            </div>
        </div>    
    )
}

export default Agendamento;