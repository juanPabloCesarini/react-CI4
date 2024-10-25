import { useState, React } from 'react'

export default function Form({ notes, setNotes }) {

    const initialNotes = {
        id: '',
        title: '',
        body: ''
    }
    const [note, setNote] = useState(initialNotes);

    const addNote = (ev) => {
        ev.preventDefault();
        if (note.title.trim() === '' || note.body.trim() === '') {
            return
        }
        setNotes([
            ...notes,
            {
                ...note,
                id: notes.length > 0 ? Math.max(...notes.map(note => note.id)) + 1 : 1
            }
        ]);
        setNote(initialNotes);
    }
    return (
        <div className="has-background-success-light p-3">
            <form onSubmit={(ev) => addNote(ev)}>
                <div className="field">
                    <label className='label' htmlFor="title">Titulo</label>
                </div>
                <div className="control">
                    <input className="input" id='title' value={note.title} type="text" onChange={(ev) => setNote({ ...note, title: ev.target.value })} />
                </div>
                <br />
                <div className="field">
                    <label className='label' htmlFor="body">Body</label>
                </div>
                <br />
                <div className="control">
                    <textarea className="textarea" id='body' value={note.body} type="text" onChange={(ev) => setNote({ ...note, body: ev.target.value })}></textarea>
                </div>
                <br />
                <button className='button is-primary'>Agregar</button>
            </form>
        </div>


    )
}
