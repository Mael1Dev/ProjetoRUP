import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import './styles.css'
import img from '../../assets/uno_velho.png'
//acrescentar o painel de filtro
//ajustar o header
//melhorar os botões

export default function Homepage(){
    

  const navigate = useNavigate()
  const trocaPagina = () =>{
    navigate('/login')
  }
    return(
      <div className="home-container">
        <nav className="home-nav">
          <div>
            <span>RUP Leilões</span>
          </div>
          <div>
          <button onClick={trocaPagina}>Login</button>
          <button onClick={trocaPagina}>Cadastre-se</button>
          </div>
        </nav>
        <div className="home-title">
          <h1 className="home-title-txt">
            RUP Leilões
          </h1>
        </div>
        <div className="home-content">
          <div className="home-content-auction">
            <div className="home-auction-card">
              <img src={img}></img>
              <h4>Carro novinho</h4>
              <span>Carro de leilão Carro de leilão Carro de leilão Carro de leilão </span>
              <span>R$ 10.000,00</span>
            </div>
            <div className="home-auction-card">
              <img src={img}></img>
              <h4>Carro novinho</h4>
              <span>Carro de leilão Carro de leilão Carro de leilão Carro de leilão </span>
              <span>R$ 10.000,00</span>
            </div>
            <div className="home-auction-card">
              <img src={img}></img>
              <h4>Carro novinho</h4>
              <span>Carro de leilão Carro de leilão Carro de leilão Carro de leilão </span>
              <span>R$ 10.000,00</span>
            </div>
            <div className="home-auction-card">
              <img src={img}></img>
              <h4>Carro novinho</h4>
              <span>Carro de leilão Carro de leilão Carro de leilão Carro de leilão </span>
              <span>R$ 10.000,00</span>
            </div>
          </div>
        </div>
      </div>
    );
}