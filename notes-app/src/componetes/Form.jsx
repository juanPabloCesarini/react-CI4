import { useState, React } from 'react'

const Form = ({notes, setNotes}) => {
    const initialNote = {
        id: '',
        title: '',
        body: '',
    }
    const [note, setNote] = useState(initialNote);

    const addNote = (ev) => {
        ev.preventDefault();

        if (note.title === "" || note.body === "") {
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

    )
}

export default Form

