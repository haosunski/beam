import { useState } from "react"
import { Container } from "react-bootstrap"

import BeamList from "../../components/beams/beamList"

const initialBeamList = [
    {
        id:123, 
        type: 'public', 
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        description:"ed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla facilisi nullam vehicula ipsum a arcu. Sed arcu non odio euismod. ",
        toBeamStations:[
            {
                station: '19889 hello world st',
                geometry: {
                    type: 'point',
                    coordinates: [-78.47,35.99]
                },
                time: 1652459314642
            }
        ],
        creator:"hao",
        text: "helloworld", 
        images: [
            {filename:'elepahnt',url:'https://res.cloudinary.com/ddmtelsts/image/upload/c_fill,g_center,w_800,h_800,q_auto:good/v1651609071/Markets/haosun/eymgaqyl5mcgkaaqk5o1.jpg'},
            {filename:'elepahnt',url:'https://res.cloudinary.com/ddmtelsts/image/upload/c_fill,g_center,w_800,h_800,q_auto:good/v1651609071/Markets/haosun/eymgaqyl5mcgkaaqk5o1.jpg'},
        ],
        status:'Done'
    },
    {
        id:234, 
        type: 'public', 
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        description:"ed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla facilisi nullam vehicula ipsum a arcu. Sed arcu non odio euismod. ",
        toBeamStations:[
            {
                station: '129 hello world st',
                geometry: {
                    type: 'point',
                    coordinates: [-78.47,35.99]
                },
                time:'2022-09-09 20:40:00'
            }
        ],
        creator:"hao",
        text: "helloworld", 
        images: [
            {filename:'elepahnt',url:'https://res.cloudinary.com/ddmtelsts/image/upload/c_fill,g_center,w_800,h_800,q_auto:good/v1651609071/Markets/haosun/eymgaqyl5mcgkaaqk5o1.jpg'},
            {filename:'elepahnt',url:'https://res.cloudinary.com/ddmtelsts/image/upload/c_fill,g_center,w_800,h_800,q_auto:good/v1651609071/Markets/haosun/eymgaqyl5mcgkaaqk5o1.jpg'},
        ],
        status:'In Progress'
    }
]
const MeBeams = () =>{
    
    const [beamList] = useState(initialBeamList)
    return (
        <Container className="py-4">
            <BeamList beamList={beamList}/>
        </Container>
    )
    
}

export default MeBeams