import React from "react";
import { scrollTo } from "../utils/scroll";
import { NAV_LINKS } from "../utils/constants";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-logo">
        <span style={{ color: "#4ECDC4" }}>HyperNova</span>
      </div>
      <div className="footer-links">
        {NAV_LINKS.map((link) => (
          <span
            key={link}
            className="nav-link footer-nav-link"
            onClick={() => scrollTo(link.toLowerCase().replace(/\s+/g, "-"))}
          >
            {link}
          </span>
        ))}
      </div>
      <p className="footer-copy">© 2026 Hypernova Apps. All rights reserved.</p>
    </footer>
  );
}
