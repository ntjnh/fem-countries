import Form from './components/Form'
import Country from './components/Country'
import Attr from './components/Attr'
import './App.css'
import CountryInfo from './components/CountryInfo'
import Header from './components/Header'

function App() {
    return (
        <>
            <Header />

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
