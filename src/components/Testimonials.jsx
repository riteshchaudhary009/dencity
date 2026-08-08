import React from "react";
import { Quote, Star } from "lucide-react";

const reviews = [
  {
    name: "Sujata R.",
    context: "Complete Care plan",
    quote:
      "I'd been avoiding a checkup for two years. They got me in within four days and walked me through the X-ray on screen before touching anything.",
    tone: "#0f7c82",
  },
  {
    name: "Manish B.",
    context: "Wisdom tooth extraction",
    quote:
      "Quoted me the full cost up front, including the follow-up visit. Nothing changed on the day. That alone is rare.",
    tone: "#ff6f5e",
  },
  {
    name: "Ashma T.",
    context: "Invisalign, 11 months",
    quote:
      "My dentist sent a photo timeline every month so I could actually see the movement. Small thing, but it kept me motivated.",
    tone: "#189097",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 lg:py-28 bg-teal-950 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <span className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-teal-300">
              Patient notes
            </span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl font-semibold">
              What people say after the numbing wears off.
            </h2>
          </div>
          <div className="flex items-center gap-2 text-teal-200">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 text-coral-500 fill-coral-500" />
              ))}
            </div>
            <span className="text-sm">4.9 out of 5, 1,200+ reviews</span>
          </div>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="rounded-3xl bg-white/5 border border-white/10 p-7 backdrop-blur-sm"
            >
              <Quote className="w-7 h-7 text-teal-400" />
              <blockquote className="mt-4 text-teal-50 leading-relaxed">
                "{r.quote}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span
                  className="w-9 h-9 rounded-full flex items-center justify-center font-display text-sm font-semibold text-white"
                  style={{ backgroundColor: r.tone }}
                >
                  {r.name[0]}
                </span>
                <div className="leading-tight">
                  <p className="text-sm font-semibold text-white">{r.name}</p>
                  <p className="text-xs text-teal-300">{r.context}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
