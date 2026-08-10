import {motion} from 'framer-motion';

function Footer() {
  return (
    <motion.footer initial = {{opacity: 0, y:50}} whileInView={{opacity:1, y:0}} transition={{duration: 0.8, delay: 0.2}} viewport={{once:true}} className='bg-[#03045e] text-white py-8 rounded-md' >
      <div className=' mx-auto px-5 text-center'>
        <h1  className='text-2xl font-bold'>Somiron <span className='text-purple-400'>Gope</span></h1>
        
        <p className='text-gray-300 mt-2'>Frotend Developer | React.js | Tailwind CSS</p>
     
       <div className='flex justify-center gap-5 mt-5'>
          <a href='#home' className='hover:text-purple-400 transition'>Home</a>
          <a href='#about' className='hover:text-purple-400 transition'>About</a>
          <a href='#skills' className='hover:text-purple-400 transition'>Skills</a>
          <a href='#projects' className='hover:text-purple-400 transition'>Projects</a>
          <a href='#contact' className='hover:text-purple-400 transition'>Contact</a>
       </div>
     
     <div>
       <a href="https://github.com/" target= "_blank" rel='noopener noreferrer' className='hover:text-purple-400 transition'>GitHub</a>
       <a href= "https://linkedin.com" target= "_blank" rel='noopener noreferrer' className='hover:text-purple-400 transition'>LinkedIn</a>
       <a href= "https://mail.google.com/mail/u/0/#inbox" target= "_blank" rel='noopener noreferrer' className='hover:text-purple-400 transition'>Email</a>
     
      <hr className='border-gray-700 my-6' />

      <p className='text-sm text-gray-400'>@ {new Date().getFullYear() } Somiron Gope. All rights reserved.</p>
     
     </div>
     
      </div>
     
      
      </motion.footer>
  )
}

export default Footer;