import { BookOpen, Sparkles } from 'lucide-react'
import { skillGroups } from '../data/portfolio'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

const learningNow = ['Artificial Intelligence', 'Machine Learning', 'Data Science', 'DSA']

export function Skills() {
  return (
    <section id="skills" className="section section-alt skills-section" aria-labelledby="skills-title">
      <div className="container">
        <SectionHeading
          eyebrow="Skills & tools"
          title="A growing toolkit, built one project at a time."
          description="The technologies I use to learn, experiment, and turn ideas into working software."
        />

        <div className="skills-grid">
          {skillGroups.map((group, index) => {
            const GroupIcon = group.icon

            return (
              <Reveal
                as="article"
                className="skill-card"
                delay={index * 70}
                key={group.title}
              >
                <div className="skill-card-heading">
                  <span className="skill-category-icon" aria-hidden="true">
                    <GroupIcon size={20} />
                  </span>
                  <h3>{group.title}</h3>
                </div>
                <p className="skill-card-copy">{group.description}</p>
                <ul className="skill-list" aria-label={`${group.title} skills`}>
                  {group.skills.map((skill) => {
                    const SkillIcon = skill.icon

                    return (
                      <li key={skill.name}>
                        <SkillIcon size={16} aria-hidden="true" />
                        <span>{skill.name}</span>
                      </li>
                    )
                  })}
                </ul>
              </Reveal>
            )
          })}
        </div>

        <Reveal className="learning-strip" delay={220}>
          <span className="learning-strip-label">
            <Sparkles size={16} aria-hidden="true" />
            Currently learning
          </span>
          <ul>
            {learningNow.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="skills-note" delay={280}>
          <BookOpen size={18} aria-hidden="true" />
          <p>
            These are tools I have worked with while learning and building. I&apos;m continuing to
            deepen my understanding — no expertise percentages, just steady progress.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
