

export default function Button({ children, variant = 'primary', size = 'md' }) {
  const variants = {
    primary: 'bg-[#4F649B] text-white hover:text-[#4F649B] hover:bg-white hover:underline hover:scale-175',
  };

  const size = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  return (
    <button 
      className={`px-6 py-2.5 rounded-xl transition-all duration-300 ${variants[variant]}`}
     
    >
      {children}
    </button>
  );
}

