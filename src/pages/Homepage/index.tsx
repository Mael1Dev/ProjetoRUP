import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import './styles.css'
import img from '../../assets/uno_velho.png'
import { Modal } from "../../components/Modal";
import carro from '../../assets/carro.png'
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

    return (
      <div className="home-container">
        <div className="home-title">
          <img id="imagem" src={carro} alt="Pesquisar Carro" />
          <div className="btn-login">
            <button onClick={changePageLogin}>Login</button>
            <button onClick={changePageRegister}>Cadastre-se</button>
          </div>
        </div>
        <div className="header-select-input-class">
          <div className="header-select-inputs">
            <select size={1} className="select-header-one">
              <option selected>Unidade?</option>
              <option>São Paulo</option>
              <option>Rio de Janeiro</option>
              <option>Espirito Santo</option>
            </select>
            <select size={1} className="select-header-two">
              <option selected>localidade???</option>
              <option>200km</option>
              <option>300km</option>
              <option>400km+</option>
            </select>
            <select size={1} className="select-header-three">
              <option selected>Modelos???</option>
              <option>Uno com escada</option>
              <option>Versa de uber</option>
              <option>moby da telefonica</option>
            </select>
          </div>
          <div className="header-select-inputs">
            <select size={1} className="select-header-four">
              <option selected>Ano do carro???</option>
              <option>zero de fabrica?</option>
              <option>2000 e hoje</option>
              <option>rodado</option>
            </select>
            <select size={1} className="select-header-five">
              <option selected>quanto quer pagar?</option>
              <option>1real</option>
              <option>1000pila</option>
              <option>de graça?</option>
            </select>
            <select size={1} className="select-header-six">
              <option selected>versão</option>
              <option>state wagon</option>
              <option>suv</option>
              <option>???</option>
            </select>
          </div>
        </div>
        <div className="filter-button">
          <button> APLICAR FILTRO </button>
        </div>
        <div className="home-content">
          <div className="home-content-auction">
            <div onClick={openModal} className="home-auction-card">
              <img src={img}></img>
              <h4>Carro novinho</h4>
              <span>
                Carro de leilão Carro de leilão Carro de leilão Carro de leilão{" "}
              </span>
              <span>R$ 10.000,00</span>
            </div>
            <div className="home-auction-card">
              <img src={img}></img>
              <h4>Carro novinho</h4>
              <span>
                Carro de leilão Carro de leilão Carro de leilão Carro de leilão{" "}
              </span>
              <span>R$ 10.000,00</span>
            </div>
            <div className="home-auction-card">
              <img src={img}></img>
              <h4>Carro novinho</h4>
              <span>
                Carro de leilão Carro de leilão Carro de leilão Carro de leilão{" "}
              </span>
              <span>R$ 10.000,00</span>
            </div>
            <div className="home-auction-card">
              <img src={img}></img>
              <h4>Carro novinho</h4>
              <span>
                Carro de leilão Carro de leilão Carro de leilão Carro de leilão{" "}
              </span>
              <span>R$ 10.000,00</span>
            </div>
          </div>
        </div>
        {showModal && (
          <Modal
            header="Fiat Uno zero bala"
            setShowModal={setShowModal}
            cancelFunction={() => {}}
            confirmFunction={() => {}}
            loadingModal=""
            confirmText="Dar lance"
          >
            <div className="home-auction-card">
              <img src={img}></img>
              <h4>Carro novinho</h4>
              <span>
                Carro de leilão Carro de leilão Carro de leilão Carro de leilão{" "}
              </span>
              <span>R$ 10.000,00</span>
              <a>
                DESCRIÇÃO - DESCRIÇÃO - DESCRIÇÃO - DESCRIÇÃO - DESCRIÇÃO -
                DESCRIÇÃO - DESCRIÇÃO - DESCRIÇÃO - DESCRIÇÃO - DESCRIÇÃO -
                DESCRIÇÃO - DESCRIÇÃO - DESCRIÇÃO -{" "}
              </a>
            </div>
          </Modal>
        )}
      </div>
    );
}