import React, { useEffect, useState } from "react";
import { CalendarCheck, PhoneCall, X, ArrowUp } from "lucide-react";

const Floating = () => {
  const [open, setOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 700);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {showTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="w-10 h-10 rounded-full bg-white border border-teal-100 shadow-soft flex items-center justify-center text-teal-700 hover:text-teal-900 transition-colors"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {open && (
        <div className="rounded-2xl bg-white shadow-soft border border-teal-100 p-2 w-56 mb-1">
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-teal-950 hover:bg-teal-50 transition-colors"
          >
            <span className="w-8 h-8 rounded-lg bg-teal-100 flex items-center justify-center">
              <CalendarCheck className="w-4 h-4 text-teal-600" />
            </span>
            Book an appointment
          </a>
          <a
            href="tel:+9779763255635"
            className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-teal-950 hover:bg-teal-50 transition-colors"
          >
            <span className="w-8 h-8 rounded-lg bg-coral-100 flex items-center justify-center">
              <PhoneCall className="w-4 h-4 text-coral-500" />
            </span>
            Call the clinic
          </a>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close quick actions" : "Open quick actions"}
        aria-expanded={open}
        className="w-14 h-14 rounded-full bg-coral-500 hover:bg-coral-600 text-white shadow-soft flex items-center justify-center transition-all duration-200"
      >
        {open ? <X className="w-5 h-5" /> : <CalendarCheck className="w-5 h-5" />}
      </button>
    </div>
  );
};

export default Floating;
