import { useEffect, useState } from 'react'
import Form from './components/Form'
import Country from './components/Country'
import Attr from './components/Attr'
import Header from './components/Header'
import './App.css'

function App() {
    const [countries, setCountries] = useState([])

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all?fields=borders,capital,currencies,flags,languages,name,population,region,subregion,tld')
        .then(response => response.json())
        .then(data => setCountries(data))
    })

    const countryCards = countries.map((country, i) => {
        const { flags, name, population, region, capital } = country

        return (
            <Country
                key={i}
                flag={flags}
                name={name.common}
                population={population.toLocaleString()}
                region={region}
                capital={capital}
            />
        )
    })

    return (
        <>
            <Header />

            <main
                style={{
                    "margin": "auto",
                    "maxWidth": "1280px",
                    "position": "relative"
                }}
            >
                <Form />

                <section
                    style={{
                        "display": "flex",
                        "flexWrap": "wrap",
                        "justify-content": "space-between"
                    }}
                >
                    {countryCards}
                </section>
            </main>

            <Attr />
        </>
    )
}

export default App
