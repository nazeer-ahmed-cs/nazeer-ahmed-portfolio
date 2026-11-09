import { useState } from 'react'
import { Info, Send } from 'lucide-react'
import { contactChannels, profile, socials } from '../data/portfolio'
import { Reveal } from './Reveal'
import { SocialLinks } from './SocialLinks'

export function Contact() {
  const [status, setStatus] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const name = String(formData.get('name') || '').trim()

    setStatus(
      `Thanks${name ? `, ${name}` : ''}. This form is a frontend-only demo, so your message was not sent. Please email me directly at ${profile.email}.`,
    )
    event.currentTarget.reset()
  }

  return (
    <section id="contact" className="section contact-section" aria-labelledby="contact-title">
      <div className="container">
        <div className="contact-shell">
          <Reveal className="contact-copy" delay={60}>
            <span className="eyebrow">
              <span className="eyebrow-dot" aria-hidden="true" />
              Contact
            </span>
            <h2 id="contact-title">Let&apos;s build something thoughtful.</h2>
            <p>
              I&apos;m always happy to connect with people who enjoy building, learning, and
              solving problems. Whether it&apos;s a project, an idea, or a question — my inbox is
              open.
            </p>

            <ul className="contact-channels">
              {contactChannels.map((channel) => {
                const Icon = channel.icon
                const content = (
                  <>
                    <span className="contact-channel-icon" aria-hidden="true">
                      <Icon size={18} />
                    </span>
                    <span className="contact-channel-copy">
                      <span>{channel.label}</span>
                      <strong>{channel.value}</strong>
                    </span>
                  </>
                )

                return (
                  <li key={channel.label}>
                    {channel.href ? (
                      <a
                        className="contact-channel"
                        href={channel.href}
                        target={channel.href.startsWith('mailto:') ? undefined : '_blank'}
                        rel={channel.href.startsWith('mailto:') ? undefined : 'noreferrer'}
                      >
                        {content}
                      </a>
                    ) : (
                      <div className="contact-channel">{content}</div>
                    )}
                  </li>
                )
              })}
            </ul>

            <div className="contact-socials">
              <span>Or find me here</span>
              <SocialLinks items={socials.slice(0, 2)} />
            </div>
          </Reveal>

          <Reveal className="contact-form-wrap" delay={140}>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-heading">
                <span>Send a message</span>
                <span className="form-heading-line" aria-hidden="true" />
              </div>

              <div className="form-row">
                <label htmlFor="contact-name">Name</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  autoComplete="name"
                  required
                />
              </div>

              <div className="form-row">
                <label htmlFor="contact-email">Email</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                />
              </div>

              <div className="form-row">
                <label htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="5"
                  placeholder="Tell me a little about what you have in mind..."
                  required
                />
              </div>

              <button className="btn btn-primary form-submit" type="submit">
                Send message
                <Send size={17} aria-hidden="true" />
              </button>

              <p className="form-note" id="contact-form-note">
                <Info size={15} aria-hidden="true" />
                This is a frontend-only demo form. It does not send messages or store your data.
              </p>

              {status ? (
                <p className="form-status" role="status">
                  {status}
                </p>
              ) : null}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
