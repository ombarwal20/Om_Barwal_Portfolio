import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiSend, FiMapPin } from 'react-icons/fi';
import { SectionHeader } from '../ui/SectionHeader';
import { GlowOrb } from '../ui/GlowOrb';
import { personalInfo } from '../../data/portfolioData';

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSending(true);
    await new Promise(r => setTimeout(r, 1200));
    setSending(false);
    setSent(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  };

  const contactLinks = [
    { icon: <FiMail size={18} />, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: <FiGithub size={18} />, label: 'GitHub', value: 'github.com/ombarwal20', href: personalInfo.github },
    { icon: <FiLinkedin size={18} />, label: 'LinkedIn', value: 'linkedin.com/in/om-barwal', href: personalInfo.linkedin },
    { icon: <FiMapPin size={18} />, label: 'Location', value: 'Chhatrapati Sambhajinagar, MH', href: null },
  ];

  return (
    <section id="contact" className="relative section-padding overflow-hidden">
      <GlowOrb color="pink" size="lg" className="-bottom-20 right-0 opacity-15" />
      <GlowOrb color="cyan" size="md" className="top-0 left-0 opacity-10" />

      <div className="max-w-5xl mx-auto">
        <SectionHeader
          eyebrow="Get In Touch"
          title="Let's Work Together"
          subtitle="Have a project in mind or an opportunity to share? I'd love to hear from you."
        />

        <div className="grid lg:grid-cols-5 gap-7">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            <div className="glass border border-white/8 rounded-2xl p-6 flex-1">
              <h3 className="font-display font-semibold text-white mb-2">Let's Connect</h3>
              <p className="text-white/45 text-sm leading-relaxed mb-6">
                I'm actively seeking internships and full-time opportunities. Drop me a message and I'll get back to you promptly.
              </p>

              <ul className="space-y-4">
                {contactLinks.map(({ icon, label, value, href }) => (
                  <li key={label} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center text-cyan-400 flex-shrink-0 mt-0.5">
                      {icon}
                    </div>
                    <div>
                      <p className="text-white/30 text-xs font-mono uppercase tracking-wide">{label}</p>
                      {href ? (
                        <a
                          href={href}
                          target={href.startsWith('http') ? '_blank' : undefined}
                          rel="noopener noreferrer"
                          className="text-white/70 hover:text-cyan-400 transition-colors text-sm break-all"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-white/70 text-sm">{value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Availability badge */}
            <div className="glass border border-emerald-500/20 bg-emerald-500/5 rounded-xl p-4 flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
              <div>
                <p className="text-white/70 text-sm font-medium">Open to Opportunities</p>
                <p className="text-white/35 text-xs font-mono">Internship & Full-time roles</p>
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="glass border border-white/8 rounded-2xl p-7">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-white/30 mb-1.5 uppercase tracking-wide">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 text-sm focus:outline-none focus:border-cyan-400/50 focus:bg-cyan-400/5 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-white/30 mb-1.5 uppercase tracking-wide">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 text-sm focus:outline-none focus:border-cyan-400/50 focus:bg-cyan-400/5 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-white/30 mb-1.5 uppercase tracking-wide">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or opportunity..."
                    required
                    rows={5}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 text-sm focus:outline-none focus:border-cyan-400/50 focus:bg-cyan-400/5 transition-all resize-none"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={sending || sent}
                  className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-display font-semibold text-sm transition-all ${
                    sent
                      ? 'bg-emerald-500/20 border border-emerald-500/40 text-emerald-400'
                      : sending
                      ? 'bg-white/5 border border-white/10 text-white/40 cursor-not-allowed'
                      : 'bg-gradient-to-r from-cyan-500 to-violet-600 text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35'
                  }`}
                >
                  {sent ? (
                    <><span>✓</span> Message Sent!</>
                  ) : sending ? (
                    <><span className="animate-spin">↻</span> Sending...</>
                  ) : (
                    <><FiSend size={15} /> Send Message</>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
