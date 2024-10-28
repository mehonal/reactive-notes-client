import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import NoteListItem from './NoteListItem.jsx'
import useNotes from '../hooks/useNotes.jsx'


function NoteList() {
    const { notes, setNotes, loadingNotes, setLoadingNotes, fetchNotes } = useNotes(); 

    useEffect(() => {
        fetchNotes()
    }, [])

    return (
        <>
        { loadingNotes ?
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
