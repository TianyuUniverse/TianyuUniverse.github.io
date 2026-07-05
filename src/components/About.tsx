import type { SiteCopy } from "../content";

export function About({ copy }: { copy: SiteCopy }) {
  const skills = [copy.skill1, copy.skill2, copy.skill3, copy.skill4];
  return (
    <section className="about section-shell section-pad" id="about" aria-labelledby="about-title">
      <div className="section-heading reveal"><p className="section-index">01 / ABOUT</p><h2 id="about-title">{copy.aboutTitle}</h2></div>
      <div className="about-grid">
        <div className="about-statement reveal"><p>{copy.aboutP1}</p><p>{copy.aboutP2}</p></div>
        <div className="capability-list reveal" aria-label={copy.skillsLabel}>
          {skills.map((skill, index) => <div key={skill}><span>0{index + 1}</span><strong>{skill}</strong></div>)}
        </div>
      </div>
    </section>
  );
}
