import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function NoteList() {
    const [notes, setNotes] = useState([])
    const [loading, setLoading] = useState(true)
    
    function fetchNotes() {
        console.log('Fetching notes...')
        fetch('http://localhost:3000/api/get-notes')
        .then(response => response.json())
        .then(data => { setNotes(data); setLoading(false); })
    }

    useEffect(() => {
        fetchNotes()
    }, [])

    return (
        <>
        { loading ?
            (<p>Loading notes...</p>)
            :
            (
                <div className="row">
                    { notes.map((note, index)=> (
                        <div key={note.id} className={`col-sm-4 ${ index % 2 === 0 ? 'bg-danger' : 'bg-success'} d-flex justify-content-center align-items-center`} style={{minHeight: "300px"}}>
                            <Link to={`/notes/${note.id}`} style = {{color: "white", textDecoration: "none"}}>{note.title}</Link>
                        </div>
                    ))}
                </div>
            )
        }
        </>
    )

}

export default NoteList
