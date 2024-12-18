import { Link } from 'react-router-dom'
import NoteList from '../components/NoteList.jsx'

function Notes() {
    return (
        <>
            <div className="container-fluid text-center mt-5">
                <h1 className="mb-4">Notes</h1>
                <NoteList />
                <Link to="/add-note" className="btn btn-primary mt-4">Add Note</Link>
            </div>
        </>
    )
}

export default Notes
