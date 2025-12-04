

export default function Button({ children, variant = 'primary'}) {
  const variants = {
    primary:
      "bg-[#4F649B] text-white hover:text-[#4F649B] hover:bg-white hover:underline hover:scale-175",
  };


  return (
    <button
      className={`px-6 py-2.5 rounded-xl transition-all duration-300 ${variants[variant]}`}
    >
      {children}
    </button>
  );
}
