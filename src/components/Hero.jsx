
import React from "react";
import {
  CalendarCheck,
  PhoneCall,
  Star,
  ShieldCheck,
} from "lucide-react";

/* Decorative underline */
const ArcUnderline = () => (
  <span className="relative inline-block">
    lives
    <svg
      className="absolute left-0 -bottom-2 w-full h-3"
      viewBox="0 0 100 12"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M2 7 C25 12, 75 12, 98 3"
        fill="none"
        stroke="#ff6f5e"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  </span>
);

/* Dental smile arc illustration */
const SmileArcArt = () => (
  <div className="relative w-full max-w-lg mx-auto lg:ml-auto">
    <div className="rounded-[2rem] bg-teal-950 p-8 sm:p-10 shadow-soft">
      <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-teal-300">
        Dencity Dental care
      </p>

      <svg
        viewBox="0 0 320 200"
        className="w-full mt-4"
        role="img"
        aria-label="Illustration of a dental arch traced by a smile curve"
      >
        {/* Background arch */}
        <path
          d="M20 150C90 30 230 30 300 150"
          stroke="#164f53"
          strokeWidth="2"
          strokeDasharray="3 7"
          strokeLinecap="round"
          fill="none"
        />

        {/* Animated smile curve */}
        <path
          d="M20 150C90 30 230 30 300 150"
          stroke="#ff6f5e"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
          pathLength="1"
          strokeDasharray="1"
          strokeDashoffset="0"
        />

        {/* Teeth / chart points */}
        {Array.from({ length: 9 }).map((_, i) => {
          const t = i / 8;
          const x = 20 + t * 280;
          const y = 150 - Math.sin(t * Math.PI) * 118;

          return (
            <g key={i}>
              <circle
                cx={x}
                cy={y}
                r={i === 4 ? 7 : 5}
                fill="#faf8f3"
                opacity={0.95}
              />
              <circle
                cx={x}
                cy={y}
                r={i === 4 ? 7 : 5}
                fill="none"
                stroke="#0b5c61"
                strokeWidth="1.5"
              />
            </g>
          );
        })}
      </svg>

      <div className="mt-6 flex items-center justify-between font-mono text-[0.65rem] uppercase tracking-[0.15em] text-teal-300">
        <span>Tooth 01</span>
        <span>Tooth 16</span>
      </div>
    </div>

    {/* Floating rating card */}
    <div
      className="animate-float absolute -right-4 -bottom-6 hidden sm:flex items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-soft"
      style={{ animationDelay: "1.4s" }}
    >
      <div className="w-8 h-8 rounded-full bg-coral-100 flex items-center justify-center">
        <Star className="w-4 h-4 text-coral-500 fill-coral-500" />
      </div>

      <div className="leading-tight">
        <p className="text-xs font-semibold text-teal-950">
          4.9 / 5 rating
        </p>
        <p className="text-[0.65rem] text-ink-soft">
          1,200+ patients
        </p>
      </div>
    </div>
  </div>
);

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-paper py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 sm:px-8 lg:grid-cols-2 lg:px-12">
        {/* Left content */}
        <div>
          {/* Location badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-4 py-2 text-sm font-medium text-teal-800">
            <span className="h-2 w-2 rounded-full bg-coral-500" />
            Now Join To Us
          </div>

          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.08] text-teal-950 sm:text-5xl lg:text-[3.4rem]">
            Dental care,
            <br className="hidden sm:block" />
            built for how <ArcUnderline /> lives.
          </h1>

          <p className="mt-6 max-w-md text-lg text-ink-soft">
            No hour-long waits, no confusing quotes. Just clear pricing,
            same-week appointments, and dentists who explain what they're
            doing before they do it.
          </p>

          {/* CTA buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            {/* <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-coral-500 px-6 py-3.5 font-semibold text-white shadow-soft transition-colors hover:bg-coral-600"
            >
              <CalendarCheck className="h-4 w-4" />
              Book an appointment
            </a> */}

            <a
              href="tel:+9779763255635"
              className="inline-flex items-center gap-2 rounded-full border border-teal-200 px-6 py-3.5 font-semibold text-teal-800 transition-colors hover:bg-teal-50"
            >
              <PhoneCall className="h-4 w-4" />
              Call the clinic
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-ink-soft">
            {/* Patients */}
            <div className="flex items-center gap-2">
              <div className="flex -space-x-1">
                {["#0f7c82", "#189097", "#43c9c0", "#ff6f5e"].map(
                  (color) => (
                    <span
                      key={color}
                      className="h-7 w-7 rounded-full border-2 border-paper"
                      style={{ backgroundColor: color }}
                    />
                  )
                )}
              </div>

              <span>1,200+ patients treated</span>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1.5">
              <Star className="h-4 w-4 fill-coral-500 text-coral-500" />
              <span>4.9 average rating</span>
            </div>

            {/* Insurance */}
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-teal-600" />
              <span>Most insurance accepted</span>
            </div>
          </div>
        </div>

        {/* Right illustration */}
        <SmileArcArt />
      </div>
    </section>
  );
};

export default Hero;
