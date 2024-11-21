import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section style={styles.heroSection}>
        <h1 style={styles.heroTitle}>Welcome to e-Shop</h1>
        <p style={styles.heroSubtitle}>
          Your one-stop solution for a seamless online shopping experience!
        </p>
        <a href="#getStarted" style={styles.heroButton}>
          Get Started
        </a>
      </section>

      {/* Features Section */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Why Choose Us?</h2>
        <div style={styles.featuresContainer}>
          <div style={styles.featureCard}>
            <h3>Wide Range of Products</h3>
            <p>
              Discover everything you need, from electronics to fashion, all in
              one place.
            </p>
          </div>
          <div style={styles.featureCard}>
            <h3>Fast and Secure Delivery</h3>
            <p>
              Enjoy quick and reliable delivery options tailored to your
              convenience.
            </p>
          </div>
          <div style={styles.featureCard}>
            <h3>Easy Payment Options</h3>
            <p>
              Choose from multiple payment methods, including credit cards,
              wallets, and COD.
            </p>
          </div>
          <div style={styles.featureCard}>
            <h3>24/7 Customer Support</h3>
            <p>
              Our support team is always ready to assist you with any issues or
              queries.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Benefits of Shopping with Us</h2>
        <ul style={styles.benefitsList}>
          <li>
            Save time and energy by shopping from the comfort of your home.
          </li>
          <li>Exclusive discounts and seasonal sales.</li>
          <li>Personalized product recommendations.</li>
          <li>Hassle-free returns and refunds.</li>
          <li>Secure transactions to protect your data and payments.</li>
        </ul>
      </section>

      {/* Call-to-Action Section */}
      <section style={styles.ctaSection} id="getStarted">
        <h2>Start Your Shopping Journey Today!</h2>
        <p>Join millions of satisfied customers worldwide.</p>
        {!localStorage.getItem("token") ? (
          <div>
            <Link to="/login" style={styles.ctaButton}>
              Login
            </Link>
            <Link to="/signup" style={styles.ctaButton}>
              Sign Up
            </Link>
          </div>
        ) : (
          <Link to="/product" style={styles.ctaButton}>
            Continue Shopping
          </Link>
        )}
      </section>
    </div>
  );
};

// Basic inline styles
const styles = {
  heroSection: {
    textAlign: "center",
    padding: "50px 20px",
    background: "#f4f4f4",
    marginTop: "2rem",
  },
  heroTitle: {
    fontSize: "2.5rem",
    margin: "10px 0",
  },
  heroSubtitle: {
    fontSize: "1.2rem",
    color: "#555",
  },
  heroButton: {
    padding: "10px 20px",
    background: "#007bff",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    textDecoration: "none",
  },
  section: {
    padding: "30px 20px",
  },
  sectionTitle: {
    fontSize: "1.8rem",
    marginBottom: "20px",
  },
  featuresContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
  },
  featureCard: {
    textAlign: "center",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  benefitsList: {
    listStyleType: "disc",
    paddingLeft: "20px",
    lineHeight: "1.8",
  },
  ctaSection: {
    textAlign: "center",
    padding: "40px 20px",
    background: "#007bff",
    color: "#fff",
  },
  ctaButton: {
    padding: "10px 20px",
    background: "#fff",
    color: "#007bff",
    border: "none",
    cursor: "pointer",
    marginTop: "10px",
    marginRight: "10px",
    borderRadius: "5px",
    textDecoration: "none",
  },
};

export default Home;
