import { useState, useRef, useEffect } from "react"
import { Button, Modal } from "react-bootstrap"
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = 'pk.eyJ1Ijoid3NoYWRvd2h1bnRlciIsImEiOiJjbDE4NTlmdDMwOXphM2Jwc3M5a3V1eGxnIn0.ASR-2eVLYdfuLuXef59UWA';


const Map = (props) =>{
    const [showMap, setShowMap] = useState(false)
    const handleShowMap = ()=> setShowMap(true)
    const handleCloseMap = ()=> setShowMap(false)

    const map = useRef(null);
    const mapContainer = useRef(null);

    const initialLocation = props.locations.length > 0 && props.locations[0].geometry.coordinates
    const locations = props.locations.length > 0 && props.locations

    useEffect(() => {
        if(showMap) {
            map.current = new mapboxgl.Map({
                container: mapContainer.current,
                style: 'mapbox://styles/mapbox/streets-v11',
                center: initialLocation,
                zoom: 4
            });
            
            locations.forEach(location=>{
                const popup = new mapboxgl.Popup({ offset: 35, closeButton:false }).setHTML(
                    `
                    <h5 class="mt-2 mb-1 mx-2 fw-normal">${location.station}</h5>
                    `
                );
                new mapboxgl.Marker().setLngLat(location.geometry.coordinates).setPopup(popup).addTo(map.current)
            })
            // new mapboxgl.Marker()
            // .setLngLat(centerCoordinate.split(','))
            // .setPopup(popup) // sets a popup on this marker
            // .addTo(map);
        } else {
            map.current = null
        }
    });

    return (
        <div>
            {props.children?<div onClick={handleShowMap}>{props.children}</div>:(
                <Button variant="outline-dark" className="mx-2" onClick={handleShowMap}>Map</Button>
            )}
            <Modal show={showMap} onHide={handleCloseMap} fullscreen>
                <Modal.Header closeButton>
                <Modal.Title className="fw-normal">{props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body className="p-0">
                    <div ref={mapContainer} className="map-container" />
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default Map