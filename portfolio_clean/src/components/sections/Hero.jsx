import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiArrowDown, FiDownload } from 'react-icons/fi';
import { useTypingEffect } from '../../hooks/useTypingEffect';
import { GlowOrb } from '../ui/GlowOrb';
import { personalInfo } from '../../data/portfolioData';

const roles = [
  'MERN Stack Developer',
  'Full Stack Engineer',
  'React.js Developer',
  'Node.js Developer',
  'Problem Solver',
];

const floatVariants = {
  animate: {
    y: [0, -12, 0],
    transition: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
  },
};

export function Hero() {
  const typedText = useTypingEffect(roles, 90, 55, 2000);

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,212,255,0.8) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(0,212,255,0.8) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Orbs */}
      <GlowOrb color="cyan" size="xl" className="-top-32 -left-32 opacity-40" />
      <GlowOrb color="violet" size="xl" className="-bottom-32 -right-32 opacity-30" />
      <GlowOrb color="emerald" size="md" className="top-1/2 right-1/4 opacity-20" />

      {/* Floating shapes */}
      <motion.div
        variants={floatVariants}
        animate="animate"
        className="absolute top-24 right-16 w-20 h-20 rounded-2xl border border-cyan-500/15 glass hidden lg:block"
        style={{ animationDelay: '0s' }}
      />
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-32 left-16 w-14 h-14 rounded-xl border border-violet-500/15 glass hidden lg:block"
      />
      <motion.div
        animate={{ y: [0, -6, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute top-1/3 right-8 w-10 h-10 rounded-lg bg-gradient-to-br from-pink-500/10 to-violet-500/10 border border-pink-500/10 hidden xl:block"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 lg:px-24 pt-28 pb-16 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

          {/* Text Content */}
          <div className="flex-1 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-mono text-xs text-white/40 tracking-widest uppercase">
                Available for opportunities
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-white leading-[1.05] mb-4"
            >
              Hi, I'm{' '}
              <span className="gradient-text">Om Barwal</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-2 mb-6 h-10"
            >
              <span className="font-display text-2xl md:text-3xl text-white/60 font-light">
                I build
              </span>
              <span className="font-display text-2xl md:text-3xl font-semibold text-cyan-400">
                {typedText}
                <span className="cursor-blink text-cyan-300 ml-0.5">|</span>
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white/50 text-lg leading-relaxed mb-10 max-w-lg"
            >
              {personalInfo.bio}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-3"
            >
              <a
                href="#projects"
                onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="px-7 py-3.5 bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-display font-semibold rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 text-sm"
              >
                View Projects
              </a>
              <a
                href={personalInfo.resumePdf}
                download="Om_Barwal_Resume.pdf"
                className="px-7 py-3.5 border border-white/15 text-white/80 hover:text-white hover:border-cyan-400/40 hover:bg-cyan-400/5 rounded-xl font-display font-medium text-sm flex items-center gap-2 transition-all duration-200"
              >
                <FiDownload size={15} />
                Download CV
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-4 mt-8"
            >
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/40 hover:text-white transition-colors text-sm"
              >
                <FiGithub size={18} />
                <span className="font-mono">ombarwal20</span>
              </a>
              <span className="text-white/15">·</span>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/40 hover:text-white transition-colors text-sm"
              >
                <FiLinkedin size={18} />
                <span className="font-mono">om-barwal</span>
              </a>
            </motion.div>
          </div>

          {/* Avatar / Code Card */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex flex-col items-center gap-4"
          >
            {/* Avatar circle */}
            <div className="relative">
              <div className="w-52 h-52 rounded-3xl bg-gradient-to-br from-cyan-500/20 via-violet-600/20 to-pink-500/20 border border-white/10 flex items-center justify-center text-8xl glow-cyan">
                👨‍💻
              </div>
              {/* Badge */}
              <div className="absolute -bottom-3 -right-3 glass border border-white/10 rounded-xl px-3 py-1.5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-mono text-white/60">Open to work</span>
              </div>
            </div>

            {/* Stats row */}
            <div className="flex gap-3 mt-2">
              {[
                { label: 'Projects', value: '4+' },
                { label: 'Stack', value: 'MERN' },
                { label: 'Year', value: '2026' },
              ].map(({ label, value }) => (
                <div key={label} className="glass border border-white/8 rounded-xl px-4 py-3 text-center">
                  <p className="font-display font-bold text-xl text-cyan-400">{value}</p>
                  <p className="text-xs text-white/40 font-mono">{label}</p>
                </div>
              ))}
            </div>

            {/* Floating code snippet */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="glass border border-white/8 rounded-xl p-3.5 w-full max-w-[220px]"
            >
              <p className="font-mono text-xs text-white/30 mb-2">// tech stack</p>
              <p className="font-mono text-xs">
                <span className="text-violet-400">const</span>{' '}
                <span className="text-cyan-300">stack</span>{' '}
                <span className="text-white/40">=</span>{' '}
                <span className="text-white/60">{'['}</span>
              </p>
              {['React', 'Node', 'Mongo', 'Express'].map((item, i) => (
                <p key={item} className="font-mono text-xs pl-3 text-emerald-400/80">
                  "{item}"{i < 3 ? ',' : ''}
                </p>
              ))}
              <p className="font-mono text-xs text-white/60">{'];'}</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-white/20 text-xs font-mono tracking-widest uppercase">scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <FiArrowDown className="text-white/20" size={16} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
