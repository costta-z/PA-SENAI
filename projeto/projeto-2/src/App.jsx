import './App.css'
import Adicionarjogador from './components/AdicionarJogadores'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {

  return (
    <>
      <div className='app'>
        <Header/>
          <main>
            <Adicionarjogador/>
          </main>
        <Footer/>
            </div>
    </>
  )
}

export default App
