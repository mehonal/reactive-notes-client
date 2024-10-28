import { useCallback } from 'react'
import { useState } from 'react'


function useNotes() {
    const [notes, setNotes] = useState([])
    const [loadingNotes, setLoadingNotes] = useState(true)

    const [currentNote, setCurrentNote] = useState(null)
    const [editing, setEditing] = useState(false)
    const [loadingNote, setLoadingNote] = useState(true)
    
    function fetchNotes() {
        console.log('Fetching notes...')
        fetch('http://localhost:3000/api/get-notes')
        .then(response => response.json())
        .then(data => { setNotes(data); setLoadingNotes(false); })
    }

    function fetchNote(noteId) {
        fetch(`http://localhost:3000/api/get-note/${noteId}`)
        .then(response => response.json())
        .then(data => { setLoadingNote(false); setCurrentNote(data) })
    }

    function toggleEdit() {
        setEditing(!editing)
    }

    function handleSaveNote(event) {
        toggleEdit()
        const formData = new FormData(event.target)
        currentNote.title = formData.get('note-title')
        currentNote.content = formData.get('note-content')
        fetch(`http://localhost:3000/api/update-note/${currentNote._id}`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title: currentNote.title, content: currentNote.content})
        })
        .then(response => response.json())
        .then(data => {
            alert('Saved Note!')
        })
    }

    return {
        notes,
        setNotes,
        loadingNotes,
        setLoadingNotes,
        currentNote,
        setCurrentNote,
        editing,
        setEditing,
        loadingNote,
        setLoadingNote,
        fetchNotes,
        fetchNote,
        toggleEdit,
        handleSaveNote
    }
}

export default useNotes
