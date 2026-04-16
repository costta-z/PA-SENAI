import './style.css'
// Certifique-se de que o caminho realmente sobe duas pastas e entra em 'assets'
import logoBahia from '../../assets/logo-bahia-3.png'

export default function Header () {
    return (
        <header className='header'>
            <div className="header-content">
                {/* O src usa chaves {} para ler a variável importada */}
                <img src={logoBahia} alt="Logo do Esporte Clube Bahia" className="logo" />
                <div className="title">Sistema de Jogadores</div>
            </div>
        </header>
    )
}