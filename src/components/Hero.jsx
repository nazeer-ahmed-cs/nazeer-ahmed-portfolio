import { ArrowRight, Binary, Braces, Mail, MapPin, Sparkles } from 'lucide-react'
import { profile, roles, socials, stats } from '../data/portfolio'
import { useTypingEffect } from '../hooks/useTypingEffect'
import { Reveal } from './Reveal'
import { SocialLinks } from './SocialLinks'

export function Hero() {
  const typedRole = useTypingEffect(roles)

  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="hero-backdrop" aria-hidden="true">
        <div className="hero-grid-lines" />
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />
      </div>

      <div className="container hero-layout">
        <Reveal className="hero-copy" delay={60}>
          <span className="status-pill">
            <span className="status-dot" aria-hidden="true" />
            {profile.role} · {profile.location}
          </span>

          <h1 id="hero-title">
            Hi, I&apos;m <span className="gradient-text">{profile.name}</span>
          </h1>

          <p className="hero-subtitle">{profile.subtitle}</p>
          <p className="hero-description">{profile.description}</p>

          <div className="hero-focus" aria-label={`Roles: ${roles.join(', ')}`}>
            <span className="hero-focus-label">Focus</span>
            <span className="hero-focus-value" aria-hidden="true">
              {typedRole}
              <span className="typed-cursor" />
            </span>
          </div>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">
              View My Projects
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a className="btn btn-secondary" href="#contact">
              Contact Me
              <Mail size={18} aria-hidden="true" />
            </a>
          </div>

          <div className="hero-links">
            <SocialLinks items={socials.slice(0, 2)} />
            <span className="hero-location">
              <MapPin size={15} aria-hidden="true" />
              {profile.location}
            </span>
          </div>
        </Reveal>

        <Reveal className="hero-visual" delay={180}>
          <div className="hero-art">
            <div className="hero-art-halo" aria-hidden="true" />
            <img
              className="hero-portrait"
              src="/profile-illustration.svg"
              alt="Illustrated developer portrait of Nazeer Ahmed surrounded by code, AI, and software motifs"
              width="560"
              height="560"
              fetchPriority="high"
            />
            <span className="floating-chip floating-chip-ai">
              <Sparkles size={14} aria-hidden="true" />
              AI &amp; ML
            </span>
            <span className="floating-chip floating-chip-code">
              <Braces size={14} aria-hidden="true" />
              Full-stack
            </span>
            <span className="floating-chip floating-chip-dsa">
              <Binary size={14} aria-hidden="true" />
              DSA
            </span>
          </div>
        </Reveal>
      </div>

      <div className="container">
        <Reveal className="hero-stats" delay={280}>
          {stats.map((stat) => {
            const Icon = stat.icon

            return (
              <div className="stat-card" key={stat.label}>
                <span className="stat-icon" aria-hidden="true">
                  <Icon size={18} />
                </span>
                <span>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </span>
              </div>
            )
          })}
        </Reveal>
      </div>
    </section>
  )
}
