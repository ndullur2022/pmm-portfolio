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
          {["Events", "Customer Stories", "Campaigns", "Sales Enablement", "Competitive Intel", "Strategy", "Industry Solutions", "Cross-Functional", "Product Launches", "Built with AI"].map(
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
        <ProjectCard
          title="SIGNAL Unlocked — Virtual Event"
          timeline="Jul 2026"
          tags={["Virtual Event", "Post-Signal", "On-Demand"]}
          bullets={[
            "Led EMEA promotion strategy for post-Signal Berlin virtual experience extending conference reach globally",
            "Managed registration targeting (400+ registrations), gating strategy, and 6sense tracking approach",
            "Oversaw content integrity — verified customer quote approvals and correct messaging positioning",
            "Planned localization into French and Spanish for Q4 reach expansion",
          ]}
          links={[
            { label: "Watch On-Demand", url: "https://www.twilio.com/en-us/lp/signal-unlocked-2026" },
          ]}
        />
        <ProjectCard
          title="Agent Productivity Webinar — Presenter"
          timeline="Q1 2026"
          tags={["Webinar", "Presenter", "Demo"]}
          bullets={[
            "Co-presented webinar on contact center agent productivity use case for EMEA audience",
            "Owned and delivered the front-end customer experience demo (pre-recorded screen capture of conversational AI)",
            "Featured Audibene customer story as proof point for multiproduct voice AI deployment",
            "Part of broader Agent Productivity campaign driving awareness of voice AI capabilities",
          ]}
          links={[
            { label: "Watch On-Demand", url: "https://webinars.twilio.com/twilio/how-to-boost-agent-productivity" },
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

      {/* Industry Solutions Marketing */}
      <Section id="industry-solutions" title="Industry Solutions Marketing" subtitle="Owning vertical marketing for high-priority industries — messaging, positioning, and go-to-market content">
        <ProjectCard
          title="Financial Services — EMEA Vertical Lead"
          timeline="Q1–Q3 2026"
          tags={["Finserv", "Positioning", "Sales Play"]}
          bullets={[
            "Primary industry focus for EMEA: developed regional messaging adapted from global positioning framework",
            "Built competitive displacement play with industry-specific talk track for account executives",
            "Created ROI and cost-of-inaction tools calibrated for financial services buyer personas",
            "Contributed to messaging and channel-specific sales plays targeting banking, insurance, and payments use cases",
          ]}
        />
        <ProjectCard
          title="Technology Partners & AI Startups — GTM Motion"
          timeline="Q1–Q3 2026"
          tags={["Partner Ecosystem", "AI", "Pipeline"]}
          bullets={[
            "Developed partner-specific positioning (multi-tenant architecture, compliance, platform extensibility)",
            "Set OKR: influence 5% pipeline increase from AI-native technology partner segment",
            "Developed customer stories for Voice AI campaign featuring partners building on the platform",
            "Co-marketing experiments with fintech partners: joint blog and co-speaking engagements",
          ]}
        />
        <ProjectCard
          title="Retail — Event Content & Customer Evidence"
          timeline="Oct 2025–Aug 2026"
          tags={["Retail", "Customer Stories", "Event Content"]}
          bullets={[
            "Sourced retail customer logos and stories for regional sales decks and event materials",
            "Developed Cyber Week 2026 UK campaign (peak season positioning for retail buyers)",
            "Produced technical blog posts on AI-powered retail customer journeys",
            "Sourced retail customer speakers for flagship conference events",
          ]}
        />
        <ProjectCard
          title="Use Case Framework — Regional Industry Activation"
          timeline="Jul–Aug 2026"
          tags={["26 Use Cases", "Self-Serve Tool", "Cross-Vertical"]}
          bullets={[
            "Leading EMEA rollout of global use case framework (26 use cases mapped to 5 buying centers)",
            "Partnering with central team to bring self-serve GTM tool to regional sellers",
            "Adapting existing sales plays to use-case-focused structure for consistent field execution",
            "Announced to all EMEA marketing and sales via quarterly newsletter",
          ]}
        />
        <ProjectCard
          title="Accolades Book — Regional Localization"
          timeline="Jul 2026"
          tags={["French", "German", "Sales Asset"]}
          bullets={[
            "Translated and localized company accolades deck into French and German for EMEA field teams",
            "Crowdsourced language review from native-speaking sales reps before distribution to prospects",
            "Contains vertical-specific win stories, analyst recognitions, and proof points",
          ]}
        />
      </Section>

      {/* Cross-Functional Collaboration */}
      <Section id="cross-functional" title="Cross-Functional Collaboration" subtitle="Partnering with Product, Sales, Engineering, and Marketing to shape strategy and activate go-to-market">
        <ProjectCard
          title="Product Team — Launch Pods & Regional Readiness"
          timeline="Jun 2026"
          tags={["Product Launch", "Regional Readiness"]}
          bullets={[
            "Partnered with Product as EMEA PMM for identity and security product launches",
            "Joined cross-functional launch pods to ensure regional messaging, enablement timing, and availability clarity",
            "Responsible for surfacing EMEA-specific requirements back to global Product teams",
          ]}
        />
        <ProjectCard
          title="Product Feedback — Market & Customer Signals"
          timeline="Nov 2025–Aug 2026"
          tags={["Product Influence", "Legal", "Field Feedback"]}
          bullets={[
            "Channeled field feedback on product gaps blocking deals in regulated European industries",
            "Partnered with Legal and compliance teams to vet marketing claims and source attribution",
            "Built a compliance readiness tool that makes product gaps visible — creating a structured feedback loop to Product",
            "Advocated for product changes based on recurring deal-blocker patterns across the region",
          ]}
        />
        <ProjectCard
          title="Solutions Engineering — Competitive Intel Co-Development"
          timeline="Q2–Q3 2026"
          tags={["Engineering Partnership", "Field Validation"]}
          bullets={[
            "Shared competitive landscape analyses with regional engineers for field validation and accuracy",
            "Incorporated technical feedback into battle card iterations (deeper feature comparisons)",
            "Partnered with engineering leadership on use case framework messaging alignment",
            "Co-developed ROI methodology with sales and engineering input on realistic customer parameters",
          ]}
        />
        <ProjectCard
          title="Sales Leadership — Strategy & Enablement"
          timeline="Ongoing"
          tags={["VP Sales", "Directors", "Field Teams"]}
          bullets={[
            "Delivered market trends playbook directly to VP Sales for strategic planning",
            "Partnered with sales directors to adapt global plays to regional market structure",
            "Worked with digital sales team on customer story feedback loops (country and vertical tagging)",
            "Regular engagement with front-line managers on content gaps and competitive needs",
          ]}
        />
        <ProjectCard
          title="Campaigns & Demand Generation"
          timeline="Ongoing"
          tags={["Campaigns", "Demand Gen", "Content"]}
          bullets={[
            "Partnered with campaigns team across Cyber Week, Voice AI, cross-sell, and platform campaigns",
            "Reviewed and localized campaign copy for cultural relevance, regulatory accuracy, and regional voice",
            "Provided messaging frameworks and customer proof points as campaign fuel",
            "Coordinated virtual event strategy with campaigns for promotion, registration, and attribution tracking",
          ]}
        />
        <ProjectCard
          title="Customer Marketing & PR"
          timeline="Oct 2025–ongoing"
          tags={["Customer Advocacy", "PR", "Agency"]}
          bullets={[
            "Partnered with Customer Marketing and PR to build end-to-end story pipeline from sourcing through publication",
            "Engaged external agency for regional story writing; coordinated media alerts with PR",
            "Provided field feedback to improve story discoverability (country tags, vertical filters)",
            "Sourced customer speakers for 4 conference events by partnering directly with account teams",
          ]}
        />
      </Section>

      {/* Product Launches */}
      <Section id="product-launches" title="Product Launches" subtitle="Supporting global launches with regional readiness, enablement, and go-to-market execution">
        <div className="bg-card border border-border rounded-xl p-6 mb-4">
          <p className="text-sm text-muted">
            Product launches are led by core PMM teams globally. My role as regional PMM is to ensure EMEA readiness —
            localizing messaging, creating regional enablement, managing field communications, and flagging availability
            or compliance gaps before launch day. I support these launches, not lead them.
          </p>
        </div>
        <ProjectCard
          title="Conversational AI Platform — Regional Support"
          timeline="Feb–May 2026"
          tags={["Platform Launch", "Regional Readiness", "Enablement"]}
          bullets={[
            "Supported GA launches of three new platform capabilities (orchestration, memory, and agent connectivity)",
            "Provided regional perspective on positioning and flagged availability gaps for European markets",
            "Contributed to launch briefs ensuring field teams had localized context and timing",
          ]}
        />
        <ProjectCard
          title="Identity & Security Products — EMEA Launch Support"
          timeline="Jun 2026"
          tags={["Identity", "Security", "Launch Pod"]}
          bullets={[
            "Joined cross-functional launch pod as regional PMM responsible for EMEA readiness",
            "Partnered with Product to understand scope and European compliance considerations",
            "Ensured enablement materials reflected regional data privacy and sovereignty requirements",
          ]}
        />
        <ProjectCard
          title="Data Residency — Private Beta Support"
          timeline="Nov 2025"
          tags={["Private Beta", "Pipeline Tracking", "Enablement"]}
          bullets={[
            "Attended private beta demo and tracked influenced pipeline",
            "Supported blog strategy and FAQ content for field readiness",
            "Developed compliance talk tracks for European sellers during beta phase",
          ]}
        />
        <ProjectCard
          title="Contact Center AI Solution — Rebrand & Regional Activation"
          timeline="Q1–Q3 2026"
          tags={["Solution Launch", "Rebrand", "Webinar"]}
          bullets={[
            "Supported solution rebrand (Agent Productivity → Contact Center Intelligence + AI Self-Service Agents)",
            "Co-presented regional webinar as part of campaign awareness push",
            "Localized pitch deck for European markets (regional language, logos, and industry-specific demo scenarios)",
          ]}
        />
        <ProjectCard
          title="Use Case Framework & GTM Tool — Regional Rollout"
          timeline="Jul–Aug 2026"
          tags={["Framework Launch", "Self-Serve Tool", "Field Adoption"]}
          bullets={[
            "Supporting regional activation of globally-built use case framework (26 use cases, 5 buying centers)",
            "Partnering with central team to bring self-serve GTM tool to European sellers",
            "Announced to field via quarterly newsletter; coordinating with engineering leadership on adoption",
          ]}
        />
        <ProjectCard
          title="Messaging Channel Updates — Regional Enablement"
          timeline="Ongoing"
          tags={["Channel Growth", "Pricing", "Enablement"]}
          bullets={[
            "Tracked messaging channel growth across European markets and flagged coverage gaps to Product",
            "Supported pricing change enablement for regional sellers (new commercial models)",
            "Created upsell play documentation for emerging messaging channels in EMEA",
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

      {/* Built with AI */}
      <Section id="built-with-ai" title="Built with AI" subtitle="I use AI as a force multiplier — not for generic content, but for building functional tools and automating workflows that would otherwise require engineering resources">
        <div className="bg-card border border-border rounded-xl p-6 mb-4">
          <p className="text-sm text-muted mb-4">
            As a product marketer, I identified that many of the highest-impact enablement gaps could be solved with lightweight applications rather than static documents. I use AI coding tools (Claude Code, Cursor) to build and ship these — turning PMM from a slide-producing function into one that delivers self-serve, interactive tools sellers actually use.
          </p>
        </div>
        <ProjectCard
          title="Security & Compliance Readiness Engine"
          timeline="Aug 2026"
          tags={["Next.js", "OpenAI API", "Twilio Docs MCP", "Vercel"]}
          bullets={[
            "Built a web app that pulls authoritative data residency and regulatory compliance data for EMEA countries",
            "Connected to OpenAI for natural language queries and Twilio documentation APIs for product-level accuracy",
            "Generates talk tracks and objection handling for products lacking data residency in specific regions",
            "Solves a critical field problem: sellers previously had no single source of truth for regional compliance readiness",
          ]}
          links={[
            { label: "Live App", url: "https://compliance-engine-hazel.vercel.app/" },
          ]}
        />
        <ProjectCard
          title="Competitive Intelligence Automation"
          timeline="Jun 2026"
          tags={["Google Apps Script", "Automated Alerts", "Dashboard"]}
          bullets={[
            "Built automated monitoring system tracking 33 competitors across 11 sub-categories",
            "Google Apps Script processes alerts, categorizes updates, and populates a sales-facing dashboard",
            "Monthly brief auto-generates from accumulated signals — no manual compilation",
            "Replaced a manual, ad-hoc process that produced stale intel by the time it reached sellers",
          ]}
        />
        <ProjectCard
          title="Build vs. Buy Calculator"
          timeline="May–Jun 2026"
          tags={["Interactive Web App", "Financial Modeling"]}
          bullets={[
            "Interactive tool that models total cost of ownership: building on a platform vs. purchasing SaaS",
            "AEs input customer parameters and receive a quantified comparison with sourced methodology",
            "Turns a complex consultative conversation into a repeatable, data-backed discovery tool",
          ]}
        />
        <ProjectCard
          title="Platform Workstream Dashboard"
          timeline="Mar 2026"
          tags={["Google Apps Script", "Web App"]}
          bullets={[
            "Transformed a 58-slide offsite deck into an interactive workstream tracker",
            "Team members log in via Google auth to update progress on assigned workstreams",
            "Replaced team entropy with persistent, shared accountability",
          ]}
        />
        <ProjectCard
          title="Personal PMM Operating System"
          timeline="Ongoing"
          tags={["Claude Code", "MCP Integrations", "Automated Workflows"]}
          bullets={[
            "Built a structured AI workspace connecting Slack, Granola (meeting notes), Google Docs, and Canva via MCP servers",
            "Automated research synthesis, competitive monitoring, and content drafting workflows",
            "Custom skills for slide generation, brand compliance checks, content review, and document publishing",
            "Enables one PMM to operate at the output velocity of a team — shipping tools, content, and strategy in parallel",
          ]}
        />
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
          <a href="https://www.linkedin.com/in/nidhi-dullur/" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">
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
