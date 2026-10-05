import Image from "next/image";
import { LuArrowUpRight } from "react-icons/lu";

const About = () => (
  <section id="about" className="flex min-h-[100svh] items-center bg-gray-950 py-24 text-white">
    <div className="container mx-auto max-w-6xl px-5 sm:px-8">
      <div className="grid items-center gap-10 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
        <div className="relative order-2 mx-auto aspect-[4/5] w-full max-w-[360px] overflow-hidden rounded-md bg-gray-800 md:order-1 md:mx-0">
          <Image src="/profile-1.png" alt="Portrait of Toh Yan Hui" fill sizes="(max-width: 768px) 90vw, 360px" className="object-cover object-center" />
        </div>
        <div className="order-1 md:order-2">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-300">The person behind the work</p>
          <h2 className="mt-4 max-w-xl text-3xl font-semibold leading-tight sm:text-4xl">Curious about how things work. More interested in making them work better.</h2>
          <p className="mt-6 max-w-xl leading-relaxed text-gray-300">I study Computer Science at the National University of Singapore, with interests across AI and software engineering. I enjoy the whole arc of a problem: understanding it, testing ideas, and delivering something useful.</p>
          <p className="mt-4 max-w-xl leading-relaxed text-gray-300">Industry work, teaching, and personal projects have taught me to pair technical depth with clear communication. My studies also include an exchange at Lund University.</p>
          <a href="#contact" className="mt-8 inline-flex items-center gap-2 border-b border-teal-300 pb-1 text-sm font-semibold text-teal-300 transition-colors hover:text-white">Let&apos;s connect <LuArrowUpRight aria-hidden="true" /></a>
        </div>
      </div>
    </div>
  </section>
);

export default About;
