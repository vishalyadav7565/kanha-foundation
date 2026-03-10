"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Katha", href: "/kathapage" },
    { name: "Mission", href: "/mission" },
    { name: "Projects", href: "/projects" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-sm">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-green-600">
          KanhaFoundation
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-gray-700">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-green-600 transition"
            >
              {link.name}
            </Link>
          ))}

          <button className="bg-green-600 text-white px-5 py-2 rounded-full hover:bg-green-700 transition">
            Donate
          </button>
        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white border-t transition-all duration-300 ${
          open ? "max-h-[400px] py-6" : "max-h-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col items-center gap-5 font-medium text-gray-700">

          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="hover:text-green-600"
            >
              {link.name}
            </Link>
          ))}

          <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition">
            Donate
          </button>

        </div>
      </div>

    </header>
  )
}