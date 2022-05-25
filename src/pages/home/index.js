import { Link } from "react-router-dom"

export default function Index(){
    return (
        <main>
            <h1>
                Home
            </h1>
                <ol>
                    <li> <Link to='/corp'> Cor Primaria </Link></li>
                    <li> <Link to='/ingresso'> Ingresso </Link></li>
                    <li> <Link to='/freq'> Frequencia </Link></li>
                    <li> <Link to='/maiorn'> Maior Numero </Link></li>
                </ol>
        </main>
    )
}