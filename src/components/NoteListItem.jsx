import { Link } from 'react-router-dom'
import useNotes from '../hooks/useNotes.jsx'
import { useEffect } from 'react'

function NoteListItem({note, index}) {
    const { setCurrentNote, editing, setEditing, toggleEdit, handleSaveNote } = useNotes()

    useEffect( () => {setCurrentNote(note) }, [note] )

    return (
        <>
        { !editing ? (
            <div key={note._id} className={`col-sm-4 ${ index % 2 === 0 ? 'bg-danger' : 'bg-success'} d-flex justify-content-center align-items-center`} style={{minHeight: "300px"}} onClick={toggleEdit}>
                <Link to={`/notes/${note._id}`} style = {{color: "white", textDecoration: "none"}}>{note.title}</Link>
            </div>
        ) : (
            <div key={note._id} className={`col-sm-4 ${ index % 2 === 0 ? 'bg-danger' : 'bg-success'} d-flex justify-content-center align-items-center`} style={{minHeight: "300px"}}>
                <form method="POST" class="w-100" onSubmit={handleSaveNote}>
                    <input type="hidden" name="note-id" value={note._id} />
                    <input type="text" name="note-title" className="form-control mb-2" placeholder="Title..." defaultValue={note.title} />
                    <textarea name="note-content" className="form-control" rows="4" placeholder="Type your note here..." defaultValue={note.content}>
                    </textarea>
                    <button className="btn btn-primary mt-3 mx-2">Save</button>
                    <button type="button" className="btn btn-secondary mt-3 mx-2" onClick={toggleEdit}>Cancel</button>
                </form>
                
            </div>
        ) }
        </>
    )

}

export default NoteListItem
