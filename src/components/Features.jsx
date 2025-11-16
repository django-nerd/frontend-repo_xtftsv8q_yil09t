import { motion } from 'framer-motion'
import { Sparkles, Shield, Zap, BadgeCheck } from 'lucide-react'

const features = [
  {
    icon: <Sparkles className="h-5 w-5" />,
    title: 'Neural mesh synthesis',
    desc: 'State-of-the-art reconstruction with photoreal materials and clean topology.'
  },
  {
    icon: <Shield className="h-5 w-5" />,
    title: 'Enterprise-grade privacy',
    desc: 'Your assets are encrypted in transit and at rest with full audit logs.'
  },
  {
    icon: <Zap className="h-5 w-5" />,
    title: 'Realtime preview',
    desc: 'Interact with your model in the browser while it renders in the cloud.'
  },
  {
    icon: <BadgeCheck className="h-5 w-5" />,
    title: 'Ready for pipelines',
    desc: 'Export to GLB/USDZ, and publish directly to your favorite tools.'
  }
]

export default function Features() {
  return (
    <section id="features" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-2xl sm:text-3xl font-bold text-zinc-900">
          Built for visionaries
        </motion.h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group rounded-2xl p-6 bg-white ring-1 ring-zinc-200 hover:ring-zinc-300 transition shadow-[0_1px_0_0_rgba(0,0,0,0.02)]"
            >
              <div className="h-10 w-10 rounded-xl bg-zinc-900 text-white grid place-items-center">
                {f.icon}
              </div>
              <h3 className="mt-4 font-semibold text-zinc-900">{f.title}</h3>
              <p className="mt-2 text-sm text-zinc-600 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
