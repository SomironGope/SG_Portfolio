import { motion } from "framer-motion";



// ---------------- Contacts Icons---------------
import { MdOutlineEmail } from "react-icons/md";
import { MdAddCall } from "react-icons/md";


import { FaLocationDot } from "react-icons/fa6";
import { useState } from "react";



function Contact() {
  const [result,setResult] = useState ("");
  const [loading,setLoading] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading (true);
    setResult("");

    const formData = new FormData(e.target);

    //

    formData.append("access_key", import.meta.env.VITE_WEB3FORM_ACCESS_KEY);
    
    try {
      const response = await fetch ("https://api.web3forms.com/submit", { method: "POST", body: formData,});

      const data = await response.json();
      console.log(data)

      if(data.success) {

      

       setResult ("Message sent successfully!");
        e.target.reset();

       setTimeout(() =>{
      setResult ("")
         
      },2000)
       
      
       
      }else{
        setResult("Something went wrong, Please try again");
      }

    } catch (error) {
      console.error(error);
      setResult ("Failed to send message.");

      setTimeout (() => {
        setResult ("")
      }, 2000)
    }finally{
      setLoading (false)
    }

  };

return ( <motion.section initial = {{opacity: 0, y: 50}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.8, delay:0.2}} 
      viewport = {{once:true}} id ='contact' className=" min-h-screen py-20">
        <h1 className="text-4xl font-bold text-center tracking-wider">Get In Touch</h1>
        <div className="flex flex-col sm:flex-row sm:justify-between py-5 px-4 gap-2 sm:gap-4 md:6 ">
          {/* -------------Left Side-------------- */}
          <div className="sm:w-1/2">
             <h1 className="text-3xl font-bold bg-linear-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent mb-2">Let's talk</h1>
             <p className="text-sm md:text-base leading-6 space-x-2 tracking-wider">I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime</p>
            <div className="flex items-center justify-start gap-2 text-center py-1 mt-5">
               <MdOutlineEmail className="w-6" /> <p className="text-sm text-gray-300"><strong>Email:</strong> somirongope466@gmail.com</p>
            </div>
            <div className="flex items-center justify-start gap-2 text-center py-1">
              <MdAddCall className="w-6"/><p className="text-sm text-gray-300"> <strong>Phone No:</strong>+966542658745 </p>
            </div>
            <div  className="flex items-center justify-start gap-2 text-center py-1">
               <FaLocationDot className="w-6" /> <p className="text-sm text-gray-300"><strong>Location:</strong> Riyadh, Saudi Arabia</p>
            </div>
          </div>
          {/* ----------------Right Side--------------- */}
          <div className="sm:flex-1 ">
             <form onSubmit = {handleSubmit} className="flex flex-col py-10 gap-2 ">
                <label htmlFor="" className="text-sm text-gray-300 font-semibold">Your Name</label>
                <input type="text" name="user_name" placeholder="Enter your name" required className="outline-none py-2 px-2 text-sm text-gray-300 rounded-sm border border-slate-700/50 placeholder:text-sm placeholder:text-gray-400 focus:border focus-visible:border-sky-800"/>   
                <label htmlFor="" className="text-sm text-gray-300 font-semibold">Your Email</label>
                <input type="email" name="user_email" placeholder="Enter your email" required className="outline-none py-2 px-2 text-sm text-gray-300 rounded-sm border border-slate-700/50 placeholder:text-sm placeholder:text-gray-400 focus:border focus-visible:border-sky-800"/>
                <label htmlFor="" className="text-sm text-gray-300 font-semibold mt-2">Write your message here</label>
                <textarea name= 'message' placeholder="Enter your message" rows= '8' required className=" py-1 my-2 px-1 outline-none text-sm text-gray-300 rounded-sm  border border-slate-600 focus:border focus-visible:border-sky-800"/>
                <button type="submit" disabled = {loading} className=" w-50 text-center items-center justify-center py-2 px-6 mt-2 text-sm bg-amber-500 cursor-pointer rounded-sm hover:bg-sky-400 hover:scale-105 hover:transition-all hover:ease-in-out hover:duration-300"> {loading ? "Sending... " : "Submit now" } </button>
                {result && ( <p className="text-center mt-4  "> {result} </p> )}
             </form>
          </div>
        </div>
      </motion.section>)
    
     
    
  
}

export default Contact;