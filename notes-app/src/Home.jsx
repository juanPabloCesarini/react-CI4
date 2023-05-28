import { useState, React } from 'react'

export default function Dashboard() {

    const [notes, setNotes] = useState(
        [
            { id: 1, title: 'nota1', body: 'lorem ipsum' },
            { id: 2, title: 'nota2', body: 'lorem ipsum' },
            { id: 3, title: 'nota3', body: 'lorem ipsum' },
            { id: 4, title: 'nota4', body: 'lorem ipsum' },
            { id: 5, title: 'nota5', body: 'lorem ipsum' },
        ]
    );

    const changeState = ()=>{
        const reg = { id: 6, title: 'nota6', body: 'lorem ipsum' };

        setNotes(notes.concat(reg));
    }
    
    return (
        <>

            <h1>Listado de notas</h1>
            <ul>
                {
                    // la función map() sirve para iterar objetos
                    notes.map(note => {
                        return <li>Id: {note.id} Titulo: {note.title} Body: {note.body}</li>;
                    })
                }
            </ul>
            <button onClick={()=>changeState()}>Cambiar Estado</button>
        </>
        

    )
}