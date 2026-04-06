import './style.css'
// Volta duas pastas e entra na pasta assets
import logoBahia from '../../assets/logo-bahia-2.jpg'

export default function Header () {
    return (
        <header className='header'>
            <div className="header-content">
                <img src={logoBahia} alt="Logo do Esporte Clube Bahia" className="logo" />
                <div className="title">Sistema de Jogadores</div>
            </div>
        </header>
    )
}