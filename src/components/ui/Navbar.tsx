'use client'

import Link from 'next/link'
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar"
import { motion } from 'framer-motion'

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 bg-white/30 backdrop-blur-lg shadow-lg border border-white/20 rounded-xl mx-auto my-4 max-w-6xl px-6 py-3"
    >
      <Menubar className="flex gap-4 justify-center bg-transparent border-none shadow-none">
        <DirectMenu label="Accueil" href="/" />
        <DirectMenu label="Contact" href="/contact" icon="" />
        <DirectMenu label="Se connecter" href="/login" icon="" />
        <DirectMenu label="À propos" href="/about" icon="" />
      </Menubar>
    </motion.nav>
  )
}

function DirectMenu({
  label,
  href,
  icon,
}: {
  label: string
  href: string
  icon?: string
}) {
  return (
    <MenubarMenu>
      <Link href={href}>
        <MenubarTrigger className="text-gray-800 font-semibold hover:text-green-700 transition-colors duration-300 cursor-pointer">
          {icon && <span className="mr-2">{icon}</span>}
          {label}
        </MenubarTrigger>
      </Link>
    </MenubarMenu>
  )
}
