import { Link } from 'react-router-dom'
import NoteList from '../components/NoteList.jsx'

function Notes() {
    return (
        <>
            <div className="container-fluid text-center mt-5">
                <h1 className="mb-4">Notes</h1>
                <NoteList />
            </div>
        </>
    )
}

export default Notes
