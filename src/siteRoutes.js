import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Corp from './pages/corPrimaria'
import Freq from './pages/Frequencia'
import Ingresso from './pages/Ingresso'
import Maiorn from './pages/maiorNumero'

export default function SiteRoutes() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/corp' element={<Corp />} />
            <Route path='/freq' element={<Freq />} />
            <Route path='/ingresso' element={<Ingresso />} />
            <Route path='/maiorn' element={<Maiorn />} />
        </Routes>
        </BrowserRouter>
    )
}