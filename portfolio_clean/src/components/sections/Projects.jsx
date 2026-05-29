import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { SectionHeader } from '../ui/SectionHeader';
import { GlowOrb } from '../ui/GlowOrb';
import { projects } from '../../data/portfolioData';

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="group relative glass border border-white/8 rounded-2xl overflow-hidden cursor-default"
    >
      {/* Hover border gradient */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `linear-gradient(135deg, ${project.accentColor}15, transparent 60%)` }}
      />

      {/* Top accent bar */}
      <div
        className={`h-1 w-full bg-gradient-to-r ${project.gradient.replace('/20', '')}`}
        style={{ background: `linear-gradient(90deg, ${project.accentColor}80, transparent)` }}
      />

      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex items-center gap-3">
            <div
              className={`w-10 h-10 rounded-xl bg-gradient-to-br ${project.gradient} border border-white/10 flex items-center justify-center text-xl flex-shrink-0`}
            >
              {project.icon}
            </div>
            <div>
              <h3 className="font-display font-semibold text-white text-base group-hover:text-cyan-300 transition-colors">
                {project.title}
              </h3>
              {project.featured && (
                <span className="text-xs font-mono text-amber-400/70 border border-amber-400/20 rounded-md px-1.5 py-0.5 mt-0.5 inline-block">
                  Featured
                </span>
              )}
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 glass border border-white/10 rounded-lg flex items-center justify-center text-white/60 hover:text-white hover:border-white/20 transition-all"
              aria-label="GitHub"
            >
              <FiGithub size={14} />
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 glass border border-white/10 rounded-lg flex items-center justify-center text-white/60 hover:text-white hover:border-white/20 transition-all"
              aria-label="Live Demo"
            >
              <FiExternalLink size={14} />
            </a>
          </div>
        </div>

        {/* Description */}
        <p className="text-white/50 text-sm leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map(t => (
            <span
              key={t}
              className="text-xs font-mono text-white/40 border border-white/8 rounded-md px-2 py-0.5"
              style={{ borderColor: `${project.accentColor}25` }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-3 mt-5 pt-4 border-t border-white/5">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl border border-white/10 text-white/60 hover:text-white hover:border-white/20 text-xs font-medium transition-all"
          >
            <FiGithub size={13} /> GitHub
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl text-white text-xs font-medium transition-all"
            style={{
              background: `linear-gradient(135deg, ${project.accentColor}40, ${project.accentColor}20)`,
              border: `1px solid ${project.accentColor}40`,
            }}
          >
            <FiExternalLink size={13} /> Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative section-padding overflow-hidden">
      <GlowOrb color="pink" size="lg" className="-top-20 right-0 opacity-15" />
      <GlowOrb color="violet" size="md" className="bottom-20 left-0 opacity-15" />

      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Projects"
          title="Things I've Built"
          subtitle="A selection of real-world full-stack applications I've designed and developed."
        />

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* View more */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-10"
        >
          <a
            href="https://github.com/ombarwal20"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 glass border border-white/10 text-white/60 hover:text-white hover:border-white/20 rounded-xl font-medium text-sm transition-all"
          >
            <FiGithub size={16} />
            View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
