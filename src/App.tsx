import { Fragment, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { useNavigate } from 'react-router-dom'
import Tabela from './components/Tabela'



export default function App() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [count, setCount] = useState(0)
  const trocaPagina = () =>{
    navigate('/teste')
  }

  {/* <Fragment>
  <h1>Hello World!</h1>
  <button onClick={trocaPagina}>Submit</button>
  </ Fragment> 
 */}

  return (
    <div className="container">
    <div className="container-login">
      <div className="wrap-login">
        <form className="login-form">
          <span className="login-form-title"> Bem vindo ao RUP! </span>

          <span className="login-form-title">
            {/* <img src={jpIMG} alt="Jovem Programador" /> */}
          </span>

          <div className="wrap-input">
            <input
              className={email !== "" ? "has-val input" : "input"}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span className="focus-input" data-placeholder="Email"></span>
          </div>

          <div className="wrap-input">
            <input
              className={password !== "" ? "has-val input" : "input"}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="focus-input" data-placeholder="Password"></span>
          </div>

          <div className="container-login-form-btn">
            <button onClick={trocaPagina} className="login-form-btn">Login</button>
          </div>

          <div className="text-center">
            <span className="txt1">Não possui conta? </span>
            <a className="txt2" href="#">
              Criar conta
            </a>
          </div>
        </form>
      </div>
    </div>
  </div>

  );
}




