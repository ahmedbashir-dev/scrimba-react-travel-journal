import marker from "../assets/marker.png";

export default function Entry(){
    return(
        <div className="journal-entry">
            <div className="main-image-container">
            <img 
                className="thumbnail"
                src="https://scrimba.com/links/travel-journal-japan-image-url" 
                alt="Mount Fuji" />
            </div>
            <div className="info-container">
                <img className="map-marker" src={marker} alt="Marker Icon" />
                <span>JAPAN</span>
                <a href="#">View on Google Maps</a>
                <h2>Mount Fuji</h2>
                <span className="trip-date">12 Jan, 2023 - 24 Jan, 2023</span>
                <p>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
            </div>
        </div>
    )
}