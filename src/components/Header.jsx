import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-regular-svg-icons'
import { faMoon as faMoonFilled } from '@fortawesome/free-solid-svg-icons'

export default function Header({ isDark, modeToggle }) {
    const lightClasses = 'bg-white shadow-md shadow-neutral-200/60'
    const darkClasses = 'bg-slate-750 text-white'
    const modeClasses = isDark ? darkClasses : lightClasses 

    return (
        <header className={`py-6 ${modeClasses}`}>
            <div className="container flex items-center justify-between mx-auto">
                <h1 className="font-bold m-0 text-2xl text-grey-925">Where in the world?</h1>

                <button onClick={() => modeToggle()}>
                    <FontAwesomeIcon className="mr-3 text-grey-925" icon={isDark ? faMoonFilled : faMoon} />
                    Dark Mode
                </button>
            </div>
        </header>
    )
}
