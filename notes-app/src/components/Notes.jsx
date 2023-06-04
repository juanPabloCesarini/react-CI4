import React from 'react'
import Note from './Note'

const Notes = ({notes}) => {
    return (
        <ul>
            {
                // la función map() sirve para iterar objetos
                notes.map(note => {
                    return <Note key={note.id}notes={notes}></Note>
                })
            }
        </ul>
    )
}

export default Notes
