import React from "react";
import { STEPS } from "../data";

export default function StepsSection() {
  return (
    <section
      id="how-it-works"
      style={{ padding: "100px 40px", maxWidth: 1100, margin: "0 auto" }}
    >
      <div style={{ textAlign: "center", marginBottom: 60 }}>
        <div className="section-tag">Process</div>
        <h2 className="section-title">How It Works</h2>
        <p
          style={{
            color: "rgba(232,234,246,0.55)",
            marginTop: 16,
            fontSize: 17,
            maxWidth: 500,
            margin: "16px auto 0",
          }}
        >
          A simple 3-step process to start earning with your Google Play Console
          account.
        </p>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 20,
        }}
      >
        {STEPS.map((step, i) => (
          <div
            key={step.num}
            className="card"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <div style={{ fontSize: 36, marginBottom: 12 }}>{step.icon}</div>
            <div
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: 13,
                color: "#4ECDC4",
                fontWeight: 700,
                letterSpacing: 2,
                marginBottom: 8,
              }}
            >
              STEP {step.num}
            </div>
            <h3
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: 20,
                fontWeight: 700,
                marginBottom: 10,
              }}
            >
              {step.title}
            </h3>
            <p
              style={{
                color: "rgba(232,234,246,0.6)",
                fontSize: 14,
                lineHeight: 1.7,
              }}
            >
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
