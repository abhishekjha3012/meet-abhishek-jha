import { motion } from "motion/react";
import { Mail, Phone, MapPin, Code2, Briefcase, GraduationCap, Award } from "lucide-react";
import profileImage from "../assets/dp.png";
export default function App() {
  const experiences = [
    {
      period: "2022 - Present",
      role: "Senior Software Engineer",
      company: "Cisco Systems Pvt Ltd.",
      description: [
        "I work as a frontend developer in the Security team at Cisco, where I lead a team of six. We are developing a microapp for one of Cisco's Security suite offerings.",
        "Before this role, I was part of the Webex Collaboration team. My responsibilities included integrating Webex with Microsoft Teams in a phased approach.",
        "The tech stack I'm working right now is ReactJS, JavaScript, CSS, HTML, and Handlebars."
      ],
    },
    {
      period: "2020 - 2022",
      role: "Associate",
      company: "J P Morgan & Chase Co.",
      description: [
        "I worked as a frontend developer on the Risk and Forecasting Services (RFS) team, where I developed multiple dashboards for generating daily trading reports.",
        "The tech stack for this role included ReactJS, JavaScript, HTML, and CSS."
      ],
    },
    {
      period: "2016 - 2020",
      role: "Consultant",
      company: "Deloitte Consulting",
      description: [
        "I was working as a frontend lead in Deloitte's IoT practice. My responsibilities included developing UI widgets and components for the Thingworx IoT platform, creating dashboards to display real-time data metrics from connected devices, and mentoring new developers joining the team.",
        "Before joining Deloitte's IoT practice, I was part of Deloitte Digital, where I worked on creating a B2B application for one of the world's leading banks.",
        "The tech stack included Javascript, ReactJS, VueJS, EmberJS, CSS, HTML."
      ],
    },
    {
      period: "2014 - 2016",
      role: "Interactive Developer",
      company: "Sapient Nitro",
      description: [
        "I worked as a frontend developer, creating various e-commerce websites using the Hybris and Demandware platforms. My responsibilities included adhering to the team's coding standards and implementing best practices.",
        "The tech stack comprised JavaScript, jQuery, and SASS."
      ],
    },
  ];

  const education = [
    {
      degree: "B.TECH IN ELECTRONICS AND COMMUNICATION ENGG.",
      institution: "Manipal Institute of Technology",
      period: "2010-2014",
      score: "6.84 CGPA",
    },
    {
      degree: "10+2 C.B.S.E",
      institution: "Delhi Public School",
      period: "2009-2010",
      score: "82.4%",
    },
    {
      degree: "10 C.B.S.E",
      institution: "Delhi Public School",
      period: "2007-2008",
      score: "89%",
    },
  ];

  const skills = {
    frameworks: ["ReactJS", "VueJS", "EmberJS", "JavaScript", "HTML", "CSS", "jQuery", "Bootstrap", "SASS", "LESS"],
    applications: ["JIRA", "GIT", "Webpack"],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [90, 0, 90],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-indigo-400/20 to-pink-400/20 rounded-full blur-3xl"
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Profile Image */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="relative"
            >
              <div className="relative w-64 h-64 lg:w-80 lg:h-80">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl rotate-6" />
                <img
                  src={profileImage}
                  alt="Abhishek Jha"
                  className="relative w-full h-full object-cover rounded-3xl shadow-2xl"
                />
              </div>
            </motion.div>

            {/* Hero Text */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex-1 text-center lg:text-left"
            >
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full mb-4"
              >
                <span className="flex items-center gap-2">
                  <Code2 size={20} />
                  Sr. Software Engineer
                </span>
              </motion.div>
              <h1 className="text-5xl lg:text-7xl mb-4 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                Abhishek Jha
              </h1>
              <h2 className="text-2xl lg:text-3xl text-slate-600 mb-6">
                Cisco Systems Pvt. Ltd.
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mb-8">
                I am a senior frontend developer with a proven track record in the product and consulting industries. I have expertise in web development, including skills in ReactJS, VueJS, Ember.js, JavaScript, TypeScript, HTML, and CSS.
              </p>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="flex flex-wrap gap-4 justify-center lg:justify-start"
              >
                <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-md">
                  <Briefcase className="text-blue-600" size={20} />
                  <span className="text-slate-700">11 years experience</span>
                </div>
                <a
                  href="mailto:abhishekjha3012@gmail.com"
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg shadow-md hover:shadow-xl transition-shadow"
                >
                  <Mail size={20} />
                  <span>Get in touch</span>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-slate-400 rounded-full p-1">
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-slate-400 rounded-full"
            />
          </div>
        </motion.div>
      </motion.section>

      {/* Experience Section */}
      <section className="py-20 px-6 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl">
                <Briefcase className="text-white" size={24} />
              </div>
              <h2 className="text-4xl">Experience</h2>
            </div>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full" />
          </motion.div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="relative pl-8 pb-8 border-l-2 border-blue-200 last:border-0"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-0 -translate-x-[9px] w-4 h-4 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600" />

                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl mb-1">{exp.role}</h3>
                      <p className="text-xl text-blue-600">{exp.company}</p>
                    </div>
                    <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 rounded-full">
                      {exp.period}
                    </span>
                  </div>
                  <div className="space-y-3">
                    {exp.description.map((desc, i) => (
                      <p key={i} className="text-slate-600 leading-relaxed">
                        {desc}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl">
                <GraduationCap className="text-white" size={24} />
              </div>
              <h2 className="text-4xl">Education</h2>
            </div>
            <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="p-3 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl w-fit mb-4">
                  <Award className="text-purple-600" size={24} />
                </div>
                <h3 className="mb-2">{edu.degree}</h3>
                <p className="text-slate-600 mb-3">{edu.institution}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500">{edu.period}</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full">
                    {edu.score}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl">
                <Code2 className="text-white" size={24} />
              </div>
              <h2 className="text-4xl">Skills</h2>
            </div>
            <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-2xl mb-6 text-emerald-700">Frameworks & Languages</h3>
              <div className="flex flex-wrap gap-3">
                {skills.frameworks.map((skill, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 rounded-full cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-2xl mb-6 text-teal-700">Applications</h3>
              <div className="flex flex-wrap gap-3">
                {skills.applications.map((skill, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-gradient-to-r from-teal-100 to-cyan-100 text-teal-700 rounded-full cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-12 text-white shadow-2xl"
          >
            <h2 className="text-4xl mb-8 text-center">Let's Connect</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <a
                href="mailto:abhishekjha3012@gmail.com"
                className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors"
              >
                <div className="p-3 bg-white/20 rounded-lg">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-sm text-blue-100 mb-1">Email</div>
                  <div>abhishekjha3012@gmail.com</div>
                </div>
              </a>
              <a
                href="tel:+919035118793"
                className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors"
              >
                <div className="p-3 bg-white/20 rounded-lg">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="text-sm text-blue-100 mb-1">Phone</div>
                  <div>+91 9035118793</div>
                </div>
              </a>
            </div>
            <p className="text-center text-blue-100 mt-8 italic">
              "I am passionate about learning new technologies and enjoy seeing their applications in our everyday lives."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-slate-900 text-white text-center">
        <p className="text-slate-400">
          © 2026 Abhishek Jha. All rights reserved.
        </p>
      </footer>
    </div>
  );
}