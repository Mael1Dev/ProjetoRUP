import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import './styles.css'
import img from '../../assets/uno_velho.png'
import { Modal } from "../../components/Modal";

//acrescentar o painel de filtro
//ajustar o header
//melhorar os botões

export default function Homepage(){
  
  const [showModal, setShowModal] = useState(false);
  function openModal() {
    setShowModal(true)
  }

  const navigate = useNavigate()

  const changePageLogin = () =>{
    navigate('/login')
  }
  const changePageRegister = () =>{
    navigate('/register')
  }

    return(
      <div className="home-container">
        <nav className="home-nav">
          <div>
            <span>RUP Leilões</span>
          </div>
          <div>
          <button onClick={changePageLogin}>Login</button>
          <button onClick={changePageRegister}>Cadastre-se</button>
          </div>
        </nav>
        <div className="home-title">
          <h1 className="home-title-txt">
            RUP Leilões
          </h1>
        </div>
        <div className="home-content">
          <div className="home-content-auction">
            <div onClick={openModal} className="home-auction-card">
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
        {showModal && <Modal header="Fiat Uno zero bala" setShowModal={setShowModal} cancelFunction={() =>{}} confirmFunction={() =>{}} loadingModal="" confirmText="Dar lance" >
        <div className="home-auction-card">
              <img src={img}></img>
              <h4>Carro novinho</h4>
              <span>Carro de leilão Carro de leilão Carro de leilão Carro de leilão </span>
              <span>R$ 10.000,00</span>
              <a>DESCRIÇÃO - DESCRIÇÃO - DESCRIÇÃO - DESCRIÇÃO - DESCRIÇÃO - DESCRIÇÃO - DESCRIÇÃO - DESCRIÇÃO - DESCRIÇÃO - DESCRIÇÃO - DESCRIÇÃO - DESCRIÇÃO - DESCRIÇÃO - </a>
            </div>
        </Modal>}
      </div>
    );
}