import React from "react";
import { TESTIMONIALS } from "../data";

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-testimonials">
      <div className="testimonials-inner">
        <div className="testimonials-header">
          <div className="section-tag">Reviews</div>
          <h2 className="section-title">What Partners Say</h2>
        </div>
        <div className="testimonials-grid">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="card testimonial-card">
              {/* Stars */}
              <div className="testimonial-stars">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} className="star">
                    ★
                  </span>
                ))}
              </div>

              {/* Quote */}
              <p className="testimonial-text">"{t.text}"</p>

              {/* Author */}
              <div className="testimonial-author">
                <div className="testimonial-avatar">
                  {t.image ? (
                    <img
                      src={t.image}
                      alt={t.name}
                      className="testimonial-avatar__img"
                    />
                  ) : (
                    <span className="testimonial-avatar__initial">
                      {t.name[0]}
                    </span>
                  )}
                </div>
                <div>
                  <div className="testimonial-author__name">{t.name}</div>
                  <div className="testimonial-author__location">
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
