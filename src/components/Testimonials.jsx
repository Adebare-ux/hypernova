import React from "react";
import { TESTIMONIALS } from "../data";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      style={{
        padding: "100px 40px",
        background: "rgba(78,205,196,0.03)",
        borderTop: "1px solid rgba(255,255,255,0.04)",
        borderBottom: "1px solid rgba(255,255,255,0.04)",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <div className="section-tag">Reviews</div>
          <h2 className="section-title">What Partners Say</h2>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
          }}
        >
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="card">
              <div style={{ marginBottom: 16, display: "flex", gap: 3 }}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} className="star">
                    ★
                  </span>
                ))}
              </div>
              <p
                style={{
                  color: "rgba(232,234,246,0.75)",
                  fontSize: 15,
                  lineHeight: 1.7,
                  marginBottom: 20,
                  fontStyle: "italic",
                }}
              >
                "{t.text}"
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #4ECDC4, #45B7D1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                    fontSize: 16,
                    color: "#0a0e1a",
                  }}
                >
                  {t.name[0]}
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 15 }}>{t.name}</div>
                  <div style={{ color: "rgba(232,234,246,0.4)", fontSize: 13 }}>
                    {t.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
