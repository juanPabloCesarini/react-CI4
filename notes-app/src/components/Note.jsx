import { useState, React } from 'react'

const Note = ({ note, deleteNote, updateNote }) => {
    const [modeEdit, setModeEdit] = useState(false)
    const [item, setItem] = useState(note)
    const toggle = (e) => {
        e.preventDefault();
        setModeEdit(!modeEdit);
        setItem(note);
    }

    const edit = (e) => {
        e.preventDefault();
        updateNote(item);
        setModeEdit(false);
    }
    return (
        <div className='column is-one-quarter'>
            <div className="card">
                <header className="card-header">
                    <p className="card-header-title">
                        Id: {note.id}
                    </p>
                </header>
            </div>
            <div className="card-content">
                <p className="card-content">
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

                </p>
            </div>
            <footer className="card-footer">
                <a href="{'/'}" onClick={(e) => toggle(e)} className="card-footer-item">{modeEdit ? 'Cancelar' : 'Editar'}</a>
                {
                    modeEdit ?
                        <a href="{'/'}" onClick={(e) => edit(e)} className="card-footer-item">Guardar</a>
                        :
                        <a href="{'/'}" onClick={(e) => deleteNote(note.id, e)} className="card-footer-item">Eliminar</a>
                }
            </footer>



        </div>
    )
}
export default Note;   