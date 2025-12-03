export default function Button({ children, variant = 'primary', ...props }) {
  const variants = {
    primary: 'bg-[#4F649B] text-white hover:text-[#4F649B] hover:bg-white hover:underline hover:scale-175',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700',
    outline: 'border-2 border-[#4F649B] text-[#4F649B] hover:bg-[#4F649B] hover:text-white',
  };

  return (
    <button 
      className={`px-6 py-2.5 rounded-xl transition-all duration-300 ${variants[variant]}`}
      {...props}
    >
      {children}
    </button>
  );
}