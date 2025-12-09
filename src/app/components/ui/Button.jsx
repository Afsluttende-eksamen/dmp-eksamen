export default function Button({ children, variant = "secondary" }) {
  const variants = {
    primary:
      "bg-[#4F649B] text-white hover:text-[#4F649B] hover:bg-white hover:underline hover:scale-110",
    secondary:
      "bg-white text-[#4F649B] hover:text-white hover:bg-[#4F649B] hover:underline hover:scale-110",
  };

  return (
    <button
      className={`px-6 py-2.5 rounded-xl not-odd:transition-all duration-300 ${variants[variant]}`}
    >
      {children}
    </button>
  );
}
