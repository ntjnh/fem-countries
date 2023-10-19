export default function Country({ flag, name, population, region, capital }) {
    return (
        <article className="bg-white mb-0 rounded-lg shadow-lg shadow-neutral-100">
            <div 
                className="aspect-[16/10] bg-center bg-cover bg-no-repeat overflow-hidden rounded-t-lg"
                style={{
                    backgroundImage: `url('${flag.svg}')`
                }}
            >
                
            </div>

            <div className="px-6 py-6">
                <h2 className="font-extrabold mb-4 text-lg">{name}</h2>
                <ul className="text-sm">
                    <li className="mb-1"><span className="font-semibold">Population</span>: <span className="font-light">{population}</span></li>
                    <li className="mb-1"><span className="font-semibold">Region</span>: <span className="font-light">{region}</span></li>
                    <li><span className="font-semibold">Capital</span>: <span className="font-light">{capital}</span></li>
                </ul>
            </div>
        </article>
    )
}
