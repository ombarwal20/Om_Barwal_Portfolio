import { motion } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';
import { GlowOrb } from '../ui/GlowOrb';
import { experience } from '../../data/portfolioData';

function TimelineItem({ item, index, isLast }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className={`relative flex gap-6 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row`}
    >
      {/* Line + dot */}
      <div className="flex flex-col items-center flex-shrink-0 w-6">
        <div
          className="w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 z-10 bg-bg-primary"
          style={{ borderColor: item.color }}
        >
          <div className="w-2 h-2 rounded-full" style={{ background: item.color }} />
        </div>
        {!isLast && <div className="w-px flex-1 bg-gradient-to-b from-white/10 to-transparent mt-2" />}
      </div>

      {/* Card */}
      <div className="flex-1 pb-8">
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="glass border border-white/8 rounded-2xl p-6 group hover:border-white/15 transition-all duration-300"
          style={{ '--accent': item.color }}
        >
          <div className="flex items-start justify-between gap-3 mb-3">
            <div>
              <h3 className="font-display font-semibold text-white text-base">{item.role}</h3>
              <p className="text-sm mt-0.5" style={{ color: item.color }}>{item.company}</p>
            </div>
            <div className="flex flex-col items-end gap-1.5">
              <span
                className="text-xs font-mono border rounded-lg px-2.5 py-1"
                style={{ color: item.color, borderColor: `${item.color}35`, background: `${item.color}10` }}
              >
                {item.year}
              </span>
              <span className="text-xs text-white/30 font-mono">{item.type}</span>
            </div>
          </div>

          <p className="text-white/55 text-sm leading-relaxed mb-4">{item.description}</p>

          <div className="flex flex-wrap gap-2">
            {item.skills.map(s => (
              <span
                key={s}
                className="text-xs font-mono text-white/40 border border-white/8 rounded-md px-2 py-0.5"
              >
                {s}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export function Experience() {
  return (
    <section id="experience" className="relative section-padding overflow-hidden">
      <GlowOrb color="emerald" size="lg" className="-top-20 left-0 opacity-15" />

      <div className="max-w-4xl mx-auto">
        <SectionHeader
          eyebrow="Experience & Training"
          title="My Journey So Far"
          subtitle="Internships, virtual experiences, and certifications that shaped my skills."
        />

        <div className="space-y-0">
          {experience.map((item, i) => (
            <TimelineItem key={item.id} item={item} index={i} isLast={i === experience.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
