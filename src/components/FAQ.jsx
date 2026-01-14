import { useState } from "react";

const faqs = [
  {
    question: "What is Netflix?",
    answer:
      "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices. You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price.",
  },
  {
    question: "How much does Netflix cost?",
    answer:
      "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649/month.",
  },
  {
    question: "Where can I watch?",
    answer:
      "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web or on any internet-connected device. You can also download shows on iOS or Android to watch offline.",
  },
  {
    question: "How do I cancel?",
    answer:
      "Netflix is flexible. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
  },
  {
    question: "What can I watch on Netflix?",
    answer:
      "Netflix has an extensive library of feature films, documentaries, shows, anime, award-winning Netflix originals, and more.",
  },
  {
    question: "Is Netflix good for kids?",
    answer:
      "The Netflix Kids experience is included in your membership. Kids profiles come with PIN-protected parental controls.",
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="mx-auto w-full  px-4 py-12 bg-black ">
      <h2 className="mb-8 text-center text-3xl font-bold text-white">
        Frequently Asked Questions
      </h2>

      <ul className="space-y-2">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <li key={index} className="bg-neutral-800">
              <button
                onClick={() =>
                  setOpenIndex(isOpen ? null : index)
                }
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between p-6 text-left text-lg font-medium text-white hover:bg-neutral-700"
              >
                <span>{faq.question}</span>
                <PlusIcon open={isOpen} />
              </button>

              {isOpen && (
                <div className="border-t border-neutral-700 p-6 text-neutral-300">
                  {faq.answer}
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function PlusIcon({ open }) {
  return (
    <svg
      className={`h-6 w-6 transform transition-transform duration-200 ${
        open ? "rotate-45" : "rotate-0"
      }`}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 5v14M5 12h14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
