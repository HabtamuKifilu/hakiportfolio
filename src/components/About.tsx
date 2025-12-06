'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Heart, Home } from 'lucide-react'

export default function About() {
  const timeline = [
    {
      year: "2006 – 2014",
      title: "Primary School",
      place: "Gurangur Elementary School, Bandira",
      icon: <Home size={28} />,
      desc: "Born and raised in rural East Wollega, Oromia — where I first saw how far people walked just to access education."
    },
    {
      year: "2014 – 2016",
      title: "Secondary School",
      place: "Dalo Secondary School, Nekemte",
      icon: <GraduationCap size={28} />,
      desc: "Discovered my love for problem-solving and computers."
    },
    {
      year: "2016 – 2018",
      title: "Preparatory",
      place: "Nekemte Preparatory School, Nekemte",
      icon: <GraduationCap size={28} />,
      desc: "Top of class • Prepared for university entrance exam."
    },
    {
      year: "2018 – 2022",
      title: "University",
      place: "Addis Ababa Science & Technology University - AASTU",
      degree: "B.Sc. Software Engineering",
      icon: <GraduationCap size={28} />,
      desc: "Graduated with good Distinction."
    },
    {
      year: "2022 – 2023",
      title: "IT Officer",
      place: "Cooperative Bank of Oromia",
      icon: <Heart size={28} />,
      desc: "Mastered core banking systems and real-world fintech challenges."
    },
    {
      year: "2023 – Present",
      title: "Senior Software Engineer",
      place: "Freelance and personal projects",
      icon: <Heart size={28} />,
      desc: "Building production-grade, resilient full-stack applications and microservices that power real-world products — blending clean architecture, performance, and meaningful social impact."
    }
  ]

  return (
    <section id="about" className="py-40 px-6 max-w-7xl mx-auto relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-900/10 to-transparent pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h2 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent">
          My Journey
        </h2>
        <p className="text-2xl text-gray-300 mt-6 max-w-3xl mx-auto leading-relaxed">
          From a small rural village in East Wollega, Oromia to building scalable systems.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-20 items-center">
        {/* Timeline */}
        <div className="space-y-10">
          {timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="relative pl-14"
            >
              {i !== timeline.length - 1 && (
                <div className="absolute left-7 top-16 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500/50 to-transparent" />
              )}
              <div className="absolute left-0 top-4 w-14 h-14 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center shadow-xl shadow-cyan-500/30">
                {item.icon}
              </div>
              <div className="bg-slate-800/70 backdrop-blur-xl rounded-3xl p-8 border border-cyan-900/50 hover:border-cyan-400/70 transition-all duration-500">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-cyan-300">{item.title}</h3>
                  <span className="text-cyan-400 font-medium text-sm bg-cyan-900/40 px-4 py-2 rounded-full">
                    {item.year}
                  </span>
                </div>
                <p className="text-xl text-gray-200 mb-2">{item.place}</p>
                {item.degree && <p className="text-lg text-gray-400 mb-4">• {item.degree}</p>}
                <p className="text-gray-300 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Photo — NO BORDER, NO RING, PURE PERFECTION */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, type: "spring" }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <div className="relative group mb-12">
            {/* Subtle glow on hover */}
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full blur-3xl opacity-0 group-hover:opacity-70 transition duration-1000" />
            
            {/* CLEAN IMAGE — NO BORDER, NO RING */}
            <img
              src="/habtamux.jpg"
              alt="Habtamu Kifilu"
              className="relative w-96 h-96 rounded-full object-cover shadow-2xl transition duration-700 group-hover:scale-105"
            />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl text-center text-gray-200 leading-relaxed max-w-lg font-medium"
          >
            I don’t just write code.
            <br />
            I build <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 font-black">
              bridges
            </span> — between dreams and reality.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
