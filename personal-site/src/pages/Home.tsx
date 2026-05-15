export function HomePage() {
  return (
    <section className="page">
      <h2>About</h2>
      <p className="lead">
        I am a Senior Software Engineer who enjoys finding the practical bridge
        between business needs, people, and well-designed software.
      </p>

      <div className="about-intro card">
        <img
          src="/images/gregory-dalbey-profile.jpg"
          alt="Gregory Dalbey"
          className="about-profile-photo"
        />
        <div>
          <p className="kicker">Availability</p>
          <h3>Open to hybrid work in the greater Madison area or remote roles</h3>
          <p>
            I am most energized by work where software is holding a business
            back, slowing people down, or leaving an important bridge unbuilt. I
            like getting close to the real workflow, learning from users, and
            designing systems that make their professional lives easier.
          </p>
        </div>
      </div>

      <div className="card-grid">
        <article className="card">
          <h3>What Motivates Me</h3>
          <p>
            The gratifying part of software for me is seeing a rough process
            become clearer, faster, and less frustrating for the people who rely
            on it. I enjoy the mix of analysis, brainstorming, design, and
            hands-on implementation that turns a business obstacle into a useful
            system.
          </p>
        </article>
        <article className="card">
          <h3>How I Work</h3>
          <p>
            I like working with smart, thoughtful teams where the goal is not to
            be the person who is right, but to help the team make the right
            choice. I try to keep the process positive and light while staying
            serious about quality, reliability, and business outcomes.
          </p>
        </article>
        <article className="card">
          <h3>Creative Problem Solving</h3>
          <p>
            I am drawn to employers who value creativity as part of engineering.
            My strongest work often comes from looking at a problem from several
            angles, connecting ideas across domains, and helping a business find
            a solution that fits the people who will actually use it.
          </p>
        </article>
      </div>

      <div className="card about-personal">
        <h3>Personal Touch</h3>
        <p>
          Outside of work, I am a husband and father of five. Our family has
          homeschooled for many years, and during the warm months we spend a lot
          of time in our greenhouse, garden, orchard, raspberry patch, and with
          our chickens.
        </p>
        <p>
          I am also a lifelong musician. I studied music theory and composition
          in college and have played live in rock, jazz, country, and bluegrass
          groups for more than 30 years. Performing has taught me a lot about
          preparation, listening, collaboration, and taking the chance to put
          something creative in front of people.
        </p>
      </div>

      <div className="card about-site">
        <h3>About This Site</h3>
        <p>
          I built this site with Cursor, using an incremental development process
          to shape both the content and design. The application is built with
          React, Vite, and a Node.js/Express service that makes it easy to render
          my Markdown resume as a downloadable PDF.
        </p>
        <p>
          The site runs in a Docker container on a Hostinger virtual private
          server. Code pushes to GitHub are automatically picked up by the VPS,
          built, and published.
        </p>
      </div>
    </section>
  )
}
