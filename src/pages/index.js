import Link from "next/link";

import Header from "../partials/header";
import Footer from "../partials/footer";
import FaqSection from "../partials/faq";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />
      <div className="flex items-center justify-center h-screen pb-60 bg-[url('/bg.svg')] bg-cover">
        <div>
          <p className="text-8xl font-semibold">
            BUILD{" "}
            <span className="font-bold text-transparent bg-clip-text transition-colors bg-gradient-to-r to-blue-800 from-sky-400">
              ‘23
            </span>
          </p>
          <div className="text-center">
            <p className="text-3xl pt-5">January 21-23, 2023 UBC 36 hrs</p>
            <div className="pt-10">
              <Link
                href="/"
                className="py-5 px-6 font-bold font-2xl transition-colors bg-gradient-to-r from-blue-800 to-sky-400 font-medium text-white rounded-lg hover:bg-gray-100 disabled:opacity-50"
              >
                APPLY NOW
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center h-screen pb-40 bg-[url('/bg2.svg')] bg-no-repeat bg-center">
        <div className="">
          <div className="text-6xl max-w-2xl block">
            Vancouver’s in-person Hackathon to{" "}
            <span className="font-bold text-transparent bg-clip-text transition-colors bg-gradient-to-r from-blue-800 to-sky-400">
              bridge
            </span>
          </div>
          <p className="text-6xl max-w-2xl font-semibold">
            STEM and Humanities.
          </p>
          <p className="text-gray-900 block pt-5 max-w-xl text-xl">
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
      <div className="flex justify-center h-screen pb-40">
        <div>
          <p className="text-center text-6xl">Frequently Asked Questions</p>
          <div className="pt-10 flex flex-wrap flex-grow flex-col">
            <FaqSection
              q="Who is running the hackathon?"
              a="We are (REFOUNDATION). With support from the community in
                  Vancouver and UBC 🚀"
            />
            <FaqSection
              q="Who can participate?"
              a="Any middle school, high school, university and non-traditional students are encouraged to participate!"
            />
            <FaqSection
              q="How much does it cost to participate?"
              a="0$. This event will be free of cost to students to encourage participation of students of all backgrounds."
            />
            <FaqSection
              q="How will team formation work?"
              a="4-5 people per team. You can create your own team before the hack (Finding a balance between STEM and Humanities focuses is recommended). However, every member will have to apply. "
            />
            <FaqSection
              q="Where will the hackathon take place?"
              a="University of British Columbia. (Further Details Pending)"
            />
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
      <div className="flex h-80 bg-[url('/splash.png')] bg-cover flex-col h-screen">
        <div className="backdrop-brightness-20 bg-black/30 flex h-full w-full">
          <div className="flex-1 h-full items-center justify-center flex">
            <p className="text-center text-3xl text-white font-semibold pr-10">
              January 21-22, 2023 UBC 36 hrs
            </p>
            <Link
              href="/"
              className="py-5 px-6 font-bold font-2xl transition-colors bg-gradient-to-r from-blue-800 to-sky-400 font-medium text-white rounded-lg hover:bg-gray-100 disabled:opacity-50"
            >
              APPLY NOW
            </Link>
            <p className="text-4xl font-semibold text-white pl-10">
              BUILD{" "}
              <span className="font-bold text-transparent bg-clip-text transition-colors bg-gradient-to-r to-blue-600 from-sky-300">
                ‘23
              </span>
            </p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
