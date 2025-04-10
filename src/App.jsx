import React from 'react'
import Home from './pages/Home'
import './App.css'
import { ThemeProvider } from './components/theme-provider'

function App() {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  )
}

export default App 