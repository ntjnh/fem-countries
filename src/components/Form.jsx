import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export default function Form({ isDark, onChange, searchTerm }) {
    const lightClasses = {
        icon: 'text-neutral-450',
        input: 'shadow-md shadow-neutral-200/60 text-neutral-450',
        select: 'text-neutral-450 shadow-md shadow-neutral-200/60'
    }
    const darkClasses = {
        icon: 'text-white',
        input: 'bg-slate-750 placeholder:text-white shadow-lg shadow-slate-800 text-white',
        select: 'bg-slate-750 shadow-lg shadow-slate-800 text-white'
    }

    const modeClasses = isDark ? darkClasses : lightClasses

    return (
        <div className="flex items-center justify-between mb-12">
            <div className="country-search relative w-[37.5%]">
                <FontAwesomeIcon className={`absolute left-7 text-md top-5 z-10 ${modeClasses.icon}`} icon={faMagnifyingGlass} />
                <input 
                    className={`font-light pl-16 pr-8 py-[18px] relative rounded-lg text-sm w-full ${modeClasses.input}`}
                    type="text" 
                    name="countrySearch" 
                    id="countrySearch" 
                    placeholder="Search for a country..." 
                    onChange={onChange}
                    value={searchTerm}
                />
                <p className='absolute'>{searchTerm}</p>
            </div>

            <select 
                className={`rounded-lg p-4 text-sm ${modeClasses.select}`}
                name="regionFilter" 
                id="regionFilter"
            >
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
