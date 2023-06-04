import React from 'react'

const Note = ({note}) => {
    return (
        <li>Id: {note.id} Titulo: {note.title} Body: {note.body}</li>
  )
}

export default Note
