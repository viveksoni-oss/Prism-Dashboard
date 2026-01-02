import React from "react";
import {
  MapPin,
  ExternalLink,
  Phone,
  Mail,
  Building,
  Building2,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative bg-blue-950 text-blue-100 z-50">
      {/* Subtle top border for separation if needed */}
      <div className="absolute top-0 h-px w-full bg-blue-800" />

      <div className="mx-auto max-w-7xl px-6 py-16 xl:px-10">
        <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-4 lg:gap-8">
          {/* 1. BRAND */}
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
              <li>
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 hover:text-white hover:underline hover:underline-offset-4 transition-all"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/how-to-apply"
                  className="inline-flex items-center gap-2 hover:text-white hover:underline hover:underline-offset-4 transition-all"
                >
                  How to Apply
                </Link>
              </li>
              <li>
                <a
                  href="https://dsir.gov.in/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 hover:text-white hover:underline hover:underline-offset-4 transition-all group"
                >
                  About PRISM
                  <ExternalLink className="h-3 w-3 opacity-50 transition-opacity group-hover:opacity-100" />
                </a>
              </li>
            </ul>
          </div>

          {/* 3. IMPORTANT RESOURCES */}
          <div>
            <h3 className="mb-6 text-sm font-semibold tracking-wider text-white uppercase">
              Resources
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-blue-200">
              <li>
                <a
                  href="https://dsir.gov.in"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 hover:text-white transition-colors group"
                >
                  DSIR Official Website
                  <ExternalLink className="h-3 w-3 opacity-50 -translate-y-1 transition-all group-hover:opacity-100 group-hover:translate-y-0" />
                </a>
              </li>
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
              <li className="flex gap-3  items-start">
                <Building2 className="h-5 w-5 shrink-0 text-blue-400" />
                <Link
                  to="/tocic-info"
                  className="inline-flex items-center gap-2 hover:text-white hover:underline hover:underline-offset-4 transition-all"
                >
                  TOCIC Centers List
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-12 h-px w-full bg-blue-800" />

        {/* BOTTOM BAR */}
        <div className="flex flex-col gap-4 text-xs text-blue-300 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} PRISM (DSIR). All rights reserved.{" "}
            <span className="mx-1 opacity-50">|</span> Developed & Maintained by{" "}
            <span className="font-semibold text-blue-200">IIT Kanpur</span>.
          </p>

          <div className="flex gap-8">
            <Link to="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="hover:text-white transition-colors">
              Terms of Use
            </Link>
            <Link to="#" className="hover:text-white transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
