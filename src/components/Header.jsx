import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-regular-svg-icons'

export default function Header() {
    return (
        <header className="py-6">
            <div className="container flex items-center justify-between mx-auto">
                <h1 className="font-bold m-0 text-2xl">Where in the world?</h1>

                <button>
                    <FontAwesomeIcon icon={faMoon} />
                    Dark Mode
                </button>
            </div>
        </header>
    )
}
