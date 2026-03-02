import React, { useState } from "react";
import { FAQS } from "../data";

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <section
      id="faq"
      style={{ padding: "100px 40px", maxWidth: 760, margin: "0 auto" }}
    >
      <div style={{ textAlign: "center", marginBottom: 60 }}>
        <div className="section-tag">Questions</div>
        <h2 className="section-title">Frequently Asked</h2>
      </div>
      {FAQS.map((faq, i) => (
        <div
          key={i}
          className="faq-item"
          onClick={() => setOpenFaq(openFaq === i ? null : i)}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span style={{ fontWeight: 600, fontSize: 16 }}>{faq.q}</span>
            <span
              style={{
                color: "#4ECDC4",
                fontSize: 20,
                transform: openFaq === i ? "rotate(45deg)" : "rotate(0)",
                transition: "transform 0.3s",
              }}
            >
              +
            </span>
          </div>
          {openFaq === i && (
            <p
              style={{
                color: "rgba(232,234,246,0.6)",
                fontSize: 15,
                lineHeight: 1.7,
                marginTop: 14,
              }}
            >
              {faq.a}
            </p>
          )}
        </div>
      ))}
    </section>
  );
}
