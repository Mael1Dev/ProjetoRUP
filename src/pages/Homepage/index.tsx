import { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";


export default function Homepage(){
    

  const navigate = useNavigate()
  const trocaPagina = () =>{
    navigate('/login')
  }
    return(
    <Fragment>
    <h1>Tchau World!</h1>
    <button onClick={trocaPagina}>Voltar</button>
    </ Fragment>
    );
}