import { Row, Col, Button } from "react-bootstrap";
import Map from "../../map"

const BeamStatus = (props) =>{

    let statusLabel
    switch (props.status) {
        case "Done":
            statusLabel = "bg-success"
            break;
        case "In Progress":
            statusLabel = "bg-primary"
            break
        case "Scheduled":
            statusLabel = "bg-warning"
            break;
        default:
            break;
    }
    return (
        <div className="mx-3">
            <Row className="g-0">
                <Col className="text-start col-md-12 text-md-end my-md-2">
                    <span>Beam status </span>
                    <span className={`text-white ${statusLabel} rounded px-1`}>{props.status}</span>
                </Col>
                <Col className="text-end col-md-12 my-md-2">
                    <Map locations={props.toBeamStations} title={'All locations for beam: ' + props.title}>
                        <div className="d-flex flex-column flex-md-row align-items-end justify-content-end">
                            <span className="d-inline-block"> Beam to {props.toBeamStations.length} {props.toBeamStations.length>1?'stations':'station'}</span>
                            <span className="fitContent d-block d-md-inline-block ms-1 text-primary bg-white border border-primary rounded px-1 cursorPointer py-1">Show on map</span>
                        </div>  
                    </Map>
                </Col>
            </Row>
        </div>
    )
}

export default BeamStatus