import React from "react";

export default function MoreReason() {
  return (
    <div className="flex flex-col ">
<h1 className="text-2xl text-white">More reasons to join</h1>

 <div className="grid grid-cols-1  gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <Feature
        title="Enjoy on your TV"
        description="Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
      >
        <TelevisionIcon />
      </Feature>

      <Feature
        title="Download your shows to watch offline"
        description="Save your favourites easily and always have something to watch."
      >
        <DownloadIcon />
      </Feature>

      <Feature
        title="Watch everywhere"
        description="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
      >
        <TelescopeIcon />
      </Feature>

      <Feature
        title="Create profiles for kids"
        description="Send kids on adventures with their favourite characters in a space made just for them — free with your membership."
      >
        <ProfilesIcon />
      </Feature>
    </div>

    </div>
   
  );
}

function Feature({ title, description, children }) {
  return (
    <div className="flex flex-col bg-linear-to-bl from-stone-800 to-slate-800  justify-between rounded-2xl bg-black p-6 text-white shadow-lg">
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-2 text-sm text-gray-300">{description}</p>
      </div>
      <div className="mt-6">{children}</div>
    </div>
  );
}

/* ================= ICONS ================= */

function TelevisionIcon() {
  return (
    <svg
      className="h-16 w-16"
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="8" y="12" width="56" height="40" rx="2" fill="#E50914" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg
      className="h-16 w-16"
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="36" cy="36" r="34" fill="#C44AF1" />
      <path
        d="M36 18v24m0 0l-8-8m8 8l8-8"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TelescopeIcon() {
  return (
    <svg
      className="h-16 w-16"
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon points="12,48 36,12 60,36 36,60" fill="#792A95" />
    </svg>
  );
}

function ProfilesIcon() {
  return (
    <svg
      className="h-16 w-16"
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="10" y="10" width="36" height="36" rx="6" fill="#E50914" />
      <rect x="26" y="26" width="36" height="36" rx="6" fill="#792A95" />
    </svg>
  );
}
