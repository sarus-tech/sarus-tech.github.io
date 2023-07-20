import './globals.css'

// Import custom fonts
import { Ovo, Red_Hat_Text, Red_Hat_Display, Fira_Code } from 'next/font/google'

const ovo = Ovo({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-ovo',
})
const red_hat_text = Red_Hat_Text({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-red-hat-text',
})
const red_hat_display = Red_Hat_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-red-hat-display',
})
const fira_code = Fira_Code({
  subsets: ['latin-ext'],
  display: 'swap',
  variable: '--font-fira-code',
})

export const metadata = {
  title: 'Qrlew SQL Framework',
  description: 'Manipulate complex SQL queries as simple composed computation blocks',
}

// Setup font awesoms
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

// Setup Highlight.js
import 'highlight.js/styles/github-dark.css';

// Setup the app
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${ovo.variable} ${red_hat_text.variable} ${red_hat_display.variable} ${fira_code.variable} overflow-x-hidden`}>{children}</body>
    </html>
  )
}
