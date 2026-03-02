import React from "react";
import { scrollTo } from "../utils/scrollTo";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="orb orb--main" />
      <div className="orb orb--left" />
      <div className="orb orb--right" />

      <div className="hero-content">
        <div className="fade-up">
          <div className="section-tag">Google Play Partnerships</div>
        </div>

        <h1 className="fade-up hero-title">
          Monetize Your Play Console Account
        </h1>

        <p className="fade-up hero-subtitle">
          Partner with Hypernova to earn passive income from your Google Play
          Console account. We publish, manage, and maintain — you earn monthly.
        </p>

        <div className="fade-up hero-buttons">
          <button className="glow-btn" onClick={() => scrollTo("contact")}>
            Start Partnership →
          </button>
          <button
            className="hero-outline-btn"
            onClick={() => scrollTo("how-it-works")}
          >
            Learn How It Works
          </button>
        </div>

        <div className="fade-up hero-stats">
          {[
            ["20+", "Employees"],
            ["100+", "Published Apps"],
            ["1000+", "Installs"],
            ["50+", "Publishing Partners"],
          ].map(([num, label]) => (
            <div key={label} className="hero-stat">
              <div className="hero-stat__num">{num}</div>
              <div className="hero-stat__label">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
