import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import ActionAreaCard from "./project-card";
import ExperienceCard from "./experience-card";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Technologies", href: "#tech" },
  { name: "Projects", href: "#project" },
  { name: "Contact", href: "#contact" },
];

const experience = [
  {
    role: "Key Developer",
    company: "Epam",
    location: "Remote",
    from: "Mar 2022",
    to: "Till Date",
  },
  {
    role: "Frontend Developer",
    company: "Kissflow",
    location: "Chennai",
    from: "Mar 2022",
    to: "Feb 2021",
  },
  {
    role: "Software Developer",
    company: "Techmahindra",
    location: "Chennai",
    from: "Mar 2018",
    to: "Feb 2021",
  },
];

const Techs = [
  {
    name: "HTML5",
    icon: "/html5.png",
  },
  {
    name: "CSS3",
    icon: "/css3.png",
  },
  {
    name: "Sass",
    icon: "/sass.png",
  },
  {
    name: "Javascript",
    icon: "/javascript.png",
  },
  {
    name: "React",
    icon: "/react.png",
  },
  {
    name: "Nextjs",
    icon: "/nextjs-icon.png",
  },
  {
    name: "Zustand",
    icon: "/zustand.jpeg",
  },
  {
    name: "Redux",
    icon: "/redux.png",
  },
  {
    name: "NodeJs",
    icon: "/nodejs-icon.png",
  },
  {
    name: "Jest",
    icon: "/jest-icon.png",
  },
  {
    name: "Cypress",
    icon: "/cypress-new.jpeg",
  },
  {
    name: "AWS",
    icon: "/aws-icon.png",
  },
  {
    name: "Git",
    icon: "/git.png",
  },
];

const Projects = [
  {
    name: "EBSCO Discovery Service",
    image: "/ebsco.png",
    description:
      "Unlock the power of your library’s collection and improve the end-user search experience with EBSCO Discovery Service (EDS) EBSCO is the leading discovery service provider for libraries with thousands of discovery customers worldwid",
  },
  {
    name: " Collaboration & Events ",
    image: "/kissflow-logo.png",
    description:
      "Channels bring order and clarity to work – you can create them for any project, topic or team. With the right people and information in one place, teams can share ideas, make decisions and move work forwards. ",
  },
  {
    name: "SBI Life Insurance",
    image: "/techm.png",
    description:
      "SBI Life Insurance Project involves development and maintenance of web applications used by SBI associates as well as contact center agents to service its customers.",
  },
];
export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white w-screen">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center lg:justify-center p-6 lg:px-8 sm:justify-end"
          aria-label="Global"
        >
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-20">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                {item.name}
              </a>
            ))}
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-start justify-between flex-col">
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>

              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8" id="home">
        {/* <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div> */}
        <div className="py-8 sm:py-8 lg:py-24 lg:flex sm:flex-row mx-auto">
          <div className="mx-auto flex justify-center items-center text-center max-w-md sm:my-auto">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Hello,
                <br />
                Myself Sriharan
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-600 font-semibold">
                Works as a Fullstack developer
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center mb-10 pb-1.5 mx-auto min-w-80 sm:my-16 mt-8">
            <img
              className="h-80 w-80 object-cover rounded-full"
              src="/mine.jpg"
              alt=""
            />
          </div>
        </div>
      </div>

      <div
        className="bg-white lg:py-8 sm:py-12 lg:px-8 sm:px-8 flex justify-center items-center"
        id="tech"
      >
        <div className="flex-col justify-center items-center max-w-2xl text-center grow">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            About Me
          </p>

          <p className="mt-6 text-lg leading-8 text-gray-600 text-center mx-6">
            I have around 6 years of Information Technology experience in the
            field of software design & development of exceptional customer
            facing Omni channel responsive web pages and services. Involved in
            Software Development Life Cycle (Design, Development & Testing
            Phases) and Agile Methodology. Customer obsessed team player
            delivering exceptional web applications with continuous passion
            towards technology and business.
          </p>
        </div>
      </div>
      <div
        className="bg-white lg:py-8 sm:py-12 lg:px-8 sm:px-8 flex justify-center items-center"
        id="about"
      >
        <div className=" flex-col justify-center items-center w-auto text-center py-12 mx-12">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl py-8">
            Experience
          </p>
          <div className="flex justify-center items-center w-auto gap-y-10 flex-wrap gap-x-12">
            {experience.map((exp) => (
              <ExperienceCard
                key={exp.company}
                role={exp.role}
                company={exp.company}
                location={exp.location}
                from={exp.from}
                to={exp.to}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="bg-white lg:py-8 sm:py-8" id="tech">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className=" flex justify-center mx-auto max-w-2xl lg:text-center">
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              My Tech Stack
            </p>
          </div>
          <div className="flex justify-center mt-8 mb-8 pb-4 mx-2 min-w-80 gap-x-20 flex-wrap">
            {Techs.map((tech) => (
              <div
                className="flex-col items-center justify-center py-12"
                key={tech.name}
              >
                <img
                  className="h-10 w-10 object-cover rounded-full"
                  src={tech.icon}
                  alt=""
                />
                <p className="text-lg leading-8 text-gray-600 pt-2">
                  {tech.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white lg:py-8 sm:py-8" id="project">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className=" flex justify-center mx-auto max-w-2xl lg:text-center">
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Projects
            </p>
          </div>
          <div className="flex justify-center mt-16 mb-10 pb-1.5 mx-2 min-w-80 gap-x-10 flex-wrap">
            {Projects.map((project) => (
              <div
                className="flex items-center justify-center py-4 grow basis-8"
                key={project.name}
              >
                <ActionAreaCard
                  name={project.name}
                  image={project.image}
                  description={project.description}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white lg:py-8 sm:py-8" id="contact">
        <div className="flex gap-x-8  gap-y-12 justify-between px-6 mx-6 py-6 shadow-md shadow-zinc-200 mb-2 items-center flex-wrap-reverse">
          <div className="flex justify-center items-center gap-x-4">
            <a href="#home" className="flex justify-start items-center gap-x-2">
              <img
                className="h-7 w-7 object-cover"
                src="/up-squared.png"
                alt=""
              />
              <p className="text-slate-950 text-sm font-semibold">
                Back to top
              </p>
            </a>
          </div>
          <div className="flex gap-x-6 gap-y-6 justify-center items-center flex-wrap">
            <p className="text-slate-950 text-sm font-semibold">
              +91 75026947774
            </p>
            <p className="text-slate-950 text-sm font-semibold">
              j.sriharan.04@gmail.com
            </p>
            <div className="flex justify-center gap-x-2  gap-y-6 flex-wrap">
              <img src="/github-footer.png" className="h-7 w-7 rounded-full" />
              <img src="/linkedin.png" className="h-7 w-7 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
