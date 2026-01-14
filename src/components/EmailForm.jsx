import { useRef,useState } from "react";

export default function EmailSignupForm() {
const emailsubmit_btn = useRef(null)
const [email,setEmail]=useState("")
function handleSubmit(e){
    e.preventDefault();
    setEmail("");
    alert("Membership restarted....");
}

  return (
    <section className="mx-auto w-full max-w-screen px-4 py-10 text-center bg-black">
      <h3 className="mb-6 text-lg font-medium text-white md:text-xl">
        Ready to watch? Enter your email to create or restart your membership.
      </h3>

      <form
        className="mx-auto flex max-w-xl flex-col gap-4 sm:flex-row"
        aria-label="Sign up or restart your membership with Netflix."
        method="post"
        onSubmit={handleSubmit}
      >
        <div className="relative flex-1">
          <input
            type="email"
            name="email"
            required
            minLength={5}
            maxLength={50}
            autoComplete="email"
            placeholder=" "
            value={email}
            onChange={(e)=> setEmail(prev=> e.target.value)}
            ref={emailsubmit_btn}
            className="peer w-full rounded-md border border-neutral-600 bg-black px-4 pb-2 pt-6 text-white placeholder-transparent focus:border-white focus:outline-none"
          />
          <label
            htmlFor="email"
            className="pointer-events-none absolute left-4 top-2 text-sm text-neutral-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-500 peer-focus:top-2 peer-focus:text-sm peer-focus:text-white"
          >
            Email address
          </label>
        </div>

        <button
          type="submit"
         
          className="flex items-center justify-center gap-2 rounded-md bg-red-600 px-6 py-4 text-lg font-semibold text-white hover:bg-red-700"
        >
          Get Started
          <ChevronIcon />
        </button>
      </form>
    </section>
  );
}

function ChevronIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      aria-hidden="true"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m15.586 12-7.293 7.293 1.414 1.414 8-8a1 1 0 0 0 0-1.414l-8-8-1.414 1.414z"
        fill="currentColor"
      />
    </svg>
  );
}
