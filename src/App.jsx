import React from 'react'
import "./App.css"
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import { BrowserRouter, Route, Routes } from 'react-router'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Main />
      {/* <Routes>
        <Route path='/' element= />
      </Routes> */}
      <Footer />
    </BrowserRouter>
  )
}

export default App