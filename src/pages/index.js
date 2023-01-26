import Link from "next/link";

import Header from "../partials/header";
import Footer from "../partials/footer";
import FaqSection from "../partials/faq";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden font-Suisse">
      <Header />
      <div className="grid pb-10">
        <div className="col-start-1 row-start-1 self-right">
          <div className="flex items-center justify-center h-screen pb-80 md:pb-40 bg-[url('/bg.svg')] bg-cover bg-center bg-no-repeat">
            <div className="text-center">
              <p className="text-6xl font-Slang bg-white p-4 pb-0 md:text-8xl">
                BUILD
                <span className="font-semibold text-transparent bg-clip-text transition-colors bg-gradient-to-r to-blue-800 from-sky-400 font-Suisse">
                  ‘23
                </span>
              </p>
              <div className="text-center">
                <p className="text-md pt-5 font-semibold bg-white md:text-2xl">
                  Febuary 18-19, 2023 › Virtual › 2 days of hacking.
                </p>
                <div className="pt-12">
                  <Link
                    href="https://tally.so/r/mJ1lQX"
                    target="_blank"
                    className="py-6 px-10 text-md transition-colors bg-gradient-to-r from-blue-800 to-sky-400 text-white rounded md:text-2xl font-bold"
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

      <div className="grid font-Suisse grid-cols-1 md:grid-cols-1 items-end">
        <div className="col-start-2 row-end-1 xl:block hidden flex ml-auto">
          <img src="/bg2.png" className="" />
        </div>
        <div className="col-start-1 row-end-1 text-left md:h-screen pb-15 md:pb-0">
          <div className="float-left flex md:items-center md:h-screen">
            <div className="mx-4 md:mx-16 md:pb-32">
              <div className="md:text-7xl md:max-w-4xl max-w-3xl block text-4xl">
                The global Hackathon to{" "}

                <span className="font-bold text-transparent bg-clip-text transition-colors bg-gradient-to-r from-blue-800 to-sky-400">
                  bridge
                </span>
                <span className="text-4xl md:text-7xl md:max-w-4xl font-bold"> STEM and</span>
              </div>
              <p className="text-4xl md:text-7xl md:max-w-4xl font-bold">
                Humanities.
              </p>
              <p className="text-gray-900 block pt-5 md:max-w-3xl text-xl">
                BUILD&apos;23 is an event bridging students&apos; passion for new and emerging technologies and positive social impact. We truly believe that the effective use of technologies in innovative ideas can create impactful solutions that help address the global issues of today. In building this event, we, too, wanted to get non-technical hackers involved through differing deliverable requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20 grid font-Suisse">
        <img
          src="/man.svg"
          className="col-start-1 row-start-1 xl:block hidden"
        />
        <div className="col-start-1 row-start-1 self-center text-left lg:text-right md:h-screen pb-20 md:pb-0">
          <div className="mx-4 md:mx-8 lg:mx-32">
            <div className="text-4xl md:text-7xl font-bold">
              <p>Three different tracks,</p>
              <span className="text-sky-500 md:pt-3">Technology + Society</span>
            </div>
            <div className="pt-5 lg:pt-20 mx-0 sm:mx-8 md:mx-0">
              <div className="pb-5 lg:pb-10">
                <p className="font-bold text-2xl md:text-3xl">Inequalities</p>
                <p className="pt-3 text-xl md:text-xl">
                  Education and social inequalities
                </p>
              </div>
              <div className="pb-5 lg:pb-10">
                <p className="font-bold text-2xl md:text-3xl">Healthcare</p>
                <p className="pt-3 text-xl md:text-xl">
                  Access and quality of healthcare
                </p>
              </div>
              <div className="pb-5 lg:pb-10">
                <p className="font-bold text-xl md:text-3xl">Sustainability</p>
                <p className="pt-3 text-xl md:text-xl">
                  Environment and climate change
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mb-20 mx-2 md:mx-8">
        <div className="flex-row w-full">
          <p className="text-center text-4xl font-bold md:text-7xl">
            Frequently Asked Questions
          </p>
          <div className="grid grid-flow-row lg:grid-flow-col gap-6 pt-20 justify-center">
            <div className="flex-col w-full">
              <FaqSection
                q="Who is running the hackathon?"
                a="Refoundation and with support from UBC Blockchain!"
              />
              <FaqSection
                q="Who can participate?"
                a="Any middle school, high school, university, and other non-traditional, older or younger, students are encouraged to participate!"
              />
              <FaqSection
                q="How much does it cost to participate?"
                a="0$. This event will be free of cost."
              />
              <FaqSection
                q="How will team formation work?"
                a="4-5 people per team. You can create your own team before the hack (Finding a balance between STEM and Humanities focuses is recommended). Every member must apply independently. "
              />
            </div>
            <div className="flex-col">
              <FaqSection
                q="WTF is a Technology + Society hackathon?"
                a="Through BUILD&apos;23, we aim to bridge technologies and humanities to integrate the potential of emerging technologies for solving social problems. Aside from technical presentations in deliverables, hackers solving for any of the three tracks have to show how the project can be implemented into society to address the humanitarian issue. "
              />
              <FaqSection
                q="What if I‘m a beginner?"
                a="It’s great that you are a beginner since there will be lots to absorb! There will be a lot of introductory workshops and mentors in the hackathon discord server to support your project."
              />
              <FaqSection
                q="What should I bring?"
                a="Since this is a virtual event, you will have the opportunity of enjoying the event from your home. Just make sure that you have a stable internet for accessing the hackathon!
"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center h-80 bg-blue-500 bg-opacity-70 ">
        <div>
          <p className="text-center text-3xl text-white md:text-3xl font-bold">
            INTERESTED IN PARTNERING / SPONSORING?
          </p>
          <p className="text-center text-xl text-white pt-2 font-Suisse">
            and if you have any further questions
          </p>
          <div className="pt-12 text-center">
            <Link
              href="/"
              target="_blank"
              className="py-3 px-4 text-md outline outline-1 text-white rounded-xl md:text-xl"
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>
      <div className="flex h-40 flex-col md:h-80">
        <div className="h-full items-center justify-center text-center flex">
          <p className="text-transparent bg-clip-text transition-colors bg-gradient-to-r to-blue-600 from-sky-300 pb-5 text-3xl font-bold xs:text-xl">
            Let‘s make real change by hacking the future.
          </p>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
