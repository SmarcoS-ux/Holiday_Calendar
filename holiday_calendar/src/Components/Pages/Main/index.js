import React, {useState} from "react";
import './style.css';

import Header from '../Header/';
import Footer from '../Footer/';

import Feriados from '../../Dados/index.js';

const Main = (props) => {
    const [title_Feriado, setTitleFeriadoToday] = useState();
    const [nome_Feriado_today, setNomeFeriadoToday] = useState();
    const [data_Feriado_today, setDataFeriadoToday] = useState();

    const [nome_Feriado_1, setNomeFeriado1] = useState();
    const [data_Feriado_1, setDataFeriado1] = useState();
    
    const [nome_Feriado_2, setNomeFeriado2] = useState();
    const [data_Feriado_2, setDataFeriado2] = useState();

    const [nome_Feriado_3, setNomeFeriado3] = useState();
    const [data_Feriado_3, setDataFeriado3] = useState();

    const Data_hoje = () => {
        let Data_atual = new Date();

        let Day = Data_atual.getDate();
        let Month = Data_atual.getMonth() + 1;
        let Year = Data_atual.getFullYear();

        return [Day, Month-1, Year];
    }

    const return_Next_holiday = (holiday) => {
        let Data_atual = Data_hoje();

        
        let Verify_holiday = [];
        let Verify_holiday_month_today = [];

        for (let feriado of holiday){
            if (parseInt(feriado.data.substring(0, 2)) > Data_atual[1]){
                Verify_holiday.push({nome_feriado: feriado.nome, data_feriado: feriado.data});
            }
        }    

        for (let feriado of holiday){
            if (parseInt(feriado.data.substring(0, 2)) == Data_atual[1]){
                Verify_holiday_month_today.push({nome_feriado: feriado.nome, data_feriado: feriado.data});
                break;
            }
        }
        

        
        if (Verify_holiday_month_today[0].data_feriado.substring(0, 2) == Data_atual[1]){
            setTitleFeriadoToday("Este mês tem Feriado!");
            setNomeFeriadoToday(Verify_holiday_month_today[0].nome_feriado);
            setDataFeriadoToday(Verify_holiday_month_today[0].data_feriado);

            setNomeFeriado1(Verify_holiday[0].nome_feriado);
            setDataFeriado1(Verify_holiday[0].data_feriado);

            setNomeFeriado2(Verify_holiday[1].nome_feriado);
            setDataFeriado2(Verify_holiday[1].data_feriado);

            setNomeFeriado3(Verify_holiday[2].nome_feriado);
            setDataFeriado3(Verify_holiday[2].data_feriado);
        } else{
            setTitleFeriadoToday("Este mês não tem Feriado!");
            setNomeFeriado1(Verify_holiday[0].nome_feriado);
            setDataFeriado1(Verify_holiday[0].data_feriado);

            setNomeFeriado2(Verify_holiday[1].nome_feriado);
            setDataFeriado2(Verify_holiday[1].data_feriado);

            setNomeFeriado3(Verify_holiday[2].nome_feriado);
            setDataFeriado3(Verify_holiday[2].data_feriado);
        }
        


        
    }

    const Exibir_Feriados = () => {
        let Data_atual = Data_hoje();

        const day = Data_atual[0];
        const month = Data_atual[1];
        const year = Data_atual[2];

        let Feriados_list = Feriados;

        let Feriados_posterires = return_Next_holiday(Feriados_list);

        
        
    }

    return(
        <div className="main">
            <header>
                <Header/>
            </header>
            <main className="main">
                <div className="show">
                    <div className='show_holidays'>
                        <h2>Clique no botão abaixo para exibir os feriados Nacionais:</h2>
                        <button onClick={Exibir_Feriados}>Exibir Feriados</button>
                    </div>
                    <div className='today-holiday holiday'>
                        <p id='title_holiday_today'>{title_Feriado}</p>
                        <p><span>Nome do feriado:</span> {nome_Feriado_today}</p>
                        <p><span>Data:</span> {data_Feriado_today}</p>
                        <div className='border_botton_decoration'></div>
                    </div>
                    <div className="next-holidays">
                        <div className='holiday'>
                            <p className='title_next_holidays'>Próximo feriado:</p>
                            <p><span>Nome do feriado:</span> {nome_Feriado_1}</p>
                            <p><span>Data:</span> {data_Feriado_1}</p>
                            <div className='border_botton_decoration'></div>
                        </div>
                        <div className='holiday'>
                            <p className='title_next_holidays'>Próximo feriado:</p>
                            <p><span>Nome do feriado:</span> {nome_Feriado_2}</p>
                            <p><span>Data:</span> {data_Feriado_2}</p>
                            <div className='border_botton_decoration'></div>
                        </div>
                        <div className='holiday'>
                            <p className='title_next_holidays'>Próximo feriado:</p>
                            <p><span>Nome do feriado:</span> {nome_Feriado_3}</p>
                            <p><span>Data:</span> {data_Feriado_3}</p>
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