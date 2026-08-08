import React from "react";
import { GraduationCap, Star } from "lucide-react";

const team = [
  // {
  //   name: "Dr. Maniraj Prasad Chaudhary",
  //   role: "Cosmetic & Restorative",
  //   focus: "Veneers, whitening, smile design",
  //   tone: ["#0f7c82", "#43c9c0"],
  // },
  {
    name: "Dr. Maniraj Prasad Chaudhary",
    role: "General & Family Dentistry",
    focus: "Checkups, fillings, kids' dentistry",
    tone: ["#189097", "#0b5c61"],
  },
  // {
  //   name: "Dr. Priya Maharjan",
  //   role: "Orthodontics",
  //   focus: "Braces, clear aligners, bite correction",
  //   tone: ["#ff6f5e", "#e85a49"],
  // },
  // {
  //   name: "Dr. Bikash Thapa",
  //   role: "Oral Surgery",
  //   focus: "Extractions, implants, wisdom teeth",
  //   tone: ["#0d4649", "#0f7c82"],
  // },
];

const Avatar = ({ name, tone }) => {
  const initials = name
    .replace("Dr. ", "")
    .split(" ")
    .map((w) => w[0])
    .join("");
  return (
    <div
      className="relative w-full aspect-[4/5] rounded-2xl flex items-center justify-center overflow-hidden"
      style={{ background: `linear-gradient(155deg, ${tone[0]}, ${tone[1]})` }}
    >
      <img src="/public/doctor.webp" alt="" />
    </div>
  );
};

const Dentists = () => {
  return (
    <section className="py-20 lg:py-28 bg-teal-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-teal-600">
            Meet the team
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-semibold text-teal-950">
            Dentists who'd explain a filling to their own kid the same way.
          </h2>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((doc) => (
            <div key={doc.name} className="group">
              <Avatar name={doc.name} tone={doc.tone} />
              <div className="mt-4">
                <h3 className="font-display text-lg font-semibold text-teal-950">{doc.name}</h3>
                <p className="text-sm text-coral-600 font-medium mt-0.5">{doc.role}</p>
                <p className="text-sm text-ink-soft mt-2 leading-relaxed">{doc.focus}</p>
                <div className="mt-3 flex items-center gap-4 text-xs text-ink-soft">
                  <span className="inline-flex items-center gap-1">
                    <GraduationCap className="w-3.5 h-3.5 text-teal-600" />
                    5+ yrs
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-coral-500 fill-coral-500" />
                    4.9
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Dentists;
