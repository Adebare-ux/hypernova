import React from "react";
import { TEAM } from "../data";

export default function Team() {
  return (
    <section id="team" className="section-team">
      <div className="team-inner">
        <div className="team-header">
          <div className="section-tag">Our People</div>
          <h2 className="section-title">Meet the Team</h2>
          <p className="team-subtitle">
            The people behind Hypernova — building partnerships and publishing
            apps that reach millions.
          </p>
        </div>
        <div className="team-grid">
          {TEAM.map((member) => (
            <div key={member.name} className="team-card card">
              <div className="team-card__avatar">
                <span className="team-card__initial">{member.name[0]}</span>
              </div>
              <h3 className="team-card__name">{member.name}</h3>
              <p className="team-card__role">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
