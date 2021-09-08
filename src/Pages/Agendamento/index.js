import React from 'react';

import {Link} from 'react-router-dom';

import './agendamento.css';

function Agendamento(){
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
                        <h1> Nome: </h1>
                        <br/>
                        <input 
                            required
                            type="text" 
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
                        />
                    </div>

                    <Link to='/agenda'>
                        <button className="concluir">
                            Concluir
                        </button>
                    </Link>
                </div>
            </div>
        </div>    
    )
}

export default Agendamento;