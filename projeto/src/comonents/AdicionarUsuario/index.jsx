import { useState } from 'react'
import './style.css'

export default function AdicionarUsuario() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [listaDeUsuarios, setListaDeUsuario] = useState([])

    const handlerAdicionarUsuario = (event) => {
        event.preventDefault()
        if (nome && email) {
            setListaDeUsuario([...AdicionarUsuario, {nome, email}])

            setNome
            setEmail
        }
    }

    return (
        <div className='formulario'>
            <h2>Adicionar usuário</h2>
            <form onSubmit={handlerAdicionarUsuario}>
                <input type="text"
                       value={nome}
                       onChange={(e) => setNome(e.target.value)}                 
                />

                <input type="text"
                       value={email}
                       onChange={(e) => setEmail(e.target.value)}                 
                />
                <BUtton type='submit'>Adicionar</BUtton>
            </form>

            <hr />

            <h2>Usuários Adicionados</h2>
            <ul>
                {listaDeUsuarios.map((usuario, index) => (
                    <li key={index}>
                        {usuario.nome} - {usuario.email}
                    </li>
                ))}
            </ul>

        </div>
    )
}