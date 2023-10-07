import Attr from './components/Attr'
import './App.css'
import Country from './components/Country'

function App() {
    return (
        <>
            <header>
                <div>
                    <h1>Where in the world?</h1>

                    <button>Dark Mode</button>
                </div>
            </header>

            <main>
                <div>
                    <input type="text" name="" id="" />

                    <select name="" id="">
                        <option>Filter by Region</option>
                        <option value="africa">Africa</option>
                        <option value="america">Americas</option>
                        <option value="asia">Asia</option>
                        <option value="europe">Europe</option>
                        <option value="oceania">Oceania</option>
                    </select>
                </div>

                <section>
                    <Country />
                </section>

            </main>

            <Attr />
        </>
    )
}

export default App
