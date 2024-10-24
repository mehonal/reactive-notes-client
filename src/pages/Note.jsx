import { Link } from 'react-router-dom'

function Note() {
    return (
        <>
            <div className="container-fluid text-center mt-5">
                <h1 className="mb-4">Note #1</h1>
                <textarea className="form-control" rows="20" placeholder="Type your note here...">
                </textarea>
                <br />
                <Link to="/notes" className="btn btn-success me-2">Save</Link>
                <Link to="/notes" className="btn btn-primary">Return to Notes</Link>
            </div>
        </>
    )
}

export default Note
