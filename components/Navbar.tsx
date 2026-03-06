"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold text-green-600">
          KanhaFoundation
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8 font-medium text-gray-700">
          <Link href="/about">About</Link>
          <Link href="/mission">Mission</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
          <button className="bg-green-600 text-white px-5 py-2 rounded-full hover:bg-green-700 transition">
            Donate
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-white px-6 pb-6 space-y-4 font-medium">
          <Link href="#">About</Link>
          <Link href="#">Mission</Link>
          <Link href="/projects">Projects</Link>
          <Link href="#">Blog</Link>
          <Link href="#">Contact</Link>
          <button className="w-full bg-green-600 text-white px-5 py-2 rounded-full">
            Donate
          </button>
        </div>
      )}
    </header>
  )
}