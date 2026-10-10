import React, { useEffect, useState } from "react";

type BlogView = "listing" | "article";

interface BlogProps {
  onNavigate?: (view: string) => void;
}

interface BlogPost {
  id: number;
  category: string;
  title: string;
  date: string;
  readTime: string;
  image: string;
  excerpt: string;
  featured?: boolean;
}

const BLOG_IMAGES = {
  // ============================================================
  // BLOG 1 IMAGES
  // ============================================================
  sreHero: "/blog/sre-outsourcing-2026-hero.png",
  sreDecisionGuide: "/blog/sre-decision-guide.png",
  sreOperatingModels: "/blog/sre-operating-models.png",
  srePoster: "/blog/mavi-sre-support-poster.png",

  // ============================================================
  // BLOG 2 IMAGE
  // ============================================================
  monitoringObservabilityHero:
    "/blog/monitoring-vs-observability-hero.png",
};

const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    category: "SRE & RELIABILITY",
    title:
      "SRE Outsourcing in 2026: When Does Your Business Actually Need It?",
    date: "September 2026",
    readTime: "10 min read",
    image: BLOG_IMAGES.sreHero,
    excerpt:
      "When should a growing business outsource SRE? Compare in-house, hybrid and managed support, learn what to ask providers, and plan a practical first step.",
    featured: true,
  },
  {
    id: 2,
    category: "OBSERVABILITY",
    title:
      "Monitoring vs Observability in 2026: What Does Your Business Actually Need?",
    date: "October 2026",
    readTime: "9 min read",
    image: BLOG_IMAGES.monitoringObservabilityHero,
    excerpt:
      "Monitoring tells you when a known risk becomes a problem. Observability helps you understand why unexpected problems happen.",
  },
  {
    id: 3,
    category: "OBSERVABILITY",
    title: "Why Observability Matters for Modern Applications",
    date: "Coming Soon",
    readTime: "",
    image: BLOG_IMAGES.sreHero,
    excerpt:
      "Understand how connected metrics, logs and traces help teams investigate production issues faster.",
  },
  {
    id: 4,
    category: "CLOUD & DEVOPS",
    title:
      "How Proactive Production Monitoring Improves Application Reliability",
    date: "Coming Soon",
    readTime: "",
    image: BLOG_IMAGES.srePoster,
    excerpt:
      "Discover how proactive monitoring can help teams detect issues earlier and protect customer-facing applications.",
  },
];

// ============================================================
// REUSABLE COMPONENTS
// ============================================================

const SectionHeading = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
      {children}
    </h2>
  );
};

const ArticleParagraph = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <p className="mt-7 text-lg leading-8 text-slate-700 dark:text-slate-300">
      {children}
    </p>
  );
};

const ArticleList = ({
  items,
}: {
  items: React.ReactNode[];
}) => {
  return (
    <ul className="mt-7 space-y-4 pl-6 list-disc text-lg leading-8 text-slate-700 dark:text-slate-300">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

const ImageBlock = ({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption?: string;
}) => {
  return (
    <figure className="mt-12">
      <img
        src={src}
        alt={alt}
        className="w-full rounded-2xl border border-slate-200 dark:border-slate-700 shadow-md"
      />

      {caption && (
        <figcaption className="mt-3 text-center text-sm leading-6 text-slate-500 dark:text-slate-400">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

const InfoCard = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-[#0B1422] p-6">
      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
        {title}
      </h3>

      <div className="mt-3 text-base leading-7 text-slate-700 dark:text-slate-300">
        {children}
      </div>
    </div>
  );
};

const NumberStep = ({
  number,
  title,
  children,
}: {
  number: number;
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="flex gap-5">
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#0066CC] text-white flex items-center justify-center font-bold">
        {number}
      </div>

      <div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
          {title}
        </h3>

        <div className="mt-2 text-lg leading-8 text-slate-700 dark:text-slate-300">
          {children}
        </div>
      </div>
    </div>
  );
};

// ============================================================
// MAIN BLOG COMPONENT
// ============================================================

const Blog: React.FC<BlogProps> = ({ onNavigate }) => {
  const [view, setView] = useState<BlogView>("listing");
  const [selectedPost, setSelectedPost] = useState<number | null>(
    null
  );

  useEffect(() => {
    const hash = window.location.hash;

    if (hash.startsWith("#blog/")) {
      const id = Number(hash.replace("#blog/", ""));

      if (BLOG_POSTS.some((post) => post.id === id)) {
        setSelectedPost(id);
        setView("article");
      }
    } else if (hash === "#blog") {
      setView("listing");
      setSelectedPost(null);
    }
  }, []);

  const openArticle = (id: number) => {
    setSelectedPost(id);
    setView("article");

    window.location.hash = `blog/${id}`;

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const goBackToBlog = () => {
    setSelectedPost(null);
    setView("listing");

    window.location.hash = "blog";

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const goContact = () => {
    if (onNavigate) {
      onNavigate("contact");
      return;
    }

    window.location.hash = "contact-page";

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const selectedBlog = BLOG_POSTS.find(
    (post) => post.id === selectedPost
  );

  // ============================================================
  // BLOG LISTING
  // ============================================================

  if (view === "listing") {
    const featuredPost = BLOG_POSTS.find(
      (post) => post.featured
    );

    const otherPosts = BLOG_POSTS.filter(
      (post) => !post.featured
    );

    return (
      <main className="min-h-screen bg-slate-50 dark:bg-[#050B14] text-slate-900 dark:text-white">
        {/* HERO */}

        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0066CC]/10 via-transparent to-[#65D249]/10 pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-12 pt-20 pb-16">
            <div className="max-w-3xl">
              <div className="inline-flex items-center rounded-full border border-[#0066CC]/20 bg-[#0066CC]/10 px-4 py-2 text-sm font-semibold text-[#0066CC]">
                MaVi INSIGHTS
              </div>

              <h1 className="mt-6 text-5xl md:text-6xl font-bold tracking-tight">
                Engineering insights for{" "}
                <span className="bg-gradient-to-r from-[#0066CC] to-[#65D249] bg-clip-text text-transparent">
                  reliable growth.
                </span>
              </h1>

              <p className="mt-6 text-lg md:text-xl leading-8 text-slate-600 dark:text-slate-300 max-w-2xl">
                Practical insights on SRE, observability, cloud,
                DevOps and application reliability from MaVi
                Solutions.
              </p>
            </div>
          </div>
        </section>

        {/* FEATURED BLOG */}

        {featuredPost && (
          <section className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 pb-20">
            <button
              type="button"
              onClick={() => openArticle(featuredPost.id)}
              className="group w-full text-left rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0B1422] shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="grid lg:grid-cols-2">
                <div className="aspect-[16/10] lg:aspect-auto overflow-hidden">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  />
                </div>

                <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-center">
                  <div className="text-sm font-bold tracking-wider text-[#0066CC]">
                    FEATURED · {featuredPost.category}
                  </div>

                  <h2 className="mt-4 text-3xl md:text-4xl font-bold leading-tight">
                    {featuredPost.title}
                  </h2>

                  <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
                    {featuredPost.excerpt}
                  </p>

                  <div className="mt-8 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                    <span>{featuredPost.date}</span>
                    <span>•</span>
                    <span>{featuredPost.readTime}</span>
                  </div>

                  <div className="mt-8 inline-flex items-center gap-2 font-semibold text-[#0066CC]">
                    Read article
                    <span className="group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </div>
                </div>
              </div>
            </button>
          </section>
        )}

        {/* OTHER BLOGS */}

        <section className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 pb-24">
          <div className="mb-10">
            <div className="text-sm font-bold tracking-wider text-[#0066CC]">
              LATEST INSIGHTS
            </div>

            <h2 className="mt-2 text-3xl md:text-4xl font-bold">
              Explore our latest thinking
            </h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-7">
            {otherPosts.map((post) => (
              <button
                key={post.id}
                type="button"
                onClick={() => {
                  if (post.date === "Coming Soon") return;

                  openArticle(post.id);
                }}
                className={`group text-left rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0B1422] transition-all duration-300 ${
                  post.date === "Coming Soon"
                    ? "cursor-default"
                    : "hover:-translate-y-1 hover:shadow-xl"
                }`}
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  />
                </div>

                <div className="p-7">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs font-bold tracking-wider text-[#0066CC]">
                      {post.category}
                    </span>

                    {post.date === "Coming Soon" && (
                      <span className="text-xs font-semibold rounded-full px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-500">
                        Coming Soon
                      </span>
                    )}
                  </div>

                  <h3 className="mt-4 text-2xl font-bold leading-tight">
                    {post.title}
                  </h3>

                  <p className="mt-4 text-slate-600 dark:text-slate-300 leading-7">
                    {post.excerpt}
                  </p>

                  {post.date !== "Coming Soon" && (
                    <div className="mt-6 text-sm font-semibold text-[#0066CC]">
                      Read article →
                    </div>
                  )}
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* CONTACT CTA */}

        <section className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 pb-24">
          <div className="rounded-3xl bg-gradient-to-r from-[#0066CC] to-[#65D249] p-8 md:p-12 lg:p-14 text-white">
            <div className="max-w-3xl">
              <div className="text-sm font-bold tracking-wider text-white/80">
                TALK TO MaVi
              </div>

              <h2 className="mt-4 text-3xl md:text-4xl font-bold">
                Need better reliability for your website or
                application?
              </h2>

              <p className="mt-5 text-lg leading-8 text-white/90">
                Let's discuss your current production risks,
                monitoring requirements and SRE needs.
              </p>

              <button
                type="button"
                onClick={goContact}
                className="mt-8 px-7 py-3.5 rounded-lg bg-white text-slate-900 font-semibold hover:bg-slate-100 transition"
              >
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </main>
    );
  }

  // ============================================================
  // ARTICLE VIEW
  // ============================================================

  if (view === "article" && selectedBlog) {
    // ==========================================================
    // BLOG 1
    // ==========================================================

    if (selectedBlog.id === 1) {
      return (
        <main className="min-h-screen bg-slate-50 dark:bg-[#050B14] text-slate-900 dark:text-white">
          <article className="max-w-5xl mx-auto px-6 md:px-10 py-16 md:py-20">
            {/* BACK */}

            <button
              type="button"
              onClick={goBackToBlog}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#0066CC] hover:gap-3 transition-all"
            >
              ← Back to Blog
            </button>

            {/* HEADER */}

            <header className="mt-8">
              <div className="text-sm font-bold tracking-wider text-[#0066CC] uppercase">
                {selectedBlog.category}
              </div>

              <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                {selectedBlog.title}
              </h1>

              <div className="mt-5 flex flex-wrap gap-3 text-sm text-slate-500 dark:text-slate-400">
                <span>{selectedBlog.date}</span>
                <span>•</span>
                <span>{selectedBlog.readTime}</span>
              </div>

              <div className="mt-10 overflow-hidden rounded-3xl">
                <img
                  src={BLOG_IMAGES.sreHero}
                  alt="Healthy monitoring dashboard beside a customer checkout showing a payment failure."
                  className="w-full object-cover"
                />
              </div>
            </header>

            {/* BLOG 1 CONTENT */}

            <div className="mt-12">
              <ArticleParagraph>
                A dashboard can say an application is healthy
                while customers are unable to complete a purchase.
                That gap between infrastructure signals and
                customer experience can quickly become a revenue,
                support and engineering problem.
              </ArticleParagraph>

              <ArticleParagraph>
                SRE outsourcing makes sense when a customer-facing
                service needs dependable monitoring and incident
                response, but the internal team does not have the
                coverage, capacity or specialist skills to sustain
                it.
              </ArticleParagraph>

              <section className="mt-16">
                <SectionHeading>
                  What Is SRE Outsourcing?
                </SectionHeading>

                <ArticleParagraph>
                  Site Reliability Engineering applies engineering
                  practices to the reliability of production
                  services. Instead of treating reliability as an
                  afterthought, teams define what good service means
                  and measure whether the customer experience meets
                  that target.
                </ArticleParagraph>

                <ArticleParagraph>
                  Important concepts include service level
                  indicators (SLIs), service level objectives (SLOs)
                  and error budgets. Together, they help teams
                  connect technical performance with customer
                  expectations.
                </ArticleParagraph>
              </section>

              <section className="mt-16">
                <SectionHeading>
                  When Does an External SRE Team Make Sense?
                </SectionHeading>

                <ArticleParagraph>
                  There is no single company size or technology
                  stack that automatically requires outsourced SRE.
                  The better question is whether there is a
                  reliability gap that the current team cannot
                  sustainably close.
                </ArticleParagraph>

                <ImageBlock
                  src={BLOG_IMAGES.sreDecisionGuide}
                  alt="Flowchart showing when to keep SRE in-house, add hybrid support, or assess managed SRE based on customer impact and team capacity."
                />

                <div className="mt-10 space-y-8">
                  <InfoCard title="1. Customers report problems before alerts do">
                    <p>
                      If customers discover failures before your
                      team receives a useful alert, the monitoring
                      and response process needs attention.
                    </p>
                  </InfoCard>

                  <InfoCard title="2. The same engineers build the product and handle every incident">
                    <p>
                      When product engineers repeatedly leave
                      roadmap work to investigate production
                      problems, reliability work can become a major
                      source of disruption.
                    </p>
                  </InfoCard>

                  <InfoCard title="3. Incidents are restored but keep returning">
                    <p>
                      Restoring service is important, but recurring
                      incidents indicate that the underlying
                      problem may not have been addressed.
                    </p>
                  </InfoCard>

                  <InfoCard title="4. A launch or migration created a temporary skills gap">
                    <p>
                      An external SRE team can provide additional
                      experience and capacity during a period of
                      change.
                    </p>
                  </InfoCard>

                  <InfoCard title="5. You need support across multiple operating hours">
                    <p>
                      External support can supplement internal
                      coverage when the business needs monitoring
                      or incident response beyond the team's
                      sustainable working hours.
                    </p>
                  </InfoCard>
                </div>
              </section>

              <section className="mt-16">
                <SectionHeading>
                  Outsourced, In-House, or Hybrid: Which Model Fits?
                </SectionHeading>

                <ArticleParagraph>
                  The right model depends on the reliability risk,
                  internal skills, coverage requirements and level
                  of operational ownership your business wants to
                  retain.
                </ArticleParagraph>

                <ImageBlock
                  src={BLOG_IMAGES.sreOperatingModels}
                  alt="Comparison of in-house, hybrid, and managed SRE by best fit, team ownership, support scope, and risks to watch."
                />

                <div className="mt-10 overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-700">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-100 dark:bg-slate-800">
                        <th className="p-5 font-bold">Model</th>
                        <th className="p-5 font-bold">
                          Best Fit
                        </th>
                        <th className="p-5 font-bold">
                          Watch For
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr className="border-t border-slate-200 dark:border-slate-700">
                        <td className="p-5 font-semibold">
                          In-house
                        </td>

                        <td className="p-5">
                          Teams with strong internal reliability
                          capabilities and sustainable coverage.
                        </td>

                        <td className="p-5">
                          On-call load and specialist capacity.
                        </td>
                      </tr>

                      <tr className="border-t border-slate-200 dark:border-slate-700">
                        <td className="p-5 font-semibold">
                          Hybrid
                        </td>

                        <td className="p-5">
                          Teams that want internal ownership with
                          additional expertise or coverage.
                        </td>

                        <td className="p-5">
                          Clear responsibility and escalation rules.
                        </td>
                      </tr>

                      <tr className="border-t border-slate-200 dark:border-slate-700">
                        <td className="p-5 font-semibold">
                          Managed
                        </td>

                        <td className="p-5">
                          Businesses needing broader external
                          monitoring and incident support.
                        </td>

                        <td className="p-5">
                          Knowledge transfer, access and ownership.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="mt-16">
                <SectionHeading>
                  What Should You Ask an SRE Outsourcing Provider?
                </SectionHeading>

                <div className="mt-10 space-y-8">
                  <NumberStep
                    number={1}
                    title="What exactly is monitored?"
                  >
                    Ask whether the service covers customer
                    journeys, application behaviour,
                    infrastructure and dependencies.
                  </NumberStep>

                  <NumberStep
                    number={2}
                    title="Who responds, and when?"
                  >
                    Confirm coverage hours, escalation paths and
                    alert ownership.
                  </NumberStep>

                  <NumberStep
                    number={3}
                    title="What can the team do during an incident?"
                  >
                    Understand the permissions and actions
                    available to the external team.
                  </NumberStep>

                  <NumberStep
                    number={4}
                    title="What happens after recovery?"
                  >
                    Ask how incidents are reviewed and how
                    recurring problems are addressed.
                  </NumberStep>

                  <NumberStep
                    number={5}
                    title="How will the team retain knowledge?"
                  >
                    Make sure dashboards, runbooks and operational
                    knowledge remain accessible to your business.
                  </NumberStep>

                  <NumberStep
                    number={6}
                    title="How will you judge value?"
                  >
                    Agree on useful measures such as detection,
                    diagnosis, recovery and repeat incidents.
                  </NumberStep>
                </div>
              </section>

              <section className="mt-16">
                <SectionHeading>
                  How to Begin Without Handing Over Everything at
                  Once
                </SectionHeading>

                <ArticleParagraph>
                  You do not need to outsource your entire
                  production environment on day one. Start with the
                  customer journey that matters most.
                </ArticleParagraph>

                <div className="mt-10 space-y-8">
                  <NumberStep
                    number={1}
                    title="Map the journey"
                  >
                    Identify the services, integrations and people
                    involved in the customer experience.
                  </NumberStep>

                  <NumberStep
                    number={2}
                    title="Review recent failures"
                  >
                    Look at recent incidents and identify where
                    detection, response or diagnosis broke down.
                  </NumberStep>

                  <NumberStep
                    number={3}
                    title="Set an initial measure and target"
                  >
                    Define what good service means and how you
                    will measure improvement.
                  </NumberStep>

                  <NumberStep
                    number={4}
                    title="Agree on response ownership"
                  >
                    Document coverage hours, severity levels,
                    permissions, communication and escalation.
                  </NumberStep>

                  <NumberStep
                    number={5}
                    title="Review the first period"
                  >
                    Check whether visibility, response and
                    prevention improved before expanding the
                    scope.
                  </NumberStep>
                </div>
              </section>

              <section className="mt-16">
                <SectionHeading>
                  How MaVi Solutions Can Help
                </SectionHeading>

                <ArticleParagraph>
                  MaVi Solutions provides SRE and managed services,
                  application and website monitoring, IT
                  infrastructure monitoring, cloud and DevOps
                  support and engineering services.
                </ArticleParagraph>

                <ArticleParagraph>
                  Its stated SRE scope includes incident management,
                  observability dashboards and on-call rotation.
                </ArticleParagraph>

                <ArticleParagraph>
                  If you are assessing outside support, MaVi can
                  help discuss which customer journeys need better
                  monitoring, where the current response process
                  breaks down and what scope would fit your team.
                </ArticleParagraph>
              </section>

              <section className="mt-16">
                <SectionHeading>
                  Frequently Asked Questions
                </SectionHeading>

                <div className="mt-10 space-y-10">
                  <InfoCard title="Is SRE outsourcing the same as IT support?">
                    <p>
                      They can overlap, but the scope may differ.
                      IT support often handles user requests and
                      technical issues. SRE focuses on production
                      reliability, incident response and engineering
                      improvements.
                    </p>
                  </InfoCard>

                  <InfoCard title="Do we need to outsource SRE to offer 24/7 service?">
                    <p>
                      No. An internal team can provide coverage if
                      it has enough people, a sustainable rotation
                      and the necessary skills. External support is
                      one option when that capacity is missing.
                    </p>
                  </InfoCard>

                  <InfoCard title="Can an outsourced SRE team guarantee zero downtime?">
                    <p>
                      No provider can remove every failure. A useful
                      engagement defines realistic targets,
                      improves detection and recovery, and reduces
                      avoidable repeat incidents.
                    </p>
                  </InfoCard>

                  <InfoCard title="Should a small business use SRE practices?">
                    <p>
                      Yes, when its digital service matters to
                      customers or revenue. A small team can start
                      with one critical journey, clear measures and
                      a response plan.
                    </p>
                  </InfoCard>

                  <InfoCard title="What should remain with our internal team?">
                    <p>
                      Keep ownership of product priorities,
                      customer promises, architecture decisions and
                      the level of reliability the business
                      requires.
                    </p>
                  </InfoCard>
                </div>
              </section>

              <section className="mt-16">
                <SectionHeading>
                  Make the Decision Around the Service That Matters
                  Most
                </SectionHeading>

                <ArticleParagraph>
                  SRE outsourcing makes sense when it closes a
                  specific gap in how your business detects,
                  responds to and prevents customer-impacting
                  failures.
                </ArticleParagraph>

                <ArticleParagraph>
                  Begin with the journey customers rely on most,
                  define what good service means and decide which
                  responsibilities your team can sustainably own.
                </ArticleParagraph>
              </section>
            </div>

            {/* CTA */}

            <div className="mt-16 rounded-3xl bg-gradient-to-r from-[#0066CC] to-[#65D249] p-8 md:p-12 text-white">
              <h2 className="text-3xl font-bold">
                Need to assess reliability support for your
                website or application?
              </h2>

              <p className="mt-5 text-lg leading-8 text-white/90">
                Contact MaVi Solutions to discuss your service,
                current risks and the support scope you need.
              </p>

              <button
                type="button"
                onClick={goContact}
                className="mt-8 px-7 py-3.5 rounded-lg bg-white text-slate-900 font-semibold hover:bg-slate-100 transition"
              >
                Contact Us
              </button>
            </div>
          </article>
        </main>
      );
    }

    // ==========================================================
    // BLOG 2
    // MONITORING VS OBSERVABILITY
    // ==========================================================

    if (selectedBlog.id === 2) {
      return (
        <main className="min-h-screen bg-slate-50 dark:bg-[#050B14] text-slate-900 dark:text-white">
          <article className="max-w-5xl mx-auto px-6 md:px-10 py-16 md:py-20">
            {/* BACK */}

            <button
              type="button"
              onClick={goBackToBlog}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#0066CC] hover:gap-3 transition-all"
            >
              ← Back to Blog
            </button>

            {/* BLOG 2 HEADER */}

            <header className="mt-8">
              <div className="text-sm font-bold tracking-wider text-[#0066CC] uppercase">
                OBSERVABILITY
              </div>

              <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Monitoring vs Observability in 2026: What Does
                Your Business Actually Need?
              </h1>

              <p className="mt-5 text-xl leading-8 text-slate-600 dark:text-slate-300">
                Monitoring tells you when a known risk becomes a
                problem. Observability helps you understand why
                unexpected problems happen.
              </p>

              <div className="mt-5 flex flex-wrap gap-3 text-sm text-slate-500 dark:text-slate-400">
                <span>October 2026</span>
                <span>•</span>
                <span>9 min read</span>
              </div>

              {/* YOUR EXISTING IMAGE */}

              <div className="mt-10 overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800">
                <img
                  src={BLOG_IMAGES.monitoringObservabilityHero}
                  alt="Monitoring vs Observability"
                  className="w-full object-cover"
                />
              </div>
            </header>

            {/* BLOG 2 CONTENT */}

            <div className="mt-12">
              {/* INTRO */}

              <ArticleParagraph>
                An alert says database CPU is at 85%. Customers say
                payments are timing out. Nobody in the incident
                channel can yet say whether the two are connected.
              </ArticleParagraph>

              <ArticleParagraph>
                That moment shows the difference between knowing
                something is wrong and understanding why. For a
                growing business, the gap affects how long
                customers wait, how many support requests arrive,
                and how much release time engineers lose to
                investigation.
              </ArticleParagraph>

              <ArticleParagraph>
                Monitoring and observability are often presented as
                rivals. They are better treated as two layers of
                one reliability practice. The useful question is
                which layer your business is missing today.
              </ArticleParagraph>

              {/* QUICK ANSWER */}

              <section className="mt-16">
                <SectionHeading>
                  The Quick Answer
                </SectionHeading>

                <ArticleParagraph>
                  Monitoring tells you when a known risk has become
                  a problem. Observability helps you investigate
                  problems you did not predict.
                </ArticleParagraph>

                <ArticleParagraph>
                  Start by monitoring your most important customer
                  journeys, then add observability when finding the
                  cause takes too long or your systems have too many
                  moving parts for predefined checks.
                </ArticleParagraph>

                <ArticleParagraph>
                  Most growing businesses need some of both, but few
                  need to buy everything at once. If your application
                  is simple, your team resolves incidents quickly,
                  and your alerts reflect real customer impact, a
                  larger platform may add cost without much benefit.
                </ArticleParagraph>
              </section>

              {/* DIFFERENCE */}

              <section className="mt-16">
                <SectionHeading>
                  What Is the Difference Between Monitoring and
                  Observability?
                </SectionHeading>

                <ArticleParagraph>
                  Monitoring tracks measures you have chosen in
                  advance, such as response time, error rate or
                  server load, and alerts people when a measure
                  crosses an agreed limit.
                </ArticleParagraph>

                <ArticleParagraph>
                  Monitoring is useful for known failure conditions.
                  It helps teams detect that something needs
                  attention.
                </ArticleParagraph>

                <ArticleParagraph>
                  Observability is the ability to understand what is
                  happening inside a system from the data it
                  produces, including questions nobody thought to
                  ask beforehand.
                </ArticleParagraph>

                <ArticleParagraph>
                  Teams usually rely on three kinds of telemetry:
                  <strong> metrics, logs and traces.</strong> The
                  value comes from connecting them.
                </ArticleParagraph>

                {/* USE SAME IMAGE AGAIN IN ARTICLE */}

                <ImageBlock
                  src={BLOG_IMAGES.monitoringObservabilityHero}
                  alt="Monitoring vs Observability showing how monitoring detects known failure conditions while observability helps investigate complex failures."
                  caption="Monitoring and observability are two layers of one reliability practice."
                />

                {/* COMPARISON TABLE */}

                <div className="mt-12 overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-700">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-100 dark:bg-slate-800">
                        <th className="p-5 font-bold">
                          Area
                        </th>

                        <th className="p-5 font-bold">
                          Monitoring
                        </th>

                        <th className="p-5 font-bold">
                          Observability
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr className="border-t border-slate-200 dark:border-slate-700">
                        <td className="p-5 font-semibold">
                          Purpose
                        </td>

                        <td className="p-5">
                          Detect known failure conditions
                        </td>

                        <td className="p-5">
                          Investigate unfamiliar or complex failures
                        </td>
                      </tr>

                      <tr className="border-t border-slate-200 dark:border-slate-700">
                        <td className="p-5 font-semibold">
                          Typical question
                        </td>

                        <td className="p-5">
                          Have checkout errors crossed our limit?
                        </td>

                        <td className="p-5">
                          Why do payments fail only after this
                          morning's release?
                        </td>
                      </tr>

                      <tr className="border-t border-slate-200 dark:border-slate-700">
                        <td className="p-5 font-semibold">
                          Data used
                        </td>

                        <td className="p-5">
                          Predefined metrics, checks and alerts
                        </td>

                        <td className="p-5">
                          Metrics, logs and traces linked together
                        </td>
                      </tr>

                      <tr className="border-t border-slate-200 dark:border-slate-700">
                        <td className="p-5 font-semibold">
                          Best suited to
                        </td>

                        <td className="p-5">
                          Stable, well-understood services
                        </td>

                        <td className="p-5">
                          Distributed applications, many
                          integrations and frequent releases
                        </td>
                      </tr>

                      <tr className="border-t border-slate-200 dark:border-slate-700">
                        <td className="p-5 font-semibold">
                          Risk if used alone
                        </td>

                        <td className="p-5">
                          You see the symptom but spend hours
                          finding the cause
                        </td>

                        <td className="p-5">
                          Data and cost grow without clear business
                          questions
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <ArticleParagraph>
                  Observability does not replace monitoring. Alerts
                  are still how a person learns that something needs
                  attention.
                </ArticleParagraph>
              </section>

              {/* CHECKOUT EXAMPLE */}

              <section className="mt-16">
                <SectionHeading>
                  Following One Checkout Request
                </SectionHeading>

                <ArticleParagraph>
                  Consider a customer trying to complete a
                  purchase.
                </ArticleParagraph>

                <div className="mt-10 grid md:grid-cols-2 gap-6">
                  <InfoCard title="Monitoring raises the alert">
                    <p>
                      Payment errors rise above the agreed limit,
                      and the team receives an alert.
                    </p>
                  </InfoCard>

                  <InfoCard title="Observability shows where and why">
                    <p>
                      Traces can show that the slowdown starts at
                      the payment-provider call. Logs can show
                      timeouts on the version released that
                      morning, while metrics show the error rate
                      increased after the release.
                    </p>
                  </InfoCard>
                </div>

                <ArticleParagraph>
                  This is where metrics, logs and traces become more
                  valuable when they are connected together.
                </ArticleParagraph>

                <ArticleParagraph>
                  Without monitoring, the team may not know that
                  something needs attention. Without observability,
                  the team may know something is wrong but spend
                  much longer finding the cause.
                </ArticleParagraph>
              </section>

              {/* GOLDEN SIGNALS */}

              <section className="mt-16">
                <SectionHeading>
                  Start With Signals That Reflect the Customer
                </SectionHeading>

                <ArticleParagraph>
                  For user-facing services, four important signals
                  are latency, traffic, errors and saturation.
                </ArticleParagraph>

                <div className="mt-10 grid sm:grid-cols-2 gap-6">
                  <InfoCard title="Latency">
                    <p>
                      How long customer actions or requests take.
                    </p>
                  </InfoCard>

                  <InfoCard title="Traffic">
                    <p>
                      How many requests or customer transactions
                      arrive.
                    </p>
                  </InfoCard>

                  <InfoCard title="Errors">
                    <p>
                      How many requests or customer actions fail.
                    </p>
                  </InfoCard>

                  <InfoCard title="Saturation">
                    <p>
                      How close supporting resources are to their
                      limits.
                    </p>
                  </InfoCard>
                </div>

                <ArticleParagraph>
                  For checkout, that means how long payments take,
                  how many attempts arrive, how many fail, and how
                  close supporting resources are to their limits.
                </ArticleParagraph>

                <ArticleParagraph>
                  Pair these signals with a service level objective
                  (SLO), an agreed target for something customers
                  care about, such as the share of successful
                  checkouts.
                </ArticleParagraph>

                <ArticleParagraph>
                  Alerts tied to that target point people to
                  customer impact rather than every infrastructure
                  fluctuation.
                </ArticleParagraph>
              </section>

              {/* OUTGROWN MONITORING */}

              <section className="mt-16">
                <SectionHeading>
                  Signs You Have Outgrown Basic Monitoring
                </SectionHeading>

                <div className="mt-10 space-y-8">
                  <InfoCard title="1. You know something is wrong, but not why">
                    <p>
                      If incidents regularly start with an alert and
                      end with hours of manual searching through
                      servers and log files, your detection may be
                      fine while your diagnosis is the bottleneck.
                    </p>
                  </InfoCard>

                  <InfoCard title="2. Your architecture has many moving parts">
                    <p>
                      Microservices, cloud services, APIs and
                      third-party integrations make one customer
                      action touch many components. A dashboard for
                      each component cannot always show where a
                      single request slowed down.
                    </p>
                  </InfoCard>

                  <InfoCard title="3. Alerts are noisy or ignored">
                    <p>
                      If engineers mute channels because most alerts
                      need no action, a real incident can be missed.
                    </p>
                  </InfoCard>

                  <InfoCard title="4. The same incidents keep returning">
                    <p>
                      Restoring service is not the same as removing
                      the cause. Without enough data to find the
                      underlying cause, a team can only repeat the
                      workaround.
                    </p>
                  </InfoCard>

                  <InfoCard title="5. Releases carry risk you cannot see quickly">
                    <p>
                      If nobody can tell within minutes whether a
                      deployment changed performance or errors,
                      releases become slower and more cautious than
                      they need to be.
                    </p>
                  </InfoCard>
                </div>
              </section>

              {/* MAY NOT NEED FULL PLATFORM */}

              <section className="mt-16">
                <SectionHeading>
                  Signs You May Not Need a Full Observability
                  Platform Yet
                </SectionHeading>

                <ArticleParagraph>
                  More data is not automatically more insight. A
                  complex observability platform can add cost
                  without solving the actual reliability problem.
                </ArticleParagraph>

                <ArticleParagraph>
                  You may be able to wait if you run one application
                  with a few dependencies, your team diagnoses
                  incidents quickly, and your alerts already follow
                  real customer journeys.
                </ArticleParagraph>

                <ArticleParagraph>
                  In that case, tighten monitoring, keep runbooks
                  current, and revisit the question when your
                  architecture or traffic changes.
                </ArticleParagraph>
              </section>

              {/* COMMERCIAL IMPACT */}

              <section className="mt-16">
                <SectionHeading>
                  What This Means Commercially
                </SectionHeading>

                <ArticleParagraph>
                  For founders and operations leaders, the case
                  rests on outcomes, not tools.
                </ArticleParagraph>

                <ArticleList
                  items={[
                    <>
                      <strong>Faster detection:</strong> problems
                      are identified before customers have to report
                      them.
                    </>,

                    <>
                      <strong>Shorter diagnosis:</strong> engineers
                      spend less time searching and more time fixing.
                    </>,

                    <>
                      <strong>Fewer repeat incidents:</strong>{" "}
                      better evidence can reduce avoidable support
                      load and disruption.
                    </>,

                    <>
                      <strong>Protected engineering time:</strong>{" "}
                      teams spend less time firefighting and more
                      time shipping releases.
                    </>,
                  ]}
                />

                <ArticleParagraph>
                  Treat these as results to measure against your own
                  baseline, not as promises from any tool or
                  provider.
                </ArticleParagraph>
              </section>

              {/* REGIONAL CONSIDERATIONS */}

              <section className="mt-16">
                <SectionHeading>
                  Considerations for India, the UAE, Singapore and
                  Malaysia
                </SectionHeading>

                <ArticleParagraph>
                  Businesses serving several markets should review
                  three things.
                </ArticleParagraph>

                <div className="mt-10 space-y-7">
                  <NumberStep
                    number={1}
                    title="Peak hours by market"
                  >
                    An incident late in one team's day may land in
                    another market's busiest period.
                  </NumberStep>

                  <NumberStep
                    number={2}
                    title="Local customer journeys"
                  >
                    Regional payment methods may fail differently
                    from global ones.
                  </NumberStep>

                  <NumberStep
                    number={3}
                    title="Data handling"
                  >
                    Logs and traces can contain personal or
                    payment-related information. Decide what is
                    collected, masked, retained and stored, and
                    confirm it against each country's
                    data-protection requirements with your legal
                    adviser.
                  </NumberStep>
                </div>
              </section>

              {/* HOW TO START */}

              <section className="mt-16">
                <SectionHeading>
                  How to Start Without Buying a Platform
                </SectionHeading>

                <ArticleParagraph>
                  Choose one customer journey, such as checkout or
                  sign-in, and work through five steps.
                </ArticleParagraph>

                <div className="mt-10 space-y-9">
                  <NumberStep
                    number={1}
                    title="Map the journey"
                  >
                    List its services, integrations and the people
                    who understand them.
                  </NumberStep>

                  <NumberStep
                    number={2}
                    title="Measure the golden signals"
                  >
                    Add latency, traffic, errors and saturation for
                    that journey.
                  </NumberStep>

                  <NumberStep
                    number={3}
                    title="Instrument consistently"
                  >
                    Consider OpenTelemetry, a vendor-neutral
                    standard for collecting metrics, logs and
                    traces, so you are not tied to one tool.
                  </NumberStep>

                  <NumberStep
                    number={4}
                    title="Alert on customer impact"
                  >
                    Define who is paged, for what, and how they
                    escalate.
                  </NumberStep>

                  <NumberStep
                    number={5}
                    title="Learn from each incident"
                  >
                    Where the team lacked data to find the cause,
                    add that telemetry. Expand to other journeys
                    only when the evidence supports it.
                  </NumberStep>
                </div>
              </section>

              {/* PROVIDER QUESTIONS */}

              <section className="mt-16">
                <SectionHeading>
                  What Should You Ask a Monitoring or Observability
                  Provider?
                </SectionHeading>

                <div className="mt-10 space-y-6">
                  <InfoCard title="What is covered?">
                    <p>
                      Ask whether the service covers customer
                      transactions and application behaviour, or
                      only server and network health.
                    </p>
                  </InfoCard>

                  <InfoCard title="Who responds, and when?">
                    <p>
                      Confirm coverage hours, alert ownership and
                      escalation.
                    </p>
                  </InfoCard>

                  <InfoCard title="Who owns the data and dashboards?">
                    <p>
                      Your business should keep access to alert
                      rules, dashboards and records.
                    </p>
                  </InfoCard>

                  <InfoCard title="How is sensitive data handled?">
                    <p>
                      Ask about masking, retention and storage
                      location.
                    </p>
                  </InfoCard>

                  <InfoCard title="How will value be judged?">
                    <p>
                      Agree measures such as detection time,
                      diagnosis time and repeat incidents.
                    </p>
                  </InfoCard>
                </div>
              </section>

              {/* MAVI */}

              <section className="mt-16">
                <SectionHeading>
                  How MaVi Solutions Can Help
                </SectionHeading>

                <ArticleParagraph>
                  MaVi Solutions' website lists application and
                  website monitoring, IT infrastructure monitoring,
                  SRE and managed services, cloud and DevOps
                  support, and engineering services.
                </ArticleParagraph>

                <ArticleParagraph>
                  Its stated SRE scope includes incident management,
                  observability dashboards and on-call rotation.
                </ArticleParagraph>

                <ArticleParagraph>
                  If you are deciding how far to go, MaVi can help
                  you discuss which customer journeys need better
                  visibility, where diagnosis slows down, and what
                  scope suits your team.
                </ArticleParagraph>

                <ArticleParagraph>
                  Any coverage hours, access, response commitments
                  and deliverables should be confirmed in the
                  engagement agreement.
                </ArticleParagraph>
              </section>

              {/* FAQ */}

              <section className="mt-16">
                <SectionHeading>
                  Frequently Asked Questions
                </SectionHeading>

                <div className="mt-10 space-y-8">
                  <InfoCard title="Is observability just a new name for monitoring?">
                    <p>
                      No. Monitoring checks known conditions and
                      alerts you. Observability gives you connected
                      data to investigate unexpected problems. They
                      work together.
                    </p>
                  </InfoCard>

                  <InfoCard title="Do we need both?">
                    <p>
                      Usually, yes, in proportion to your system's
                      complexity. Monitoring comes first for most
                      businesses. Observability adds value as
                      diagnosis becomes slower or architecture
                      becomes more distributed.
                    </p>
                  </InfoCard>

                  <InfoCard title="Do we have to use OpenTelemetry?">
                    <p>
                      No. It is a widely used open standard for
                      generating and exporting telemetry and can
                      reduce lock-in if you later change tools.
                    </p>
                  </InfoCard>

                  <InfoCard title="Will observability replace SLOs and incident reviews?">
                    <p>
                      No. SLOs define what good service means, and
                      incident reviews turn failures into
                      improvements. Observability supplies the
                      evidence for both.
                    </p>
                  </InfoCard>

                  <InfoCard title="Can a small business benefit?">
                    <p>
                      Yes, if its digital service matters to
                      customers or revenue. A small team can start
                      with one journey, a handful of signals and
                      clear alerts, then grow from there.
                    </p>
                  </InfoCard>
                </div>
              </section>

              {/* FINAL */}

              <section className="mt-16">
                <SectionHeading>
                  Match the Tooling to the Problem
                </SectionHeading>

                <ArticleParagraph>
                  Choose monitoring when you need to know quickly
                  that a customer-facing service is failing. Add
                  observability when you need to understand why,
                  across many services, faster than your team can
                  today.
                </ArticleParagraph>

                <ArticleParagraph>
                  Begin with the journey customers rely on most,
                  and let evidence decide how much further to go.
                </ArticleParagraph>
              </section>
            </div>

            {/* BLOG 2 CTA */}

            <div className="mt-16 rounded-3xl bg-gradient-to-r from-[#0066CC] to-[#65D249] p-8 md:p-12 text-white">
              <div className="max-w-3xl">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Need Better Visibility Into Your Website or
                  Application?
                </h2>

                <p className="mt-5 text-lg leading-8 text-white/90">
                  Contact MaVi Solutions to discuss your current
                  risks and the monitoring or observability scope
                  that fits your business.
                </p>

                <button
                  type="button"
                  onClick={goContact}
                  className="mt-8 px-7 py-3.5 rounded-lg bg-white text-slate-900 font-semibold hover:bg-slate-100 transition"
                >
                  Contact Us
                </button>
              </div>
            </div>

            {/* RELATED BLOG */}

            <div className="mt-16 pt-10 border-t border-slate-200 dark:border-slate-800">
              <div className="text-sm font-bold tracking-wider text-[#0066CC]">
                RELATED INSIGHT
              </div>

              <button
                type="button"
                onClick={() => openArticle(1)}
                className="mt-4 text-left group"
              >
                <h3 className="text-2xl md:text-3xl font-bold group-hover:text-[#0066CC] transition">
                  SRE Outsourcing in 2026: When Does Your Business
                  Actually Need It?
                </h3>

                <p className="mt-3 text-slate-600 dark:text-slate-400">
                  Explore when an external SRE team can help a
                  growing business improve reliability, monitoring
                  and incident response.
                </p>

                <span className="inline-block mt-4 font-semibold text-[#0066CC]">
                  Read Blog 1 →
                </span>
              </button>
            </div>
          </article>
        </main>
      );
    }
  }

  // ============================================================
  // FALLBACK
  // ============================================================

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#050B14] flex items-center justify-center">
      <div className="text-center px-6">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
          Blog not found
        </h1>

        <button
          type="button"
          onClick={goBackToBlog}
          className="mt-6 px-6 py-3 rounded-lg bg-[#0066CC] text-white font-semibold"
        >
          Back to Blog
        </button>
      </div>
    </main>
  );
};

export default Blog;