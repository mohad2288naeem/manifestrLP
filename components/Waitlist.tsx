'use client'

import { useState, useRef } from 'react'
import styles from './Waitlist.module.css'
import { useToast } from '../hooks/useToast'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Waitlist() {
  const toast = useToast()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  })
  
  // Ref for the waitlist section to track scroll
  const sectionRef = useRef<HTMLElement>(null)
  
  // Track scroll progress of the section relative to viewport
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })
  
  // Map scroll progress to button width
  // Button starts normal, expands as it comes into view, then normalizes
  const buttonWidth = useTransform(scrollYProgress, [0, 1], ["200px", "80px"])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))

      console.log('Form submitted:', formData)
      toast.success("Requested, We'll get back to you shortly")

      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: ''
      })
      setIsModalOpen(false)
    } catch (error) {
      toast.error("Something went wrong. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const formContent = (
    <>
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
              disabled={isLoading}
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
              disabled={isLoading}
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
            disabled={isLoading}
          />
        </div>
        <motion.button
          type="submit"
          className={styles.submitButton}
          disabled={isLoading}
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '8px', 
            justifyContent: 'center', 
            minWidth: '80px',
            maxWidth: '250px',
            width: isModal ? '100%' : buttonWidth
          }}
        >
          {isLoading ? (
            <>
              <span className={styles.spinner}></span>
              <span>Requesting...</span>
            </>
          ) : (
            'Request Access'
          )}
        </motion.button>
      </form>
    </>
  )

  return (
    <section ref={sectionRef} className={styles.waitlistSection} style={{ background: 'transparent', pointerEvents: 'auto' }}>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.leftContent}>
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: "easeOut" }}
            >
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
            </motion.div>
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

          <button
            className={styles.mobileJoinButton}
            onClick={() => setIsModalOpen(true)}
          >
            Join Waitlist
          </button>

          <div className={styles.formContainer}>
            {formContent}
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className={styles.modalOverlay} onClick={() => !isLoading && setIsModalOpen(false)}>
          <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
            {!isLoading && (
              <button className={styles.closeButton} onClick={() => setIsModalOpen(false)}>
                &times;
              </button>
            )}
            <div className={styles.formContainer} style={{ display: 'flex' }}>
              {formContent}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}


