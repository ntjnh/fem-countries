import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import App from './App.jsx'
import './index.css'
import SingleCountry from './pages/SingleCountry.jsx'

const root = document.getElementById('root')

ReactDOM.createRoot(root).render(
    <BrowserRouter>
        <Routes>
            <Route index element={<App />} />
            <Route path=":country" element={<SingleCountry />} />
        </Routes>
    </BrowserRouter>
)
