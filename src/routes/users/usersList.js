import { Container } from "react-bootstrap"
import { useState } from "react"
import UserList from "../../components/users/userList"

const initialUserList = [
    {id:123,username:"hello",firstName:"hao",lastName:"sun", beamCount: 3, profileImg:"https://res.cloudinary.com/ddmtelsts/image/upload/c_thumb,g_face,w_150,h_150/v1651630518/Markets/lukassun/x5lt6zlrwsfttlz3jjka.jpg"},
    {id:1234,username:"world",firstName:"sun",lastName:"hao", beamCount:2, profileImg:"https://res.cloudinary.com/ddmtelsts/image/upload/c_thumb,g_face,w_150,h_150/v1651630518/Markets/lukassun/x5lt6zlrwsfttlz3jjka.jpg"},
]
const UsersList = () => {
    const [userList] = useState(initialUserList)
    return (
        <Container className="py-4">
            <UserList userList={userList}/>
        </Container>
    )
}

export default UsersList