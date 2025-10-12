export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <header>
        <h1 className="text-3xl font-semibold text-balance">About Bharat Cultures</h1>
        <p className="mt-3 text-muted-foreground">
          Bharat Cultures is a community-driven, educational project that presents the rich cultural tapestry of India’s
          states and union territories—festivals, music and dance, cuisine, arts and handicrafts, rituals and customs,
          and everyday stories.
        </p>
      </header>

      <nav aria-label="On this page" className="mt-6">
        <h2 className="text-sm font-medium text-foreground">On this page</h2>
        <ul className="mt-2 grid gap-2 text-sm">
          <li>
            <a href="#mission" className="text-muted-foreground hover:text-foreground">
              Mission & Vision
            </a>
          </li>
          <li>
            <a href="#how-we-work" className="text-muted-foreground hover:text-foreground">
              How We Work
            </a>
          </li>
          <li>
            <a href="#content-structure" className="text-muted-foreground hover:text-foreground">
              Content Structure
            </a>
          </li>
          <li>
            <a href="#contribute" className="text-muted-foreground hover:text-foreground">
              Contribute
            </a>
          </li>
          <li>
            <a href="#roadmap" className="text-muted-foreground hover:text-foreground">
              Roadmap
            </a>
          </li>
          <li>
            <a href="#attribution" className="text-muted-foreground hover:text-foreground">
              Attribution & Fair Use
            </a>
          </li>
        </ul>
      </nav>

      <section id="mission" className="mt-10">
        <h2 className="text-xl font-semibold">Mission & Vision</h2>
        <p className="mt-2 text-muted-foreground">
          Our mission is to celebrate diversity, inspire mutual respect, and make cultural learning accessible to all.
          We envision a collaborative, growing knowledge base—curated with care, grounded in community insight, and
          inclusive by design.
        </p>
      </section>

      <section id="how-we-work" className="mt-10">
        <h2 className="text-xl font-semibold">How We Work</h2>
        <ul className="mt-3 list-disc pl-6 text-muted-foreground">
          <li>
            <span className="text-foreground">Sourcing:</span> We consolidate knowledge from books, museum archives, and
            community inputs. Local voices are central to accuracy and nuance.
          </li>
          <li>
            <span className="text-foreground">Verification:</span> We prefer citations and cross-checking. Content is
            periodically reviewed to correct omissions or biases.
          </li>
          <li>
            <span className="text-foreground">Accessibility:</span> Clear language and structured sections help students
            and researchers skim or dive deep.
          </li>
          <li>
            <span className="text-foreground">Neutrality:</span> We avoid sensationalism and strive for cultural
            sensitivity and factual balance.
          </li>
        </ul>
      </section>

      <section id="content-structure" className="mt-10">
        <h2 className="text-xl font-semibold">Content Structure</h2>
        <p className="mt-2 text-muted-foreground">
          Each state page follows a consistent structure for easy exploration:
        </p>
        <ul className="mt-3 list-disc pl-6 text-muted-foreground">
          <li>
            <span className="text-foreground">Overview:</span> A short introduction and highlights of the state’s
            heritage.
          </li>
          <li>
            <span className="text-foreground">Culture & Practices:</span> Five cards—Festivals, Dance & Devotion, Cuisine,
            Art & Handicrafts, Rituals & Customs—each linking to a detailed page with curated content.
          </li>
          <li>
            <span className="text-foreground">Stories:</span> Human-centered vignettes that bring traditions to life.
          </li>
          <li>
            <span className="text-foreground">Gallery:</span> Representative visuals with clear alt text for context.
          </li>
          <li>
            <span className="text-foreground">Related:</span> Neighboring or culturally connected regions to explore
            next.
          </li>
        </ul>
      </section>

      <section id="contribute" className="mt-10">
        <h2 className="text-xl font-semibold">Contribute</h2>
        <p className="mt-2 text-muted-foreground">
          If you’re a student, researcher, or cultural practitioner, your knowledge can help others learn responsibly.
        </p>
        <ol className="mt-3 list-decimal pl-6 text-muted-foreground">
          <li>Suggest additions or corrections for a specific state/aspect.</li>
          <li>Share references (books, journals, credible websites) to strengthen citations.</li>
          <li>Contribute photographs you own the rights to, with proper captions and context.</li>
        </ol>
        <p className="mt-3 text-muted-foreground">
          We’ll soon open a simple contribution form. Until then, you can reach us via the footer links.
        </p>
      </section>

      <section id="roadmap" className="mt-10">
        <h2 className="text-xl font-semibold">Roadmap</h2>
        <ul className="mt-3 list-disc pl-6 text-muted-foreground">
          <li>Deep-dive pages for all five culture aspects for every state and UT.</li>
          <li>Search, glossary, and timelines for major festivals and art forms.</li>
          <li>Attribution detail pages for sources, photographers, and contributors.</li>
        </ul>
      </section>

      <section id="attribution" className="mt-10">
        <h2 className="text-xl font-semibold">Attribution & Fair Use</h2>
        <p className="mt-2 text-muted-foreground">
          We attribute sources wherever possible and respect creators’ rights. Images and text used here aim to be
          educational and non-commercial. If you’re a rights holder and have concerns, please contact us and we’ll
          address it promptly.
        </p>
      </section>
    </div>
  )
}
