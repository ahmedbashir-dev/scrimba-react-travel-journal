import globle from  "../assets/Globe.png";

export default function Header(){
    return (
        <header className="header">
            <img src={globle} alt="Globe Icon" width="24" />
            <span>my travel journal.</span>
        </header>
    )
}