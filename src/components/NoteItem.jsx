import { useState, useEffect } from 'react' 
import useNotes from '../hooks/useNotes.jsx'

function NoteItem({ noteId }) {

    const { currentNote, setCurrentNote, editing, setEditing, loadingNote, toggleEdit, setLoadingNote, fetchNote, handleSaveNote } = useNotes(); 

    useEffect(() => {
        fetchNote(noteId)
    }, [])

    return (
        <div>
        { loadingNote ? <p>Loading note...</p> : (
            <>
                { editing ? (
                    <form method="POST" onSubmit={handleSaveNote}>
                    <input type="text" name="note-title" className="form-control mb-2" placeholder="Title..." defaultValue={currentNote.title} />
                    <textarea name="note-content" className="form-control" rows="20" placeholder="Type your note here..." defaultValue={currentNote.content}>
                    </textarea>
                    <button className="btn btn-success m-2">Save</button>
                    </form>
                ) : (<><h1 className="mb-4" onClick={toggleEdit}>{currentNote.title}</h1><p onClick={toggleEdit}>{currentNote.content ? currentNote.content : 'Click to start editing...'}</p></>)
                }
            </>
        )
        }

        </div>
        
    )

}

export default NoteItem
