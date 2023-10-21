import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faChevronDown } from '@fortawesome/free-solid-svg-icons'

export default function Form({ isDark, onChange, searchTerm }) {
    const lightClasses = {
        icon: 'text-neutral-450',
        input: 'shadow-md shadow-neutral-200/60 text-neutral-450',
        select: 'text-neutral-450 shadow-md shadow-neutral-200/60 text-grey-925'
    }
    const darkClasses = {
        icon: 'text-white',
        input: 'bg-slate-750 placeholder:text-white shadow-lg shadow-slate-800 text-white',
        select: 'bg-slate-750 shadow-lg shadow-slate-800 text-white'
    }

    const modeClasses = isDark ? darkClasses : lightClasses

    return (
        <div className="flex items-center justify-between mb-12 relative">
            <div className="country-search relative w-[37.5%]">
                <FontAwesomeIcon 
                    className={`absolute left-7 text-md top-5 z-10 ${modeClasses.icon}`} 
                    icon={faMagnifyingGlass}
                />
                <input 
                    className={`font-light pl-16 pr-8 py-[18px] rounded-lg text-sm w-full ${modeClasses.input}`}
                    type="text" 
                    name="countrySearch" 
                    id="countrySearch" 
                    placeholder="Search for a country..." 
                    onChange={onChange}
                    value={searchTerm}
                />
                <p className="absolute">{searchTerm}</p>
            </div>

            <select 
                className={`appearance-none rounded-lg min-w-[200px] pl-6 pr-16 py-5 text-sm ${modeClasses.select}`}
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
            <FontAwesomeIcon 
                className={`absolute right-4 text-grey-925 text-xs z-10 ${modeClasses.icon}`} 
                icon={faChevronDown}
            />
        </div>
    )
}
