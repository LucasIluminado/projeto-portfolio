import React from 'react'
import Typical from 'react-typical';
import "./Perfil.css";

export default function Perfil() {
    return (
        <div className='perfil-container'>
            <div className='perfil-parent'>
                <div className='perfil-detalhes'>
                    <div className='colz'>
                        <div className='colz-icon'>
                            <a href='https://www.facebook.com/profile.php?id=100008785629993'>
                                <i className='fa fa-facebook-square'></i>
                            </a>
                            < a href='#'>
                                <i className='fa fa-google-plus-square'></i>
                            </a>
                            < a href='https://www.instagram.com/lucas_sousa_dev/'>
                                <i className='fa fa-instagram'></i>
                            </a>
                            < a href='https://www.linkedin.com/in/lucasdevsousa/'>
                                <i className='fa fa-linkedin'></i>
                            </a>
                            < a href='https://github.com/LucasIluminado'>
                                <i className='fa fa-github'></i>
                            </a>
                        </div>
                    </div>
                    
                    <div className='perfil-detalhes-nome'>
                        <span className='primary-text'>
                            {" "}
                            Olá, Eu sou o <span className='texto-decorado'>Lucas</span>
                        </span>
                    </div>
                    <div className='perfil-detalhes-role'>
                        <span className='primary-text'>
                            {" "}
                            <h1>
                                {" "}
                                <Typical
                                    loop={Infinity}
                                    steps={[
                                        "Desenvolvedor Web 💻",
                                        1200,
                                        "Desenvolvedor Fullstack 🖥️",
                                        1200,
                                        "Java/Spring ☕",
                                        1200,
                                        "ReactJS ⚛️",
                                        1200,
                                        "Apaixonado pelo Universo 🌌",
                                        1200,
                                    ]}
                                />
                            </h1>
                            <span className='perfil-role-descricao'>
                                Desenvolvedor web fullstack em inicio de carreira, certificado pela
                                Generation Brasil.
                            </span>
                        </span>
                    </div>
                    <div className='perfil-opcoes'>
                        <button className='btn primary-btn'>
                            {""}
                            Me Contate{""}
                        </button>
                        <a href='curriculo.pdf' download='Lucas curriculo.pdf'>
                            <button className='btn decorado-btn'>Download CV</button>
                        </a>
                    </div>
                </div>
                <div className='perfil-foto'>
                    <div className='perfil-background-foto'></div>
                </div>
            </div>
        </div>

    )
}
