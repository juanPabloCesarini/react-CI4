import { useState, React } from 'react'

const Note = ({ note, deleteNote, updateNote, setError, error }) => {
    const [modeEdit, setModeEdit] = useState(false)
    const [item, setItem] = useState(note)
    const toggle = (e) => {
        e.preventDefault();
        setModeEdit(!modeEdit);
        setItem(note);
        setError({
            "title": "",
            "body": ""
        });
    }

    const edit = async (e) => {
        e.preventDefault();
        if (await updateNote(item)) {
            setModeEdit(false);
            setError({
                "title": "",
                "body": ""
            });
        }


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
                            <div className="field">
                                <label className="label" htmlFor="">Titulo</label>
                                <div className="control">
                                    <input className="input" type="text" value={item.title} onChange={(ev) => setItem({ ...item, title: ev.target.value })} />
                                </div>
                                <span className="help is-danger">{error.title}</span>
                            </div>

                            : <div>Titulo: {note.title}</div>
                    }
                    {
                        modeEdit ?
                            <div className="field">
                                <label className="label" htmlFor="">Cuerpo</label>
                                <div className="control">
                                    <textarea className="textarea" value={item.body} onChange={(ev) => setItem({ ...item, body: ev.target.value })}></textarea>
                                </div>
                                <span className="help is-danger">{error.body}</span>
                            </div>

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