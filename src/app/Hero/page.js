import React from 'react';
import styles from './Hero.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
    
      <div className={styles.background}>
        <div className={styles.leftWrapper}>
          <div className={styles.leftImage}></div>
        </div>
        <div className={styles.rightImage}></div>
      </div>

      
      <div className={styles.header}>
        <img src="images/top.png" alt="Header" className={styles.headerImage} />
        <div className={styles.headerText}>
          <h1
            style={{
              fontSize: '3rem',
              fontFamily: 'sans-serif',
              margin: 0,
              lineHeight: '1.2',
              letterSpacing: '7px',
              whiteSpace: 'nowrap',
            }}
          >
            THE ART OF
          </h1>
          <div
            style={{
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap',
              marginTop: '0.2rem',
            }}
          >
            <h1
              style={{
                fontSize: '3rem',
                fontWeight: 300,
                fontFamily: 'sans-serif',
                margin: 0,
                letterSpacing: '4px',
                whiteSpace: 'nowrap',
                    letterSpacing: '7px',
              }}
            >
              GLOWING
            </h1>
            <h1
              style={{
                fontSize: '3rem',
                fontWeight: 300,
                fontFamily: 'sans-serif',
                margin: 0,
                letterSpacing: '4px',
                whiteSpace: 'nowrap',
              }}
            >
              SKIN
            </h1>
          </div>
          <p style={{ fontSize: '1rem', marginTop: '1rem', color: 'white' }}>
            Discover a new era of skincare designed for softness, radiance and calm confidence.
          </p>
          <div style={{ marginTop: '1.5rem' }}>
            <button className={styles.learnButton}>Learn More</button>
          </div>
        </div>
      </div>

  
      <div className={styles.rectangles}>
     
        <div className={`${styles.rectangle} ${styles.rectangle1Content}`}>
          <h2 style={{ margin: '0 0 0.5rem', fontSize: '1.6rem', color: '#333' }}>
            Where Beauty Meets Wellness
          </h2>
          <p style={{ margin: 0, fontSize: '1rem', color: '#444' }}>
            Embrace a skincare philosophy that nurtures both your skin and soul — because you deserve more than surface-level glow.
          </p>
        </div>

    
        <div className={`${styles.rectangle} ${styles.rectangle2}`}>
          <div className={styles.productBox}>
            <img src="images/product1.png" alt="Produkt 1" className={styles.productImage} />
            <button className={styles.buyButton}>Products</button>
          </div>
        </div>


        <div className={`${styles.rectangle} ${styles.rectangle3}`}>
          <div className={styles.rectangle3Content}>
            <h2 className={styles.rectangle3Title}>Experience the Transformation</h2>
            <p className={styles.rectangle3Text}>
              Our products are made with love, care, and nature’s best for skin that feels as good as it looks.
Gentle, nourishing formulas that bring out your natural glow, every single day.
            </p>
            <button className={styles.readMoreButton1}>Läs mer</button>
          </div>
        </div>

    
        <div className={`${styles.rectangle} ${styles.rectangle4}`}>
          <div className={styles.rectangle4Inner}>
            <div className={styles.rectangle4Image}></div>
            <div className={styles.rectangle4TextContent}>
              <h2 className={styles.rectangle4Title}>Unleash Your Natural Glow</h2>
              <p className={styles.rectangle4Description}>
                Our formula is packed with botanical ingredients and gentle actives that support your skin’s natural balance.
                With consistent use, you’ll notice a visible transformation in texture, hydration, and radiance.
                Let your skin breathe and shine with confidence every day.
              </p>
              <button className={styles.readMoreButton2}>Läs mer</button>
            </div>
          </div>
        </div>

 
        <div className={`${styles.rectangle} ${styles.rectangle5}`}>
          <div className={styles.rectangle5Content}>
          
            <div className={styles.contactInfo}>
              <h3>Contact us</h3>
              <p>E-post: info@softskin.se</p>
              <p>Telefon: 070-123 45 67</p>
              <p>Adress: Skincarevägen 12, 123 45 Hudstad</p>
            </div>

           
            <div className={styles.verticalDivider}></div>

        
            <div className={styles.infoContent}>
              <h2 className={styles.rectangle5Title}>We are here for you</h2>
              <p className={styles.rectangle5Text}>
Got questions about our products, deliveries, or just want to say hi?
We love hearing from you! Our team is here to support you every step of the way to your softest skin.
              </p>
              <button className={styles.readMoreButton3}>contact us</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
