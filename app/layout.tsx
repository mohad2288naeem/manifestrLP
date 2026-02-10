import type { Metadata } from 'next'
import './globals.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const metadata: Metadata = {
  title: 'Manifestr',
  description: 'Welcome to Manifestr',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" style={{ margin: 0, padding: 0, width: '100%' }}>
      <body style={{ margin: 0, padding: 0, width: '100%' }}>
        {children}
        <ToastContainer />
      </body>
    </html>
  )
}

