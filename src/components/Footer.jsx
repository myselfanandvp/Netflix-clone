import React from 'react'

export default function Footer() {
  return (
    <footer className="w-full bg-black text-[#b3b3b3] px-6 py-12 md:px-20 lg:px-40 border-t-8 border-[#222]">
      {/* Removed mx-auto to keep it aligned to the left/start */}
      <div className="max-w-5xl">
        
        {/* Contact Number */}
        <p className="mb-8 hover:underline cursor-pointer text-base">
          Questions? Call <a href="tel:000-800-919-1743">000-800-919-1743</a>
        </p>

        {/* Footer Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-xs md:text-sm">
          <ul className="flex flex-col space-y-3">
            <li className="hover:underline cursor-pointer">FAQ</li>
            <li className="hover:underline cursor-pointer">Investor Relations</li>
            <li className="hover:underline cursor-pointer">Privacy</li>
            <li className="hover:underline cursor-pointer">Speed Test</li>
          </ul>
          <ul className="flex flex-col space-y-3">
            <li className="hover:underline cursor-pointer">Help Centre</li>
            <li className="hover:underline cursor-pointer">Jobs</li>
            <li className="hover:underline cursor-pointer">Cookie Preferences</li>
            <li className="hover:underline cursor-pointer">Legal Notices</li>
          </ul>
          <ul className="flex flex-col space-y-3">
            <li className="hover:underline cursor-pointer">Account</li>
            <li className="hover:underline cursor-pointer">Ways to Watch</li>
            <li className="hover:underline cursor-pointer">Corporate Information</li>
            <li className="hover:underline cursor-pointer">Only on Netflix</li>
          </ul>
          <ul className="flex flex-col space-y-3">
            <li className="hover:underline cursor-pointer">Media Centre</li>
            <li className="hover:underline cursor-pointer">Terms of Use</li>
            <li className="hover:underline cursor-pointer">Contact Us</li>
          </ul>
        </div>

        {/* Language Selection */}
        <div className="relative mt-12 w-fit">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
                <path fillRule="evenodd" d="M10.77 5.33 10.5 6 9.34 8.94l-.57 1.44L7.33 14h1.78l.73-1.97h3.58l.74 1.97H16l-3.43-8.67zm-.15 4.6-.24.63h2.51l-1.26-3.35zm-1.1-5.09.1-.19h-3.2V2h-1.5v2.65H.55V6h3.77A11 11 0 0 1 0 10.43c.33.28.81.8 1.05 1.16 1.5-.91 2.85-2.36 3.88-4.02v5.1h1.49V7.52q.6.95 1.33 1.8l.57-1.43a12 12 0 0 1-1.34-1.9h2.09z" clipRule="evenodd"></path>
            </svg>
          </div>
          <select className="appearance-none bg-black border border-gray-600 rounded pl-10 pr-10 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-white">
            <option value="en-IN">English</option>
            <option value="hi-IN">हिन्दी</option>
          </select>
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg viewBox="0 0 16 16" width="12" height="12" fill="currentColor">
              <path d="M11.6 6.5c.15 0 .22.18.12.28l-3.48 3.48a.33.33 0 0 1-.48 0L4.28 6.78a.17.17 0 0 1 .12-.28z" />
            </svg>
          </div>
        </div>

        {/* Country Label */}
        <p className="mt-8 text-sm">Netflix India</p>

        {/* reCAPTCHA Disclaimer */}
        <div className="mt-8 text-[13px] leading-snug space-y-4 max-w-2xl opacity-70">
          <p>
            This page is protected by Google reCAPTCHA to ensure you're not a bot. 
            <button className="text-[#0071eb] hover:underline ml-1">Learn more.</button>
          </p>
        </div>
      </div>
    </footer>
  )
}