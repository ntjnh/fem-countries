export default function CountryInfo(props) {
    const popup = {
        position: "absolute",
        top: "24px",
        padding: "80px 0",
        width: "100%",
        height: "100vh",
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "center",
    }

    return (
        <article 
            style={popup}
        >
    
            <div style={{width: "49%"}}>
                <img style={{"maxWidth": "266px"}} src={props.flag} alt={props.flagAlt} />
            </div>

            <div style={{width: "49%"}}>
                <h2>{props.name}</h2>

                <ul>
                    <li><strong>Native Name:</strong> <span>{props.nameNative}</span></li>
                    <li><strong>Population:</strong> <span>{props.population}</span></li>
                    <li><strong>Region:</strong> <span>{props.region}</span></li>
                    <li><strong>Sub Region:</strong> <span>{props.subregion}</span></li>
                    <li><strong>Capital:</strong> <span>{props.capital}</span></li>
                </ul>

                <ul>
                    <li>
                        <strong>Top Level Domain:</strong> <span>{props.tld}</span>
                    </li>
                    <li>
                        <strong>Currencies:</strong> 
                        
                        <ul>
                            {props.currencies}
                        </ul>
                    </li>
                    <li>
                        <strong>Languages:</strong> 
                        <ul>
                            {props.languages}
                        </ul>
                    </li>
                </ul>

                <h3>Border Countries:</h3>

                <ul>
                    {props.languages}
                </ul>
            </div>
        </article>
    )
}
