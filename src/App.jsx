import Attr from './components/Attr'
import './App.css'

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
                    <article>
                        <img style={{"maxWidth": "266px"}} src="https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1280px-Flag_of_Germany.svg.png" alt="Germany flag" />
                        <h2>Germany</h2>
                        <ul>
                            <li><strong>Population</strong>: <span>81,770,900</span></li>
                            <li><strong>Region</strong>: <span>Europe</span></li>
                            <li><strong>Capital</strong>: <span>Berlin</span></li>
                        </ul>
                    </article>

                    <article>
                        <img style={{"maxWidth": "266px"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/800px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png" alt="United States of America flag" />
                        <h2>United States of America</h2>
                        <ul>
                            <li><strong>Population</strong>: <span>323,947,000</span></li>
                            <li><strong>Region</strong>: <span>Americas</span></li>
                            <li><strong>Capital</strong>: <span>Washington, D.C.</span></li>
                        </ul>
                    </article>

                    <article>
                        <img style={{"maxWidth": "266px"}} src="https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/720px-Flag_of_Brazil.svg.png?20111003040251" alt="Brazil flag" />
                        <h2>Brazil</h2>
                        <ul>
                            <li><strong>Population</strong>: <span>206,135,893</span></li>
                            <li><strong>Region</strong>: <span>Americas</span></li>
                            <li><strong>Capital</strong>: <span>Brasilia</span></li>
                        </ul>
                    </article>

                    <article>
                        <img style={{"maxWidth": "266px"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Iceland.svg/800px-Flag_of_Iceland.svg.png" alt="Iceland flag" />
                        <h2>Iceland</h2>
                        <ul>
                            <li><strong>Population</strong>: <span>334,300</span></li>
                            <li><strong>Region</strong>: <span>Europe</span></li>
                            <li><strong>Capital</strong>: <span>Reykjavík</span></li>
                        </ul>
                    </article>
                </section>
            </main>

            <Attr />
        </>
    )
}

export default App
