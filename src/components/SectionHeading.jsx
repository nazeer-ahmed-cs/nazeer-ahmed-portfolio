export function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  return (
    <div
      className={`section-heading${align === 'center' ? ' section-heading-center' : ''}`}
      data-reveal
    >
      <span className="eyebrow">
        <span className="eyebrow-dot" aria-hidden="true" />
        {eyebrow}
      </span>
      <h2>{title}</h2>
      {description ? <p className="section-description">{description}</p> : null}
    </div>
  )
}
