import { useState } from 'react'
import './style.css'

export default function AdicionarUsuario() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [listaDeUsuarios, setListaDeUsuario] = useState([])

    const handlerAdicionarUsuario = (event) => {
        event.preventDefault()
        if (nome && email) {
            // Correção: Usar o estado anterior 'listaDeUsuarios'
            setListaDeUsuario([...listaDeUsuarios, { nome, email }])

            // Correção: Chamar as funções para limpar os campos
            setNome('')
            setEmail('')
        }
    }

    return (
        <div className='formulario'>
            <h2>Adicionar usuário</h2>
            <form onSubmit={handlerAdicionarUsuario}>
                <input 
                    type="text"
                    placeholder="Digite o nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}                 
                />

                <input 
                    type="email"
                    placeholder="Digite o e-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}                 
                />
                <button type='submit'>Adicionar</button>
            </form>

            <hr />

            <h2>Usuários Adicionados</h2>
            <ul>
                {listaDeUsuarios.map((usuario, index) => (
                    <li key={index}>
                        <span><strong>{usuario.nome}</strong></span>
                        <span>{usuario.email}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}