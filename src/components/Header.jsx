import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-regular-svg-icons'
import { faSun } from '@fortawesome/free-solid-svg-icons'

export default function Header({ isDark, modeToggle }) {
    const classes = {
        light: 'bg-white shadow-md shadow-neutral-200/60 text-grey-925',
        dark: 'bg-slate-750 text-white'
    }

    const modeClasses = isDark ? classes.dark : classes.light 
    const buttonText = isDark ? 'Light Mode' : 'Dark Mode' 

    return (
        <header className={`p-7 md:py-6 ${modeClasses}`}>
            <div className="container flex items-center justify-between mx-auto">
                <h1
                    className="font-bold m-0 text-sm md:text-lg lg:text-2xl"
                >
                    Where in the world?
                </h1>

                <button
                    className="text-xs md:text-sm lg:text-base"
                    onClick={modeToggle}
                >
                    <FontAwesomeIcon
                        className="mr-3"
                        icon={isDark ? faSun : faMoon}
                    />

                    {buttonText}
                </button>
            </div>
        </header>
    )
}
