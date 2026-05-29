import { motion } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';
import { GlowOrb } from '../ui/GlowOrb';
import { skills, skillTags } from '../../data/portfolioData';

function SkillBar({ name, level, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="space-y-1.5"
    >
      <div className="flex justify-between text-xs">
        <span className="text-white/70 font-medium">{name}</span>
        <span className="font-mono text-white/30">{level}%</span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay + 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-violet-500"
        />
      </div>
    </motion.div>
  );
}

const categories = [
  { key: 'languages', label: 'Languages', icon: '💡', color: 'from-cyan-500/15 to-cyan-500/5 border-cyan-500/15' },
  { key: 'frontend', label: 'Frontend', icon: '🎨', color: 'from-violet-500/15 to-violet-500/5 border-violet-500/15' },
  { key: 'backend', label: 'Backend', icon: '⚙️', color: 'from-emerald-500/15 to-emerald-500/5 border-emerald-500/15' },
  { key: 'tools', label: 'Tools & Platforms', icon: '🛠️', color: 'from-pink-500/15 to-pink-500/5 border-pink-500/15' },
];

export function Skills() {
  return (
    <section id="skills" className="relative section-padding overflow-hidden">
      <GlowOrb color="cyan" size="lg" className="-bottom-20 left-1/4 opacity-20" />
      <GlowOrb color="emerald" size="md" className="top-1/2 right-10 opacity-15" />

      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Technical Skills"
          title="My Tech Arsenal"
          subtitle="A curated set of technologies I work with daily to build robust, scalable applications."
        />

        {/* Skill bars grid */}
        <div className="grid md:grid-cols-2 gap-5 mb-12">
          {categories.map(({ key, label, icon, color }, ci) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: ci * 0.1 }}
              className={`bg-gradient-to-br ${color} border rounded-2xl p-6 backdrop-blur-sm`}
            >
              <h3 className="font-display font-semibold text-white mb-5 flex items-center gap-2 text-sm">
                <span>{icon}</span> {label}
              </h3>
              <div className="space-y-4">
                {skills[key].map((skill, i) => (
                  <SkillBar key={skill.name} {...skill} delay={ci * 0.05 + i * 0.06} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tag cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass border border-white/8 rounded-2xl p-7"
        >
          <p className="text-center text-xs font-mono text-white/30 tracking-widest uppercase mb-5">
            All Technologies
          </p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {skillTags.map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
                whileHover={{ scale: 1.08, y: -2 }}
                className="px-3.5 py-1.5 text-xs font-mono text-white/60 border border-white/8 rounded-full hover:border-cyan-400/40 hover:text-cyan-300 hover:bg-cyan-400/5 transition-all duration-200 cursor-default"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
