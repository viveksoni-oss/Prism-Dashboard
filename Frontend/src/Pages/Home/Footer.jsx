import React from "react";
import { MapPin, Phone, Mail, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-blue-950 text-blue-100">
      {/* Subtle top border for separation if needed */}
      <div className="absolute top-0 h-px w-full bg-blue-800" />

      <div className="mx-auto max-w-7xl px-6 py-16 xl:px-10">
        <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-4 lg:gap-8">
          {/* 1. BRAND (Socials Removed) */}
          <div className="flex flex-col gap-6">
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight">
                PRISM
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-blue-200/80">
                Promoting Innovations in Individuals, Start-ups and MSMEs.
                Empowering innovators through inclusive growth and government
                support.
              </p>
            </div>
          </div>

          {/* 2. QUICK LINKS */}
          <div>
            <h3 className="mb-6 text-sm font-semibold tracking-wider text-white uppercase">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-blue-200">
              {["Home", "How to Apply", "About PRISM"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 hover:text-white hover:underline hover:underline-offset-4 transition-all"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. IMPORTANT RESOURCES */}
          <div>
            <h3 className="mb-6 text-sm font-semibold tracking-wider text-white uppercase">
              Resources
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-blue-200">
              {[
                { name: "DSIR Official Website", link: "https://dsir.gov.in" },
                { name: "TOCIC Centers List", link: "#" },
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 hover:text-white transition-colors group"
                  >
                    {item.name}
                    <ExternalLink className="h-3 w-3 opacity-50 -translate-y-1 transition-all group-hover:opacity-100 group-hover:translate-y-0" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. CONTACT INFO */}
          <div>
            <h3 className="mb-6 text-sm font-semibold tracking-wider text-white uppercase">
              Contact Us
            </h3>
            <ul className="flex flex-col gap-4 text-sm text-blue-200">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-blue-400" />
                <span>
                  Department of Scientific & Industrial Research,
                  <br />
                  Technology Bhawan, New Mehrauli Road,
                  <br />
                  New Delhi-110016
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-blue-400" />
                <span>011-2651 8019, 2659 0387</span>
              </li>
            </ul>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-12 h-px w-full bg-blue-800" />

        {/* BOTTOM BAR */}
        <div className="flex flex-col gap-4 text-xs text-blue-300 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} PRISM (DSIR). All rights reserved.</p>

          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Use
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
