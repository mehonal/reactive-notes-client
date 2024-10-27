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

    function handleSaveNote(event) {
        toggleEdit()
        const formData = new FormData(event.target)
        note.title = formData.get('title')
        note.content = formData.get('content')
        fetch(`http://localhost:3000/api/update-note/${noteId}`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title: note.title, content: note.content})
        })
        .then(response => response.json())
        .then(data => {
            alert('Saved Note!')
        })
    }

    return (
        <div>
        { loading ? <p>Loading note...</p> : (
            <>
                { editing ? (
                    <form method="POST" onSubmit={handleSaveNote}>
                    <input type="text" name="title" className="form-control mb-2" placeholder="Title..." defaultValue={note.title} />
                    <textarea name="content" className="form-control" rows="20" placeholder="Type your note here..." defaultValue={note.content}>
                    </textarea>
                    <button className="btn btn-success m-2">Save</button>
                    </form>
                ) : (<><h1 className="mb-4" onClick={toggleEdit}>{note.title}</h1><p onClick={toggleEdit}>{note.content ? note.content : 'Click to start editing...'}</p></>)
                }
            </>
        )
        }

        </div>
        
    )

}

export default NoteItem
