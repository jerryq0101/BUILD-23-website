import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="p-4 sm:p-6">
      <div className="mx-auto max-w-screen-xl">
        <a href="" className="">
          <div className="md:flex md:justify-center pb-10">
            <div className="flex items-center justify-center">
              <Image src="/logo.svg" alt="Logo" width={48} height={48} />
            </div>
            <div className="flex items-center justify-center max-w-3xl">
              <p className="text-xl font-bold md:pl-5 pl-0">RFDN</p>
            </div>
          </div>
        </a>
        <div className="text-center">
          <span className="text-sm text-gray-400 text-center sm:py-4">
            © 2022-2023 Refoundation. All Rights Reserved.{"  "}•{"  "}
            <Link
              href="/"
              onClick={() => {
                window.location = "mailto:info@refoundation.co";
              }}
            >
              info@refoundation.co
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
