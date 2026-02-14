import logo from '../assets/logo.png';
import './LandingPage.css';

function LandingPage() {
  return (
    <div className="app">
      <header>
        <nav>
          <div className="logo">
            <img src={logo} alt="Rentropy Logo" />
          </div>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section id="home" className="hero">
        <div className="hero-content">
          <h2>Welcome to Rentropy</h2>
          <p>Discover the easiest way to find and manage your rentals. Smart solutions for modern living.</p>
          <a href="#features" className="btn">Explore Features</a>
        </div>
      </section>

      <section id="features" className="features">
        <h2>Why Choose Rentropy?</h2>
        <div className="feature-grid">
          <div className="feature">
            <h3>Easy Search</h3>
            <p>Find your perfect rental with our intuitive search tools.</p>
          </div>
          <div className="feature">
            <h3>Secure Payments</h3>
            <p>Safe and secure payment processing for peace of mind.</p>
          </div>
          <div className="feature">
            <h3>24/7 Support</h3>
            <p>Our team is here to help you anytime, anywhere.</p>
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <h2>About Us</h2>
        <p>Rentropy is revolutionizing the rental market with innovative technology and user-friendly interfaces. We're committed to making renting simple and efficient.</p>
      </section>

      <footer id="contact">
        <p>&copy; 2026 Rentropy. All rights reserved.</p>
        <p>Contact us at info@rentropy.com</p>
      </footer>
    </div>
  );
}

export default LandingPage;