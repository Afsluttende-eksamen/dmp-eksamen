import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Navigation = ({ variant = 'black' }) => {
  const isWhite = variant === 'white';
  const textColor = isWhite ? 'text-white' : 'text-black';
  const logoSrc = isWhite ? '/svg/dmp-logo-white.svg' : '/svg/dmp-logo-black.svg';
  const linkClass = `px-6 rounded-xl hover:text-[#4F649B] hover:underline transition-all duration-300 ${textColor}`;

  return (
    <nav className="py-1">
      <div className=" px-4">
        <div className="flex items-center justify-between">
          {/* Left Links */}
          <div className="flex gap-12">
            <Link href="/merch" className={linkClass}>
              MERCH 
            </Link>
            <Link href="/concerts" className={linkClass}>
              KONCERTER
            </Link>
          </div>

          <div className="mx-16">
            <Link href="/" className="group relative">
              <Image
                src={logoSrc}
                alt="DMP Logo"
                width={78}
                height={78}
                className="group-hover:opacity-0"
              />
              <Image
                src="/svg/dmp-logo-soul.svg"
                alt="DMP Logo"
                width={78}
                height={78}
                className="absolute inset-0 duration-300 opacity-0 group-hover:opacity-100 group-hover:scale-[1.5]"
              />
            </Link>
          </div>

          {/* Right Links */}
          <div className="flex gap-12 items-center">
            <Link href="/om-os" className={linkClass}>
              BLOG
            </Link>
            <Link href="/kontakt" className={linkClass}>
              KONTAKT
            </Link>
            <Link href="/kurv" className={textColor}>
              <FontAwesomeIcon icon={faCartShopping} className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
