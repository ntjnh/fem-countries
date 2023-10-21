import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faChevronDown } from '@fortawesome/free-solid-svg-icons'

export default function Form({ isDark, onChange, searchTerm }) {
    const lightClasses = {
        inputIcon: 'text-neutral-450',
        input: 'shadow-md shadow-neutral-200/60 text-neutral-450',
        select: 'shadow-md shadow-neutral-200/60 text-grey-925',
        selectIcon: 'text-grey-925'
    }
    const darkClasses = {
        inputIcon: 'text-white',
        input: 'bg-slate-750 placeholder:text-white shadow-lg shadow-slate-800 text-white',
        select: 'bg-slate-750 shadow-lg shadow-slate-800 text-white',
        selectIcon: 'text-white'
    }

    const modeClasses = isDark ? darkClasses : lightClasses

    return (
        <div className="md:flex md:items-center md:justify-between mb-7 lg:mb-12">
            <div className="country-search mb-9 md:mb-0 relative md:w-[37.5%]">
                <FontAwesomeIcon 
                    className={`absolute left-7 text-md top-5 z-10 ${modeClasses.inputIcon}`} 
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

            <div className="relative w-[200px]">
                <select 
                    className={`appearance-none rounded-lg pl-6 pr-8 py-[17px] lg:py-5 text-xs lg:text-sm w-full ${modeClasses.select}`}
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
                    className={`absolute right-4 text-xs top-5 z-10 ${modeClasses.selectIcon}`} 
                    icon={faChevronDown}
                />
            </div>
        </div>
    )
}
