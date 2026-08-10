import { motion } from "framer-motion";

// ----------------FRONTEND ICONS----------------

import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTailwindcss } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";

// --------------BACKEND ICONS------------
import { FaNodeJs } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";

// ---------------------TOOLS--------------
import { FaGitSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BiLogoVisualStudio } from "react-icons/bi";
import { SiVercel } from "react-icons/si";
import { SiPostman } from "react-icons/si";





function Skills() {
  return (
    
      <motion.section initial = {{opacity: 0, y: 50}} whileInView = {{opacity:0.8, y:0}} 
      transition = {{duration:0.8, delay:0.2}} viewport = {{once:true}} id = 'skills' className="min-h-screen py-20">
        
        <div>
          <h1 className="text-x4l text-center text-gray-300 font-bold mb-10">SKILLS</h1>
         
         <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              
              {/* ----------------------------FRONTEND-------------------- */}
           <div className=" h-full border  border-slate-700 rounded-xl bg-slate-900/50  p-6 text-center hover:scale-105 hover:transition-all hover:duration-300 hover:ease-in-out hover:shadow-lg hover:shadow-purple-500/20">
            <h3 className="text-2xl font-bold text-orange-400 mb-4">Frontend</h3>
             
            
                <div className="flex gap-4 items-center justify-center text-center ">
                  <div>
                      <FaReact className="text-xl text-sky-400 rounded-full" />
                  </div>
                  
                  <p className="text-gray-300 text-lg space-y-2">React.js</p>
               </div> 

               <div className="flex gap-4 items-center justify-center">
                  <IoLogoJavascript className="text-xl  text-orange-500 rounded-full" />
                  <p className="text-gray-300 text-lg">JavaScript</p>
               </div>

               <div className="flex gap-4 items-center justify-center">
                  <SiTailwindcss  className="text-xl text-pink-400 rounded-full" />
                  <p className="text-gray-300 text-lg">Tailwind.css</p>
               </div>
               <div className="flex gap-4 items-center justify-center">
                  <FaHtml5 className="text-xl  text-red-400 rounded-full" />
                  <p className="text-gray-300 text-lg">HTML 5</p>
               </div>

               <div className="flex gap-4 items-center justify-center">
                  <FaCss3Alt className="text-xl text-yellow-400 rounded-full" />
                  <p className="text-gray-300 text-lg">CSS 3</p>
               </div>
           </div>

           {/* -----------------------BACKENDS--------------------------- */}
           <div className=" h-full border border-slate-700 rounded-xl bg-slate-900/50 p-6 text-center hover:scale-105 hover:transition-all hover:duration-300 hover:ease-in-out hover:shadow-lg hover:shadow-purple-500/20">
              <h3 className="text-2xl font-bold text-orange-400 mb-4">Backend</h3>
               <div className="flex gap-4 items-center justify-center">
                  <FaNodeJs className="text-xl bg-sky-400 rounded-full" />
                  <p className="text-gray-300 text-lg">Node.js</p>
               </div> 

               <div className="flex gap-4 items-center justify-center">
                  <SiExpress  className="text-xl text-orange-500 rounded-full" />
                  <p className="text-gray-300 text-lg">Express.js</p>
               </div>

               <div className="flex gap-4 items-center justify-center">
                  <SiMongodb   className="text-xl  text-pink-400 rounded-full" />
                  <p className="text-gray-300 text-lg">MongoDB</p>
               </div>
               <div className="flex gap-4 items-center justify-center">
                  
                  <p className="text-gray-300 text-lg">REST API</p>
               </div>
             
           </div>

           {/* ---------------------TOOLS--------------------------- */}
           <div className=" h-full border border-slate-700 rounded-xl bg-slate-900/50    p-6 text-center hover:scale-105 hover:transition-all hover:duration-300 hover:ease-in-out hover:shadow-lg hover:shadow-purple-500/20">
            <h3 className="text-2xl font-bold text-orange-400 mb-4">Tools</h3>
             <div className="flex gap-4 items-center justify-center text-center ">
                  <FaGitSquare className="text-xl text-orange-600 rounded-full" />
                  <p className="text-gray-300 text-lg">Git</p>
               </div> 
                <div className="flex gap-4 items-center justify-center ">
                  <FaGithub className="text-xl text-gray-500 rounded-full" />
                  <p className="text-gray-300 text-lg">GitHub</p>
               </div> 
                <div className="flex gap-4 items-center justify-center">
                  <BiLogoVisualStudio className="text-xl text-blue-400 rounded-full" />
                  <p className="text-gray-300 text-lg">VS Code</p>
                  </div> 

                   <div className="flex gap-4 items-center justify-center">
                  <SiVercel className="text-xl text-black rounded-full" />
                  <p className="text-gray-300 text-lg">Vercel</p>
               </div> 
                <div className="flex gap-4 items-center justify-center">
                  <SiPostman className="text-xl  text-orange-400 rounded-full" />
                  <p className="text-gray-300 text-lg">PostMan</p>
               </div> 
              
           
           </div>
        
        </div>
        </div>
      </motion.section>
    
  )
}

export default Skills;