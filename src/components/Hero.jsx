import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 text-white text-xs">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                Live 3D • Powered by Spline
              </span>
              <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900">
                Image to 3D, reimagined for the next era
              </h1>
              <p className="mt-4 text-zinc-600 text-base sm:text-lg leading-relaxed">
                Turn flat images into interactive, high-fidelity 3D assets with one click. Built for creators, engineers, and dreamers.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a href="#generator" className="px-5 py-3 rounded-xl bg-zinc-900 text-white hover:bg-zinc-800 transition text-sm">
                  Start generating
                </a>
                <a href="#features" className="px-5 py-3 rounded-xl bg-white text-zinc-900 ring-1 ring-inset ring-zinc-200 hover:bg-zinc-50 transition text-sm">
                  Explore features
                </a>
              </div>
            </motion.div>
          </div>

          <div className="relative h-[380px] sm:h-[520px] lg:h-[620px]">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 1 }} className="absolute inset-0 rounded-2xl overflow-hidden">
              <Spline scene="https://prod.spline.design/C5lv0-cXORBFwnsP/scene.splinecode" style={{ width: '100%', height: '100%' }} />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
            </motion.div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute -z-[1] inset-0 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(59,130,246,0.15)_0%,rgba(255,255,255,0)_60%)]" />
    </section>
  )
}
