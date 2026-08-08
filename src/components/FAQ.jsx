import React, { useState } from "react";
import FAQItem from "./FAQItem";

const faqs = [
  {
    question: "How fast can I actually get an appointment?",
    answer:
      "Most routine checkups and cleanings are available within 2–3 business days. For pain or emergencies, we hold same-day slots — call the clinic directly and we'll fit you in.",
  },
  {
    question: "Do you accept insurance?",
    answer:
      "We work with most major insurance providers in the valley. Bring your policy details to your first visit and our front desk will confirm your coverage before any treatment begins.",
  },
  {
    question: "What happens at a first visit?",
    answer:
      "A full exam, digital X-rays if needed, and a plain-language walkthrough of what we find. You'll leave with a written plan and price — there's no obligation to book further treatment on the spot.",
  },
  {
    question: "Is the pricing on this page final?",
    answer:
      "It covers the standard scope of each plan. If your case needs more (extra fillings, a harder extraction, etc.), we'll show you the updated total and get your okay before doing anything beyond the quote.",
  },
  {
    question: "Do you treat children?",
    answer:
      "Yes — Dr. Shrestha focuses on family and pediatric dentistry, with shorter, lower-pressure visits designed for first-time young patients.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-teal-600">
            Questions
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-semibold text-teal-950">
            Before you book
          </h2>
        </div>

        <div className="mt-10">
          {faqs.map((faq, i) => (
            <FAQItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
