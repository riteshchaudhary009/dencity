import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import Logo from "./Logo";

const SocialIcon = ({ path, label, href }) => (
  <a
    href={href}
    aria-label={label}
    className="w-9 h-9 rounded-full bg-white/10 hover:bg-coral-500 flex items-center justify-center transition-colors"
  >
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-white">
      <path d={path} />
    </svg>
  </a>
);

const socials = [
  {
    label: "Instagram",
    href: "#",
    path: "M12 2c-2.7 0-3.06.01-4.12.06-1.06.05-1.79.22-2.43.47a4.9 4.9 0 0 0-1.77 1.15A4.9 4.9 0 0 0 2.53 5.45c-.25.64-.42 1.37-.47 2.43C2.01 8.94 2 9.3 2 12s.01 3.06.06 4.12c.05 1.06.22 1.79.47 2.43a4.9 4.9 0 0 0 1.15 1.77 4.9 4.9 0 0 0 1.77 1.15c.64.25 1.37.42 2.43.47C8.94 21.99 9.3 22 12 22s3.06-.01 4.12-.06c1.06-.05 1.79-.22 2.43-.47a4.9 4.9 0 0 0 1.77-1.15 4.9 4.9 0 0 0 1.15-1.77c.25-.64.42-1.37.47-2.43.05-1.06.06-1.42.06-4.12s-.01-3.06-.06-4.12c-.05-1.06-.22-1.79-.47-2.43a4.9 4.9 0 0 0-1.15-1.77A4.9 4.9 0 0 0 18.55 2.5c-.64-.25-1.37-.42-2.43-.47C15.06 2.01 14.7 2 12 2Zm0 1.8c2.65 0 2.97.01 4.02.06.97.04 1.5.2 1.85.34.46.18.8.4 1.15.75.35.35.57.68.75 1.15.14.35.3.88.34 1.85.05 1.05.06 1.37.06 4.02s-.01 2.97-.06 4.02c-.04.97-.2 1.5-.34 1.85-.18.46-.4.8-.75 1.15-.35.35-.68.57-1.15.75-.35.14-.88.3-1.85.34-1.05.05-1.37.06-4.02.06s-2.97-.01-4.02-.06c-.97-.04-1.5-.2-1.85-.34a3.1 3.1 0 0 1-1.15-.75 3.1 3.1 0 0 1-.75-1.15c-.14-.35-.3-.88-.34-1.85-.05-1.05-.06-1.37-.06-4.02s.01-2.97.06-4.02c.04-.97.2-1.5.34-1.85.18-.46.4-.8.75-1.15.35-.35.68-.57 1.15-.75.35-.14.88-.3 1.85-.34C9.03 3.81 9.35 3.8 12 3.8Zm0 3.06a5.14 5.14 0 1 0 0 10.28 5.14 5.14 0 0 0 0-10.28Zm0 8.48a3.34 3.34 0 1 1 0-6.68 3.34 3.34 0 0 1 0 6.68Zm6.54-8.68a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0Z",
  },
  {
    label: "Facebook",
    href: "#",
    path: "M13.5 22v-8.4h2.8l.42-3.26H13.5V8.24c0-.94.26-1.58 1.6-1.58h1.72V3.76C16.5 3.71 15.44 3.6 14.2 3.6c-2.55 0-4.3 1.55-4.3 4.4v2.34H7.08v3.26H9.9V22h3.6Z",
  },
  {
    label: "X",
    href: "#",
    path: "M18.9 3H21l-6.6 7.55L22.2 21h-6.1l-4.78-6.25L5.8 21H3.68l7.06-8.07L2.6 3h6.25l4.32 5.72L18.9 3Zm-1.07 16.17h1.16L7.72 4.75H6.47L17.83 19.17Z",
  },
];

const linkGroups = [
  {
    title: "Site",
    links: [
      { label: "About", href: "#about" },
      { label: "Dentists", href: "#dentists" },
      { label: "Pricing", href: "#pricing" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "General checkups", href: "#pricing" },
      { label: "Cosmetic dentistry", href: "#pricing" },
      { label: "Orthodontics", href: "#dentists" },
      { label: "Emergency care", href: "#contact" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-teal-950 text-teal-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-[1.3fr_0.7fr_0.7fr_1fr] gap-10">
          <div>
            <Logo light showTagline={false} />
            <p className="mt-4 text-sm text-teal-300 max-w-xs leading-relaxed">
              Dental care designed for people with a full calendar — clear pricing,
              fast bookings, and no surprises in the chair.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <SocialIcon key={s.label} {...s} />
              ))}
            </div>
          </div>

          {linkGroups.map((group) => (
            <div key={group.title}>
              <h4 className="font-mono text-[0.65rem] uppercase tracking-[0.15em] text-teal-400">
                {group.title}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-teal-200 hover:text-white transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="font-mono text-[0.65rem] uppercase tracking-[0.15em] text-teal-400">
              Clinic
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-teal-200">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-teal-400 shrink-0" />
                Bharatpur-10, Hospital Road, Chitwan
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 text-teal-400 shrink-0" />
                +977 9763255635, +977 99765932745
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 text-teal-400 shrink-0" />
                dencitydentalcare099@gmail.com
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-teal-400">
          <p>© {new Date().getFullYear()} Dencity Dental Care. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
