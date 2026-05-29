import { motion } from 'framer-motion';

export function Button({ children, variant = 'primary', size = 'md', href, onClick, className = '', icon, ...props }) {
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  };

  const variants = {
    primary: 'bg-gradient-to-r from-cyan-500 to-violet-600 text-white hover:from-cyan-400 hover:to-violet-500 shadow-lg shadow-cyan-500/20',
    outline: 'border border-white/15 text-white/80 hover:border-cyan-400/60 hover:text-cyan-300 hover:bg-cyan-400/5',
    ghost: 'text-white/70 hover:text-white hover:bg-white/5',
    danger: 'bg-red-500/10 border border-red-500/30 text-red-400 hover:bg-red-500/20',
  };

  const base = `inline-flex items-center gap-2 rounded-xl font-medium font-display transition-all duration-200 cursor-pointer ${sizes[size]} ${variants[variant]} ${className}`;

  const Tag = href ? 'a' : 'button';

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      className="inline-block"
    >
      <Tag
        href={href}
        onClick={onClick}
        className={base}
        {...(href ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...props}
      >
        {icon && <span className="text-base">{icon}</span>}
        {children}
      </Tag>
    </motion.div>
  );
}
