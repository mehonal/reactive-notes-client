import { useState, useEffect } from 'react' 

function NoteItem({ noteId }) {

    const [note, setNote] = useState(null)
    const [editing, setEditing] = useState(false)
    const [loading, setLoading] = useState(true)

    function fetchNote() {
        fetch(`http://localhost:3000/api/get-note/${noteId}`)
        .then(response => response.json())
        .then(data => { setLoading(false); setNote(data) })
    }

    useEffect(() => {
        fetchNote()
    }, [])

    function toggleEdit() {
        setEditing(!editing)
    }

    function saveNote() {
        toggleEdit()
        // save note to db via fetch, to be implemented later here...
    }

    return (
        <div>
        { loading ? <p>Loading note...</p> : (
            <>
                { editing ? (
                    <>
                    <input type="text" className="form-control mb-2" placeholder="Title..." defaultValue={note.title} />
                    <textarea className="form-control" rows="20" placeholder="Type your note here..." defaultValue={note.content}>
                    </textarea>
                    <button className="btn btn-success m-2" onClick={saveNote}>Save</button>
                    </>
                ) : (<><h1 className="mb-4" onClick={toggleEdit}>{note.title}</h1><p onClick={toggleEdit}>{note.content ? note.content : 'Click to start editing...'}</p></>)
                }
            </>
        )
        }

        </div>
        
    )

}

export default NoteItem
