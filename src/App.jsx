import Form from './components/Form'
import Country from './components/Country'
import Attr from './components/Attr'
import './App.css'
import CountryInfo from './components/CountryInfo'

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
                <Form />

                <section>
                    <Country />
                    {/* <CountryInfo /> */}
                </section>

            </main>

            <Attr />
        </>
    )
}

export default App
