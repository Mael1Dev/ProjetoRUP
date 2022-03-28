import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import App from './App';
import Teste from './Teste';


export default function Router(){
    return(
        <BrowserRouter>
        <Routes>
        <Route path='*' element={<Navigate to={'/inicio'} />} />
        <Route path='/inicio' element={<App/>} />
        <Route path='/teste' element={<Teste/>} />
        </Routes>
        </BrowserRouter>
    );
}