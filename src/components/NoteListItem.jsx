import { Link } from 'react-router-dom'

function NoteListItem({note, index}) {
    
    return (
        <>
            <div key={note._id} className={`col-sm-4 ${ index % 2 === 0 ? 'bg-danger' : 'bg-success'} d-flex justify-content-center align-items-center`} style={{minHeight: "300px"}}>
                <Link to={`/notes/${note._id}`} style = {{color: "white", textDecoration: "none"}}>{note.title}</Link>
            </div>
        </>
    )

}

export default NoteListItem
