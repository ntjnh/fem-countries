export default function Form() {
    return (
        <div className="flex items-center justify-between mb-12">
            <input className="px-8 py-5 rounded-lg text-sm w-[37.5%]" type="text" name="" id="" placeholder="Search for a country..." />

            <select name="" id="">
                <option className="text-sm">Filter by Region</option>
                <option className="text-sm" value="africa">Africa</option>
                <option className="text-sm" value="america">Americas</option>
                <option className="text-sm" value="asia">Asia</option>
                <option className="text-sm" value="europe">Europe</option>
                <option className="text-sm" value="oceania">Oceania</option>
            </select>
        </div>
    )
}
