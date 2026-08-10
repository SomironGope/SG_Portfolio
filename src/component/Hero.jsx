import profile from '../assets/somiron.jpeg';

function Hero({ setActiveLink}) {
  return (
    <div className = ' w-full min-h-screen flex flex-col items-center justify-center gap-4 py-20'>
       <div className = 'flex flex-col items-center justify-center gap-4'>
           <img src = {profile} alt = 'Somiron Gope' className = 'w-32 h-32 rounded-full object-cover' />
        
            <h1 className='text-4xl font-bold text-center'>Hi, I'm <span className='text-purple-500'>Somiron Gope</span></h1>

            <h2 className='text-xl text-center text-gray-500'>Frontend Developer | React.js & Tailwind CSS</h2>

            <p className='max-w-2xl text-center text-gray-400'> I build fast, responsive, and user-friendly web applications
              using React.js, Tailwind CSS and mordern JavaScript technologies.
              Passionate about creating clear  UI and great user experiences.
            </p>
           <div className='flex gap-6'>
             <a onClick={()=> setActiveLink('contact') } href = '#contact' className= 'py-3 px-6 rounded-lg bg-linear-to-r from-orange-500 to-purple-600 text-white hover:bg-linear-to-r hover:from-pink-600 hover:to-sky-500 hover:transition-all hover:duration-300 hover:ease-in-out hover:scale-110'  > Let's Contact</a>
             <a href='/Somiron_Gope.pdf' 
              target= "_blank" rel= 'noopener noreferrer'
                className='border px-6 py-3 rounded-lg hover:transition-all hover:duration-300 hover:ease-in-out hover:scale-110' download >Download CV</a>
           </div>
            
       </div>
    </div>
  ) 
}

export default Hero;      