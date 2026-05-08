export function AboutPage() {
  return (
    <section className="page">
      <h2>About</h2>
      <p className="lead">
        I am a Senior Software Engineer who enjoys software design, modernization
        strategy, and building systems that solve real business obstacles.
      </p>

      <div className="about-photos card">
        <h3>Profile Photos</h3>
        <p>
          Add a professional headshot and one optional family/life image in
          `public/images` and reference them here. This keeps a human touch while
          staying work-focused.
        </p>
      </div>

      <div className="card-grid">
        <article className="card">
          <h3>Professional Focus</h3>
          <p>
            I specialize in moving organizations from aging, entangled systems to
            cohesive platforms that are easier to evolve.
          </p>
        </article>
        <article className="card">
          <h3>How I Work</h3>
          <p>
            I collaborate closely with stakeholders, clarify requirements early,
            and prioritize reliability in each delivery milestone.
          </p>
        </article>
        <article className="card">
          <h3>Personal Touch</h3>
          <p>
            Employers often appreciate a short personal signal: family, community,
            or interests that show character and communication style.
          </p>
        </article>
      </div>
    </section>
  )
}
