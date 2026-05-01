import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero">
        <div className="badge">✨ Automate Everything</div>

        <h1>
          Build Workflows That<br />
          <span className="text-glow">Scale Your Business</span>
        </h1>

        <p>
          Connect your apps, automate repetitive tasks, and unlock productivity
          with our visual workflow builder. No code required.
        </p>

        <div className="hero-buttons">
          <Link to="/signup" className="btn-primary">Start Free Trial →</Link>
          <Link to="/demo" className="btn-secondary">Watch Demo</Link>
        </div>

        <div className="hero-info">
          <span>● No credit card required</span>
          <span>● 14-day free trial</span>
        </div>
      </section>

      {/* Bento Grid Concept Placeholder */}
      <section className="bento-grid-container">
        <div className="bento-grid">
           <div className="bento-item glow-border style-1">
              <h3>Seamless Slack Integration</h3>
              <p>Trigger workflows directly from your channels.</p>
           </div>
           <div className="bento-item glow-border style-2">
              <h3>Shopify Sync</h3>
              <p>Automate your e-commerce operations instantly.</p>
           </div>
           <div className="bento-item glow-border style-3">
              <h3>Visual Builder</h3>
              <p>Drag and drop nodes to create complex pipelines.</p>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
