import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Navigation = () => {
  return (
    <nav className="py-1">
      <div className=" px-4">
        <div className="flex items-center justify-between">
          {/* Left Links */}
          <div className="flex gap-12
          ">
            <Link href="/merch" className="px-6 py-2.5 rounded-xl hover:bg-[#4F649B] hover:text-white hover:underline transition-all duration-300">
              MERCH
            </Link>
            <Link href="/koncerter" className="px-6 py-2.5 rounded-xl hover:bg-[#4F649B] hover:text-white hover:underline transition-all duration-300">
              KONCERTER
            </Link>
          </div>

          <div className="mx-16"> 
            <Link href="/" className="group relative">
              <Image 
                src="/svg/dmp-logo-black.svg" 
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
            <Link href="/om-os" className="px-6 py-2.5 rounded-xl hover:bg-[#4F649B] hover:text-white hover:underline transition-all duration-300">
              OM OS
            </Link>
            <Link href="/kontakt" className="px-6 py-2.5 rounded-xl hover:bg-[#4F649B] hover:text-white hover:underline transition-all duration-300">
              KONTAKT
            </Link>
            <Link href="/kurv">
              <FontAwesomeIcon icon={faCartShopping} className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;