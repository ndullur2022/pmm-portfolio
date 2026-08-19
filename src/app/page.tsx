export default function Page() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      {/* Hero */}
      <header className="mb-20">
        <h1 className="text-4xl font-bold tracking-tight mb-3">Nidhi Dullur</h1>
        <p className="text-xl text-muted mb-6">Product Marketing Specialist</p>
        <p className="text-lg leading-relaxed max-w-2xl">
          Product marketer at Twilio covering the Communications Platform (CPaaS) portfolio across EMEA.
          I build the systems, tools, and narratives that connect global product capabilities to regional narratives —
          from positioning and competitive intelligence to sales enablement and flagship event content.
        </p>
        <nav className="mt-8 flex flex-wrap gap-3">
          {["Events", "Customer Stories", "Campaigns", "Sales Enablement", "Competitive Intel", "Strategy"].map(
            (s) => (
              <a
                key={s}
                href={`#${s.toLowerCase().replace(/\s+/g, "-")}`}
                className="px-3 py-1.5 text-sm rounded-full border border-border hover:bg-accent-light hover:border-accent transition-colors"
              >
                {s}
              </a>
            )
          )}
        </nav>
      </header>

      {/* Stats banner */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
        {[
          { number: "4", label: "SIGNAL events owned" },
          { number: "6", label: "Customer stories published" },
          { number: "33", label: "Competitors tracked" },
          { number: "5", label: "Sales tools built" },
        ].map((s) => (
          <div key={s.label} className="bg-card border border-border rounded-xl p-5 text-center">
            <div className="text-3xl font-bold text-accent">{s.number}</div>
            <div className="text-sm text-muted mt-1">{s.label}</div>
          </div>
        ))}
      </section>

      {/* Events */}
      <Section id="events" title="Events" subtitle="End-to-end PMM ownership of Twilio SIGNAL World Tour (EMEA conference series)">
        <ProjectCard
          title="SIGNAL London — Customer Video Program"
          timeline="Oct–Dec 2025"
          tags={["Event Content", "Customer Marketing"]}
          bullets={[
            "Owned end-to-end customer story video program for SIGNAL London within 2 weeks of starting the role",
            "Sourced and confirmed 5 customer speakers across enterprise accounts",
            "Managed AV crew coordination, interview scheduling, and multi-format content cuts (15s/30s social variants)",
            "Briefed campaigns team on cross-campaign reuse strategy for video assets",
          ]}
          links={[
            { label: "Sage — Video Interview", url: "https://www.youtube.com/watch?v=UN16UfMo2w8&t=1s" },
            { label: "Relay Technologies — Video Interview", url: "https://www.youtube.com/watch?v=7qHRh1C-Hpc" },
            { label: "Delivery Hero — Video Interview", url: "https://www.youtube.com/watch?v=tWDbrnHWvn8" },
          ]}
        />
        <ProjectCard
          title="SIGNAL Berlin — PMM Lead"
          timeline="Feb–Jun 2026"
          tags={["Keynote", "Customer Content", "Messaging"]}
          bullets={[
            "Produced customer sessions (presentation and fireside style): discovery through deck, messaging, and presentation with customer",
            "Customers sourced for PR strategy",
            "Event exceeded attendance target (137 attendees, 95 external), 7.9M digital ad impressions and 3.62M OOH impressions with Marketing Influenced Pipeline of $6.2M (vs $5M target)",
          ]}
        />
        <ProjectCard
          title="SIGNAL Paris"
          timeline="Jul–Oct 2026"
          tags={["Regional Event", "French-Language"]}
          bullets={[
            "Half-day, fully French-language event",
            "Led customer content and enterprise level customer speaker sourcing",
            
          ]}
        />
        <ProjectCard
          title="SIGNAL London — Customer Speaker Program"
          timeline="Jul–Nov 2026"
          tags={["Speaker Sourcing", "Event Strategy"]}
          bullets={[
            "Full-day event targeting ~275 attendees with C-suite keynote",
            "Led speaker sourcing across multiple product lines and verticals",
            "Coordinated on-site video interviews",
          ]}
        />
      </Section>

      {/* Customer Stories */}
      <Section id="customer-stories" title="Customer Stories" subtitle="Built the EMEA customer evidence base from scratch — 6 published stories in 8 months">
        <div className="grid md:grid-cols-2 gap-4">
          <StoryCard
            customer="Delivery Hero"
            date="Feb 2026"
            stats={["10M orders/day", "70 countries", "25% lower contact rates", "60%+ fewer escalations"]}
            theme="Last-mile delivery optimization with IVR localization across 50+ languages"
            link="https://customers.twilio.com/en-us/delivery-hero"
          />
          <StoryCard
            customer="Audibene"
            date="Feb 2026"
            stats={["Global hearing care", "Unified comms backbone", "Multiproduct platform"]}
            theme="Reinventing healthcare communications with unified voice, messaging, and data"
            link="https://customers.twilio.com/en-us/audibene0"
          />
          <StoryCard
            customer="Relay Technologies"
            date="Mar 2026"
            stats={["Day-1 customer", "4 product lines", "Digital → Enterprise"]}
            theme="Scaling from startup to enterprise with multiproduct communications"
            link="https://customers.twilio.com/en-us/relay-technologies"
          />
          <StoryCard
            customer="Sage"
            date="Mar 2026"
            stats={["Silos → always-on journeys", "Real-time triggers", "PR media alert"]}
            theme="Data platform transformation enabling automated, behavior-driven customer journeys"
            link="https://customers.twilio.com/en-us/sage-cuts-cost-per-conversion-by-over-30--with-twilio-segment"
          />
          <StoryCard
            customer="Docplanner"
            date="Q2 2026"
            stats={["Healthcare SaaS", "EMEA expansion"]}
            theme="Communications-led growth in European healthcare marketplace"
            link="https://customers.twilio.com/en-us/docplanner0"
          />
          <StoryCard
            customer="Voice AI Startup"
            date="May 2026"
            stats={["Voice Intelligence + SMS", "German market", "PR engagement"]}
            theme="AI-native startup building conversational agents on communications infrastructure"
          />
        </div>
      </Section>

      {/* Campaigns */}
      <Section id="campaigns" title="Campaigns" subtitle="Strategy through execution — positioning, content, regional adaptation">
        <ProjectCard
          title="Cyber Week 2026 UK Campaign"
          timeline="Jun–Aug 2026"
          tags={["Full Campaign", "Regional", "Content"]}
          bullets={[
            "Wrote regionalization addendum adapting global campaign to UK market context",
            "Produced technical blog posts and supported with other campaign content messaging",
          ]}
        />
        <ProjectCard
          title="Voice Competitive Takeout (EMEA + LATAM)"
          timeline="Q1–Q2 2026"
          tags={["Competitive", "Sales Play", "Enablement"]}
          bullets={[
            "Built competitive messaging ladder targeting 5 major competitors",
            "Developed sales talk track and feature matrix comparison deck",
            "Delivered enablement session for field sales team",
            "Created full takeout enablement deck for sales",
            "15.2mil eARR pipe generated",
          ]}
        />
        <ProjectCard
          title="Data Platform Cross-Sell Play"
          timeline="Jul 2026"
          tags={["Sales Play", "Digital Campaign"]}
          bullets={[
            "Developed two-pager, email sequences, launch deck, and target account list",
            "Designed digital campaign funnel: awareness ads → webinar → thought leadership",
            "Piloted with small SDR team before broader rollout",
          ]}
        />
        <ProjectCard
          title="Voice AI Campaign"
          timeline="Jan–Apr 2026"
          tags={["Webinar", "Sales Play", "ISV"]}
          bullets={[
            "Prepared webinar content and regional sales play one-pager",
            "Developed ISV customer stories for voice AI awareness phase",
          ]}
        />
      </Section>

      {/* Sales Enablement */}
      <Section id="sales-enablement" title="Sales Enablement" subtitle="Tools and programs that help sellers close — not content they ignore">
        <ProjectCard
          title="Build vs. Buy Interactive Tool"
          timeline="May–Jun 2026"
          tags={["Interactive Tool", "Methodology", "Talk Track"]}
          bullets={[
            "Built interactive tool helping AEs quantify 'build on platform' vs. 'buy SaaS' for prospects",
            "Conducted internal GTM research and audit to understand customer pain points and buyer sentiment",
            "Developed accompanying AE talk track and productionization roadmap",
          ]}
        />
        <ProjectCard
          title="Security & Compliance Readiness App"
          timeline="Aug 2026"
          tags={["AI-Powered", "Web App", "Data Residency"]}
          bullets={[
            "Built web app connected to AI and product documentation APIs",
            "Pulls authoritative data residency and regulatory compliance data for priority EMEA countries",
            "Generates talk tracks and solutions for products lacking data residency",
          ]}
        />
        <ProjectCard
          title="Regional Content Hub"
          timeline="Q2 2026"
          tags={["Content Platform", "Analytics"]}
          bullets={[
            "Built and launched centralized regional content hub with customer stories, competitive assets, and sales content",
            "Implemented content tagging for usage tracking and engagement analytics",
          ]}
        />
      </Section>

      {/* Competitive Intel */}
      <Section id="competitive-intel" title="Competitive Intelligence" subtitle="Automated systems, not one-off deliverables">
        <ProjectCard
          title="EMEA Competitive Intelligence Tracker"
          timeline="Jun 2026–ongoing"
          tags={["Automation", "33 Competitors", "Dashboard"]}
          bullets={[
            "Built automated CI system covering 33 competitors across 11 sub-categories",
            "Created sales-facing visual dashboard for real-time competitive context",
            "Developed automated alerting, scripted data collection, and monthly brief template",
            "Scalable infrastructure that self-updates without manual intervention",
          ]}
        />
        <ProjectCard
          title="Voice AI Competitive Landscape"
          timeline="May–Jul 2026"
          tags={["Country-Level Analysis", "Battle Cards"]}
          bullets={[
            "Country-by-country competitive analysis across 4 priority EMEA markets",
            "Identified top 3 competitors per market with positioning differentiation",
            "Developed market-specific battle cards for field sales",
          ]}
        />
      </Section>

      {/* Strategy */}
      <Section id="strategy" title="Strategy" subtitle="Building the operating system for how regional PMM works">
        <ProjectCard
          title="EMEA Regional PMM Operating Plan"
          timeline="Jul 2026"
          tags={["Org Design", "Process", "Framework"]}
          bullets={[
            "Defined roles and responsibilities for the EMEA Regional PMM function",
            "Created deliverables operating plan, launch navigator, and use-case framework rollout plan",
            "Built regional product landscapes brief for leadership alignment",
          ]}
        />
        <ProjectCard
          title="Original Market Research Partnership"
          timeline="Mar–Jun 2026"
          tags={["Primary Research", "Budget Owner"]}
          bullets={[
            "Commissioned and managed primary buyer research with research firm",
            "Developed research project plan covering priority markets (UK, Germany, France)",
            "First-party data to inform messaging and positioning strategy",
          ]}
        />
        <ProjectCard
          title="EMEA Market Trends Playbook"
          timeline="May 2026"
          tags={["Executive Deck", "VP Sales"]}
          bullets={[
            "Strategic market trends deck and platform positioning playbook for VP Sales",
            "Translates market intelligence into actionable field-ready plays",
          ]}
        />
        <ProjectCard
          title="Global Use Case Framework — EMEA Rollout"
          timeline="Jul–Aug 2026"
          tags={["Cross-Functional", "GTM Alignment"]}
          bullets={[
            "Adapting global framework of 26 canonical use cases for EMEA market priorities",
            "Working with SE leadership on sales play messaging alignment",
            "Connecting use case framework to existing sales plays for consistent field execution",
          ]}
        />
      </Section>

      {/* Additional work */}
      <Section id="additional" title="Additional Work" subtitle="Thought leadership, product launches, and operational tooling">
        <div className="grid md:grid-cols-2 gap-4">
          <MiniCard title="Scaling Human Connection with AI" description="Global thought leadership deck on the AI + human connection narrative" />
          <MiniCard title="Sales Motion Playbook" description="Global playbook translating product strategy into field execution" />
          <MiniCard title="PMM in Product Lifecycle" description="Internal framework defining product marketing's role in the PDLC" />
          <MiniCard title="Platform Dashboard" description="Scripted workstream tracker driving cross-team accountability" />
          <MiniCard title="Conversation Platform Launch" description="Contributed to regional positioning and localization for new platform launches" />
          <MiniCard title="SMS Data Residency GTM" description="Private beta pipeline tracking, blog strategy, and sales enablement" />
        </div>
      </Section>

      {/* Approach */}
      <section className="mb-20 bg-card border border-border rounded-2xl p-8">
        <h2 className="text-2xl font-bold mb-6">How I Work</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-semibold mb-2">Systems over deliverables</h3>
            <p className="text-sm text-muted">
              CI trackers, ROI tools, compliance apps, newsletters, operating plans. I build things that compound,
              not one-off decks that gather dust.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Revenue-connected</h3>
            <p className="text-sm text-muted">
              Every deliverable ties to a pipeline target, win rate, or deal-unblocker.
              I measure success in seller adoption and influenced pipeline, not slide count.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Technical builder</h3>
            <p className="text-sm text-muted">
              I write code when it solves the problem better than a deck. Web apps, automated dashboards,
              AI-powered tools — the medium matches the need.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-muted py-8 border-t border-border">
        <p>Nidhi Dullur — Product Marketing Specialist</p>
        <p className="mt-1">
          <a href="https://www.linkedin.com/in/nidhidullur/" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </p>
      </footer>
    </main>
  );
}

function Section({
  id,
  title,
  subtitle,
  children,
}: {
  id: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mb-20 scroll-mt-8">
      <h2 className="text-2xl font-bold mb-1">{title}</h2>
      <p className="text-muted mb-6">{subtitle}</p>
      <div className="space-y-4">{children}</div>
    </section>
  );
}

function ProjectCard({
  title,
  timeline,
  tags,
  bullets,
  links,
}: {
  title: string;
  timeline: string;
  tags: string[];
  bullets: string[];
  links?: { label: string; url: string }[];
}) {
  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-3">
        <h3 className="font-semibold text-lg">{title}</h3>
        <span className="text-sm text-muted">{timeline}</span>
      </div>
      <div className="flex flex-wrap gap-2 mb-3">
        {tags.map((t) => (
          <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-accent-light text-accent font-medium">
            {t}
          </span>
        ))}
      </div>
      <ul className="space-y-1.5">
        {bullets.map((b, i) => (
          <li key={i} className="text-sm text-muted pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-accent">
            {b}
          </li>
        ))}
      </ul>
      {links && links.length > 0 && (
        <div className="flex flex-wrap gap-3 mt-4 pt-3 border-t border-border">
          {links.map((l) => (
            <a key={l.url} href={l.url} target="_blank" rel="noopener noreferrer" className="text-xs text-accent hover:underline font-medium">
              {l.label} ↗
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

function StoryCard({
  customer,
  date,
  stats,
  theme,
  link,
}: {
  customer: string;
  date: string;
  stats: string[];
  theme: string;
  link?: string;
}) {
  return (
    <div className="bg-card border border-border rounded-xl p-5">
      <div className="flex justify-between items-baseline mb-2">
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-accent transition-colors">
            {customer} ↗
          </a>
        ) : (
          <h3 className="font-semibold">{customer}</h3>
        )}
        <span className="text-xs text-muted">{date}</span>
      </div>
      <p className="text-sm text-muted mb-3">{theme}</p>
      <div className="flex flex-wrap gap-1.5">
        {stats.map((s) => (
          <span key={s} className="text-xs px-2 py-0.5 rounded bg-accent-light text-accent">
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

function MiniCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-card border border-border rounded-xl p-5">
      <h3 className="font-semibold text-sm mb-1">{title}</h3>
      <p className="text-sm text-muted">{description}</p>
    </div>
  );
}
