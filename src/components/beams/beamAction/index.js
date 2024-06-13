import { Button } from "react-bootstrap"


const BeamAction = (props) =>{
    return (
        <div className="beamActionList d-flex py-3 mx-3 border-bottom">
            {/* <Map locations={props.beam.toBeamStations} title={'All locations for beam: ' + props.beam.title}/> */}
            <Button variant="outline-primary" className="mx-2">Edit</Button>
            <Button variant="outline-danger" className="mx-2">Delete</Button>
        </div>
    )
}

export default BeamAction