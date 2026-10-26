import { motion } from "framer-motion";
import profile from "../assets/somiron.jpeg";

function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
      id="about"
      className=" w-full min-h-screen text-center pt-10 "
    >
      {/* --------------------------Left Side------------------------- */}
      <h1 className="block span bg-linear-to-r from-pink-500 to-sky-600 text-transparent bg-clip-text pb-10 text-3xl sm:text-4xl font-bold">
        About Me
      </h1>
      <div className="flex flex-col  items-center  justify-center text-justify p-2 lg:flex-row lg:justify-between gap-8 ">
        <div className=" flex justify-center text-center">
          <img
            src={profile}
            alt="Somiron Gope - MERN Stack Developer"
            className="w-full h-50 sm:w-100 md:w-125 sm:h-auto p-2 shrink-0 object-cover rounded-2xl "
          />
        </div>
        <div className="py-2">
          <div className="leading-8">
            <p>
              <h3 className="text-center text-4xl font-bold sm:text-5xl">
          Hi, I'm{' '}
          <span className="bg-linear-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent">
            Somiron Gope
          </span>
        </h3>{" "}
              a MERN Stack Developer passionate about building modern,
              responsive, and user-friendly web applications. I work with
              MongoDB, Express.js, React.js, and Node.js to develop full-stack
              applications with practical features, clean user interfaces, and
              reliable backend functionality. I have built and deployed Forever
              E-Commerce, a full-stack online shopping platform featuring
              product browsing and search, authentication, shopping cart,
              checkout, order management, payment integration in test mode, and
              an admin dashboard. Through this project, I've gained hands-on
              experience developing REST APIs, integrating frontend and backend
              systems, managing databases, implementing authentication, and
              deploying web applications. I enjoy solving problems, learning new
              technologies, and turning ideas into functional web applications.
              My goal is to help businesses and individuals build reliable,
              scalable, and engaging digital experiences.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
