import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';

import {Link} from 'react-router-dom';

import './agendamento.css';


function Agendamento(){

    const [atividade, setAtividade] = useState('');
    const [descricao, setDescricao] = useState('');
    // const [horaIni, setHoraIni] = useState('');
    // const [horaFim, setHoraFim] = useState('');
    // const [dia, setDia] = useState('');


    const history = useHistory();

    async function Agendar(ev){

        ev.preventDefault();
    
        const data = {
            'id' : 1,
            'atividade' : atividade,
            'descricao' : descricao,
            'codUsuario': 1,
            'horaInicio' : '08:00:00',
            'horaFim' : '09:00:00',
            'dia' : '2019-03-03'
        }
    
    
        await axios.post('https://bycoders-agendei.herokuapp.com/eventos/salvar', data)
                .then((response) => {
                    history.push('/agenda');
                });
        
        console.log(data);
    
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
                        <h1> Data: </h1>
                        <br/>
                        <input 
                            required
                            type="date" 
                        />
                    </div>
                    <div className="agendamento-input3">
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