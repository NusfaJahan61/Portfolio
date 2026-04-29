import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';


const App = () => {
  return (
    <main className="overflow-x-hidden w-screen h-auto bg-amber-50 md:bg-teal-900 dark:bg-[#121d37]">
      <Routes>
        <Route path="/" element={<Navbar />} />
      </Routes>
    </main>
  )
}

export default App


// bg-[#e9e9e0]