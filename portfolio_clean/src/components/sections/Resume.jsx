import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiDownload, FiEye, FiFileText, FiExternalLink, FiX, FiMaximize2 } from 'react-icons/fi';
import { SectionHeader } from '../ui/SectionHeader';
import { GlowOrb } from '../ui/GlowOrb';
import { personalInfo } from '../../data/portfolioData';

function ResumeModal({ onClose }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ type: 'spring', stiffness: 280, damping: 28 }}
          className="relative w-full max-w-4xl h-[90vh] glass-strong border border-white/10 rounded-2xl overflow-hidden shadow-2xl shadow-black/60"
          onClick={e => e.stopPropagation()}
        >
          {/* Modal header */}
          <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500/30 to-violet-500/30 border border-cyan-500/30 flex items-center justify-center">
                <FiFileText size={14} className="text-cyan-400" />
              </div>
              <div>
                <p className="text-white font-display font-semibold text-sm">Om Barwal — Resume</p>
                <p className="text-white/30 text-xs font-mono">Om_Barwal_Resume.pdf</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={personalInfo.resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white/60 hover:text-white border border-white/10 hover:border-white/20 rounded-lg transition-all"
              >
                <FiExternalLink size={12} /> Open Tab
              </a>
              <a
                href={personalInfo.resumePdf}
                download="Om_Barwal_Resume.pdf"
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-gradient-to-r from-cyan-500 to-violet-600 rounded-lg shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all"
              >
                <FiDownload size={12} /> Download
              </a>
              <button
                onClick={onClose}
                className="p-1.5 text-white/40 hover:text-white hover:bg-white/5 rounded-lg transition-all ml-1"
                aria-label="Close"
              >
                <FiX size={18} />
              </button>
            </div>
          </div>

          {/* PDF iframe */}
          <div className="w-full h-[calc(100%-57px)] bg-gray-950">
            <iframe
              src={`${personalInfo.resumePdf}#toolbar=0&navpanes=0&scrollbar=1`}
              title="Om Barwal Resume"
              className="w-full h-full border-0"
              style={{ background: '#111' }}
            />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

const resumeHighlights = [
  { icon: '⚡', title: 'MERN Stack', desc: 'React, Node.js, Express, MongoDB' },
  { icon: '🤖', title: 'AI Projects', desc: 'Resume Analyzer with AI APIs' },
  { icon: '🏅', title: 'Certifications', desc: 'Full Stack, Frontend, Java, C++' },
  { icon: '🎓', title: 'BSc CS', desc: 'Pursuing 2023 – 2026, BAMUA' },
];

export function Resume() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section id="resume" className="relative section-padding overflow-hidden">
        <GlowOrb color="cyan" size="lg" className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10" />

        <div className="max-w-5xl mx-auto">
          <SectionHeader
            eyebrow="Resume"
            title="My Credentials"
            subtitle="View my full resume online or download a copy — always up to date."
          />

          {/* Main resume card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass border border-white/10 rounded-3xl overflow-hidden"
          >
            {/* Top gradient banner */}
            <div className="h-1.5 w-full bg-gradient-to-r from-cyan-500 via-violet-600 to-pink-500" />

            <div className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">

                {/* Left: Identity + CTA */}
                <div className="flex-1 max-w-lg">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-violet-600/20 border border-cyan-500/25 flex items-center justify-center text-3xl">
                      📄
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-white text-xl">Om Ashok Barwal</h3>
                      <p className="text-cyan-400/80 text-sm font-medium">MERN Stack Developer</p>
                      <p className="text-white/30 text-xs font-mono mt-0.5">Chhatrapati Sambhajinagar, MH</p>
                    </div>
                  </div>

                  <p className="text-white/50 text-sm leading-relaxed mb-8">
                    My resume covers my education, full-stack projects, internship experience, certifications, and technical skills across the MERN ecosystem. One page — everything you need to know.
                  </p>

                  {/* Action buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => setModalOpen(true)}
                      className="flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-display font-semibold rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all text-sm"
                    >
                      <FiEye size={16} />
                      View Resume
                    </motion.button>

                    <motion.a
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                      href={personalInfo.resumePdf}
                      download="Om_Barwal_Resume.pdf"
                      className="flex items-center justify-center gap-2 px-6 py-3.5 border border-white/15 text-white/80 hover:text-white hover:border-cyan-400/40 hover:bg-cyan-400/5 rounded-xl font-display font-medium text-sm transition-all"
                    >
                      <FiDownload size={16} />
                      Download PDF
                    </motion.a>

                    <motion.a
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                      href={personalInfo.resumePdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-5 py-3.5 border border-white/10 text-white/50 hover:text-white/80 hover:border-white/20 rounded-xl font-medium text-sm transition-all"
                    >
                      <FiExternalLink size={14} />
                      Open
                    </motion.a>
                  </div>

                  {/* File info */}
                  <div className="flex items-center gap-4 mt-5">
                    <div className="flex items-center gap-1.5 text-xs text-white/25 font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/60" />
                      PDF · Always current
                    </div>
                    <div className="text-xs text-white/25 font-mono">1 page</div>
                  </div>
                </div>

                {/* Right: Highlights grid */}
                <div className="w-full md:w-64 grid grid-cols-2 gap-3">
                  {resumeHighlights.map(({ icon, title, desc }, i) => (
                    <motion.div
                      key={title}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.07 + 0.2 }}
                      className="glass border border-white/8 rounded-xl p-4 hover:border-white/15 transition-all"
                    >
                      <span className="text-2xl block mb-2">{icon}</span>
                      <p className="text-white font-display font-semibold text-xs mb-0.5">{title}</p>
                      <p className="text-white/35 text-xs leading-snug">{desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom bar: inline PDF preview teaser */}
            <div
              className="border-t border-white/5 px-8 md:px-12 py-4 flex items-center justify-between gap-4 cursor-pointer group"
              onClick={() => setModalOpen(true)}
            >
              <div className="flex items-center gap-3">
                <FiMaximize2 size={14} className="text-white/20 group-hover:text-cyan-400 transition-colors" />
                <span className="text-white/30 text-xs font-mono group-hover:text-white/50 transition-colors">
                  Click to open full-screen preview →
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                {['React', 'Node', 'MongoDB', 'Express'].map(t => (
                  <span key={t} className="text-xs font-mono text-white/20 border border-white/8 rounded px-2 py-0.5">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Also available as DOCX */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-4 flex items-center justify-center gap-4 text-xs text-white/25 font-mono"
          >
            <span>Also available as:</span>
            <a
              href={personalInfo.resumeDocx}
              download="Om_Barwal_Resume.docx"
              className="flex items-center gap-1.5 text-white/35 hover:text-cyan-400 transition-colors border border-white/8 hover:border-cyan-400/30 rounded-md px-2.5 py-1"
            >
              <FiDownload size={11} /> .docx
            </a>
          </motion.div>
        </div>
      </section>

      {/* Full-screen modal */}
      {modalOpen && <ResumeModal onClose={() => setModalOpen(false)} />}
    </>
  );
}
