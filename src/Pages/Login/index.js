import React, { useState } from 'react';

import { BsFillPeopleFill } from 'react-icons/bs';
import { MdSecurity } from 'react-icons/md'; 
import { HiEye, HiEyeOff } from 'react-icons/hi';

import {Link} from 'react-router-dom';

import './login.css';

function Login (){

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")      
    const [show, setShow] = useState(false)

    const handleClick = (e) => {
        e.preventDefault()
        setShow(!show);
    }

    return(
        <div className="login">
            <div className="login-right">
                <h1> Acessar </h1>
                <br/>
                <div className="login-nome">
                    <BsFillPeopleFill />
                    <input 
                        type="text" 
                        placeholder="Digite seu Nome"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>

                <div className="login-senha">
                    <MdSecurity />
                    <input 
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
                        
                    <Link to='/agenda'>
                        <button className="login-entrar">
                            Entrar
                        </button>
                    </Link>   

                    <h4>Não possui conta?</h4>

                    <Link to='/cadastro'>
                        <button className="login-cadastrese" type='submit'>
                            Cadastre-se
                        </button>
                    </Link>
                        
                </div>
                <div className="login-logo">
                    <img
                        src="https://api.freelogodesign.org/files/4af636d8356b42dcbcdd9484bc6a65dd/thumb/logo_200x200.png?v=637657716850000000" 
                        alt="Agendei Logo"
                    />
            </div>
        </div>    
    )
}


export default Login