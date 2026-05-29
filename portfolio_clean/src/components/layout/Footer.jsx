import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { personalInfo } from '../../data/portfolioData';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 py-10 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-cyan-500 to-violet-600 flex items-center justify-center text-white font-display font-bold text-xs">
            OB
          </div>
          <span className="font-display font-semibold text-white/70 text-sm">
            Om Barwal
          </span>
        </div>

        <p className="text-white/30 text-sm font-mono">
          © {year} Om Ashok Barwal — Built with React + Vite
        </p>

        <div className="flex items-center gap-4">
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-cyan-400 transition-colors">
            <FiGithub size={18} />
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-cyan-400 transition-colors">
            <FiLinkedin size={18} />
          </a>
          <a href={`mailto:${personalInfo.email}`} className="text-white/40 hover:text-cyan-400 transition-colors">
            <FiMail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
