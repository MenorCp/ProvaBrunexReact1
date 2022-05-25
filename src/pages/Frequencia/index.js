import { useState } from "react"
import axios from "axios";
import { Link } from "react-router-dom";

export default function Index(){
    const [texto, setTexto] = useState('');
    const [caractere, setCaractere] = useState (0);
    const [resposta, setResposta] = useState('');

    async function calcular(){
        const resp = await axios.get(`http://localhost:5000/dia2/freqCaractere/${texto}/${caractere}`);
        setResposta(resp.data.Frequencia);
    }

    return (
        <main>
            <Link to='/'> HOME </Link>
            <h1>
                Frequencia Caractere
            </h1>
            <div>
                Texto: <input type='text' value={texto} onChange={e => (setTexto(e.target.value))}/>
            </div>
            <div>
                Caractere: <input type='text' value={caractere} onChange={e => (setCaractere(e.target.value))}/>
            </div>
            <div>
                <button onClick={calcular}>
                    Calcular
                </button>
            </div>
            <div>
                Frequencia: {resposta}
            </div>

        </main>
    )
}