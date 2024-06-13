import { Route, Routes } from "react-router-dom"
import MeBeams from "./meBeams"
import NewBeam from "./newBeam"

const Beams = () =>{
    return (
        <Routes>
            <Route path="me" element={<MeBeams />}></Route>
            <Route path="new" element={<NewBeam />}></Route>
        </Routes>
    )
}

export default Beams