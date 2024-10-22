import { useState, React } from 'react'

const Note = ({ note, deleteNote, updateNote }) => {
    const [modeEdit, setModeEdit] = useState(false)
    const [item, setItem] = useState(note)
    const toggle = () => {
        setModeEdit(!modeEdit);
        setItem(note);
    }

    const edit = () => {
        updateNote(item);
        setModeEdit(false);
    }
    return (
        <li style={{ marginBottom: '.8em' }}>
            <div>Id: {note.id}</div>
            {
                modeEdit ?
                    <label>
                        Título
                        <input type="text" value={item.title} onChange={(ev) => setItem({ ...item, title: ev.target.value })} />
                    </label>
                    : <div>Titulo: {note.title}</div>
            }
            {
                modeEdit ?
                    <label>
                        Cuerpo
                        <input type="text" value={item.body} onChange={(ev) => setItem({ ...item, body: ev.target.value })} />
                    </label>
                    : <div>Body: {note.body}</div>
            }

            <button onClick={() => toggle()}>{modeEdit ? 'Cancelar' : 'Editar'}</button>
            {
                modeEdit &&
                <button onClick={() => edit()}>Guardar</button>
            }
            {
                !modeEdit &&
                <button onClick={() => deleteNote(note.id)}>X</button>
            }

        </li>
    )
}
export default Note;   