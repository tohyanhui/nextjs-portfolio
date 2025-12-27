import ThemeToggle from "./ThemeToggle";
import MobileMenu from "./MobileMenu";
import { navigationLinks } from "../config/navigation";

const Header = () => (
  <>
    <header className="fixed w-full top-0 z-50 bg-white/95 dark:bg-dark-background/95 backdrop-blur-sm shadow-sm transition-all duration-300">
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <span className="text-xl font-extrabold">Toh Yan Hui</span>
            <span className="text-primary text-2xl ml-1">●</span>
          </div>
          <ul className="hidden md:flex space-x-8">
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <MobileMenu />
          </div>
        </nav>
      </div>
    </header>
  </>
);

export default Header;
