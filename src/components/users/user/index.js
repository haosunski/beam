import Avatar from "../../avatar"
import { Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import { CSSTransition } from "react-transition-group"

const User = (props) => {
    return (
        <Col>
            {/* auto mount并不会trigger transition */}
            {/* in控制transition是否开始 */}
            <CSSTransition in={true} timeout={1000} classNames="my-node" appear enter={false} exit={false}>
                <div className="p-3 border br-08 shadow-sm text-center">
                    <Link to={`/users/${props.user.id}`}><Avatar image={props.user.profileImg} alt={props.user.username}/></Link>
                    <div className="mt-1">
                        <div className="fs-5 fw-light"><Link className="text-decoration-none link-dark" to={`/users/${props.user.id}`}>{props.user.firstName} {props.user.lastName}</Link></div>
                        <div>{props.user.beamCount} {props.user.beamCount>1?"beams":'beam'}</div>
                    </div>
                </div>
            </CSSTransition>
        </Col>
    )
}

export default User