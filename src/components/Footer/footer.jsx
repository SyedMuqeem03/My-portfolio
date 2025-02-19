import React from 'react';
import styles from './footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.socialLinks}>
        <h2 className="section__title">Contact</h2>

          <a href="https://github.com/SyedMuqeem03" target="_blank" rel="noopener noreferrer">
          <i className="uil uil-github-alt"></i>

            GitHub
          </a>
          <a href="https://linkedin.com/in/syedmuqeemahmed/" target="_blank" rel="noopener noreferrer">
          <i class="uil uil-linkedin-alt"></i>

            LinkedIn
            
          </a>
          <a href="mailto:smuqeem03@gmail.com">
            <i className="uil uil-envelope"></i>
            Email
          </a>
        </div>
        <p className={styles.copyright}>
          © {currentYear} Syed Muqeem Ahmed. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;