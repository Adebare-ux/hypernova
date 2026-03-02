import React from "react";

export default function Compensation() {
  return (
    <section id="compensation" className="section-compensation">
      <div className="offer-grid">
        {/* LEFT — Text */}
        <div>
          <div className="section-tag">Partnership</div>
          <h2 className="section-title" style={{ marginBottom: 32 }}>
            Our Offer
          </h2>

          <p
            style={{
              color: "#4ECDC4",
              fontWeight: 600,
              fontSize: 16,
              marginBottom: 16,
            }}
          >
            You are paid to publish and host our mobile app on your Google Play
            Console account.
          </p>
          <p
            style={{
              color: "rgba(232,234,246,0.6)",
              fontSize: 15,
              lineHeight: 1.8,
              marginBottom: 16,
            }}
          >
            The fee is estimated and agreed upon at the start according to an
            account evaluation.
          </p>
          <p
            style={{
              color: "rgba(232,234,246,0.6)",
              fontSize: 15,
              lineHeight: 1.8,
              marginBottom: 40,
            }}
          >
            We offer a simple and profitable partnership. You can earn a steady
            monthly income by providing us with access to your Google Play
            Console. During the partnership period, we may need to connect for
            updates and maintenance of our app occasionally.
          </p>

          <button
            className="glow-btn"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Get Estimate! →
          </button>
        </div>

        {/* RIGHT — Pricing */}
        <div>
          <div className="paying-banner">
            We are <span style={{ color: "#4ECDC4" }}>paying!</span> 👌
          </div>

          <div className="pricing-grid">
            {[
              { amount: "$40", label: "For Release" },
              { amount: "$40", label: "Per Week" },
              { amount: "$200", label: "Per Month" },
              { amount: "$2400", label: "Per Year" },
            ].map(({ amount, label }) => (
              <div key={label} className="card pricing-card">
                <div className="pricing-amount">{amount}</div>
                <div className="pricing-label">{label}</div>
              </div>
            ))}
          </div>

          <p className="pricing-disclaimer">
            *These amounts are approximate; actual compensation will be agreed
            upon after account evaluation. We ensure secure and transparent
            transactions, and our team is always available to support you
            through every step of the process.
          </p>
        </div>
      </div>
    </section>
  );
}
