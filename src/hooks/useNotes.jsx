import { useCallback, useState } from 'react'


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
        const noteId = formData.get('note-id')
        const title = formData.get('note-title')
        const content = formData.get('note-content')
        if (currentNote != null && noteId == currentNote._id) {
            currentNote.title = title
            currentNote.content = content
        }
        fetch(`http://localhost:3000/api/update-note/${noteId}`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title: title, content: content})
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
