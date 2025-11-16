import { useState } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 dark:bg-zinc-900/70 border-b border-white/20">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 grid place-items-center text-white shadow-md">
            <Sparkles className="h-5 w-5" />
          </div>
          <span className="font-semibold tracking-tight text-zinc-900">HoloForge</span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm text-zinc-700">
          <a className="hover:text-zinc-900 transition" href="#features">Features</a>
          <a className="hover:text-zinc-900 transition" href="#generator">Generator</a>
          <a className="hover:text-zinc-900 transition" href="#contact">Contact</a>
          <a className="ml-4 px-4 py-2 rounded-lg bg-zinc-900 text-white hover:bg-zinc-800 transition" href="#generator">Try now</a>
        </div>
        <button aria-label="Menu" className="md:hidden p-2 rounded-lg hover:bg-zinc-100" onClick={() => setOpen(v => !v)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-white/30 bg-white/80 backdrop-blur">
          <div className="px-4 py-3 flex flex-col gap-2 text-zinc-800">
            <a href="#features" onClick={() => setOpen(false)}>Features</a>
            <a href="#generator" onClick={() => setOpen(false)}>Generator</a>
            <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
            <a className="px-3 py-2 mt-2 rounded-lg bg-zinc-900 text-white text-center" href="#generator" onClick={() => setOpen(false)}>Try now</a>
          </div>
        </div>
      )}
    </header>
  )
}
