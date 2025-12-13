import Link from "next/link";

export default function Button({
  href,
  children,
  variant = "secondary",
  target,
  rel,
  className = "",
}) {
  const variants = {
    primary:
      "px-6 py-2.5 rounded-xl duration-300 bg-[#4F649B] text-white hover:text-[#4F649B] hover:bg-white hover:underline hover:scale-110 border-2 hover:border-[#4F649B]",
    secondary:
      "px-6 py-2.5 rounded-xl duration-300 bg-white border-2 border-[#4F649B] text-[#4F649B] hover:text-white hover:bg-[#4F649B] hover:underline hover:scale-110",
    spotify:
      "px-3 py-2 sm:px-4 sm:py-2.5 md:px-6 md:py-2.5 text-xs lg:text-sm rounded-full duration-300 bg-[#1DB954] text-black font-black hover:opacity-90",
    apple:
      "px-3 py-2 sm:px-4 sm:py-2.5 md:px-6 md:py-2.5 text-xs lg:text-sm rounded-full duration-300 bg-[#FA243C] font-black text-white hover:opacity-90",
  };

  if (href) {
    return (
      <Link
        href={href}
        className={`${variants[variant]} ${className}`}
        target={target}
        rel={rel}
      >
        {children}
      </Link>
    );
  }

  return (
    <button className={`${variants[variant]} ${className}`}>{children}</button>
  );
}
