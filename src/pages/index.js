import Link from "next/link";

import Header from "../partials/header";
import Footer from "../partials/footer";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="flex items-center justify-center h-screen pb-60">
        <div>
          <p className="text-8xl">BUILD ‘23</p>
          <div className="text-center">
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
      <div className="flex items-center justify-center h-screen pb-40">
        <div className="">
          <p className="text-6xl max-w-2xl">
            Vancouver’s in-person Hackathon to bridge STEM and Humanities.
          </p>
          <p className="text-gray-900 block pt-5 max-w-xl">
            BUILD, hosted by Refoundation, is a hackathon that engages the young
            minds from Vancouver to solve the most pressing issues of today’s
            society. We aimed to create a hackathon to bring together technical
            and humanities disciplines and likeminded youth to spark innovation
            through interdisciplinary thinking.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center h-screen pb-40">
        tracks
      </div>
      <div className="flex justify-center h-screen pt-20">
        <div>
          <p className="text-center text-6xl">Frequently Asked Questions</p>
          <div className="pt-10">
            <p className="text-center text-xl font-bold pb-2">Question</p>
            <p className="text-center text-xl pb-3">Response</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center h-80 bg-neutral-800">
        <div>
          <p className="text-center text-3xl text-white">
            INTERESTED IN PARTNERING / SPONSORING?
          </p>
          <p className="text-center text-xl text-white pt-2">
            Reach out at info@refoundation.co
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center h-80 bg-red-800">
        <div>
          <p className="text-center text-4xl text-white">APPLY NOW</p>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
