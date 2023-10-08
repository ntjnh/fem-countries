import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-regular-svg-icons'

export default function Header() {
    return (
        <header>
            <div>
                <h1>Where in the world?</h1>

                <button>
                    <FontAwesomeIcon icon={faMoon} />
                    Dark Mode
                </button>
            </div>
        </header>
    )
}
