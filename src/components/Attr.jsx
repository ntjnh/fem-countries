export default function Attr({isDark}) {
    const lightClasses = {
        footer: 'bg-white',
        text: 'text-grey-925',
        links: 'text-green-700'
    }

    const darkClasses = {
        footer: 'bg-slate-750',
        text: 'text-white',
        links: 'text-green-300'
    }

    const modeClasses = isDark ? darkClasses : lightClasses

    return (
        <footer className={`p-6 text-center ${modeClasses.footer}`}>
            <div className={`text-sm ${modeClasses.text}`}>
                Challenge by <a className={`hover:underline ${modeClasses.links}`} href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>
                <span className="mx-2">|</span>
                Coded by <a className={`hover:underline ${modeClasses.links}`} href="https://natejonah.com" target="_blank" rel="noreferrer">Nate</a>
            </div>
        </footer>
    )
}
