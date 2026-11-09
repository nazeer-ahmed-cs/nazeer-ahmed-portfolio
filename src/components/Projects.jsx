import { ArrowUpRight, FolderGit2 } from 'lucide-react'
import { profile, projects } from '../data/portfolio'
import { ProjectCard } from './ProjectCard'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Projects() {
  return (
    <section id="projects" className="section projects-section" aria-labelledby="projects-title">
      <div className="container">
        <SectionHeading
          eyebrow="Selected projects"
          title="Practical builds that solve real problems."
          description="A few projects where I have turned what I am learning into something I can use, test, and improve."
        />

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} delay={index * 80} />
          ))}
        </div>

        <Reveal className="projects-footer" delay={220}>
          <div>
            <span className="projects-footer-icon" aria-hidden="true">
              <FolderGit2 size={18} />
            </span>
            <p>
              Some repository and live links are marked as coming soon while the projects are
              being prepared for public release.
            </p>
          </div>
          <a
            className="text-link"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            Explore more on GitHub
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
