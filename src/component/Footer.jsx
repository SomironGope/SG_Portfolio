import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.1 }}
      viewport={{ once: true }}
      className="rounded-t-xl bg-[#03045e] px-4 py-10 text-white"
    >
      <div className="mx-auto max-w-6xl text-center">
        {/* Name and Role */}
        <a href="#home" className="inline-block text-2xl font-bold">
          Somiron <span className="text-purple-400">Gope</span>
        </a>

        <p className="mt-2 text-sm text-gray-300 sm:text-base">
          MERN Stack Developer | React.js | Node.js | MongoDB
        </p>

        {/* Navigation */}
        <nav
          aria-label="Footer navigation"
          className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-3"
        >
          {[
            ["Home", "#home"],
            ["About", "#about"],
            ["Skills", "#skills"],
            ["Projects", "#projects"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="text-sm text-gray-300 transition duration-300 hover:text-purple-400 sm:text-base"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Social Links */}
        <div className="mt-7 flex flex-wrap justify-center gap-6">
          <a
            href="https://github.com/SomironGope"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="flex items-center gap-2 text-gray-300 transition hover:text-purple-400"
          >
            <FaGithub className="text-xl" />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="flex items-center gap-2 text-gray-300 transition hover:text-purple-400"
          >
            <FaLinkedin className="text-xl" />
            LinkedIn
          </a>

          <a
            href="https://mail.google.com/mail/?view=cm&to=somirongope466@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email Somiron Gope"
            className="flex items-center gap-2 text-gray-300 transition hover:text-purple-400"
          >
            <FaEnvelope className="text-xl" />
            Email Me
          </a>
        </div>

        <hr className="my-7 border-gray-700" />

        {/* Copyright */}
        <p className="text-sm text-gray-400">
          © {currentYear} Somiron Gope. All rights reserved.
        </p>

        <p className="mt-2 text-xs text-gray-500">
          Designed and developed by Somiron Gope.
        </p>
      </div>
    </motion.footer>
  );
}

export default Footer;
