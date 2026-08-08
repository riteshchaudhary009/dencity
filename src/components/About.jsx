import React from "react";
import { Sparkles, Clock3, ShieldCheck, HeartHandshake } from "lucide-react";

const features = [
  {
    icon: Clock3,
    title: "Same-week appointments",
    body: "Most cleanings and checkups are booked within 3 days, not 3 weeks.",
  },
  {
    icon: Sparkles,
    title: "Digital scans, not guesswork",
    body: "Intraoral cameras and digital X-rays mean you see exactly what we see.",
  },
  {
    icon: ShieldCheck,
    title: "Upfront pricing",
    body: "You get a written quote before any work starts. No surprise line items.",
  },
  {
    icon: HeartHandshake,
    title: "Built for nervous patients",
    body: "Slower pacing, numbing before numbing, and a dentist who narrates every step.",
  },
];

const About = () => {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-14 items-start">
          <div className="lg:sticky lg:top-28">
            <span className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-teal-600">
              About Dencity
            </span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl font-semibold text-teal-950 leading-tight">
              A dental clinic that fits into a full calendar, not the other way around.
            </h2>
            <p className="mt-5 text-ink-soft leading-relaxed">
              Dencity started in 2019 with one idea: people put off dental care not
              because they don't care about their teeth, but because clinics make it
              hard to show up. So we rebuilt the basics — booking, pricing, and pacing —
              around patients who have somewhere else to be after their appointment.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-6 max-w-sm">
              {[
                ["7 yrs", "In Kathmandu"],
                ["12", "Dentists on staff"],
                ["18k+", "Checkups done"],
              ].map(([stat, label]) => (
                <div key={label}>
                  <p className="font-display text-2xl font-semibold text-teal-700">{stat}</p>
                  <p className="text-xs text-ink-soft mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {features.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="group relative rounded-2xl border border-teal-100 bg-teal-50/40 p-6 hover:bg-white hover:border-teal-200 hover:shadow-soft transition-all duration-200"
              >
                <div className="absolute top-0 left-6 right-6 h-px overflow-hidden">
                  <svg viewBox="0 0 200 12" preserveAspectRatio="none" className="w-full h-3 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <path d="M0 10C50 -2 150 -2 200 10" stroke="var(--color-coral-500)" strokeWidth="2" fill="none" />
                  </svg>
                </div>
                <div className="w-11 h-11 rounded-xl bg-teal-600 text-white flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-teal-950">{title}</h3>
                <p className="mt-2 text-sm text-ink-soft leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
