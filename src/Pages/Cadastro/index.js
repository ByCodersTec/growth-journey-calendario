import React, { useState } from 'react';
import { useHistory } from 'react-router';
 
import { MdEmail, MdSecurity } from "react-icons/md";
import { HiEyeOff, HiEye } from "react-icons/hi";
import { BsFillPeopleFill } from "react-icons/bs";
import { AiOutlinePhone } from "react-icons/ai";
import { BsPen } from "react-icons/bs";

// import {Link} from 'react-router-dom';

import './cadastro.css';
import axios from 'axios';

function Cadastro(){
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cpf, setCpf] = useState('');
    const [show, setShow] = useState(false);

    const history = useHistory();

    const handleClick = (e) => {
        e.preventDefault();
        setShow(!show);
    }

    async function Submit(ev){

        ev.preventDefault();

        const data = {
            'nome' : nome,
            'cpf' : cpf,
            'telefone' : telefone,
            'email' : email,
            'senha' : senha  
        }


        await axios.post('https://bycoders-agendei.herokuapp.com/api/profissional', data)
                .then((response) => {
                    history.push('/');
                });
        
        console.log(data);

    }

    return(
        <div className="cadastro">
            <form>
                <div className="cadastro-right">
                    <h1> Cadastro </h1>
                    <br/>
                    <div className="cadastro-nome">
                        <BsFillPeopleFill />
                        <input 
                            required
                            type="text" 
                            placeholder="Digite seu Nome"
                            value={nome}
                            onChange={e => setNome(e.target.value)}
                        />
                    </div>
                    <div className="cadastro-cpf">
                        <BsPen />
                        <input 
                            required
                            type="text" 
                            placeholder="Digite seu CPF"
                            value={cpf}
                            onChange={e => setCpf(e.target.value)}
                        />
                    </div>
                    <div className="cadastro-email">
                        <MdEmail />
                        <input 
                            required
                            type="email" 
                            placeholder="Digite seu Email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="cadastro-telefone">
                        <AiOutlinePhone />
                        <input 
                            required
                            type="text" 
                            placeholder="Digite seu Telefone"
                            value={telefone}
                            onChange={e => setTelefone(e.target.value)}
                        />
                    </div>

                    <div className="cadastro-senha">
                        <MdSecurity />
                        <input 
                            required
                            type={show ? "text" : "password"} 
                            placeholder="Digite sua Senha"
                            value={senha}
                            onChange={e => setSenha(e.target.value)}
                        /> 
                        <div className="cadastro-eye">
                            {show ? (
                                <HiEye 
                                    onClick={handleClick}
                                />
                            ) : (
                                    <HiEyeOff 
                                        onClick={handleClick}
                                    />
                                )}
                        </div>
                    </div>
                    <div className="cadastro-buttons">
                        {/* <Link to='/'> */}
                            <button className="cadastro-salvar" onClick={Submit}>
                                Concluir
                            </button>
                        {/* </Link> */}
                    </div>
                </div>
            </form>
            <div className="cadastro-logo">
                <img
                    src="https://api.freelogodesign.org/files/4af636d8356b42dcbcdd9484bc6a65dd/thumb/logo_200x200.png?v=637657716850000000" 
                    alt="Agendei Logo"
                />
            </div>
        </div>    
    )
}

export default Cadastro