
import { motion } from 'framer-motion';
import profile from '../assets/somiron.jpeg';

function Hero({ setActiveLink }) {
  return (
    <div
      className="flex min-h-screen w-full flex-col items-center justify-center gap-4 px-4 py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center justify-center gap-5"
      >
        <img
          src={profile}
          alt="Somiron Gope - MERN Stack Developer"
          className="h-32 w-32 rounded-full border-4 border-purple-500/30 object-cover shadow-lg"
        />

        <h1 className="text-center text-4xl font-bold sm:text-5xl">
          Hi, I'm{' '}
          <span className="bg-linear-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent">
            Somiron Gope
          </span>
        </h1>

        <h2 className="text-center text-lg font-semibold text-gray-500 sm:text-2xl">
          MERN Stack Developer | React.js | Node.js | MongoDB
        </h2>

        <p className="max-w-2xl text-center leading-7 text-gray-400">
          I build modern, responsive, and user-friendly full-stack web
          applications using MongoDB, Express.js, React.js, and Node.js.
          I have built and deployed Forever E-Commerce, featuring product
          browsing, authentication, shopping cart, order management, and
          an admin dashboard. I'm passionate about solving problems and
          creating practical web solutions with great user experiences.
        </p>

        <div className="mt-2 flex flex-wrap justify-center gap-4">
          <a
            href="#contact"
            onClick={() => setActiveLink?.('contact')}
            className="rounded-lg bg-linear-to-r from-orange-500 to-purple-600 px-6 py-3 text-white transition duration-300 ease-in-out hover:scale-105 hover:from-pink-600 hover:to-sky-500"
          >
            Let's Talk
          </a>

          <a
            href="/Somiron_Gope_MERN_Stack_Developer_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-gray-400 px-6 py-3 transition duration-300 hover:scale-105 hover:border-purple-500"
          >
            View / Download CV
          </a>
        </div>
      </motion.div>
    </div>
  );
}

export default Hero;
