import './App.css'
import FirstPage from './components/First-page'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Display from './components/display'
import Login from './components/login'

export default function App() {

  return (
    <>
      <Routes>
        {/* Define which component to show for which path */}
        <Route path="/" element={<Login />} />
        <Route path="/display" element={<Display />} />
        <Route path="/first-page" element={<FirstPage />} />
        
        
        {/* 404 Page (Catch-all route) */}
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </>
  )
}

