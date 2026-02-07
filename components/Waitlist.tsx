'use client'

import { useState } from 'react'
import styles from './Waitlist.module.css'

export default function Waitlist() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Add API endpoint integration
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section className={styles.waitlistSection} style={{ marginTop: '100px', background: 'transparent', pointerEvents: 'auto' }}>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.leftContent}>
            <h2 className={styles.title}>
              Early Access <span className={styles.italic}>Waitlist</span>
            </h2>
            <p className={styles.description}>
              MANIFESTR is an AI-powered platform for high-performance work.
              Designed for focused, high-impact execution.
            </p>
            <p className={styles.subtitle}>
              Early access is invite-only and limited in availability.
            </p>
            <ul className={styles.featureList}>
              <li className={styles.featureItem}>
                <span className={styles.checkmark}>✓</span>
                Private release access
              </li>
              <li className={styles.featureItem}>
                <span className={styles.checkmark}>✓</span>
                Eligibility for private sessions with the founder
              </li>
              <li className={styles.featureItem}>
                <span className={styles.checkmark}>✓</span>
                Advanced visibility into new features and capabilities
              </li>
            </ul>
          </div>

          <div className={styles.formContainer}>
            <h3 className={styles.formTitle}>Request Early Access</h3>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.nameRow}>
                <div className={styles.inputGroup}>
                  <label className={styles.label}>
                    First name<span className={styles.required}>*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={styles.input}
                    required
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label className={styles.label}>
                    Last name<span className={styles.required}>*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={styles.input}
                    required
                  />
                </div>
              </div>
              <div className={styles.inputGroup}>
                <label className={styles.label}>
                  Email address<span className={styles.required}>*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleChange}
                  className={styles.input}
                  required
                />
              </div>
              <button type="submit" className={styles.submitButton}>
                Request Access
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

