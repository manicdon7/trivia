"use client"
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TriviaQuiz from './Pages/Triviaquiz'
import Result from './Pages/Result'
import { WagmiProvider } from 'wagmi'

const page = () => {
  return (
    <WagmiProvider>
    <Router>
      <Routes>
        <Route path='/' element={<TriviaQuiz/>} />
        <Route path='/result' element={<Result/>}/>
      </Routes>
    </Router>
    </WagmiProvider>
  )
}

export default page