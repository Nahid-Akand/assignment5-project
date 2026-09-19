import logoText from "../assets/logo-text.png";

const productLinks = [
  { label: "Home", href: "#home" },
  { label: "Technologies", href: "#technologies" },
  { label: "Projects", href: "#projects" },
];

const companyLinks = [
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
  { label: "Careers", href: "#careers" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "#privacy" },
  { label: "Terms of Service", href: "#terms" },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden border-t border-slate-200 bg-gradient-to-br from-orange-50 via-pink-50 to-violet-50 text-slate-900"
    >
      
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-pink-300/20 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-32 left-1/4 h-80 w-80 rounded-full bg-violet-300/20 blur-3xl" />

      <div className="pointer-events-none absolute bottom-0 -left-24 h-64 w-64 rounded-full bg-orange-300/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-16">

       
        <div className="grid gap-12 lg:grid-cols-[1.8fr_1fr_1fr_1fr]">

        
          <div>
            <a
              href="#home"
              className="inline-flex items-center transition-opacity duration-200 hover:opacity-80"
            >
              <img
                src={logoText}
                alt="DevStack logo"
                className="h-10 w-auto object-contain"
              />
            </a>

            <p className="mt-5 max-w-md text-sm leading-6 text-slate-600">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

          
            <div className="mt-6 flex items-center gap-3">

            
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/80 bg-white/70 text-slate-600 shadow-sm backdrop-blur-sm transition-all duration-200 hover:-translate-y-1 hover:border-pink-300 hover:bg-white hover:text-[#EC4899] hover:shadow-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.17c-3.2.7-3.87-1.36-3.87-1.36-.53-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.36.95.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .97-.31 3.17 1.18A11 11 0 0 1 12 6.3c.98 0 1.97.13 2.89.38 2.2-1.49 3.17-1.18 3.17-1.18.62 1.59.23 2.77.11 3.06.74.81 1.18 1.84 1.18 3.1 0 4.42-2.7 5.39-5.26 5.67.41.36.78 1.08.78 2.18v3.23c0 .31.21.67.8.56A11.52 11.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
                </svg>
              </a>

            
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/80 bg-white/70 text-slate-600 shadow-sm backdrop-blur-sm transition-all duration-200 hover:-translate-y-1 hover:border-pink-300 hover:bg-white hover:text-[#EC4899] hover:shadow-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.657l-5.214-6.817-5.963 6.817H1.684l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
                </svg>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/80 bg-white/70 text-slate-600 shadow-sm backdrop-blur-sm transition-all duration-200 hover:-translate-y-1 hover:border-pink-300 hover:bg-white hover:text-[#EC4899] hover:shadow-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.26 2.37 4.26 5.46v6.29ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM3.56 20.45h3.56V8.99H3.56v11.46ZM22.22 0H1.78C.8 0 0 .8 0 1.78v20.44C0 23.2.8 24 1.78 24h20.44c.98 0 1.78-.8 1.78-1.78V1.78C24 .8 23.2 0 22.22 0Z" />
                </svg>
              </a>
            </div>
          </div>

        
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-slate-900">
              Product
            </h3>

            <ul className="mt-5 space-y-3">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group flex w-fit items-center text-sm text-slate-600 transition-colors duration-200 hover:text-[#EC4899]"
                  >
                    <span>{link.label}</span>
                    <span className="ml-2 -translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100">
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

         
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-slate-900">
              Company
            </h3>

            <ul className="mt-5 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group flex w-fit items-center text-sm text-slate-600 transition-colors duration-200 hover:text-[#EC4899]"
                  >
                    <span>{link.label}</span>
                    <span className="ml-2 -translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100">
                      →
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

         
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-slate-900">
              Legal
            </h3>

            <ul className="mt-5 space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group flex w-fit items-center text-sm text-slate-600 transition-colors duration-200 hover:text-[#EC4899]"
                  >
                    <span>{link.label}</span>
                    <span className="ml-2 -translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100">
                      →
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

      
        <div className="mt-14 flex flex-col gap-4 border-t border-slate-200/80 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-500">
            © 2026 DevStack. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="#privacy"
              className="text-xs text-slate-500 transition-colors hover:text-[#EC4899]"
            >
              Privacy
            </a>

            <a
              href="#terms"
              className="text-xs text-slate-500 transition-colors hover:text-[#EC4899]"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}