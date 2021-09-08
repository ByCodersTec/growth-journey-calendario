import React from 'react';

import {Link} from 'react-router-dom';

import './agenda.css';

function Agenda(){
    return(
        <div className="agenda">
            <div className="agenda-box">
                <div className="agenda-left">
                    <h1> Nome </h1>
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
                    <div className="agenda-boxone">
                        <h1> Agendamento 1 </h1>
                    </div>
                    <div className="agenda-boxtwo">
                        <h1> Agendamento 2 </h1>
                    </div>
                    <div className="agenda-boxthree">    
                        <h1> Agendamento 3 </h1>
                    </div>
                </div>
            </div>
        </div>    
    )
}

export default Agenda;