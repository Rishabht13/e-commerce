import { Routes,Route } from 'react-router'
import {HomePage} from './pages/HomePage.jsx'

import './App.css'

function App() {
  

  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/orders' element={<h1>Orders Page</h1>} />
      <Route path='/checkout' element={<h1>Checkout Page</h1>} />
    </Routes>
   
  )
};

export default App
  