const BeamImage = (props) => {
    return (
        <div>
            <img src={props.image.url} className="br-t-08 w-100" alt={props.image.filename}/>
        </div>
    )
}

export default BeamImage