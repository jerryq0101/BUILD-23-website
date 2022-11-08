import Link from "next/link";

import Header from "../partials/header";
import Footer from "../partials/footer";
import FaqSection from "../partials/faq";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden font-Space">
      <Header />
      <div className="grid pb-10">
        <div className="col-start-1 row-start-1 self-right">
          <div className="flex items-center justify-center h-screen pb-80 md:pb-40 bg-[url('/bg.svg')] bg-cover bg-center bg-no-repeat">
            <div className="text-center">
              <p className="text-6xl font-Slang bg-white p-4 pb-0 md:text-8xl">
                BUILD
                <span className="font-semibold text-transparent bg-clip-text transition-colors bg-gradient-to-r to-blue-800 from-sky-400 font-Space">
                  ‘23
                </span>
              </p>
              <div className="text-center">
                <p className="text-md pt-5 font-semibold bg-white md:text-2xl">
                  January 21-23, 2023 | UBC | 36 hrs
                </p>
                <div className="pt-12">
                  <Link
                    href="/"
                    className="py-6 px-10 text-md transition-colors bg-gradient-to-r from-blue-800 to-sky-400 text-white rounded md:text-2xl"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-start-1 row-start-1 mt-auto mx-auto">
          <img src="/scroll.svg" className="pb-48 md:pb-20" />
        </div>
      </div>

      <div class="grid font-Space grid-cols-2 items-end">
        <div className="col-start-2 row-end-1 xl:block hidden flex ml-auto">
          <img src="/bg2.png" class="" />
        </div>
        <div class="col-start-1 row-end-1 text-left h-screen">
          <div class="float-left flex md:items-center h-screen">
            <div className="mx-4 md:mx-16 pb-32">
              <div className="md:text-7xl max-w-4xl block text-4xl">
                Vancouver&apos;s in-person Hackathon to{" "}
                <span className="font-bold text-transparent bg-clip-text transition-colors bg-gradient-to-r from-blue-800 to-sky-400">
                  bridge
                </span>
              </div>
              <p className="text-3xl md:text-7xl max-w-4xl font-bold">
                STEM and Humanities.
              </p>
              <p className="text-gray-900 block pt-5 max-w-3xl text-xl">
                BUILD, hosted by Refoundation, is a hackathon that engages the
                young minds from Vancouver to solve the most pressing issues of
                today&apos;s society. This is a hackathon to bring together
                technical and humanities disciplines and likeminded youth to
                spark social good innovation through interdisciplinary thinking.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-20 grid font-Space">
        <img src="/man.svg" class="col-start-1 row-start-1 xl:block hidden" />
        <div class="col-start-1 row-start-1 self-center text-left lg:text-right h-screen">
          <div className="mx-4 md:mx-8 lg:mx-32">
            <div className="text-4xl md:text-7xl font-bold">
              <p>Three different tracks,</p>
              <span className="text-sky-500 md:pt-3">STEM + Humanities</span>
            </div>
            <div className="pt-5 lg:pt-20 mx-0 sm:mx-8 md:mx-0">
              <div className="pb-5 lg:pb-10">
                <p className="font-bold text-2xl md:text-3xl">Poverty</p>
                <p className="pt-3 text-xl md:text-2xl">
                  Education and social inequalities
                </p>
              </div>
              <div className="pb-5 lg:pb-10">
                <p className="font-bold text-2xl md:text-3xl">Healthcare</p>
                <p className="pt-3 text-xl md:text-2xl">
                  Access and quality of healthcare
                </p>
              </div>
              <div className="pb-5 lg:pb-10">
                <p className="font-bold text-xl md:text-3xl">Sustainability</p>
                <p className="pt-3 text-xl md:text-2xl">
                  Environment and climate change
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mb-20 mx-2 md:mx-8">
        <div>
          <p className="text-center text-4xl font-bold md:text-7xl">
            Frequently Asked Questions
          </p>
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
      <div className="flex items-center justify-center h-60 bg-neutral-800">
        <div>
          <p className="text-center text-2xl text-white md:text-3xl">
            INTERESTED IN PARTNERING / SPONSORING?
          </p>
          <p className="text-center text-xl text-white pt-2 font-Space">
            Reach out at{" "}
            <span className="text-transparent bg-clip-text transition-colors bg-gradient-to-r to-sky-200 from-blue-500">
              <a href="mailto:info@refoundation.co">info@refoundation.co</a>
            </span>
          </p>
        </div>
      </div>
      <div className="flex h-40 bg-[url('/splash.png')] bg-cover flex-col md:h-80">
        <div className="backdrop-brightness-50 bg-black/30 flex h-full w-full">
          <div className="flex-1 h-full items-center justify-center flex">
            <p className="text-center text-3xl text-white pr-10 hidden lg:block">
              January 21-22, 2023 UBC 36 hrs
            </p>
            <Link
              href="/"
              className="py-5 px-10 text-xl transition-colors bg-gradient-to-r from-blue-800 to-sky-400 font-medium text-white rounded"
            >
              Apply Now
            </Link>
            <p className="text-6xl text-white pl-10 font-Slang hidden lg:block">
              BUILD
              <span className="font-bold text-transparent bg-clip-text transition-colors bg-gradient-to-r to-blue-600 from-sky-300 font-Space">
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
