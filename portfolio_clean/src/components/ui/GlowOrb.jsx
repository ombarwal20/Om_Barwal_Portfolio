export function GlowOrb({ color = 'cyan', size = 'lg', className = '' }) {
  const colors = {
    cyan: 'bg-cyan-500/10',
    violet: 'bg-violet-500/10',
    emerald: 'bg-emerald-500/10',
    pink: 'bg-pink-500/10',
  };
  const sizes = {
    sm: 'w-48 h-48',
    md: 'w-72 h-72',
    lg: 'w-96 h-96',
    xl: 'w-[600px] h-[600px]',
  };

  return (
    <div
      className={`absolute rounded-full blur-3xl pointer-events-none ${colors[color]} ${sizes[size]} ${className}`}
      aria-hidden="true"
    />
  );
}
