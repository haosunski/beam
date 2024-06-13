import Beam from "../beam"
import { Row } from "react-bootstrap"
import { Link } from "react-router-dom"

const BeamList = (props) =>{
    return (
        <div>
            {props.beamList.length === 0 
            ? 
            <div>
                <p>No beam created yet. Created <Link to={`/beams/new`} className="themeLink text-decoration-none">one</Link>?</p>
            </div> 
            : 
                <Row xs={1} className="g-3">
                { props.beamList.map(beam=><Beam key={beam.id} beam={beam}/>) }
                </Row>
            }
        </div>
    )
}

export default BeamList