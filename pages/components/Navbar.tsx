import Link from 'next/link';
import { RiHome2Fill, RiHammerFill, RiFileCodeFill, RiPhoneFill } from "react-icons/ri";


const Navbar = () => {
  return (
    <nav className="fixed top-0 items-center justify-center right-0 h-full bg-[#292d33] w-15 p-6 flex flex-col navbar z-30 ml-20 border-2 border-l-tertiary border-t-[#292d33] border-b-[#292d33] border-r-[#292d33]">
      <div className="mt-4">
        <Link href="#present" passHref scroll={false}>
          <p className="block text-tertiary hover:text-white mb-5">
            <RiHome2Fill size={20} />
          </p>
        </Link>
        <Link href="#experience" passHref scroll={false}>
          <p className="block text-tertiary hover:text-white mb-5">
            <RiHammerFill size={20} />
          </p>
        </Link>
        <Link href="#projects" passHref scroll={false}>
          <p className="block text-tertiary hover:text-white mb-5">
            <RiFileCodeFill />
          </p>
        </Link>
        <Link href="#contacts" passHref scroll={false}>
          <p className="block text-tertiary hover:text-white">
            <RiPhoneFill size={20} />
          </p>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
