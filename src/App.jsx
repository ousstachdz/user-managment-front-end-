import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Search from './components/Search'
import UserDetails from './components/UserDetails'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Search />} />
        <Route path='/user/:id' element={<UserDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
