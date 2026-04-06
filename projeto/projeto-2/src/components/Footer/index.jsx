import './style.css'

export default function Footer () {
    return (
        <footer className='footer'>
            <p>
                &copy; {new Date().getFullYear()} 
                <br />
                <strong>SENAI - Bahia</strong>
            </p>
        </footer>
    )
}