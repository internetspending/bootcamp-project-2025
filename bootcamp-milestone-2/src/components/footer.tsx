import React from 'react';
import Link from 'next/link';
import style from './footer.module.css';

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.footerContent}>
        <div className={style.footerSection}>
          <h3 className={style.footerTitle}>Jeron Perey</h3>
          <p className={style.footerDescription}>
            Computer Science student passionate about software engineering and entrepreneurship.
          </p>
        </div>
        
        <div className={style.footerSection}>
          <h4 className={style.footerSubtitle}>Quick Links</h4>
          <nav className={style.footerNav}>
            <Link href="/" className={style.footerLink}>Home</Link>
            <Link href="/blog" className={style.footerLink}>Blog</Link>
            <Link href="/portfolio" className={style.footerLink}>Portfolio</Link>
            <Link href="/resume" className={style.footerLink}>Resume</Link>
            <Link href="/contact" className={style.footerLink}>Contact</Link>
          </nav>
        </div>
        
        <div className={style.footerSection}>
          <h4 className={style.footerSubtitle}>Connect</h4>
          <div className={style.socialLinks}>
            <a href="mailto:jeron.perey@calpoly.edu" className={style.socialLink}>
              Email
            </a>
            <a href="https://linkedin.com/in/jeronperey" className={style.socialLink} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="https://github.com/jeronperey" className={style.socialLink} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </div>
      
      <div className={style.footerBottom}>
        <p className={style.copyright}>
          &copy; 2025 Jeron Perey. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
