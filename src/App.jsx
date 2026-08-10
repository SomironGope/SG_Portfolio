

import './App.css'
import Navbar from './component/Navbar';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Footer from './component/Footer';
import Skills from './component/Skills';
import Projects from './component/Projects';


function App() {
  

  return (
    
    <div className='min-h-screen text-white overflow-hidden'>
        
           <Navbar  />
           <main className = 'p-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] xl:px-[12vw]'>
           <Home />
           <About />  
           <Skills />
            <Projects />
            <Contact />
            <Footer />

           </main>
  
    </div>
  )
}

export default App;