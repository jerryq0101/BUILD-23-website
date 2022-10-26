import Header from "../partials/header";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <Header />
      <div className="flex items-center justify-center h-screen pb-20">
        <div>
          <p className="text-8xl">BUILD '23</p>
          <div className=" text-center">
            <p className="text-3xl pt-5">January 21-23, 2023 UBC 36 hrs</p>
            <div className="pt-10">
              <Link
                href="/"
                className="py-5 px-6 transition-colors bg-gradient-to-r from-blue-800 to-sky-400 font-medium text-white rounded-lg hover:bg-gray-100 disabled:opacity-50"
              >
                APPLY NOW
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
