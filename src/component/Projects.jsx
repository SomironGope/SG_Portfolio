import {motion} from 'framer-motion'
import projectImage from '../assets/projcets/ProjectData';
function Projects() {
  return (
    
      <motion.section initial = {{opacity: 0, y: 50}} whileInView={{opacity: 1, y: 0}} transition={{duration:0.8, delay: 0.2}} viewport={{once:true}} id = 'projects' className='min-h-screen py-20'>
        <h1 className='text-4xl font-bold text-gray-300 text-center tracking-wider mb-10'>Projects</h1>
        <div className='pt-5 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 overflow-hidden px-2 sm:px-2 md:px-2 lg:px-3'>
            {
              projectImage.map ((project,index) => (
                <div key={index} className='bg-slate-900/50 border border-slate-700 rounded-xl p-4 overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20'>
                  <img src= {project.image} alt={project.title} className='w-full h-72 object-cover rounded-md  border border-sky-800 hover:scale-105 hover:transition-all hover:duration-300 hover:ease-in-out hover:shadow-md hover:shadow-sky-800' />
                  <p className='text-sm sm:text-base text-gray-200 font-semibold tracking-wider leading-8 text-center py-1 sm:py-2 md:py-4 ' >{project.title}</p>
                  <p className='py-2 px-1 sm:px-1 lg:px-2 sm:py-3 md:py-3 text-sm md:text-base lg:tex-md text-gray-300 text-justify'>{project.description}</p>
                  
                  <div className='flex gap-3 mt-3'>
                     <a href= {project.live} target= "_blank" rel = "noopener noreferrer" className='px-3 py-2 rounded bg-amber-500 hover:bg-sky-500 hover:transition-all hover:duration-300 '>Live Demo</a>
                    <a href={project.gitHub} target= "_blank" rel='noopener noreferrer' className='px-3 py-2 rounded bg-pink-500 hover:bg-violet-500 hover:transition-all hover:duration-300 '>GitHub</a>
                    
                    </div> 
                </div>
              ))
            }
        </div>
        </motion.section>
        
  )
}

export default Projects;