import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <header className="bg-blue-600 text-white text-center py-16">
        <h1 className="text-4xl font-bold mb-4">Welcome to SocialFi</h1>
        <p className="text-xl mb-6">
          Connect, create, and govern in a decentralized social platform.
        </p>
        <Link
          to="/register"
          className="bg-white text-blue-600 font-semibold py-2 px-4 rounded"
        >
          Get Started
        </Link>
      </header>

      <main className="py-16 px-4 md:px-8 lg:px-16">
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Features of SocialFi
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="feature-box p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Content Creation</h3>
              <p>
                Share your ideas, art, and creations with the world. Earn
                rewards for your contributions.
              </p>
            </div>
            <div className="feature-box p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Governance</h3>
              <p>
                Participate in platform governance by voting on proposals and
                influencing the future of SocialFi.
              </p>
            </div>
            <div className="feature-box p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Marketplace</h3>
              <p>
                Buy, sell, and trade digital assets and services in our
                decentralized marketplace.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Why SocialFi?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-blue-100 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">
                Decentralized and Secure
              </h3>
              <p>
                SocialFi is built on blockchain technology, ensuring that your
                data and interactions are secure, transparent, and tamper-proof.
              </p>
            </div>
            <div className="p-6 bg-blue-100 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">User Empowerment</h3>
              <p>
                You have full control over your data and contributions. Earn
                tokens and rewards for your participation and creativity.
              </p>
            </div>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold mb-6">Join Us Today!</h2>
          <Link
            to="/register"
            className="bg-blue-600 text-white font-semibold py-3 px-6 rounded"
          >
            Create an Account
          </Link>
        </section>
      </main>

      <footer className="bg-gray-800 text-white text-center py-8">
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

export default Home;
