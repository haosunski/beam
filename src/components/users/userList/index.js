import User from "../user"
import { Row} from "react-bootstrap"

const UserList = (props) =>{
    return (
        <div>
            {props.userList.length === 0 ? <div>no user found</div> : 
                <Row xs={2} md={3} lg={4} xl={6} className="g-1 g-md-2 g-lg-3 g-xl-4">
                { props.userList.map(user=><User key={user.id} user={user}/>) }
                </Row>
            }
        </div>
    )
}

export default UserList