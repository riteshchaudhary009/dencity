import React from "react";

/**
 * Dencity mark: a tooth silhouette built from the same arc used
 * throughout the site (the "smile arc" signature), with a single
 * coral spark standing in for the highlight on a healthy tooth.
 */
export const LogoMark = ({ className = "w-19 h-12" }) => (
  <img
    className={`inline-block ${className}`}
    src="file.svg"
    alt="Dencity logo mark"
  />
);

const Logo = ({ className = "", markClassName = "w-16 h-14", showTagline = true, light = false }) => (
  <div className={`flex items-center gap-2.5 ${className}`}>
    <LogoMark className={markClassName} />
    <div className="leading-none">
      <span
        className={`block font-display text-[1.4rem] font-semibold tracking-tight ${
          light ? "text-white" : "text-teal-600"
        }`}
      >
        Dencity  Dental Care
      </span>
      {showTagline && (
        <span
          className={`block font-mono text-[0.6rem] uppercase tracking-[0.18em] mt-0.5 ${
            light ? "text-teal-200" : "text-teal-600"
          }`}
        >
         
        </span>
      )}
    </div>
  </div>
);

export default Logo;
