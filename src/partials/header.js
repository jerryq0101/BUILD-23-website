import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header
      className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out pt-4`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex-shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" className="flex flex-grow">
              <Image src="/logo.svg" alt="Logo" width={48} height={48} />
              <span className="font-medium text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">
                REFOUNDATION
              </span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex flex-grow">
            <ul className="flex flex-grow justify-end flex-wrap items-center">
              <li>
                <Link
                  href="/"
                  className="font-medium text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  PRE-REGISTRATION
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="font-medium text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  <span>CONTACT US</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
