import { useState, useEffect, React } from 'react'
import Form from './components/Form';
import Notes from './components/Notes';
import axios from 'axios';

export default function Dashboard() {

    useEffect(() => {
        axios.get('http://localhost:8080/api/notes')
            .then((payload) => {
                console.log(payload)
            }).catch((err) => {
                console.log(err);
            })
    }, []);
    const [notes, setNotes] = useState([]);




    return (
        <>
            <div className="container">
                <h1 className='title has-text-centered mt-5'>Listado de notas</h1>
                <Notes notes={notes} setNotes={setNotes}></Notes>
                <Form notes={notes} setNotes={setNotes}></Form>
            </div>
        </>
    )
}