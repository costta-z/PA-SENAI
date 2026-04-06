import { useState } from 'react'
import './style.css'

export default function Adicionarjogador() {
    const [nome, setNome] = useState('')
    const [posicao, setPosicao] = useState('')
    const [listaDeJogadores, setListaDejogador] = useState([])

    const handlerAdicionarjogador = (event) => {
        event.preventDefault()
        if (nome && posicao) {
            // Correção: Usar o estado anterior 'listaDeJogadores'
            setListaDejogador([...listaDeJogadores, { nome, posicao }])

            // Correção: Chamar as funções para limpar os campos
            setNome('')
            setPosicao('')
        }
    }

    return (
        <div className='formulario'>
            <h2>Adicionar usuário</h2>
            <form onSubmit={handlerAdicionarjogador}>
                <input 
                    type="text"
                    placeholder="Digite o nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}                 
                />

                <input 
                    type="posicao"
                    placeholder="Digite a posição"
                    value={posicao}
                    onChange={(e) => setPosicao(e.target.value)}                 
                />
                <button type='submit'>Adicionar</button>
            </form>

            <hr />

            <h2>Jogadores Adicionados</h2>
            <ul>
                {listaDeJogadores.map((jogador, index) => (
                    <li key={index}>
                        <span><strong>{jogador.nome}</strong></span>
                        <span>{jogador.posicao}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}