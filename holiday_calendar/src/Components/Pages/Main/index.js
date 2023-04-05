import React from "react";
import './style.css';

import Header from '../Header/';
import Footer from '../Footer/';

const Main = () => {
    return(
        <div className="main">
            <header>
                <Header/>
            </header>
            <main className="main">
                <div className="show">
                    <div className='show_holidays'>
                        <h2>Clique no botão abaixo para exibir os feriados Nacionais:</h2>
                        <button>Exibir Feriados</button>
                    </div>
                    <div className='today-holiday holiday'>
                        <p id='title_holiday_today'>Este mês tem feriado!</p>
                        <p><span>Nome do feriado: Teste</span></p>
                        <p><span>Data: 01/01</span></p>
                        <div className='border_botton_decoration'></div>
                    </div>
                    <div className="next-holidays">
                        <div className='holiday'>
                            <p className='title_next_holidays'>Próximo feriado:</p>
                            <p><span>Nome do feriado: Teste</span></p>
                            <p><span>Data: 01/01</span></p>
                            <div className='border_botton_decoration'></div>
                        </div>
                        <div className='holiday'>
                            <p className='title_next_holidays'>Próximo feriado:</p>
                            <p><span>Nome do feriado: Teste</span></p>
                            <p><span>Data: 01/01</span></p>
                            <div className='border_botton_decoration'></div>
                        </div>
                        <div className='holiday'>
                            <p className='title_next_holidays'>Próximo feriado:</p>
                            <p><span>Nome do feriado: Teste</span></p>
                            <p><span>Data: 01/01</span></p>
                            <div className='border_botton_decoration'></div>
                        </div>
                    </div>
                </div>
            </main>
            <footer className="footer">
                <Footer/>
            </footer>
        </div>
    );
}

export default Main;