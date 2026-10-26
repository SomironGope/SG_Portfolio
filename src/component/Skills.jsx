
import { motion } from "framer-motion";

// Frontend
import { FaReact, FaHtml5, FaCss3Alt, FaGitSquare, FaGithub } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTailwindcss,  } from "react-icons/si";

// Backend
import { FaNodeJs } from "react-icons/fa6";
import { SiExpress, SiMongodb } from "react-icons/si";

// Tools
import { BiLogoVisualStudio } from "react-icons/bi";
import { SiVercel, SiPostman } from "react-icons/si";

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      { name: "React.js", icon: FaReact, color: "text-sky-400" },
      { name: "JavaScript", icon: IoLogoJavascript, color: "text-yellow-400" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
      { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
      { name: "CSS3", icon: FaCss3Alt, color: "text-blue-400" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
      { name: "Express.js", icon: SiExpress, color: "text-gray-300" },
      { name: "MongoDB", icon: SiMongodb, color: "text-green-400" },
      { name: "REST APIs", icon: null },
    ],
  },
  {
    title: "Tools & Deployment",
    skills: [
      { name: "Git", icon: FaGitSquare, color: "text-orange-500" },
      { name: "GitHub", icon: FaGithub, color: "text-gray-300" },
      { name: "VS Code", icon: BiLogoVisualStudio, color: "text-blue-400" },
      { name: "Vercel", icon: SiVercel, color: "text-gray-200" },
      { name: "Postman", icon: SiPostman, color: "text-orange-400" },
    ],
  },
];

function Skills() {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.1 }}
      viewport={{ once: true }}
      className="min-h-screen px-4 py-20"
    >
      <h2 className="mb-12 text-center text-4xl font-bold text-gray-200">
        <span className="bg-linear-to-r from-orange-400 to-purple-500 bg-clip-text text-transparent">
          My Skills
        </span>
      </h2>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <motion.div
            key={group.title}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
            className="rounded-xl border border-slate-700 bg-slate-900/50 p-6 shadow-lg shadow-purple-500/5 transition-colors duration-300 hover:border-purple-500/50 hover:shadow-purple-500/10"
          >
            <h3 className="mb-6 text-center text-2xl font-bold text-orange-400">
              {group.title}
            </h3>

            <div className="space-y-4">
              {group.skills.map((skill) => {
                const Icon = skill.icon;

                return (
                  <div
                    key={skill.name}
                    className="flex items-center justify-center gap-3"
                  >
                    {Icon ? (
                      <Icon className={`text-2xl ${skill.color}`} />
                    ) : (
                      <span className="flex h-6 w-6 items-center justify-center rounded bg-purple-500/20 text-xs font-bold text-purple-300">
                        API
                      </span>
                    )}

                    <p className="text-lg text-gray-300">{skill.name}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Skills;
