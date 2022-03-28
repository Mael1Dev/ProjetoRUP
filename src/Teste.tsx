import { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import Tabela from "./components/Tabela";
import imagem from './assets/teste.png';


export default function Teste(){
    

  const navigate = useNavigate()
  const trocaPagina = () =>{
    navigate('/inicio')
  }
    return(
    <Fragment>
    <h1>Tchau World!</h1>
    <button onClick={trocaPagina}>Voltar</button>
    </ Fragment>
    );
}