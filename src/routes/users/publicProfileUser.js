import { useEffect, useState } from "react"
import { Container } from "react-bootstrap"
import { useParams } from "react-router-dom"

import BeamList from "../../components/beams/beamList"

const allBeamList = [
    {
        id:123, 
        type: 'public', 
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit 1234",
        description:"ed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla facilisi nullam vehicula ipsum a arcu. Sed arcu non odio euismod. ",
        toBeamStations:[
            {
                station: 'station f',
                geometry: {
                    type: 'point',
                    coordinates: [-91,37]
                },
                time: 1652459314642
            },
            {
                station: 'station k',
                geometry: {
                    type: 'point',
                    coordinates: [-93,42]
                },
                time: 1652459314642
            }
        ],
        creator:1234,
        text: "helloworld", 
        images: [
            {filename:'elepahnt',url:'https://res.cloudinary.com/ddmtelsts/image/upload/c_fill,g_center,w_800,h_800,q_auto:good/v1651609071/Markets/haosun/eymgaqyl5mcgkaaqk5o1.jpg'},
            {filename:'elepahnt',url:'https://res.cloudinary.com/ddmtelsts/image/upload/c_fill,g_center,w_800,h_800,q_auto:good/v1651609071/Markets/haosun/eymgaqyl5mcgkaaqk5o1.jpg'},
        ],
        status:'Done'
    },
    {
        id:1231, 
        type: 'public', 
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit 1234",
        description:"ed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla facilisi nullam vehicula ipsum a arcu. Sed arcu non odio euismod. ",
        toBeamStations:[
            {
                station: 'station hh',
                geometry: {
                    type: 'point',
                    coordinates: [-121,47]
                },
                time: 1652459314642
            }
        ],
        creator:1234,
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
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit 123",
        description:"ed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla facilisi nullam vehicula ipsum a arcu. Sed arcu non odio euismod. ",
        toBeamStations:[
            {
                station: 'station hhdfd',
                geometry: {
                    type: 'point',
                    coordinates: [-104,38]
                },
                time:'2022-09-09 20:40:00'
            }
        ],
        creator:123,
        text: "helloworld", 
        images: [
            {filename:'elepahnt',url:'https://res.cloudinary.com/ddmtelsts/image/upload/c_fill,g_center,w_800,h_800,q_auto:good/v1651609071/Markets/haosun/eymgaqyl5mcgkaaqk5o1.jpg'},
            {filename:'elepahnt',url:'https://res.cloudinary.com/ddmtelsts/image/upload/c_fill,g_center,w_800,h_800,q_auto:good/v1651609071/Markets/haosun/eymgaqyl5mcgkaaqk5o1.jpg'},
        ],
        status:'In Progress'
    }
]

const PublicProfileUser = () =>{
    const {userId} = useParams()
    const [beamList, setBeamList] = useState([])
    // const initialBeamList = allBeamList.filter(beam=>beam.creator == userId)
    useEffect(()=>{
        const initialBeamList = allBeamList.filter(beam=>beam.creator === +userId)
        setBeamList(initialBeamList)
    },[userId])
    return (
        <Container className="py-4">
            <BeamList beamList={beamList}/>
        </Container>
    )
}

export default PublicProfileUser