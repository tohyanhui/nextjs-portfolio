import { LuArrowDownRight, LuArrowUpRight, LuFileText } from "react-icons/lu";
import TerminalAnimation from "./TerminalAnimation";

const Hero = () => (
  <section id="hero" className="flex min-h-[100svh] items-center border-b border-gray-200 bg-[#f8faf9] py-24 dark:border-gray-800 dark:bg-dark-background">
    <div className="container mx-auto max-w-6xl px-5 sm:px-8">
      <div className="mx-auto max-w-3xl sm:text-center">
        <h1 className="text-4xl font-semibold leading-tight text-gray-950 dark:text-white sm:text-5xl lg:text-[56px] xl:text-6xl">
          Hi, I&apos;m <span className="text-primary dark:text-teal-300">Yan Hui.</span>
        </h1>
        <p className="mt-4 text-xl font-medium leading-snug text-gray-800 dark:text-gray-100 sm:text-2xl lg:text-[28px]">I build useful AI and software.</p>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600 dark:text-gray-300 sm:mx-auto sm:text-lg">Computer Science student at NUS working across models, APIs, and products people use.</p>
        <div className="mt-6 flex flex-wrap gap-3 sm:mt-8 sm:justify-center">
          <a href="#projects" className="inline-flex items-center gap-2 rounded-md bg-gray-950 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary dark:bg-white dark:text-gray-950 dark:hover:bg-teal-200 sm:px-5">View work <LuArrowDownRight aria-hidden="true" /></a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md border border-gray-300 px-4 py-3 text-sm font-semibold text-gray-900 transition-colors hover:border-primary hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary dark:border-gray-600 dark:text-white dark:hover:border-teal-300 dark:hover:text-teal-300 sm:px-5">Resume <LuFileText aria-hidden="true" /><LuArrowUpRight aria-hidden="true" /></a>
        </div>
        <div className="mt-8 max-w-xl sm:mx-auto">
          <TerminalAnimation />
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
