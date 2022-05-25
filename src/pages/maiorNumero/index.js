import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Index(){
    const [numeros, setNumeros] = useState([]);
    const [numero, setNumero] = useState(0);
    const [resposta, setResposta] = useState('  ');

    function adicionar(){
        setNumeros([...numeros, numero])
        setNumero('');
    }

    async function verificar(){
        const resp = await axios.post('http://localhost:5000/dia2/maiorNumero', numeros);
        setResposta(resp.data.maiorn); 
    } 

    return (
        <main>
            <Link to='/'> HOME </Link>
            <h1>
                Maior Numero
            </h1>
            Numero: <input type='text' value={numero} onChange={e => (setNumero(Number(e.target.value)))}/> 
            <button onClick={adicionar}> Adicionar Numero </button>

            <div>
                {numeros.map(item =>
                    <div>{item}</div>
                )}
            </div>


            <div>
            <button onClick={verificar}> 
                Verificar 
            </button> 
                Maior numero é ? {resposta}
            </div>

        </main>
    )
}