'use client'

import { useState, useEffect } from 'react'
import styles from './Hero.module.css'
import Image from 'next/image'
import Waitlist from './Waitlist'

export default function Hero() {
  return (
    <div className={styles.hero} style={{ position: 'relative' }}>
      <picture className={styles.backgroundPicture}>
        <source media="(max-width: 768px)" srcSet="/assets/background-mobb.png" />
        <img 
          src="/assets/background.png" 
          className={styles.backgroundImage}
          alt="Background"
        />
      </picture>

      {/* Top Logo */}
      <div className={styles.logoContainer}>
        <img 
          src="/assets/logo.svg" 
          alt="MANIFESTR" 
          className={styles.logo}
        />
      </div>

      {/* Center Coming Soon */}
      {/* <div className={styles.comingSoonContainer}>
        <img 
          src="/assets/comingsoon.svg" 
          alt="Coming Soon" 
          className={styles.comingSoon}
        />
      </div> */}
      
      <div className={styles.waitlistWrapper}>
        <Waitlist />
      </div>
    </div>
  )
}

