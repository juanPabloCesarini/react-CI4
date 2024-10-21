import React from 'react'

const Note = ({ note,deleteNote }) => {
    return (
        <li style={{ marginBottom: '.8em' }}>Id: {note.id} Id: {note.title} Id: {note.body}
            <button onClick={() => deleteNote(note.id)}>X</button>
        </li>
    )
}
export default Note;