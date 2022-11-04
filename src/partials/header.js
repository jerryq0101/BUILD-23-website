import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <nav className="px-2 sm:px-4 pt-5">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link href="/" className="flex items-center">
          <Image src="/logo.svg" alt="Logo" width={48} height={48} />
          <span className="self-center text-xl font-semibold whitespace-nowrap pl-3">
            REFOUNDATION
          </span>
        </Link>
        <div className="w-full block md:w-auto" id="navbar-default">
          <ul className="flex flex-col p-0 mt-2 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
            <li>
              <Link
                href="/"
                className="block py-2 pr-4 pl-1 text-gray-700 rounded md:hover:bg-transparent md:border-0 md:p-0"
              >
                PRE-REGISTRATION
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="block py-2 pr-4 pl-1 text-gray-700 rounded md:hover:bg-transparent md:border-0 md:p-0"
              >
                CONTACT US
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
