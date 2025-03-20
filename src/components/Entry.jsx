import marker from "../assets/marker.png";

export default function Entry(props){
    const {img, title, country, googleMapsLink, dates, text} = props.entry;
    return(
        <div className="journal-entry">
            <div className="main-image-container">
            <img 
                className="thumbnail"
                src={img.src} 
                alt={img.alt} />
            </div>
            <div className="info-container">
                <img className="map-marker" src={marker} alt="Marker Icon" />
                <span>{country}</span>
                <a href={googleMapsLink}>View on Google Maps</a>
                <h2>{title}</h2>
                <span className="trip-date">{dates}</span>
                <p>{text}</p>
            </div>
        </div>
    )
}