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

        return [Day, Month, Year];
    }

    const return_Next_holiday = (holiday) => {
        let Data_atual = Data_hoje();

        let Feriados = holiday;

        let Verify_holiday = [];
        let Index_feriado;
      
        for (let feriado of holiday){
            if (parseInt(feriado.data.substring(0, 2)) >= Data_atual[1]){
                let day = feriado.data.substring(3, 5);
                let month = feriado.data.substring(0, 2);
                let year = Data_atual[2];

                Verify_holiday.push({nome_feriado: feriado.nome, data_feriado: `${day}/${month}/${year}`});
            }
        }   
        
        for (let index in holiday){
            if (parseInt(holiday[index].data.substring(0, 2)) >= Data_atual[1]){
                Index_feriado = index;
                break;
            }
        }
        
        if (parseInt(Verify_holiday[0].data_feriado.substring(3, 5)) == Data_atual[1]){
            setTitleFeriadoToday("Este mês tem Feriado!");

            if ( Index_feriado == holiday.length - 3){
                let day_0 = holiday[0].data.substring(3, 5);
                let month_0 = holiday[0].data.substring(0, 2);
                let year_0 = Data_atual[2] + 1;

                let data_format_0 = `${day_0}/${month_0}/${year_0}`;

                setNomeFeriadoToday(Verify_holiday[0].nome_feriado);
                setDataFeriadoToday(Verify_holiday[0].data_feriado);

                setNomeFeriado1(Verify_holiday[1].nome_feriado);
                setDataFeriado1(Verify_holiday[1].data_feriado);

                setNomeFeriado2(Verify_holiday[2].nome_feriado);
                setDataFeriado2(Verify_holiday[2].data_feriado);

                setNomeFeriado3(holiday[0].nome);
                setDataFeriado3(data_format_0);

            } else if (Index_feriado == (holiday.length - 2)){
                let day_0 = holiday[0].data.substring(3, 5);
                let month_0 = holiday[0].data.substring(0, 2);
                let year_0 = Data_atual[2] + 1;

                let data_format_0 = `${day_0}/${month_0}/${year_0}`;

                let day_1 = holiday[1].data.substring(3, 5);
                let month_1 = holiday[1].data.substring(0, 2);
                let year_1 = Data_atual[2] + 1;

                let data_format_1 = `${day_1}/${month_1}/${year_1}`;


                setNomeFeriadoToday(Verify_holiday[0].nome_feriado);
                setDataFeriadoToday(Verify_holiday[0].data_feriado);

                setNomeFeriado1(Verify_holiday[1].nome_feriado);
                setDataFeriado1(Verify_holiday[1].data_feriado);

                setNomeFeriado2(holiday[0].nome);
                setDataFeriado2(data_format_0);

                setNomeFeriado3(holiday[1].nome);
                setDataFeriado3(data_format_1);

            } else if (Index_feriado == (holiday.length - 1)){
                let day_0 = holiday[0].data.substring(3, 5);
                let month_0 = holiday[0].data.substring(0, 2);
                let year_0 = Data_atual[2] + 1;

                let data_format_0 = `${day_0}/${month_0}/${year_0}`;

                let day_1 = holiday[1].data.substring(3, 5);
                let month_1 = holiday[1].data.substring(0, 2);
                let year_1 = Data_atual[2] + 1;

                let data_format_1 = `${day_1}/${month_1}/${year_1}`;

                let day_2 = holiday[2].data.substring(3, 5);
                let month_2 = holiday[2].data.substring(0, 2);
                let year_2 = Data_atual[2] + 1;

                let data_format_2 = `${day_2}/${month_2}/${year_2}`;

                setNomeFeriadoToday(Verify_holiday[0].nome_feriado);
                setDataFeriadoToday(Verify_holiday[0].data_feriado);

                setNomeFeriado1(holiday[0].nome);
                setDataFeriado1(data_format_0);

                setNomeFeriado2(holiday[1].nome);
                setDataFeriado2(data_format_1);

                setNomeFeriado3(holiday[2].nome);
                setDataFeriado3(data_format_2);

            } else{ 

                setNomeFeriadoToday(Verify_holiday[0].nome_feriado);
                setDataFeriadoToday(Verify_holiday[0].data_feriado);

                setNomeFeriado1(Verify_holiday[1].nome_feriado);
                setDataFeriado1(Verify_holiday[1].data_feriado);

                setNomeFeriado2(Verify_holiday[2].nome_feriado);
                setDataFeriado2(Verify_holiday[2].data_feriado);

                setNomeFeriado3(Verify_holiday[3].nome_feriado);
                setDataFeriado3(Verify_holiday[3].data_feriado);
            }

        } else{
            
            setTitleFeriadoToday("Este mês não tem Feriado!");

            setNomeFeriadoToday('-');
            setDataFeriadoToday('-');

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

        return_Next_holiday(Feriados_list);

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
                        <p><span>Nome do feriado:</span><span className='span_Dados'> {nome_Feriado_today}</span></p>
                        <p><span>Data:</span><span className='span_Dados'> {data_Feriado_today}</span></p>
                        <div className='border_botton_decoration'></div>
                    </div>
                    <div className="next-holidays">
                        <div className='holiday'>
                            <p className='title_next_holidays'>Próximos feriados:</p>
                            <p><span>Nome do feriado:</span><span className='span_Dados'> {nome_Feriado_1}</span></p>
                            <p><span>Data:</span><span className='span_Dados'> {data_Feriado_1}</span></p>
                            <div className='border_botton_decoration'></div>
                        </div>
                        <div className='holiday'>
                            <p className='title_next_holidays'>Próximos feriados:</p>
                            <p><span>Nome do feriado:</span><span className='span_Dados'> {nome_Feriado_2}</span></p>
                            <p><span>Data:</span><span className='span_Dados'> {data_Feriado_2}</span></p>
                            <div className='border_botton_decoration'></div>
                        </div>
                        <div className='holiday'>
                            <p className='title_next_holidays'>Próximos feriados:</p>
                            <p><span>Nome do feriado:</span><span className='span_Dados'> {nome_Feriado_3}</span></p>
                            <p><span>Data:</span><span className='span_Dados'> {data_Feriado_3}</span></p>
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