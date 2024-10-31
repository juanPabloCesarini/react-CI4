import { useState, React } from 'react'
import axios from 'axios';

export default function Form({ notes, setNotes }) {

    const initialNotes = {
        id: '',
        title: '',
        body: ''
    }
    const [note, setNote] = useState(initialNotes);
    const [error, setError] = useState({
        'title': '',
        'body': '',
    });

    const addNote = (ev) => {
        ev.preventDefault();

        axios.post('http://localhost:8080/api/notes', note)
            .then((payload) => {
                console.log(payload);
                setNotes([
                    ...notes,
                    payload.data.data
                ])
                setNote(initialNotes);
            })
            .catch((errors) => {
                console.log(errors.response);
                setError(errors.response.data.messages);
            })
        /*  if (note.title.trim() === '' || note.body.trim() === '') {
             return
         }
         setNotes([
             ...notes,
             {
                 ...note,
                 id: notes.length > 0 ? Math.max(...notes.map(note => note.id)) + 1 : 1
             }
         ]); */



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
                <span className="help is-danger"> {error.title}</span>
                <br />
                <div className="field">
                    <label className='label' htmlFor="body">Body</label>
                </div>
                <br />
                <div className="control">
                    <textarea className="textarea" id='body' value={note.body} type="text" onChange={(ev) => setNote({ ...note, body: ev.target.value })}></textarea>
                </div>
                <span className="help is-danger"> {error.body} </span>
                <br />
                <button className='button is-primary'>Agregar</button>
            </form>
        </div>


    )
}
