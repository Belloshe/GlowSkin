'use client'
import React, { useState } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);

  return (
    <nav className={styles.navbar}>
      <div className={styles.inner}>
        <div className={styles.logo}>Glow<span>Skin</span></div>

        <div className={styles.hamburger} onClick={toggleMenu}>
          <div className={`${styles.bar} ${menuOpen ? styles.bar1Open : ''}`} />
          <div className={`${styles.bar} ${menuOpen ? styles.bar2Open : ''}`} />
          <div className={`${styles.bar} ${menuOpen ? styles.bar3Open : ''}`} />
        </div>

        <ul className={`${styles.menu} ${menuOpen ? styles.menuOpen : ''}`}>
          <li><a href="#products" onClick={() => setMenuOpen(false)}>Products</a></li>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>About us</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
