export default function CountryInfo() {
    return (
        <article>
            <div>
                <img style={{"maxWidth": "266px"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Belgium.svg/800px-Flag_of_Belgium.svg.png" alt="Germany flag" />
            </div>

            <div>
                <h2>Germany</h2>

                <ul>
                    <li><strong>Native Name:</strong> <span>België</span></li>
                    <li><strong>Population:</strong> <span>11,319,511</span></li>
                    <li><strong>Region:</strong> <span>Europe</span></li>
                    <li><strong>Sub Region:</strong> <span>Western Europe</span></li>
                    <li><strong>Capital:</strong> <span>Brussels</span></li>
                </ul>

                <ul>
                    <li><strong>Top Level Domain:</strong> <span>.be</span></li>
                    <li><strong>Currencies:</strong> <span>Euro</span></li>
                    <li><strong>Languages:</strong> <span>Dutch, French, German</span></li>
                </ul>

                <h3>Border Countries:</h3>

                <ul>
                    <li>France</li>
                    <li>Germany</li>
                    <li>Netherlands</li>
                </ul>
            </div>
        </article>
    )
}
