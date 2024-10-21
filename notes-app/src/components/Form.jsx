import {useState,React} from 'react'

export default function Form({notes,setNotes}) {

    const initialNotes = {
        id:'',
        title:'',
        body:''
    }
    const [note,setNote]=useState(initialNotes);
    
    const addNote = (ev) => {
        ev.preventDefault();
        if (note.title === '' || note.body === '') {
            return
        }
        setNotes([
            ...notes,
            {
                ...note,
                id: Math.max(...notes.map(note => note.id)) + 1
            }
        ]);
    }
    return (

        <form onSubmit={(ev) => addNote(ev)}>
            <label htmlFor="title">Titulo</label>
            <input id='title' type="text" onChange={(ev) => setNote({ ...note, title: ev.target.value })} />
            <br />
            <label htmlFor="body">Body</label>
            <input id='body' type="text" onChange={(ev) => setNote({ ...note, body: ev.target.value })} />
            <br />
            <button >Agregar</button>
        </form>

    )
}
