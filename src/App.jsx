import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Blog from './pages/Blog'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  )
}

export default App
