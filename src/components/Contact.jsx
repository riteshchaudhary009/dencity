import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, CheckCircle2 } from "lucide-react";

const info = [
  { icon: MapPin, label: "Visit", value: "Bharatpur-10, Hospital Road, Chitwan" },
  { icon: Phone, label: "Call", value: "+977 9763255635, +977 99765932745" },
  { icon: Mail, label: "Email", value: "dencitydentalcare099@gmail.com" },
  { icon: Clock, label: "Hours", value: "Sun–Fri - (10:00 AM – 5:00 PM)" },
  { icon: Clock, label: "Hours", value: "Sat - (10:00 AM – 1:00 PM)" },
];

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-20 lg:py-28 bg-teal-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14">
          <div>
            <span className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-teal-600">
              Get in touch
            </span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl font-semibold text-teal-950">
              Tell us what's going on, we'll find the right slot.
            </h2>
            <p className="mt-4 text-ink-soft max-w-md">
              For anything urgent, calling is fastest. Otherwise, send a note and
              our front desk replies within one business day.
            </p>

            <div className="mt-10 space-y-5">
              {info.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-teal-100 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-teal-600" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-ink-soft">{label}</p>
                    <p className="text-teal-950 font-medium">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-white border border-teal-100 shadow-soft p-8">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-14 h-14 rounded-full bg-teal-100 flex items-center justify-center">
                  <CheckCircle2 className="w-7 h-7 text-teal-600" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-teal-950">
                  Request sent
                </h3>
                <p className="mt-2 text-sm text-ink-soft max-w-xs">
                  We'll text or email you within one business day to confirm a time.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm font-semibold text-coral-600 hover:text-coral-500"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium text-teal-950">
                      Full name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="Enter your name"
                      className="mt-1.5 w-full rounded-xl border border-teal-100 bg-teal-50/40 px-4 py-2.5 text-sm outline-none focus:border-teal-400 focus:bg-white transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="text-sm font-medium text-teal-950">
                      Phone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      placeholder="98X XXXXXXX"
                      className="mt-1.5 w-full rounded-xl border border-teal-100 bg-teal-50/40 px-4 py-2.5 text-sm outline-none focus:border-teal-400 focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="reason" className="text-sm font-medium text-teal-950">
                    What's the visit for?
                  </label>
                  <select
                    id="reason"
                    defaultValue=""
                    className="mt-1.5 w-full rounded-xl border border-teal-100 bg-teal-50/40 px-4 py-2.5 text-sm outline-none focus:border-teal-400 focus:bg-white transition-colors"
                  >
                    <option value="" disabled>
                      Select a reason
                    </option>
                    <option>Routine checkup / cleaning</option>
                    <option>Tooth pain or emergency</option>
                    <option>Cosmetic consult</option>
                    <option>Braces / Invisalign</option>
                    <option>Something else</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="text-sm font-medium text-teal-950">
                    Anything we should know?
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    placeholder="Optional — symptoms, preferred dentist, preferred time of day…"
                    className="mt-1.5 w-full rounded-xl border border-teal-100 bg-teal-50/40 px-4 py-2.5 text-sm outline-none focus:border-teal-400 focus:bg-white transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-coral-500 hover:bg-coral-600 text-white font-semibold py-3.5 transition-colors"
                >
                  Contact us
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
