import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollAnimations from "./components/ScrollAnimations";

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Toh Yan Hui',
    url: 'https://www.tohyanhui.com',
    jobTitle: 'Software Developer',
    description: 'Software Developer specializing in web and mobile development',
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
      'Web Development',
      'Mobile Development',
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ScrollAnimations />
      <Header />
      <main>
        <Hero />
        <Features />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
