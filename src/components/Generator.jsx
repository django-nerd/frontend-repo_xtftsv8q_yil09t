import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Upload, Image, Loader2 } from 'lucide-react'

export default function Generator() {
  const [preview, setPreview] = useState(null)
  const [loading, setLoading] = useState(false)
  const fileRef = useRef(null)

  function onSelect(e) {
    const file = e.target.files?.[0]
    if (!file) return
    const url = URL.createObjectURL(file)
    setPreview(url)
  }

  async function onGenerate() {
    setLoading(true)
    // Placeholder UX: In a real app, call backend to generate 3D from image
    await new Promise(r => setTimeout(r, 1500))
    setLoading(false)
  }

  return (
    <section id="generator" className="py-20 sm:py-28 bg-gradient-to-b from-white to-zinc-50">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-2xl sm:text-3xl font-bold text-zinc-900 text-center">
          Upload an image → get an interactive 3D
        </motion.h2>
        <p className="mt-3 text-zinc-600 text-center max-w-2xl mx-auto">
          Drag and drop an image or select a file. We’ll process it and return a 3D model preview you can orbit.
        </p>

        <div className="mt-10 grid lg:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-dashed border-zinc-300 bg-white p-6 flex flex-col items-center justify-center text-center min-h-[260px]">
            {preview ? (
              <img src={preview} alt="preview" className="max-h-56 rounded-lg object-contain" />
            ) : (
              <div className="text-zinc-500">
                <Image className="h-10 w-10 mx-auto" />
                <p className="mt-3">Drop your image here or click to upload</p>
              </div>
            )}
            <input ref={fileRef} type="file" accept="image/*" onChange={onSelect} className="hidden" />
            <button onClick={() => fileRef.current?.click()} className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white ring-1 ring-inset ring-zinc-300 hover:bg-zinc-50">
              <Upload className="h-4 w-4" /> Choose image
            </button>
          </div>

          <div className="rounded-2xl bg-white ring-1 ring-zinc-200 p-6 min-h-[260px] flex items-center justify-center">
            {loading ? (
              <div className="flex items-center gap-2 text-zinc-600">
                <Loader2 className="h-5 w-5 animate-spin" /> Generating 3D preview...
              </div>
            ) : (
              <p className="text-zinc-500">Your 3D preview will appear here after generation.</p>
            )}
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          <button onClick={onGenerate} disabled={!preview || loading} className="px-5 py-3 rounded-xl bg-zinc-900 text-white hover:bg-zinc-800 disabled:opacity-40">
            {loading ? 'Processing...' : 'Generate 3D'}
          </button>
        </div>
      </div>
    </section>
  )
}
