import {motion} from 'framer-motion';
import profile from '../assets/somiron.jpeg';

function About() {
  return (
    
      
      <motion.div initial = {{opacity: 0, y: 50}} whileInView = {{opacity: 1, y:0}} 
      transition = {{duration:0.8, delay:0.2}} viewport = {{once:true}} id = 'about'  className=' w-full min-h-screen text-center pt-10 '>
      {/* --------------------------Left Side------------------------- */}
        <h1 className='block span bg-linear-to-r from-pink-500 to-sky-600 text-transparent bg-clip-text pb-10 text-3xl sm:text-4xl font-bold'>About Me</h1>
      <div className='flex flex-col  items-center  justify-center text-justify p-2 lg:flex-row lg:justify-between gap-8 '>
           <div className=' flex justify-center text-center'>
         
         <img src= {profile} alt=""  className='w-full h-50 sm:w-100 md:w-125 sm:h-auto p-2 shrink-0 object-cover rounded-2xl '/>
      </div> 
      <div className='py-2'>
         <div className='leading-8'>
             <p><span className='span text-2xl bg-linear-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent font-semibold '>Hi, I'm Somiron Gope,</span> a passionate Frontend Developer currently learing the MERN stack. I enjoy building mordern,
             resposive, and user-friendly web application using HTML, CSS, JavaScript, React.js, Tailwind CSS, and React Router. <br />
             I have experience creating e-commerece websites, resposive user interfaces, and interactive web applications, I continuosly improve my skills by
             building real-world projects and learning mordern web development technologies.<br/>
             My goal is to become a professional Full-Stack MERN Developer and work on projects that deliver great user experiences and solve real-world problems.
             I am always eager to learn new technologies, take on challenges, and grow as a developer.</p> 
         </div>
      </div>
      </div>
     
      </motion.div>
      

  )
}

export default About;