import { Link } from 'react-router-dom';


function AddNote() {

    function handleAddNewNote(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        console.log(formData.get('note-title'));

        console.log("Adding new note")
        fetch('http://localhost:3000/api/add-note', {
            method: "POST",
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({ title: formData.get('note-title'), content: formData.get('note-content')})
        })
        .then(response => response.json())
        .then(data => {console.log(data); alert('Note added successfully!')})
    }

    return (
        <>
            <div className="container-fluid text-center my-5">
                <h1>Add New Note</h1>
                <form onSubmit={handleAddNewNote}>
                    <input type="text" name="note-title" className="form-control mb-2" placeholder="Note Title..." />
                    <textarea name="note-content" className="form-control mb-2" placeholder="Enter your note content...">
                    </textarea>
                    <input type="submit" className="btn btn-primary me-2" value="Add Note" />
                    <Link to="/notes" className="btn btn-secondary">Cancel</Link>
                </form>
            </div>
        </>
    ) 
}

export default AddNote
