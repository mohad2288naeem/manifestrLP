'use client'

import { useState } from 'react'
import styles from './Pricing.module.css'

export default function Pricing() {

  return (
    <section className={styles.pricingSection}>
      <div className={styles.container}>

        {/* Lifetime Membership Banner - Overlapping */}
        {/* <div className={styles.lifetimeBanner}>
          <h2 className={styles.lifetimeTitle}>
            <span className={styles.italic}>Lifetime</span> Memberships to
            <span className={styles.boldManifestr}>MANIFESTR</span>
          </h2>
          <p className={styles.lifetimeSubtitle}>
            Lifetime membership holders receive permanent access to the MANIFESTR platform and all future updates.
          </p>
          <p className={styles.lifetimeNote}>
            A limited number of lifetime memberships are being released.
            <br />
            Once allocated, no further lifetime access will ever be offered.
          </p>
        </div> */}

        {/* Just the three images as cards - no overlays, no backgrounds */}
        {/* <div className={styles.pricingGrid}>
          <div 
            className={styles.imageCard}
            style={cardStyle(0)}
            onMouseEnter={() => setHoveredCard(0)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <img 
              src="/assets/pric1.svg" 
              alt="Founders Membership" 
              className={styles.cardImage}
              draggable={false}
              style={{ userSelect: 'none', pointerEvents: 'none' }}
            />
          </div>

          <div 
            className={styles.imageCard}
            style={cardStyle(1)}
            onMouseEnter={() => setHoveredCard(1)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <img 
              src="/assets/pric2.svg" 
              alt="Platinum Membership" 
              className={styles.cardImage}
              draggable={false}
              style={{ userSelect: 'none', pointerEvents: 'none' }}
            />
          </div>

          <div 
            className={styles.imageCard}
            style={cardStyle(2)}
            onMouseEnter={() => setHoveredCard(2)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <img 
              src="/assets/pric3.svg" 
              alt="Gold Membership" 
              className={styles.cardImage}
              draggable={false}
              style={{ userSelect: 'none', pointerEvents: 'none' }}
            />
          </div>
          </div> */}
      </div>

      {/* <div className={styles.guaranteeWrapper}>
        <div className={styles.guaranteeContainer}>
          <div className={styles.guaranteeCard}>
            <h3 className={styles.guaranteeTitle}>Peace of Mind Guarantee</h3>
            <p className={styles.guaranteeText}>
              We believe the value of MANIFESTR becomes clear quickly.
              If within 10 days you decide it's not the right fit, simply let us know and
              we'll issue a full refund. No questions asked.
            </p>
          </div>
          <div className={styles.guaranteeCard}>
            <h3 className={styles.guaranteeTitle}>Peace of Mind Guarantee</h3>
            <p className={styles.guaranteeText}>
              We believe the value of MANIFESTR becomes clear quickly.
              If within 10 days you decide it's not the right fit, simply let us know and
              we'll issue a full refund. No questions asked.
            </p>
          </div>
          <div className={styles.guaranteeCard}>
            <h3 className={styles.guaranteeTitle}>Peace of Mind Guarantee</h3>
            <p className={styles.guaranteeText}>
              We believe the value of MANIFESTR becomes clear quickly.
              If within 10 days you decide it's not the right fit, simply let us know and
              we'll issue a full refund. No questions asked.
            </p>
          </div>
        </div>
      </div> */}

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p className={styles.copyright}>© 2025 MANIFESTR. All rights reserved.</p>
          <div className={styles.footerLinks}>
            <span className={styles.contact}>
              Questions? We're only an email away - <a href="mailto:hello@manifestr.ai">hello@manifestr.ai</a>
            </span>
            {/* <a href="#" className={styles.footerLink}>Privacy</a>
            <a href="#" className={styles.footerLink}>Terms</a> */}
          </div>
        </div>
      </footer>
    </section>
  )
}

