import './App.css'
import { Box } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/Home'

function App() {
  return (
    <Box overflowX={'hidden'}>
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </Box>
  )
}

export default App
