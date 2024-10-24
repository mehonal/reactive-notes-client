import { Link, useParams } from 'react-router-dom'
import NoteItem from '../components/NoteItem.jsx'

function Note() {
    const { noteId } = useParams();
    return (
        <>
            <div className="container-fluid text-center mt-5">
                <NoteItem noteId={noteId} />
                <Link to="/notes" className="btn btn-primary">Return to Notes</Link>
            </div>
        </>
    )
}

export default Note
