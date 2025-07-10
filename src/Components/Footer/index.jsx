import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { RiRssLine } from 'react-icons/ri';
import logo from '../../Assets/logo.svg';
import './styles.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__columns">
        <div className="footer__brand">
          <div className="logo_wrapper">
            <img src={logo} alt="" />
            <h2>CodeBroom</h2>
          </div>
          <p>Built for modern developers, with love and neon vibes 💙💜</p>
        </div>

        <div className="footer__links">
          <h4>Navigation</h4>
          <a href="/about">About</a>
          <a href="/features">Features</a>
          <a href="/docs">Docs</a>
          <a href="/status">System Status</a>
        </div>

        <div className="footer__links">
          <h4>Resources</h4>
          <a href="/blog">Blog</a>
          <a href="/changelog">Changelog</a>
          <a href="/careers">Careers</a>
          <a href="/security">Security</a>
        </div>

        <div className="footer__links">
          <h4>Contact</h4>
          <a href="/support">Support</a>
          <a href="/community">Community</a>
          <a href="/pricing">Pricing</a>
        </div>

        <div className="footer__newsletter">
          <h4>Subscribe</h4>
          <form onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Your email" />
            <button type="submit">→</button>
          </form>
          <small>By subscribing you agree to our <a href="/terms">Terms</a> and <a href="/privacy">Privacy</a>.</small>
          <div className="footer__social">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="/rss" target="_blank" rel="noopener noreferrer"><RiRssLine /></a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© 2025 CodeBroom. Crafted with ⚡ and ☕ for developers.</p>
      </div>
    </footer>
  );
};

export default Footer;
