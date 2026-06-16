import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="hero">

      <div className="hero-content">

        <div className="hero-text">

          <span className="hero-badge">
            Learn • Share • Grow
          </span>

          <h1>SkillSwap Hub</h1>

          <p>
            Connect with learners, share your expertise,
            and discover new skills through a collaborative
            learning community.
          </p>

          <div className="hero-buttons">
            <button onClick={() => navigate("/profile")}>
              Get Started
            </button>

            <button
              className="secondary-btn"
              onClick={() => navigate("/search")}
            >
              Explore Skills
            </button>
          </div>

        </div>

        <div className="hero-image">
          <img
            src="/learning.png"
            alt="Skill Learning"
          />
        </div>

      </div>

      <div className="stats-section">

        <div className="stat-box">
          <h2>100+</h2>
          <p>Active Users</p>
        </div>

        <div className="stat-box">
          <h2>50+</h2>
          <p>Skills Available</p>
        </div>

        <div className="stat-box">
          <h2>200+</h2>
          <p>Learning Requests</p>
        </div>

      </div>

      <div className="features-section">

        <h2>Why Choose SkillSwap Hub?</h2>

        <div className="features-grid">

          <div className="feature-card">
            <h3>Find Mentors</h3>
            <p>
              Search and connect with skilled learners easily.
            </p>
          </div>

          <div className="feature-card">
            <h3>Skill Exchange</h3>
            <p>
              Teach your skills and learn new technologies.
            </p>
          </div>

          <div className="feature-card">
            <h3>Track Progress</h3>
            <p>
              Manage requests and monitor learning journey.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Home;