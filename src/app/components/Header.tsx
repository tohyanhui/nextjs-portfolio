import ThemeToggle from "./ThemeToggle";
import MobileMenu from "./MobileMenu";
import { navigationLinks } from "../config/navigation";

const Header = () => (
  <>
    <header className="fixed w-full top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-md dark:border-gray-800 dark:bg-dark-background/95">
      <div className="container mx-auto max-w-6xl px-5 sm:px-8">
        <nav className="grid grid-cols-[1fr_auto] items-center py-4 md:grid-cols-[1fr_auto_1fr]" aria-label="Main navigation">
          <div className="flex items-center">
            <a href="#hero" className="text-lg font-bold text-gray-950 dark:text-white">Toh Yan Hui</a>
          </div>
          <ul className="hidden md:flex items-center gap-6">
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-teal-300 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-self-end space-x-4">
            <ThemeToggle />
            <MobileMenu />
          </div>
        </nav>
      </div>
    </header>
  </>
);

export default Header;
