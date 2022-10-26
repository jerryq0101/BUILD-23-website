import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="p-4 bg-neutral-800 sm:p-6 ">
      <div className="mx-auto max-w-screen-xl">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center">
              <Image src="/logo2.svg" alt="Logo" width={48} height={48} />
            </Link>
            <p className="text-white py-5 max-w-xs">
              If you have any questions or concerns, reach out at
            </p>
          </div>
          <div className="flex items-center justify-center pb-2 text-center max-w-md md:text-right">
            <p className="text-xl text-white">
              We are working hard to bring you the best hack experience
              possible, details being finalized - expect changes
            </p>
          </div>
        </div>
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2022 Refoundation. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
