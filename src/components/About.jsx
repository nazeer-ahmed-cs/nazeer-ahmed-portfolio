import { Lightbulb } from 'lucide-react'
import { interests, strengths } from '../data/portfolio'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function About() {
  return (
    <section id="about" className="section about-section" aria-labelledby="about-title">
      <div className="container">
        <SectionHeading
          eyebrow="About me"
          title="A student of computer science, a builder by practice."
          description="I care about understanding the fundamentals and turning them into software that is clear, useful, and thoughtful."
        />

        <div className="about-layout">
          <Reveal className="about-visual" delay={80}>
            <div className="about-image-frame">
              <img
                src="/about-illustration.svg"
                alt="Illustration of a developer workspace with code, data, and learning notes"
                width="640"
                height="640"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="about-note">
              <span className="about-note-icon" aria-hidden="true">
                <Lightbulb size={17} />
              </span>
              <span>
                Currently exploring <strong>AI, machine learning, and data science</strong>
              </span>
            </div>
          </Reveal>

          <Reveal className="about-copy" delay={160}>
            <p>
              I&apos;m pursuing a <strong>BS in Computer Science</strong> at{' '}
              <strong>Sukkur IBA University</strong>. My journey into software began with
              curiosity about how the things we use every day actually work — and it has grown
              into a habit of learning by building.
            </p>
            <p>
              I&apos;m especially interested in <strong>AI, machine learning, and full-stack
              development</strong>. I enjoy breaking a problem into smaller pieces, exploring
              possible approaches, and refining a solution until it feels simple.
            </p>
            <p>
              I&apos;m still early in my journey, and that&apos;s part of the fun. I&apos;m
              strengthening my fundamentals, writing more code, and looking for opportunities to
              learn from real projects and real people.
            </p>

            <ul className="about-highlights">
              {strengths.map((strength) => {
                const Icon = strength.icon

                return (
                  <li key={strength.title}>
                    <span className="highlight-icon" aria-hidden="true">
                      <Icon size={18} />
                    </span>
                    <span>
                      <strong>{strength.title}</strong>
                      <span>{strength.description}</span>
                    </span>
                  </li>
                )
              })}
            </ul>

            <div className="interest-block">
              <span className="interest-label">What I&apos;m exploring</span>
              <ul className="tag-cloud" aria-label="Interests">
                {interests.map((interest) => (
                  <li key={interest}>{interest}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
