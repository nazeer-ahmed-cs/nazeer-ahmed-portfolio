import { BookOpen, GraduationCap, MapPin, Target } from 'lucide-react'
import { education } from '../data/portfolio'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Education() {
  return (
    <section
      id="education"
      className="section section-alt education-section"
      aria-labelledby="education-title"
    >
      <div className="container">
        <SectionHeading
          eyebrow="Education"
          title="A foundation in computer science."
          description="Formal study, paired with a habit of learning by building and exploring beyond the syllabus."
        />

        <div className="education-layout">
          <Reveal className="timeline" delay={80}>
            <article className="timeline-item">
              <span className="timeline-marker" aria-hidden="true">
                <GraduationCap size={20} />
              </span>
              <div className="timeline-card">
                <span className="education-status">{education.status}</span>
                <h3>{education.degree}</h3>
                <p className="education-university">{education.university}</p>
                <p className="education-location">
                  <MapPin size={14} aria-hidden="true" />
                  {education.location}
                </p>
                <ul className="education-focus" aria-label="Areas of focus">
                  {education.focus.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>

          <div className="education-side">
            <Reveal className="education-note-card" delay={160}>
              <span className="education-note-icon" aria-hidden="true">
                <BookOpen size={18} />
              </span>
              <h3>Learning beyond the classroom</h3>
              <p>
                I use projects, documentation, and experimentation to connect what I study with
                how software is actually designed and built.
              </p>
            </Reveal>

            <Reveal className="education-note-card" delay={220}>
              <span className="education-note-icon" aria-hidden="true">
                <Target size={18} />
              </span>
              <h3>What I&apos;m working toward</h3>
              <p>
                Becoming a well-rounded software engineer with strong fundamentals, thoughtful
                craft, and experience turning ideas into reliable products.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
