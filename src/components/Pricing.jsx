import React from "react";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Checkup",
    price: "Rs 1,500",
    unit: "/ visit",
    description: "For the twice-a-year basics.",
    features: [
      "Full exam & digital X-ray",
      "Standard cleaning",
      "Cavity risk assessment",
      "Written treatment plan",
    ],
    highlighted: false,
  },
  {
    name: "Complete Care",
    price: "Rs 4,200",
    unit: "/ visit",
    description: "Our most-booked plan.",
    features: [
      "Everything in Checkup",
      "Deep cleaning & polishing",
      "Fluoride treatment",
      "Same-week follow-up if needed",
      "10% off any restorative work",
    ],
    highlighted: true,
  },
  {
    name: "Smile Design",
    price: "From Rs 15,000",
    unit: "",
    description: "Cosmetic & restorative work.",
    features: [
      "Free cosmetic consult",
      "Veneers, whitening, or bonding",
      "3D smile preview",
      "Financing available",
    ],
    highlighted: false,
  },
];

const Pricing = () => {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-teal-600">
            Pricing
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-semibold text-teal-950">
            One quote, before anything starts.
          </h2>
          <p className="mt-4 text-ink-soft">
            Every price includes the consult. If a treatment needs more than what's
            listed, you'll see the updated total before we proceed — never after.
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-3 gap-6 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl p-8 ${
                plan.highlighted
                  ? "bg-teal-800 text-white shadow-soft lg:-translate-y-3"
                  : "bg-teal-50/50 border border-teal-100 text-teal-950"
              }`}
            >
              {/* {plan.highlighted && (
                <span className="absolute -top-3 left-8 rounded-full bg-coral-500 px-3 py-1 font-mono text-[0.6rem] uppercase tracking-[0.15em] text-white">
                  Most booked
                </span>
              )} */}

              <h3 className="font-display text-xl font-semibold">{plan.name}</h3>
              <p className={`mt-1 text-sm ${plan.highlighted ? "text-teal-200" : "text-ink-soft"}`}>
                {plan.description}
              </p>

              <div className="mt-6 flex items-baseline gap-1">
                <span className="font-display text-3xl font-semibold">{plan.price}</span>
                <span className={`text-sm ${plan.highlighted ? "text-teal-300" : "text-ink-soft"}`}>
                  {plan.unit}
                </span>
              </div>

              <ul className="mt-7 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <Check
                      className={`w-4 h-4 mt-0.5 shrink-0 ${
                        plan.highlighted ? "text-teal-300" : "text-teal-600"
                      }`}
                    />
                    <span className={plan.highlighted ? "text-teal-50" : "text-ink-soft"}>{f}</span>
                  </li>
                ))}
              </ul>

              {/* <a
                href="#contact"
                className={`mt-8 block text-center rounded-full py-3 font-semibold transition-colors ${
                  plan.highlighted
                    ? "bg-coral-500 hover:bg-coral-600 text-white"
                    : "bg-teal-700 hover:bg-teal-800 text-white"
                }`}
              >
                 Our plan
              </a> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
