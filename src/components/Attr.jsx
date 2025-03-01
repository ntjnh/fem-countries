export default function Attr({isDark}) {
    const classes = {
        light: {
            footer: 'bg-white',
            text: 'text-grey-925',
            links: 'text-green-700'
        },
        dark: {
            footer: 'bg-slate-750',
            text: 'text-white',
            links: 'text-green-300'
        }
    }

    const modeClasses = isDark ? classes.dark : classes.light

    return (
        <footer className={`p-6 text-center ${modeClasses.footer}`}>
            <div className={`text-sm ${modeClasses.text}`}>
                <p>
                    Challenge by&nbsp;
                    <a
                        className={`underline ${modeClasses.links}`}
                        href="https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Frontend Mentor
                    </a>
                </p>
                <p>
                    Coded by&nbsp;
                    <a
                        className={`underline ${modeClasses.links}`}
                        href="https://nate-dev.com?utm_source=codebynate&utm_medium=web&utm_campaign=rest_countries"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Nate
                    </a>
                </p>
            </div>
        </footer>
    )
}
