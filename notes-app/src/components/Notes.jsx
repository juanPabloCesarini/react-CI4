import { useState, React } from 'react'
import Note from './Note'
import axios from 'axios'


const Notes = ({ notes, setNotes }) => {

    const [error, setError] = useState({
        "title": "",
        "body": ""
    })
    const deleteNote = (id, e) => {
        e.preventDefault();
        const newNotes = notes.filter(note => id !== note.id);
        setNotes(newNotes);
    }

    const updateNote = (newNote) => {

        let response = axios.put(`http://localhost:8080/api/notes/${newNote.id}`, newNote)
            .then(payload => {
                console.log(payload.data.data);
                let { id } = payload.data.data;
                setNotes(
                    notes.map(note => note.id === id ? payload.data.data : note)
                );
                return true;

            })
            .catch(errors => {
                console.log(errors.response.data.messages);
                setError(errors.response.data.messages)
                return false;
            });
        return response;
    }
    return (
        <div className='columns is-multiline'>
            {
                notes.map(note => {
                    return <Note setError={setError} error={error} key={note.id} updateNote={updateNote} note={note} deleteNote={deleteNote}></Note>
                })
            }
        </div>
    )
}
export default Notes;
