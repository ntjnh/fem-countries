export default function Country({ flag, name, population, region, capital }) {
    return (
        <article className="bg-white mb-8 rounded-lg">
            <img className="max-w-full rounded-t-lg" src={flag.svg} alt={flag.alt} />

            <div className="px-6 py-8">
                <h2 className="font-extrabold text-base">{name}</h2>
                <ul className="text-sm">
                    <li><strong>Population</strong>: <span>{population}</span></li>
                    <li><strong>Region</strong>: <span>{region}</span></li>
                    <li><strong>Capital</strong>: <span>{capital}</span></li>
                </ul>
            </div>
        </article>
    )
}
