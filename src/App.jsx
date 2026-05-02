import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Footer from './components/Footer';


const App = () => {
  return (
    <main className="overflow-x-hidden w-screen h-auto bg-amber-50 md:bg-teal-900 dark:bg-[#121d37]">
      <Navbar />
      <div className="ml-0 md:ml-[20dvw]">
        <Contact />
        <Footer />
      </div>

    </main>
  )
}

export default App


// bg-[#e9e9e0]