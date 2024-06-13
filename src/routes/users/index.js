import UsersList from "./usersList"
import PublicProfileUser from "./publicProfileUser"
import { Routes, Route } from "react-router-dom"


const Users = () => {
    return (
        <Routes>
            <Route path="/" element={<UsersList />}></Route>
            <Route path=":userId" element={<PublicProfileUser />}></Route>
        </Routes>
    )
}

export default Users