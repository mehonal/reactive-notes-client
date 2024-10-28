import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import NoteListItem from './NoteListItem.jsx'


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
                        <NoteListItem key={index} index={index} note={note} />
                    ))}
                </div>
            )
        }
        </>
    )

}

export default NoteList
