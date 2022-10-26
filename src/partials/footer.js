import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="p-4 bg-neutral-800 sm:p-6 ">
      <div className="mx-auto max-w-screen-xl">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0 pt-10">
            <Link href="/" className="flex items-center">
              <Image src="/logo2.svg" alt="Logo" width={48} height={48} />
            </Link>
            <p className="text-white py-7 max-w-xs">
              If you have any questions or concerns, reach out at
            </p>
            <p className="text-transparent bg-clip-text transition-colors bg-gradient-to-r to-blue-600 from-sky-300 pb-5">
              <a href="mailto:info@refoundation.co">info@refoundation.co</a>
            </p>
          </div>
          <div className="flex items-center justify-center pb-2 text-center max-w-2xl md:text-right">
            <p className="text-2xl text-white font-semibold">
              We are working hard to bring you the best hack experience
              possible, details being finalized - expect changes
            </p>
          </div>
        </div>
        <div className="text-center">
          <span className="text-sm text-gray-400 text-center sm:py-4">
            © 2022 Refoundation. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
