import { Col, Row} from "react-bootstrap"
import BeamImage from "../beamImage"
import BeamStatus from "../beamStatus"
import BeamAction from "../beamAction"

const Beam = (props) =>{
    
    return (
        <Col>
            <div className="border pb-3 pb-md-0 br-08 shadow-sm text-center text-md-end">
                <Row className="g-0">
                    <Col xs={12} md={7}>
                        {props.beam.images && props.beam.images.length > 0 && <BeamImage image={props.beam.images[0]}/>}
                    </Col>
                    <Col xs={12} md={5}>
                        <BeamAction beam={props.beam}/>
                        <div className="m-3 fs-5">{props.beam.title}</div>
                        <div className="m-3">{props.beam.description}</div>
                        <BeamStatus status={props.beam.status} toBeamStations={props.beam.toBeamStations} title={props.beam.title}/>
                    </Col>
                </Row>
            </div>
        </Col>
    )
}

export default Beam