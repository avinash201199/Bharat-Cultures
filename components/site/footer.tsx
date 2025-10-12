"use client"

export function Footer() {
  return (
    <footer className="mt-10 border-t border-border bg-background" role="contentinfo">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="text-sm text-muted-foreground">
              Celebrating India’s cultural diversity — a living atlas of traditions, languages, arts, and food.
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              Our goal is to help everyone learn, respect, and connect across communities.
            </p>

            <div className="mt-4 flex items-center gap-4 text-sm">
              <a href="#" aria-label="X" className="text-muted-foreground hover:text-foreground">
                X
              </a>
              <a href="#" aria-label="YouTube" className="text-muted-foreground hover:text-foreground">
                YouTube
              </a>
              <a href="#" aria-label="Instagram" className="text-muted-foreground hover:text-foreground">
                Instagram
              </a>
            </div>
          </div>

          <nav aria-labelledby="footer-site-links" className="text-sm">
            <h3 id="footer-site-links" className="text-sm font-medium text-foreground">
              Site
            </h3>
            <ul className="mt-3 grid gap-2">
              <li>
                <a href="/" className="text-muted-foreground hover:text-foreground">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-muted-foreground hover:text-foreground">
                  About
                </a>
              </li>
              <li>
                <a href="/explore-states" className="text-muted-foreground hover:text-foreground">
                  Explore States
                </a>
              </li>
            </ul>
          </nav>

          <div className="text-sm">
            <h3 className="text-sm font-medium text-foreground">Stay in touch</h3>
            <p className="mt-3 text-sm text-muted-foreground">
              Get occasional updates about new cultural features and learning resources.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-3 flex items-center gap-2"
              aria-label="Subscribe to updates"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder="you@example.com"
                className="w-full rounded-md border border-border bg-muted/40 px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-2 text-xs text-muted-foreground">No spam. Unsubscribe anytime.</p>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Bharat Cultures. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
