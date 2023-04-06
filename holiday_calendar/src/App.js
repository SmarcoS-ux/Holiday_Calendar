import React, {useState, useEffect} from 'react';
import './App.css';

import Main from './Components/Pages/Main/';
import Dados from './Components/Dados/index.js';

export default function App(){
    const [title_Feriado, setTitleFeriadoToday] = useState('Testando');
    const [nome_Feriado_today, setNomeFeriadoToday] = useState();
    const [data_Feriado_today, setDataFeriadoToday] = useState();

    const [nome_Feriado_1, setNomeFeriado1] = useState();
    const [data_Feriado_1, setDataFeriado1] = useState();
    
    const [nome_Feriado_2, setNomeFeriado2] = useState();
    const [data_Feriado_2, setDataFeriado2] = useState();

    const [nome_Feriado_3, setNomeFeriado3] = useState();
    const [data_Feriado_3, setDataFeriado3] = useState();

    const Data_atual = () => {
        let data = new Date();
        
        const options = {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        }
    
        let data_format = data.toLocaleString('pt-BR', options);
    
        let day = data_format.substring(0, 2);
        let month = data_format.substring(3, 5);
    
        return day + '/' + month;
    };
    
    
    const Verifica_feriado = (feriados) => {
        let dia_atual = parseInt(Data_atual().substring(0, 2));
        let mes_atual = parseInt(Data_atual().substring(3, 5));
    
        let Verify = 0;
        let Pass = 0;
    
        let Index_max = (feriados.length);
    
        for (let feriado in feriados){
            let Nome_feriado = feriados[feriado].nome;
            let Data_feriado = feriados[feriado].data;
            let dia_feriado = parseInt(feriados[feriado].data.substring(3, 5));
            let mes_feriado = parseInt(feriados[feriado].data.substring(0, 2));
    
            if (mes_feriado == mes_atual){
                /*console.log("Este mês tem feriado.");
                console.log("Nome do feriado: " + Nome_feriado);
                console.log("Data do feriado: " + Data_feriado + '\n');*/

            
                
                Verify = parseInt(feriado);
                Pass = 1;
                
                break;
            } else if (mes_feriado > mes_atual){
                Verify = parseInt(feriado);
                Pass = 2;
                
                break;
            }
        }
    
        /*Próximos feriados*/
        if (Pass == 1){
            
            for (let count=0; count < feriados.length; count++){
    
                if (Verify+1 < Index_max){
                    let Nome_feriado = feriados[Verify+1].nome;
                    let Data_feriado = feriados[Verify+1].data;
    
                    /*console.log("Próximo feriado.");
                    console.log("Nome do feriado: " + Nome_feriado);
                    console.log("Data do feriado: " + Data_feriado + '\n');*/
    
                    break;
    
                } else if (Verify < Index_max - 1){
                    let Nome_feriado = feriados[0].nome;
                    let Data_feriado = feriados[0].data;
    
                    /*console.log("Próximo feriado.");
                    console.log("Nome do feriado: " + Nome_feriado);
                    console.log("Data do feriado: " + Data_feriado + '\n');*/
    
                    break;
                
                } else{
                    let Nome_feriado = feriados[0].nome;
                    let Data_feriado = feriados[0].data;
    
                    /*console.log("Próximo feriado.");
                    console.log("Nome do feriado: " + Nome_feriado);
                    console.log("Data do feriado: " + Data_feriado + '\n');*/
    
                    break;
                }
            }
    
            for (let count=0; count < feriados.length; count++){
                if (Verify+2 < Index_max){
    
                    let Nome_feriado = feriados[Verify+2].nome;
                    let Data_feriado = feriados[Verify+2].data;
                
                    /*console.log("Próximo feriado.");
                    console.log("Nome do feriado: " + Nome_feriado);
                    console.log("Data do feriado: " + Data_feriado + '\n');*/
    
                    break;
    
                } else if (Verify < Index_max - 2){
                    let Nome_feriado = feriados[0].nome;
                    let Data_feriado = feriados[0].data;
    
                    /*console.log("Próximo feriado.");
                    console.log("Nome do feriado: " + Nome_feriado);
                    console.log("Data do feriado: " + Data_feriado + '\n');*/
    
                    break; 
                
                } else if (Verify < Index_max - 1){
                    let Nome_feriado = feriados[0].nome;
                    let Data_feriado = feriados[0].data;
    
                    /*console.log("Próximo feriado.");
                    console.log("Nome do feriado: " + Nome_feriado);
                    console.log("Data do feriado: " + Data_feriado + '\n');*/
    
                    break; 
                
                } else{
                    let Nome_feriado = feriados[1].nome;
                    let Data_feriado = feriados[1].data;
                    
                    /*console.log("Próximo feriado.");
                    console.log("Nome do feriado: " + Nome_feriado);
                    console.log("Data do feriado: " + Data_feriado + '\n');*/

                    break;
                }
            }
    
            for (let count=0; count < feriados.length; count++){
                if (Verify+3 < Index_max){
    
                    let Nome_feriado = feriados[Verify+3].nome;
                    let Data_feriado = feriados[Verify+3].data;
               
                    /*console.log("Próximo feriado.");
                    console.log("Nome do feriado: " + Nome_feriado);
                    console.log("Data do feriado: " + Data_feriado + '\n');*/

                    break;
    
                } else if (Verify < Index_max - 2){
                    let Nome_feriado = feriados[0].nome;
                    let Data_feriado = feriados[0].data;
    
                    /*console.log("Próximo feriado.");
                    console.log("Nome do feriado: " + Nome_feriado);
                    console.log("Data do feriado: " + Data_feriado + '\n');*/
    
                    break; 
                
                } else if (Verify < Index_max - 1){
                    let Nome_feriado = feriados[1].nome;
                    let Data_feriado = feriados[1].data;
    
                    /*console.log("Próximo feriado.");
                    console.log("Nome do feriado: " + Nome_feriado);
                    console.log("Data do feriado: " + Data_feriado + '\n');*/
    
                    break; 
                
                } else{
                    let Nome_feriado = feriados[2].nome;
                    let Data_feriado = feriados[2].data;
                    
                    /*console.log("Próximo feriado.");
                    console.log("Nome do feriado: " + Nome_feriado);
                    console.log("Data do feriado: " + Data_feriado + '\n');*/
    
                    break;
                }
            }    
        } 
        
        if (Pass == 2){
            for (let count=0; count < feriados.length; count++){
                let New_verify = Verify;
    
                if (New_verify < Index_max){
                    let Nome_feriado = feriados[Verify].nome;
                    let Data_feriado = feriados[Verify].data;
                    
                    /*console.log("Próximo feriado.");
                    console.log("Nome do feriado: " + Nome_feriado);
                    console.log("Data do feriado: " + Data_feriado + '\n');*/
    
                    break;
                }else{
                    let Nome_feriado = feriados[0].nome;
                    let Data_feriado = feriados[0].data;
                    
                    /*console.log("Próximo feriado.");
                    console.log("Nome do feriado: " + Nome_feriado);
                    console.log("Data do feriado: " + Data_feriado + '\n');*/
    
                    break;
                }
            }
    
            for (let count=0; count < feriados.length; count++){
                let New_verify = Verify + 1;
    
                if (New_verify < Index_max){
                    let Nome_feriado = feriados[Verify+1].nome;
                    let Data_feriado = feriados[Verify+1].data;
        
                    /*console.log("Próximo feriado.");
                    console.log("Nome do feriado: " + Nome_feriado);
                    console.log("Data do feriado: " + Data_feriado + '\n');*/
    
                    break;
                } else{
                    let Nome_feriado = feriados[1].nome;
                    let Data_feriado = feriados[1].data;
         
                    /*console.log("Próximo feriado.");
                    console.log("Nome do feriado: " + Nome_feriado);
                    console.log("Data do feriado: " + Data_feriado + '\n');*/
    
                    break;
                }
            }
    
            for (let count=0; count < feriados.length; count++){
                let New_verify = Verify + 2;
    
                if (New_verify < Index_max){
                    let Nome_feriado = feriados[Verify+2].nome;
                    let Data_feriado = feriados[Verify+2].data;
             
                    /*console.log("Próximo feriado.");
                    console.log("Nome do feriado: " + Nome_feriado);
                    console.log("Data do feriado: " + Data_feriado + '\n');*/

                    break;
                } else{
                    let Nome_feriado = feriados[2].nome;
                    let Data_feriado = feriados[2].data;
    
                    /*console.log("Próximo feriado.");
                    console.log("Nome do feriado: " + Nome_feriado);
                    console.log("Data do feriado: " + Data_feriado + '\n');*/

                    break;
                }
            }
        }
    }

    Verifica_feriado(Dados);

    return(
        <div className='App'>
            <Main
                verificar={Verifica_feriado}

                title={title_Feriado}
                nome_feriado_today={nome_Feriado_today}
                data_feriado_today={data_Feriado_today}

                nome_feriado_1={nome_Feriado_1}
                data_feriado_1={data_Feriado_1}

                nome_feriado_2={nome_Feriado_2}
                data_feriado_2={data_Feriado_2}

                nome_feriado_3={nome_Feriado_3}
                data_feriado_3={data_Feriado_3}
            />

        </div>
    );
}

