import React from "react";
import { BENEFITS } from "../data";

export default function Benefits() {
  return (
    <section id="benefits" className="section-benefits">
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <div className="section-tag">Why Partner</div>
          <h2 className="section-title">Benefits of Partnering</h2>
        </div>
        <div className="benefits-grid">
          {BENEFITS.map((b) => (
            <div key={b.title} className="card benefits-card">
              <div className="benefits-icon">{b.icon}</div>
              <div>
                <h3
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 700,
                    fontSize: 17,
                    marginBottom: 6,
                  }}
                >
                  {b.title}
                </h3>
                <p
                  style={{
                    color: "rgba(232,234,246,0.6)",
                    fontSize: 14,
                    lineHeight: 1.65,
                  }}
                >
                  {b.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
