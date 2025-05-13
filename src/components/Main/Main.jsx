import React from 'react'
import './MainStyles.css'
import { Route, Routes } from 'react-router'
import HomeTab from './Tabs/HomeTab'
import AboutTab from './Tabs/AboutTab'
import Resume from './Tabs/Resume'
import Projects from './Tabs/Projects'

const Main = () => {
    return (
        <main id='main'>
            <Routes>
                <Route path='/' element={<HomeTab />} />
                <Route path='/about' element={<AboutTab />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/resume' element={<Resume />} />
            </Routes>
        </main>
    )
}

export default Main