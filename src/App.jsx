import { useEffect, useState } from 'react'
import Form from './components/Form'
import Country from './components/Country'
import Attr from './components/Attr'
import Header from './components/Header'
import './App.css'

function App() {
    const [countries, setCountries] = useState([])
    const [isDark, setIsDark] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')

    function handleChange(e) {
        setSearchTerm(e.target.value)
    }

    function handleClick() {
        setIsDark(prev => !prev)
    }

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
                isDark={isDark}
            />
        )
    })

    const lightClasses = 'bg-neutral-50'
    const darkClasses = 'bg-slate-775'
    const modeClasses = isDark ? darkClasses : lightClasses 

    return (
        <>
            <Header
                isDark={isDark}
                modeToggle={handleClick}
            />

            <main className={`pb-14 pt-5 px-4 lg:pt-12 ${modeClasses}`}>
                <div className="container mx-auto relative">
                    <Form
                        isDark={isDark}
                        onChange={() => handleChange}
                        searchTerm={searchTerm}
                    />

                    <section className="md:grid md:gap-16 md:grid-cols-2 lg:grid-cols-4 mx-auto w-[78%] md:w-full">
                        {countryCards}
                    </section>
                </div>
            </main>

            <Attr isDark={isDark} />
        </>
    )
}

export default App
