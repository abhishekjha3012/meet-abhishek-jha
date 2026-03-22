import { motion, useScroll, useTransform, useMotionValue, useSpring } from "motion/react";
import { Mail, Phone, MapPin, Code2, Briefcase, GraduationCap, Award, Sparkles, Rocket, Users, CheckCircle2 } from "lucide-react";
import { useState, useEffect } from "react";
import profileImage from "../assets/dp.png";
import { CountUp } from "./components/CountUp";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // Mouse parallax effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [mouseX, mouseY]);

  const smoothScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };
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

  const stats = [
    { icon: Briefcase, label: "Years Experience", value: 11, suffix: "+" },
    { icon: Rocket, label: "Projects Delivered", value: 50, suffix: "+" },
    { icon: Users, label: "Team Members Led", value: 6, suffix: "" },
    { icon: CheckCircle2, label: "Success Rate", value: 99, suffix: "%" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-x-hidden">
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Floating Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-40 backdrop-blur-xl bg-white/70 border border-white/20 shadow-2xl rounded-full px-8 py-3"
      >
        <div className="flex items-center gap-6">
          {[
            { id: "home", label: "Home" },
            { id: "experience", label: "Experience" },
            { id: "education", label: "Education" },
            { id: "skills", label: "Skills" },
            { id: "contact", label: "Contact" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => smoothScrollTo(item.id)}
              className="relative px-4 py-2 transition-colors group"
            >
              <span className={`relative z-10 ${activeSection === item.id ? "text-blue-600" : "text-slate-600"}`}>
                {item.label}
              </span>
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeSection"
                  className="absolute inset-0 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      </motion.nav>

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="fixed w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 pointer-events-none"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, Math.random() * 100 - 50],
            x: [0, Math.random() * 100 - 50],
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Hero Section */}
      <motion.section
        id="home"
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
              className="relative group"
            >
              <div className="relative w-64 h-64 lg:w-80 lg:h-80">
                {/* Animated ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl opacity-75 blur-xl group-hover:opacity-100 transition-opacity"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl rotate-6 group-hover:rotate-12 transition-transform" />
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  src={profileImage}
                  alt="Abhishek Jha"
                  className="relative w-full h-full object-cover rounded-3xl shadow-2xl"
                />
                {/* Sparkle effect */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -top-2 -right-2 bg-white rounded-full p-2 shadow-lg"
                >
                  <Sparkles className="text-yellow-500" size={20} />
                </motion.div>
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

      {/* Stats Section */}
      <section className="py-16 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="relative group"
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-2xl transition-all">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl mb-4"
                  >
                    <stat.icon className="text-white" size={24} />
                  </motion.div>

                  {/* Counter animation */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-4xl mb-2 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
                  >
                    <CountUp end={stat.value} suffix={stat.suffix} />
                  </motion.div>

                  <p className="text-slate-600">{stat.label}</p>

                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-white/50 backdrop-blur-sm">
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
                {/* Timeline dot with pulse */}
                <div className="absolute left-0 top-0 -translate-x-[9px]">
                  <motion.div
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-4 h-4 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600"
                  />
                  <motion.div
                    animate={{ scale: [1, 1.8, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 w-4 h-4 rounded-full bg-blue-400"
                  />
                </div>

                <motion.div
                  whileHover={{ x: 5, scale: 1.02 }}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border border-white/20 group relative overflow-hidden"
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-indigo-50/50 opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="relative z-10">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-2xl mb-1 group-hover:text-blue-600 transition-colors">{exp.role}</h3>
                        <p className="text-xl text-blue-600">{exp.company}</p>
                      </div>
                      <motion.span
                        whileHover={{ scale: 1.05 }}
                        className="px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 rounded-full shadow-sm"
                      >
                        {exp.period}
                      </motion.span>
                    </div>
                    <div className="space-y-3">
                      {exp.description.map((desc, i) => (
                        <motion.p
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                          className="text-slate-600 leading-relaxed"
                        >
                          {desc}
                        </motion.p>
                      ))}
                    </div>
                  </div>

                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6">
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
                whileHover={{
                  y: -10,
                  rotateX: 5,
                  rotateY: 5,
                  scale: 1.02,
                }}
                style={{ perspective: 1000 }}
                className="bg-gradient-to-br from-white to-purple-50/30 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border border-white/20 group relative overflow-hidden"
              >
                {/* Animated background gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-purple-400/10 via-pink-400/10 to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity"
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 100%"],
                  }}
                  transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                />

                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="p-3 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl w-fit mb-4 shadow-md"
                  >
                    <Award className="text-purple-600" size={24} />
                  </motion.div>
                  <h3 className="mb-2 group-hover:text-purple-600 transition-colors">{edu.degree}</h3>
                  <p className="text-slate-600 mb-3">{edu.institution}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-500">{edu.period}</span>
                    <motion.span
                      whileHover={{ scale: 1.1 }}
                      className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full shadow-sm"
                    >
                      {edu.score}
                    </motion.span>
                  </div>
                </div>

                {/* Sparkle corners */}
                <motion.div
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute top-2 right-2 w-2 h-2 bg-purple-400 rounded-full"
                />
                <motion.div
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  className="absolute bottom-2 left-2 w-2 h-2 bg-pink-400 rounded-full"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-white/50 backdrop-blur-sm relative overflow-hidden">
        {/* Floating orbs in background */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-br from-teal-400/20 to-cyan-400/20 rounded-full blur-3xl"
        />
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

          <div className="grid md:grid-cols-2 gap-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -5 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-white/20 group relative overflow-hidden"
            >
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-teal-50/50 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="p-2 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg"
                  >
                    <Code2 className="text-white" size={20} />
                  </motion.div>
                  <h3 className="text-2xl text-emerald-700">Frameworks & Languages</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {skills.frameworks.map((skill, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{
                        scale: 1.1,
                        y: -2,
                        boxShadow: "0 10px 20px rgba(16, 185, 129, 0.2)",
                      }}
                      className="px-4 py-2 bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 rounded-full cursor-default shadow-sm"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-emerald-400/30 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -5 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-white/20 group relative overflow-hidden"
            >
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-50/50 to-cyan-50/50 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="p-2 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-lg"
                  >
                    <Briefcase className="text-white" size={20} />
                  </motion.div>
                  <h3 className="text-2xl text-teal-700">Applications</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {skills.applications.map((skill, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{
                        scale: 1.1,
                        y: -2,
                        boxShadow: "0 10px 20px rgba(20, 184, 166, 0.2)",
                      }}
                      className="px-4 py-2 bg-gradient-to-r from-teal-100 to-cyan-100 text-teal-700 rounded-full cursor-default shadow-sm"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-teal-400/30 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 relative overflow-hidden">
        {/* Animated background blobs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-indigo-400/20 to-pink-400/20 rounded-full blur-3xl"
        />

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 rounded-3xl p-12 text-white shadow-2xl relative overflow-hidden group"
          >
            {/* Animated gradient overlay */}
            <motion.div
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
              }}
              transition={{ duration: 10, repeat: Infinity }}
              className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent"
              style={{
                backgroundSize: "200% 200%",
              }}
            />

            {/* Floating icons */}
            <motion.div
              animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute top-10 right-10 opacity-10"
            >
              <Code2 size={80} />
            </motion.div>
            <motion.div
              animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute bottom-10 left-10 opacity-10"
            >
              <Sparkles size={60} />
            </motion.div>

            <div className="relative z-10">
              <motion.h2
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                className="text-4xl mb-3 text-center"
              >
                Let's Connect
              </motion.h2>
              <p className="text-center text-blue-100 mb-8">
                Ready to create something amazing together?
              </p>

              <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-8">
                <motion.a
                  href="mailto:abhishekjha3012@gmail.com"
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all shadow-lg border border-white/10 group/card"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="p-3 bg-white/20 rounded-lg group-hover/card:bg-white/30 transition-colors"
                  >
                    <Mail size={24} />
                  </motion.div>
                  <div>
                    <div className="text-sm text-blue-100 mb-1">Email</div>
                    <div className="group-hover/card:text-yellow-200 transition-colors">abhishekjha3012@gmail.com</div>
                  </div>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="ml-auto opacity-0 group-hover/card:opacity-100 transition-opacity"
                  >
                    →
                  </motion.div>
                </motion.a>

                <motion.a
                  href="tel:+919035118793"
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all shadow-lg border border-white/10 group/card"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="p-3 bg-white/20 rounded-lg group-hover/card:bg-white/30 transition-colors"
                  >
                    <Phone size={24} />
                  </motion.div>
                  <div>
                    <div className="text-sm text-blue-100 mb-1">Phone</div>
                    <div className="group-hover/card:text-yellow-200 transition-colors">+91 9035118793</div>
                  </div>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="ml-auto opacity-0 group-hover/card:opacity-100 transition-opacity"
                  >
                    →
                  </motion.div>
                </motion.a>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
              >
                <p className="text-blue-100 italic flex items-center justify-center gap-2">
                  <Sparkles size={20} className="text-yellow-300" />
                  "I am passionate about learning new technologies and enjoy seeing their applications in our everyday lives."
                  <Sparkles size={20} className="text-yellow-300" />
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-slate-900 text-white text-center relative overflow-hidden">
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10"
          style={{ backgroundSize: "200% 200%" }}
        />
        <div className="relative z-10">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-slate-400 mb-2"
          >
            © 2026 Abhishek Jha. All rights reserved.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-sm"
          >
            Built with React, Motion & Tailwind CSS
          </motion.p>
        </div>
      </footer>

      {/* Scroll to top button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: showScrollTop ? 1 : 0,
          scale: showScrollTop ? 1 : 0,
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 z-40 p-4 bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-full shadow-2xl hover:shadow-blue-500/50 transition-shadow"
        style={{
          pointerEvents: showScrollTop ? "auto" : "none",
        }}
      >
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          ↑
        </motion.div>
      </motion.button>
    </div>
  );
}