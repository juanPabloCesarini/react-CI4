import { useState, React } from 'react'

export default function Dashboard() {

    const initialNote = {
        id: '',
        title: '',
        body: '',
    }
    const [notes, setNotes] = useState(
        [
            { id: 1, title: 'nota1', body: 'lorem ipsum' },
            { id: 2, title: 'nota2', body: 'lorem ipsum' },
            { id: 3, title: 'nota3', body: 'lorem ipsum' },
            { id: 4, title: 'nota4', body: 'lorem ipsum' },
            { id: 5, title: 'nota5', body: 'lorem ipsum' },
        ]
    );

    /*     const changeState = ()=>{
            const reg = { id: 6, title: 'nota6', body: 'lorem ipsum' };
    
            setNotes(notes.concat(reg));
        }
         */
    const [note, setNote] = useState(initialNote);

    const addNote = (ev) => {
        ev.preventDefault();

        if(note.title==="" || note.body ===""){
            return
        }
        setNotes([
            ...notes,
            {
                ...note,
                id: Math.max(...notes.map(note => note.id)) + 1
            }
        ]); 
       // console.log(Math.max(...notes.map(note => note.id)) + 1)
    }
    return (
        <>

            <h1>Listado de notas</h1>
            <ul>
                {
                    // la función map() sirve para iterar objetos
                    notes.map(note => {
                        return <li key={note.id}>Id: {note.id} Titulo: {note.title} Body: {note.body}</li>;
                    })
                }
            </ul>
            <form onSubmit={(ev) => addNote(ev)}>
                <label htmlFor="title">
                    Titulo
                </label>
                <input type="text" name="" id="title" onChange={(e) => setNote({ ...note, title: e.target.value })} />
                <br />
                <label htmlFor="body">
                    Cuerpo
                </label>
                <input type="text" name="" id="body" onChange={(e) => setNote({ ...note, body: e.target.value })} />
                <br />
                <button>Agregar</button>
            </form>
            {/* <button onClick={()=>changeState()}>Cambiar Estado</button> */}
            
        </>


    )
}