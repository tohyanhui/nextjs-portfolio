import { Metadata } from 'next';
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://www.tohyanhui.com',
  },
};

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Toh Yan Hui',
    url: 'https://www.tohyanhui.com',
    jobTitle: 'Computer Science student',
    description: 'Computer Science student building applied AI systems and software',
    sameAs: [
      'https://github.com/tohyanhui',
      'https://www.linkedin.com/in/tohyanhui/',
      'https://x.com/tohyanhui01',
    ],
    knowsAbout: [
      'JavaScript',
      'TypeScript',
      'React',
      'Next.js',
      'React Native',
      'Java',
      'Python',
      'Machine Learning',
      'Software Engineering',
      'PyTorch',
      'Docker',
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <Hero />
        <Projects />
        <Features />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
