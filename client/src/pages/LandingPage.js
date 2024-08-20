import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero bg-blue-600 text-white text-center py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Welcome to SocialFi</h1>
          <p className="text-xl mb-8">
            A decentralized platform to connect, create, and govern.
          </p>
          <Link
            to="/register"
            className="bg-white text-blue-600 font-semibold py-3 px-6 rounded"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="about py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">About SocialFi</h2>
          <p className="text-lg mb-6">
            SocialFi is a decentralized social platform that empowers users to
            create, share, and govern digital content. Earn rewards, influence
            platform decisions, and trade digital assets in a secure and
            transparent environment.
          </p>
          <Link to="/about" className="text-blue-600 font-semibold underline">
            Learn More
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="features py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="feature-box p-6 bg-white shadow-lg rounded-lg text-center">
              <h3 className="text-2xl font-semibold mb-4">Create</h3>
              <p>
                Share your creative content and earn rewards in a decentralized
                ecosystem.
              </p>
            </div>
            <div className="feature-box p-6 bg-white shadow-lg rounded-lg text-center">
              <h3 className="text-2xl font-semibold mb-4">Govern</h3>
              <p>
                Participate in governance by voting on proposals and shaping the
                future of SocialFi.
              </p>
            </div>
            <div className="feature-box p-6 bg-white shadow-lg rounded-lg text-center">
              <h3 className="text-2xl font-semibold mb-4">Trade</h3>
              <p>
                Buy, sell, and trade digital assets on a secure and transparent
                marketplace.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="testimonial-box p-6 bg-white shadow-lg rounded-lg text-center">
              <p className="mb-4">
                "SocialFi has changed the way I share content. The rewards
                system is fantastic, and I love being part of a decentralized
                community."
              </p>
              <p className="font-semibold">- User A</p>
            </div>
            <div className="testimonial-box p-6 bg-white shadow-lg rounded-lg text-center">
              <p className="mb-4">
                "The governance feature makes me feel empowered. I can actually
                have a say in how the platform evolves."
              </p>
              <p className="font-semibold">- User B</p>
            </div>
            <div className="testimonial-box p-6 bg-white shadow-lg rounded-lg text-center">
              <p className="mb-4">
                "Trading digital assets on SocialFi is a breeze. The marketplace
                is intuitive and secure."
              </p>
              <p className="font-semibold">- User C</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta py-16 text-center bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Join SocialFi Today</h2>
          <p className="text-xl mb-8">
            Be part of the next evolution in social networking. Create, govern,
            and trade in a decentralized environment.
          </p>
          <Link
            to="/register"
            className="bg-white text-blue-600 font-semibold py-3 px-6 rounded"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer bg-gray-800 text-white text-center py-8">
        <p>&copy; 2024 SocialFi. All rights reserved.</p>
        <p>
          <Link to="/login" className="text-blue-400 underline">
            Already have an account? Log in
          </Link>
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
