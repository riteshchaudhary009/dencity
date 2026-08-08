import React, { useId } from "react";
import { Plus } from "lucide-react";

const FAQItem = ({ question, answer, isOpen, onToggle }) => {
  const id = useId();

  return (
    <div className="border-b border-teal-100">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={id}
        className="w-full flex items-center justify-between gap-4 py-6 text-left"
      >
        <span className="font-display text-lg font-medium text-teal-950">{question}</span>
        <span
          className={`shrink-0 w-8 h-8 rounded-full border border-teal-200 flex items-center justify-center transition-transform duration-200 ${
            isOpen ? "rotate-45 bg-coral-500 border-coral-500 text-white" : "text-teal-700"
          }`}
        >
          <Plus className="w-4 h-4" />
        </span>
      </button>
      <div
        id={id}
        className={`grid transition-all duration-300 ease-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="pb-6 pr-10 text-ink-soft leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default FAQItem;
