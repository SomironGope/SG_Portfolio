
import { CiMenuFries } from "react-icons/ci";
import { useState } from 'react';
// import AnchorLink from 'react-anchor-link-smooth-scroll';

function Navbar() {

  const [showMenu, setShowMenu] = useState(false);
  const [activeLink, setActiveLink] = useState ('home');
  

  return (

    // ------------------------------NabbarContainer------------------------------

    <header className=' bg-[#03045e] relative flex p-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] xl:px-[12vw] items-center justify-between '>
       {/* -------------------------Logo-------------------------- */}
       <div>
               <a href = '#home' className='bg-linear-to-r from-orange-500 to-purple-600 text-xl md:text-2xl py-1.5 px-2 font-bold text-[#03045e]  rounded-full border border-[#190dbc]'>
          SG</a>
       </div>
       
      
      

        {/* ------------------------------------Large Screen Menu------------------------------- */}
        <div className = ''>
          <ul className = ' gap-3 text-sm font-medium text-white hidden sm:flex tracking-wider leading-3'>
           <li>
            <a onClick = {() => setActiveLink ('home')} href = '#home' className= {activeLink === 'home' ? 'text-[#ff6b6b]' : ''} ><p>HOME</p></a>
           </li>
             <li>
            <a  onClick = {() => setActiveLink ('about')} href = '#about' className = {activeLink === 'about' ? 'text-[#ff6b6b]' : ''}><p>ABOUT</p></a>
           </li>
            <li>
            <a  onClick = {() => setActiveLink ('skills')} href = '#skills' className = {activeLink === 'skills' ? 'text-[#ff6b6b]' : ''}><p>SKILLS</p></a>
           </li>
           <li>
            <a  onClick = {() => setActiveLink ('portfolio')} href  = '#projects' className = {activeLink === 'portfolio' ? 'text-[#ff6b6b]' : ''}><p>PROJECTS</p></a>
           </li>
           <li>
            <a  onClick = {() => setActiveLink ('contact')} href  = '#contact' className = {activeLink === 'contact' ? 'text-[#ff6b6b]' : ''} ><p>CONTACT</p></a>
           </li> 
        </ul>
        </div>
   
       <a href="#contact" onClick={() => setActiveLink ('contact')} className=" hidden sm:block bg-linear-to-r from-orange-500 to-purple-600 py-2 px-3 rounded-md text-[#222]

        hover:transition-all hover:duration-500 hover:ease-in-out 
        font-semibold cursor-pointer hover:bg-linear-to-r hover:from-pink-500 hover:to-sky-600 hover:text-white hover:scale-110">
  Contact with me
</a>

{/* ----------------------Small Screen Menu------------------------ */}

{showMenu ? <button onClick = {() => setShowMenu (false)} className = 'w-5 h-5 sm:hidden cursor-pointer transition-transform hover:scale-110'> ✕ </button> :
   <CiMenuFries onClick = {()=> setShowMenu(true)} className =' sm:hidden w-5 h-5 font-extrabold cursor-pointer hover:transform hover:scale-110' />
  }
   
   {/* -----------------------Small Screen Links---------------- */}
  <>
         <ul className = {`w-full h-screen z-50 bg-linear-to-b from-pink-500/95 to-purple-600/95 backdrop-blur-lg text-md font-medium tracking-widest flex flex-col overflow-hidden absolute top-15 right-0  py-2 text-center gap-4 transition-transform duration-300  ${showMenu ? 'translate-x-0' : 'translate-x-full'}`}>
    <li onClick = {() => setShowMenu (false)} className='hover:bg-[#dee2e6] hover:text-[#03045e] hover:transition-all duration-300 py-2 rounded-sm cursor-pointer'>
       <a href = '#home'><p>HOME</p></a>
    </li>
      <li onClick = {() => setShowMenu (false)} className='hover:bg-[#dee2e6] hover:text-[#03045e] hover:transition-all duration-300 py-2 rounded-sm cursor-pointer'>
       <a href = '#about'><p>ABOUT</p></a>


     </li>
      <li onClick = {() => setShowMenu (false)} className='hover:bg-[#dee2e6] hover:text-[#03045e] hover:transition-all duration-300 py-2 rounded-sm cursor-pointer'>
       <a href = '#skills'><p>SKILLS</p></a>
    </li>

    <li onClick = {() => setShowMenu (false)} className='hover:bg-[#dee2e6] hover:text-[#03045e] hover:transition-all duration-300 py-2 rounded-sm cursor-pointer'>
       <a href = '#projects'><p>PROJECTS</p></a>
    </li>
       <li onClick = {() => setShowMenu (false)} className='hover:bg-[#dee2e6] hover:text-[#03045e] hover:transition-all duration-300 py-2 rounded-sm cursor-pointer'>
       <a href = '#contact'><p>CONTACT</p></a>
    </li>
  
    

   </ul>
  </>
 
</header>
  )
}

export default Navbar;