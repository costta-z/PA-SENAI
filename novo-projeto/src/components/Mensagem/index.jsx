import { flushSync } from 'react-dom'
import './style.css'

function Mensagem() {
    return (
        <div className='mensagem'>
            <h1>Componente</h1>
            <p>Este é um componente com uma mensagem simples.</p>
            <hr />
        </div>
    )
}

export default Mensagem