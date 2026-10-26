
import { motion } from "framer-motion";
import projectImage from "../assets/projcets/ProjectData";

function Projects() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.1 }}
      viewport={{ once: true }}
      id="projects"
      className="min-h-screen px-4 py-20"
    >
      <h2 className="mb-12 text-center text-4xl font-bold tracking-wider">
        <span className="bg-linear-to-r from-orange-400 to-purple-500 bg-clip-text text-transparent">
          My Projects
        </span>
      </h2>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projectImage.map((project, index) => (
          <motion.article
            key={project.title || index}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
            className="flex h-full flex-col overflow-hidden rounded-xl border border-slate-700 bg-slate-900/50 shadow-lg shadow-purple-500/5 transition-colors duration-300 hover:border-purple-500/50 hover:shadow-purple-500/10"
          >
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="h-56 w-full border-b border-slate-700 object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>

            <div className="flex flex-1 flex-col p-5">
              <h3 className="mb-3 text-center text-xl font-semibold text-gray-100">
                {project.title}
              </h3>

              <p className="mb-5 flex-1 text-justify text-sm leading-7 text-gray-300 sm:text-base">
                {project.description}
              </p>

              <div className="mt-auto flex flex-wrap gap-3">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 rounded-lg bg-amber-500 px-4 py-2.5 text-center font-medium text-slate-950 transition duration-300 hover:bg-amber-400"
                  >
                    Live Demo ↗
                  </a>
                )}

                {project.gitHub && (
                  <a
                    href={project.gitHub}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 rounded-lg border border-slate-600 px-4 py-2.5 text-center font-medium text-gray-200 transition duration-300 hover:border-purple-400 hover:bg-purple-500/10"
                  >
                    GitHub ↗
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}

export default Projects;
