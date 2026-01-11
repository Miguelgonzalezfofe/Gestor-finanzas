import React from 'react'
import { ThemeSwitcher } from './theme-switcher'

function Footer() {
  return (
        <footer className="w-full flex items-center justify-center border-t mx-auto text-center text-xs gap-8 py-8">
          <ThemeSwitcher />
        </footer>
  )
}

export default Footer