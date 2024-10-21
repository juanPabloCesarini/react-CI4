import {useState,React} from 'react'

export default function Dashboard(){
    
    const initialNotes = {
        id:'',
        title:'',
        body:''
    }
    const [notes, setNotes] = useState([
        {id:1, title:'nota1',body:'lorem ipsum'},
        {id:2, title:'nota2',body:'lorem ipsum'},
        {id:3, title:'nota3',body:'lorem ipsum'},
        {id:4, title:'nota4',body:'lorem ipsum'},
        {id:5, title:'nota5',body:'lorem ipsum'},
    ]);

    const [note,setNote]=useState(initialNotes);

    const addNote = (ev) => {
        ev.preventDefault();
        if (note.title === ''|| note.body==='' ){
            return
        }
        setNotes([
            ...notes,
            {
                ...note,
                id:Math.max(...notes.map(note => note.id))+1
            }
        ]);
    }
    return (
        <>
        
        <h1>Listado de notas</h1>
        <ul>
        {
            notes.map(note =>{
                return <li key={note.id}>Id: {note.id} Id: {note.title} Id: {note.body}</li>
            })
        }
        </ul>
        <form onSubmit={(ev)=>addNote(ev)}>
            <label htmlFor="title">Titulo</label>
            <input id='title' type="text" onChange={(ev)=>setNote({...note,title:ev.target.value})} />
            <br />
            <label htmlFor="body">Body</label>
            <input id='body' type="text" onChange={(ev)=>setNote({...note,body:ev.target.value})}/>
            <br />
            <button >Agregar</button>
        </form>
        
        </>
    )
}