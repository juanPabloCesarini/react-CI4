import React from 'react'
import Note from './Note'

 const Notes = ({notes,setNotes})=> {
    const deleteNote = (id) => {
        
        const newNotes =notes.filter(note => id !== note.id );
       setNotes(newNotes);
    }
    return (
        <ul>
            {
                notes.map(note => {
                    return <Note key={note.id} note={note} deleteNote={deleteNote}></Note>
                })
            }
        </ul>
    )
}
export default Notes;
