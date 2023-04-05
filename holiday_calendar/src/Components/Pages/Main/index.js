import React from "react";
import './style.css';

import Header from '../Header/';

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
                </div>
            </main>
            
        </div>
    );
}

export default Main;