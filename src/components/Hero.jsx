import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Hero() {
  const [email, setEmail] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/signup')
  }

  return (
    <section className="relative w-full min-h-[700px] md:min-h-[900px] flex flex-col items-center justify-center text-white overflow-hidden">

      {/* 1. Background Image & Overlays */}
      <div className="absolute inset-0 -z-10 ">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-black/70 z-10" />
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/e393bb3f-261f-43d1-99bb-16a157885615/web/IN-en-20260105-TRIFECTA-perspective_2802b120-4b8c-44a5-8fb9-617a728f4ec6_large.jpg"
          alt="Netflix Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* 2. Main Content Container */}
      <div className="relative z-20 px-6 max-w-237.5 text-center flex flex-col gap-4 mt-20">
        <h1 className="text-3xl md:text-5xl lg:text-[4rem] font-black leading-tight">
          Unlimited movies, shows, and more
        </h1>
        <p className="text-lg md:text-2xl font-medium">
          Starts at ₹149. Cancel at any time.
        </p>

        {/* 3. Signup Form */}
        <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-4 mb-20 md:mb-32">
          <h3 className="text-lg md:text-xl font-normal">
            Ready to watch? Enter your email to create or restart your membership.
          </h3>

          <div className="flex flex-col md:flex-row items-center justify-center gap-2 px-2 max-w-2xl mx-auto w-full">
            <div className="relative w-full group">
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="email"
                placeholder=" "
                className="peer w-full bg-black/40 border border-gray-500 rounded px-4 pt-6 pb-2 text-white focus:outline-none focus:ring-2 focus:ring-white transition"
              />
              <label
                htmlFor="email"
                className="absolute left-4 top-4 text-gray-400 text-base transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs"
              >
                Email address
              </label>
            </div>

            <button type="submit" className="flex items-center justify-center gap-3 bg-[#e50914] hover:bg-[#c40812] px-6 py-3 md:py-[14px] text-xl md:text-2xl font-bold rounded transition-all shrink-0 w-full md:w-auto cursor-pointer">
              Get Started
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="m15.586 12-7.293 7.293 1.414 1.414 8-8a1 1 0 0 0 0-1.414l-8-8-1.414 1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </form>
      </div>

      {/* 4. Deep Inverted Bottom Curve */}
      <div className="absolute -bottom-2 left-0 w-full h-12 overflow-hidden leading-none z-50 pointer-events-none">
        <div className="relative h-12 md:h-12 scale-x-[1] md:scale-x-[1]">




        </div>
      </div>
    </section>
  )
}