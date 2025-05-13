import React from 'react'
import './MainStyles.css'
import { Route, Routes } from 'react-router'
import HomeTab from './Tabs/HomeTab'

const Main = () => {
    return (
        <main id='main'>
            <Routes>
                <Route path='/' element={<HomeTab />} />
            </Routes>
        </main>
    )
}

export default Main