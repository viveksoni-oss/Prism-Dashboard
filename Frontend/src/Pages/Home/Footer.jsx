const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-14 xl:px-10">
        {/* TOP SECTION */}
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          {/* BRAND */}
          <div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              PRISM
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground max-w-sm">
              Promoting Innovations in Individuals, Start-ups and MSMEs.
              Empowering innovators through inclusive growth.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">
              Quick Links
            </h3>
            <ul className="space-y-2 w-full text-sm flex justify-between items-center text-muted-foreground">
              {["Home", "How to Apply", "About PRISM", "DSIR", "TOCIC"].map(
                (item) => (
                  <li
                    key={item}
                    className="cursor-pointer hover:text-primary transition-colors"
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-10 h-px bg-border" />

        {/* BOTTOM BAR */}
        <div className="flex flex-col gap-4 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} PRISM. All rights reserved.</p>

          <div className="flex gap-6">
            <span className="cursor-pointer hover:text-primary transition-colors">
              Privacy Policy
            </span>
            <span className="cursor-pointer hover:text-primary transition-colors">
              Terms of Use
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
