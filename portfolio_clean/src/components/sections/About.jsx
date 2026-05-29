import { motion } from 'framer-motion';
import { FiMapPin, FiCalendar, FiBook } from 'react-icons/fi';
import { SectionHeader } from '../ui/SectionHeader';
import { GlowOrb } from '../ui/GlowOrb';
import { personalInfo, education, certifications } from '../../data/portfolioData';

export function About() {
  return (
    <section id="about" className="relative section-padding overflow-hidden">
      <GlowOrb color="violet" size="lg" className="-top-20 left-1/2 -translate-x-1/2 opacity-20" />

      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="About Me"
          title="The Developer Behind the Code"
          subtitle="Turning ideas into pixel-perfect, performant web experiences."
        />

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left: Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="glass border border-white/8 rounded-2xl p-7 space-y-4">
              <p className="text-white/65 leading-relaxed text-[15px]">
                I'm <span className="text-white font-medium">Om Ashok Barwal</span>, a passionate Computer Science student from{' '}
                <span className="text-cyan-400">Chhatrapati Sambhajinagar, Maharashtra</span>. I specialize in building full-stack web applications using the MERN stack.
              </p>
              <p className="text-white/65 leading-relaxed text-[15px]">
                I love solving real-world problems through clean, scalable code. Whether it's crafting smooth React UIs or designing robust Node.js APIs, I bring the same attention to detail to every layer of the stack.
              </p>
              <p className="text-white/65 leading-relaxed text-[15px]">
                When I'm not coding, you'll find me reading, playing cricket, or exploring the latest in web technology.
              </p>
            </div>

            {/* Quick facts */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: <FiMapPin size={14} />, label: 'Location', value: 'Chhatrapati Sambhajinagar, MH' },
                { icon: <FiCalendar size={14} />, label: 'DOB', value: '20 September 2004' },
                { icon: <FiBook size={14} />, label: 'Degree', value: 'B.Sc Computer Science' },
                { icon: '🗣️', label: 'Languages', value: 'English, Hindi, Marathi' },
              ].map(({ icon, label, value }) => (
                <div key={label} className="glass border border-white/8 rounded-xl p-4">
                  <div className="flex items-center gap-2 text-white/40 mb-1 text-xs">
                    <span className="text-cyan-400">{icon}</span>
                    <span className="font-mono tracking-wide uppercase">{label}</span>
                  </div>
                  <p className="text-white/80 text-sm font-medium">{value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Education + Certs */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-5"
          >
            {/* Education card */}
            <div className="glass border border-white/8 rounded-2xl p-7">
              <h3 className="font-display font-semibold text-white mb-4 flex items-center gap-2">
                <span className="text-lg">🎓</span> Education
              </h3>
              {education.map((edu) => (
                <div key={edu.degree} className="space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="text-white font-medium text-sm">{edu.institution}</p>
                      <p className="text-cyan-400/80 text-sm mt-0.5">{edu.degree}</p>
                      <p className="text-white/40 text-xs mt-0.5">{edu.location}</p>
                    </div>
                    <span className="glass border border-white/10 rounded-lg px-2.5 py-1 text-xs font-mono text-white/50 whitespace-nowrap">
                      {edu.year}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {edu.subjects.map(s => (
                      <span key={s} className="text-xs font-mono text-white/40 border border-white/8 rounded-md px-2 py-0.5">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="glass border border-white/8 rounded-2xl p-7">
              <h3 className="font-display font-semibold text-white mb-4 flex items-center gap-2">
                <span className="text-lg">🏆</span> Certifications
              </h3>
              <ul className="space-y-2.5">
                {certifications.map((cert, i) => (
                  <motion.li
                    key={cert}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    className="flex items-start gap-3 text-sm text-white/65"
                  >
                    <span className="mt-0.5 w-4 h-4 rounded-full bg-gradient-to-br from-cyan-500/30 to-violet-500/30 border border-cyan-500/30 flex items-center justify-center flex-shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    </span>
                    {cert}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
