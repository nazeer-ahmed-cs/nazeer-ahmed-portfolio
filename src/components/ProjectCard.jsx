import { ArrowUpRight, ExternalLink, Sparkles } from 'lucide-react'
import { GithubIcon } from './BrandIcons'
import { Reveal } from './Reveal'

function slugify(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

export function ProjectCard({ project, delay = 0 }) {
  const titleId = `project-${slugify(project.title)}`

  return (
    <Reveal
      as="article"
      className={`project-card${project.featured ? ' project-card-featured' : ''}`}
      delay={delay}
      aria-labelledby={titleId}
    >
      <div className="project-media">
        <img
          src={project.image}
          alt={project.alt}
          width="800"
          height="520"
          loading="lazy"
          decoding="async"
        />
        {project.featured ? (
          <span className="project-featured-badge">
            <Sparkles size={13} aria-hidden="true" />
            Featured
          </span>
        ) : null}
      </div>

      <div className="project-content">
        <div className="project-topline">
          <span className="project-category">{project.category}</span>
          <span className="project-year">{project.year}</span>
        </div>

        <h3 id={titleId}>{project.title}</h3>
        <p>{project.featured ? project.longDescription : project.description}</p>

        <ul className="project-tags" aria-label={`Technologies used in ${project.title}`}>
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>

        <div className="project-actions">
          {project.live ? (
            <a
              className="btn btn-primary btn-small"
              href={project.live}
              target="_blank"
              rel="noreferrer"
            >
              <ExternalLink size={15} aria-hidden="true" />
              Live Demo
            </a>
          ) : (
            <span
              className="btn btn-disabled btn-small"
              aria-disabled="true"
              title="A live demo will be added when the project is published"
            >
              <ExternalLink size={15} aria-hidden="true" />
              Live demo soon
            </span>
          )}

          {project.github ? (
            <a
              className="btn btn-secondary btn-small"
              href={project.github}
              target="_blank"
              rel="noreferrer"
            >
              <GithubIcon size={15} aria-hidden="true" />
              GitHub
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          ) : (
            <span
              className="btn btn-disabled btn-small"
              aria-disabled="true"
              title="The repository link will be added when the project is published"
            >
              <GithubIcon size={15} aria-hidden="true" />
              Repo link soon
            </span>
          )}
        </div>
      </div>
    </Reveal>
  )
}
