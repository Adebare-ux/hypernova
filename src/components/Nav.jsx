import { useState, useEffect } from "react";
import { NAV_LINKS } from "../data";
import { scrollTo } from "../utils/scrollTo";

export default function Nav() {
  const [activeNav, setActiveNav] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setActiveNav(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (link) => {
    scrollTo(link.toLowerCase().replace(/\s+/g, "-"));
    setMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`site-nav ${activeNav || menuOpen ? "site-nav--scrolled" : ""}`}
      >
        <div className="nav-logo">
          <span style={{ color: "#4ECDC4" }}>Hypernova</span>
        </div>

        {/* Desktop links */}
        <div className="nav-desktop">
          {NAV_LINKS.slice(0, 4).map((link) => (
            <span
              key={link}
              className="nav-link"
              onClick={() => handleNavClick(link)}
            >
              {link}
            </span>
          ))}
        </div>

        {/* Hamburger */}
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`nav-hamburger__bar ${menuOpen ? "nav-hamburger__bar--top-open" : ""}`}
          />
          <span
            className={`nav-hamburger__bar ${menuOpen ? "nav-hamburger__bar--mid-open" : ""}`}
          />
          <span
            className={`nav-hamburger__bar ${menuOpen ? "nav-hamburger__bar--bot-open" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="mobile-menu open">
          {NAV_LINKS.map((link) => (
            <span
              key={link}
              className="nav-link mobile-nav-link"
              onClick={() => handleNavClick(link)}
            >
              {link}
            </span>
          ))}
        </div>
      )}
    </>
  );
}
