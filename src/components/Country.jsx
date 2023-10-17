export default function Country({ flag, name, population, region, capital }) {
    return (
        <article style={{
            "marginBottom": "2rem",
            "width": "20.7%"
        }}>
            <img style={{"maxWidth": "100%"}} src={flag.svg} alt={flag.alt} />

            <div>
                <h2>{name}</h2>
                <ul>
                    <li><strong>Population</strong>: <span>{population}</span></li>
                    <li><strong>Region</strong>: <span>{region}</span></li>
                    <li><strong>Capital</strong>: <span>{capital}</span></li>
                </ul>
            </div>
        </article>
    )
}
