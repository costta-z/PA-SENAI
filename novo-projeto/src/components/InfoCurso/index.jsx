import { useState } from 'react'
import './style.css'

function InfoCurso() {

    const [nome, setNome] = useState("Programação de aplicativas")
    const [cargaHoraria, setCargaHoraria] = useState(90)
    const [local, setLocal] = useState("SENAI")
    
    return (
        <div className="info-curso">
            <p>Dados do Curso: </p>
            <p>Nome: { nome }</p>
            <p>Carga Horária: { cargaHoraria }</p>
            <p>Local: { local }</p>
        </div>
    )
}

export default InfoCurso