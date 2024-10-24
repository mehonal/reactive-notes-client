import { Link } from 'react-router-dom'

function Notes() {
    return (
        <>
            <div className="container-fluid text-center mt-5">
                <h1 className="mb-4">Notes</h1>
                <div class="row">
                    <div class="col-sm-4 bg-success d-flex justify-content-center align-items-center" style={{minHeight: "300px"}}>
                        <Link to="/note" style = {{color: "white", textDecoration: "none"}}>Note #1</Link>
                    </div>
                    <div class="col-sm-4 bg-danger d-flex justify-content-center align-items-center" style={{minHeight: "300px"}}>
                        <Link to="/note" style = {{color: "white", textDecoration: "none"}}>Note #2</Link>
                    </div>
                    <div class="col-sm-4 bg-primary d-flex justify-content-center align-items-center" style={{minHeight: "300px"}}>
                        <Link to="/note" style = {{color: "white", textDecoration: "none"}}>Note #3</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Notes
