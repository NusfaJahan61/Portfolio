import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';


const App = () => {
  return (
    <main className="overflow-x-hidden w-screen h-auto">
      <Routes>
        <Route path="/" element={<Navbar />} />
      </Routes>
    </main>
  )
}

export default App
