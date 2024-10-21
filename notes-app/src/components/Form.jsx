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
        if (note.title.trim() === '' || note.body.trim() === '') {
            return
        }
        setNotes([
            ...notes,
            {
                ...note,
                id: notes.length >0 ?Math.max(...notes.map(note => note.id)) + 1 :1
            }
        ]);
        setNote(initialNotes);
    }
    return (

        <form onSubmit={(ev) => addNote(ev)}>
            <label htmlFor="title">Titulo</label>
            <input id='title' value={note.title} type="text" onChange={(ev) => setNote({ ...note, title: ev.target.value })} />
            <br />
            <label htmlFor="body">Body</label>
            <input id='body' value={note.body} type="text" onChange={(ev) => setNote({ ...note, body: ev.target.value })} />
            <br />
            <button >Agregar</button>
        </form>

    )
}
