import React, { useState } from "react";

interface BlogPost {
  id: number;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  image?: string;
}

const BLOG_IMAGES = {
  hero: "/blog/sre-outsourcing-2026-hero.png",
  decisionGuide: "/blog/sre-decision-guide.png",
  operatingModels: "/blog/sre-operating-models.png",
  poster: "/blog/mavi-sre-support-poster.png",
};

const blogPosts: BlogPost[] = [
  {
    id: 1,
    category: "SRE & APPLICATION SUPPORT",
    title:
      "SRE Outsourcing in 2026: When Does Your Business Actually Need It?",
    excerpt:
      "When should a growing business outsource SRE? Understand the reliability gaps, operating models, provider questions, and practical steps before deciding how much support you need.",
    date: "September 2026",
    image: BLOG_IMAGES.hero,
  },
  {
    id: 2,
    category: "24/7 SRE SUPPORT",
    title:
      "Extensive Offshore Support for Applications During Non-Business Hours",
    excerpt:
      "Dedicated production support, monitoring, alerting, and incident response to help protect application reliability outside normal business hours.",
    date: "September 2026",
    image: BLOG_IMAGES.poster,
  },
  {
    id: 3,
    category: "OBSERVABILITY",
    title:
      "Why Observability Matters for Modern Production Applications",
    excerpt:
      "Understand how application visibility, meaningful metrics, logs, traces, and actionable alerts help engineering teams understand production behaviour.",
    date: "Coming Soon",
  },
  {
    id: 4,
    category: "CLOUD & DEVOPS",
    title:
      "How Proactive Production Monitoring Helps Reduce Operational Risk",
    excerpt:
      "Explore how proactive monitoring and structured operational practices can help teams identify issues before they become larger customer-impacting incidents.",
    date: "Coming Soon",
  },
];

const Blog: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const openPost = (post: BlogPost) => {
    if (post.date === "Coming Soon") {
      return;
    }

    setSelectedPost(post);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const goBack = () => {
    setSelectedPost(null);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const goToContact = () => {
    window.location.hash = "contact-page";

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /*
   * ============================================================
   * FULL BLOG ARTICLE
   * ============================================================
   */

  const renderSreOutsourcingArticle = () => (
    <article className="mx-auto max-w-4xl">
      {/* Category */}
      <div className="mb-6">
        <span className="inline-flex rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-xs font-semibold tracking-[0.16em] text-blue-400">
          SRE & APPLICATION SUPPORT
        </span>
      </div>

      {/* Title */}
      <h1 className="text-4xl font-bold leading-[1.12] tracking-tight text-white md:text-5xl lg:text-6xl">
        SRE Outsourcing in 2026: When Does Your Business Actually Need It?
      </h1>

      {/* Date */}
      <p className="mt-6 text-sm font-medium text-blue-300">
        September 2026
      </p>

      {/* Hero Image */}
      <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-2xl">
        <img
          src={BLOG_IMAGES.hero}
          alt="Healthy monitoring dashboard beside a customer checkout showing a payment failure."
          className="block h-auto w-full"
        />
      </div>

      {/* Article Content */}
      <div className="mt-12 text-[17px] leading-[1.9] text-slate-300">

        {/* INTRODUCTION */}
        <section>
          <p>
            Your monitoring dashboard says the application is up. Customers
            say they cannot complete a purchase.
          </p>

          <p className="mt-7">
            For a growing business, that gap matters more than a server uptime
            chart. A failed checkout can interrupt revenue. A slow customer
            portal can increase support requests. Repeated incidents can pull
            engineers away from the next release.
          </p>

          <p className="mt-7">
            Site reliability engineering (SRE) helps teams measure and improve
            the experience their services deliver. SRE outsourcing brings in an
            external team to handle a defined part of that work. The decision
            is whether that team can close a reliability gap your business
            cannot address effectively today.
          </p>
        </section>

        {/* QUICK ANSWER */}
        <section className="mt-16">
          <h2 className="mb-7 text-3xl font-bold leading-tight text-white md:text-4xl">
            The quick answer
          </h2>

          <p>
            Outsource SRE when a customer-facing service is important enough
            to need dependable monitoring and incident response, but your
            internal team lacks the coverage, capacity, or specialist skills
            to provide them consistently.
          </p>

          <p className="mt-7">
            You might need help with after-hours incidents, recurring outages,
            application observability, or a cloud migration. You might instead
            need a short engagement to establish reliability practices before
            your own team takes over.
          </p>

          <p className="mt-7">
            If your engineers already meet agreed reliability targets, respond
            sustainably to incidents, and have time to prevent repeat failures,
            a new outsourced arrangement may add little value. The right scope
            follows the problem.
          </p>
        </section>

        {/* WHAT IS SRE OUTSOURCING */}
        <section className="mt-16">
          <h2 className="mb-7 text-3xl font-bold leading-tight text-white md:text-4xl">
            What is SRE outsourcing?
          </h2>

          <p>
            Site reliability engineering applies engineering practices to
            production operations. Rather than asking only whether a server is
            running, an SRE team asks whether users can complete important
            tasks, how reliably they can do so, and what should happen when the
            experience degrades.
          </p>

          <p className="mt-7">
            An outsourced SRE team may support monitoring, alerting, on-call
            response, incident investigation, infrastructure automation, and
            reliability improvements. The exact responsibilities depend on the
            agreement.
          </p>

          <p className="mt-7">
            A provider that watches dashboards but cannot investigate an
            application failure offers a different service from one that can
            diagnose an incident and help prevent its recurrence.
          </p>

          <h3 className="mt-10 mb-5 text-2xl font-semibold text-white">
            Three terms make the work easier to assess:
          </h3>

          <ul className="space-y-5 pl-6">
            <li className="list-disc">
              <strong className="text-white">
                A service level indicator (SLI)
              </strong>{" "}
              measures an aspect of service performance, such as the share of
              checkouts completed successfully.
            </li>

            <li className="list-disc">
              <strong className="text-white">
                A service level objective (SLO)
              </strong>{" "}
              sets an agreed target for that indicator over a defined period.
            </li>

            <li className="list-disc">
              <strong className="text-white">
                An error budget
              </strong>{" "}
              describes how much performance below the target the service can
              tolerate during that period.
            </li>
          </ul>

          <p className="mt-8">
            SLOs help product and engineering leaders decide which reliability
            issues deserve work. They should reflect the user experience and
            be refined as the team learns, rather than chosen simply because a
            percentage sounds impressive.
          </p>

          <p className="mt-7">
            For example, a homepage loading successfully is useful to know. For
            an ecommerce business, successful checkout may be the more
            important measure.
          </p>
        </section>

        {/* WHEN DOES EXTERNAL SRE MAKE SENSE */}
        <section className="mt-16">
          <h2 className="mb-7 text-3xl font-bold leading-tight text-white md:text-4xl">
            When does an external SRE team make sense?
          </h2>

          {/* Decision Guide Image */}
          <figure className="my-10 overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-xl">
            <img
              src={BLOG_IMAGES.decisionGuide}
              alt="Flowchart showing when to keep SRE in-house, add hybrid support, or assess managed SRE based on customer impact and team capacity."
              className="block h-auto w-full"
            />
          </figure>

          {/* Reason 1 */}
          <h3 className="mt-12 mb-5 text-2xl font-semibold text-white">
            Customers report problems before your alerts do
          </h3>

          <p>
            A basic uptime check may pass while sign-in, payment, search, or a
            third-party integration fails. If support teams regularly discover
            incidents first, your business needs better visibility into
            critical user journeys.
          </p>

          <p className="mt-7">
            An SRE engagement could begin by identifying those journeys, adding
            appropriate measurements, and defining who receives an alert. Good
            alerting should help an on-call person act on significant user
            impact, rather than send every infrastructure fluctuation to a
            crowded channel.
          </p>

          {/* Reason 2 */}
          <h3 className="mt-12 mb-5 text-2xl font-semibold text-white">
            The same engineers build the product and handle every incident
          </h3>

          <p>
            Developers often know the application better than anyone. Their
            involvement remains essential when a problem requires a code fix.
            But if a small group also handles every production alert, routine
            check, and night-time escalation, it may have too little time to
            improve the system.
          </p>

          <p className="mt-7">
            Outside support can add operational capacity. Before assigning the
            pager, define what the provider can investigate or change
            independently, when a developer must join, and who communicates
            with customers.
          </p>

          {/* Reason 3 */}
          <h3 className="mt-12 mb-5 text-2xl font-semibold text-white">
            Incidents are restored but keep returning
          </h3>

          <p>
            Restarting a service may get customers moving again. If the same
            failure returns next week, the business is still carrying the
            risk.
          </p>

          <p className="mt-7">
            SRE work should include time to examine incidents, update runbooks,
            improve alerts, and reduce repetitive manual tasks.
          </p>

          <p className="mt-7">
            An external partner is useful here only if its scope includes
            improvement work. Ask what happens after service is restored: Who
            records the cause? Who proposes a lasting fix? Who has authority to
            prioritize it?
          </p>

          {/* Reason 4 */}
          <h3 className="mt-12 mb-5 text-2xl font-semibold text-white">
            A launch or migration has created a temporary skills gap
          </h3>

          <p>
            A new customer-facing application, cloud migration, or change in
            traffic patterns can expose problems the current team has not had
            to solve before. Hiring a permanent specialist may be sensible over
            time, but the immediate need could be narrower: a production
            readiness review, improved observability, safer deployments, or
            help during a defined launch window.
          </p>

          <p className="mt-7">
            In that situation, consider a time-limited SRE engagement with
            clear deliverables and knowledge transfer. It gives your team a
            way to address the current risk while deciding what capability it
            needs long term.
          </p>

          {/* Reason 5 */}
          <h3 className="mt-12 mb-5 text-2xl font-semibold text-white">
            You need support across multiple operating hours
          </h3>

          <p>
            A business serving customers in India, the UAE, Singapore, and
            Malaysia should examine when its users are active and when its own
            engineers can respond. These markets span several time zones; an
            incident late in one team's working day may affect another market
            during an active period.
          </p>

          <p className="mt-7">
            That does not mean every application needs round-the-clock cover.
            Start with the hours when failure would have the greatest customer
            or commercial impact. Then decide whether extended on-call
            support, a shared rotation, or continuous coverage is justified.
          </p>
        </section>

        {/* OPERATING MODELS */}
        <section className="mt-16">
          <h2 className="mb-7 text-3xl font-bold leading-tight text-white md:text-4xl">
            Outsourced, in-house, or hybrid: which model fits?
          </h2>

          {/* Operating Models Image */}
          <figure className="my-10 overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-xl">
            <img
              src={BLOG_IMAGES.operatingModels}
              alt="Comparison of in-house, hybrid, and managed SRE by best fit, team ownership, support scope, and risks to watch."
              className="block h-auto w-full"
            />
          </figure>

          {/* Comparison Table */}
          <div className="mt-10 overflow-hidden rounded-2xl border border-white/10">
            <div className="overflow-x-auto">
              <table className="min-w-[760px] w-full border-collapse text-left">
                <thead>
                  <tr className="bg-white/5">
                    <th className="border-b border-white/10 px-5 py-5 text-sm font-semibold text-white">
                      Situation
                    </th>

                    <th className="border-b border-white/10 px-5 py-5 text-sm font-semibold text-white">
                      Likely starting model
                    </th>

                    <th className="border-b border-white/10 px-5 py-5 text-sm font-semibold text-white">
                      What to protect
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td className="border-b border-white/10 px-5 py-6 align-top text-slate-300">
                      A capable internal team needs help during certain hours
                    </td>

                    <td className="border-b border-white/10 px-5 py-6 align-top font-medium text-blue-300">
                      Hybrid support
                    </td>

                    <td className="border-b border-white/10 px-5 py-6 align-top text-slate-300">
                      Clear handoffs and an escalation route to application
                      owners
                    </td>
                  </tr>

                  <tr>
                    <td className="border-b border-white/10 px-5 py-6 align-top text-slate-300">
                      The team needs a specific improvement, such as SLOs or
                      incident runbooks
                    </td>

                    <td className="border-b border-white/10 px-5 py-6 align-top font-medium text-blue-300">
                      Time-limited SRE engagement
                    </td>

                    <td className="border-b border-white/10 px-5 py-6 align-top text-slate-300">
                      Documented deliverables and knowledge transfer
                    </td>
                  </tr>

                  <tr>
                    <td className="border-b border-white/10 px-5 py-6 align-top text-slate-300">
                      Critical services need ongoing monitoring and response
                      capacity the business cannot staff internally
                    </td>

                    <td className="border-b border-white/10 px-5 py-6 align-top font-medium text-blue-300">
                      Managed SRE support
                    </td>

                    <td className="border-b border-white/10 px-5 py-6 align-top text-slate-300">
                      Defined service scope, authority, access, and response
                      expectations
                    </td>
                  </tr>

                  <tr>
                    <td className="px-5 py-6 align-top text-slate-300">
                      The internal team meets reliability goals with a
                      sustainable workload
                    </td>

                    <td className="px-5 py-6 align-top font-medium text-blue-300">
                      Keep SRE in-house
                    </td>

                    <td className="px-5 py-6 align-top text-slate-300">
                      Continue measuring user experience and reviewing
                      incidents
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <p className="mt-8">
            This table is a starting point, not a purchasing rule. A provider
            cannot set a meaningful reliability target alone. Business and
            product leaders need to say which customer journeys matter and
            what level of disruption is acceptable. Engineers and the provider
            can then agree on how to measure and defend those targets.
          </p>
        </section>

        {/* QUESTIONS TO ASK PROVIDER */}
        <section className="mt-16">
          <h2 className="mb-7 text-3xl font-bold leading-tight text-white md:text-4xl">
            What should you ask an SRE outsourcing provider?
          </h2>

          <p>
            A list of tools or a promise of “24/7 monitoring” is not enough.
            Ask the provider to walk through a plausible incident involving
            your service.
          </p>

          <ol className="mt-9 space-y-9">
            <li>
              <h3 className="text-xl font-semibold text-white">
                1. What exactly is monitored?
              </h3>

              <p className="mt-3">
                Does the scope include customer transactions and application
                behaviour, or only server and network health?
              </p>
            </li>

            <li>
              <h3 className="text-xl font-semibold text-white">
                2. Who responds, and when?
              </h3>

              <p className="mt-3">
                Identify coverage hours, alert ownership, escalation steps, and
                how response is measured.
              </p>
            </li>

            <li>
              <h3 className="text-xl font-semibold text-white">
                3. What can the team do during an incident?
              </h3>

              <p className="mt-3">
                Confirm access levels, permitted changes, rollback authority,
                and the point at which your engineers join.
              </p>
            </li>

            <li>
              <h3 className="text-xl font-semibold text-white">
                4. What happens after recovery?
              </h3>

              <p className="mt-3">
                Ask how incident findings become runbook updates, monitoring
                changes, or engineering work.
              </p>
            </li>

            <li>
              <h3 className="text-xl font-semibold text-white">
                5. How will your team retain knowledge?
              </h3>

              <p className="mt-3">
                Dashboards, alert rules, runbooks, and incident records should
                remain available to your business.
              </p>
            </li>

            <li>
              <h3 className="text-xl font-semibold text-white">
                6. How will you judge value?
              </h3>

              <p className="mt-3">
                Agree on measures relevant to your starting problem, such as
                fewer missed customer-impacting incidents, faster detection,
                fewer repeat failures, or reduced alert noise.
              </p>
            </li>
          </ol>

          <p className="mt-9">
            Incident response works best when teams prepare the alerting and
            on-call process before a failure occurs.
          </p>

          <p className="mt-7">
            Price should be evaluated against that agreed scope. A low-cost
            service that forwards alerts may be sufficient for one business
            and inadequate for another that needs application investigation
            and hands-on recovery. Ask for a written description of what is
            included, excluded, and charged separately.
          </p>
        </section>

        {/* HOW TO BEGIN */}
        <section className="mt-16">
          <h2 className="mb-7 text-3xl font-bold leading-tight text-white md:text-4xl">
            How to begin without handing over everything at once
          </h2>

          <p>
            Choose one important service or user journey. For a retailer, it
            might be checkout. For a SaaS business, it might be sign-in or the
            action customers pay to perform.
          </p>

          <p className="mt-7">
            Then work through five steps:
          </p>

          <ol className="mt-9 space-y-9">
            <li>
              <h3 className="text-xl font-semibold text-white">
                1. Map the journey.
              </h3>

              <p className="mt-3">
                Identify its application components, integrations, and the team
                members who understand them.
              </p>
            </li>

            <li>
              <h3 className="text-xl font-semibold text-white">
                2. Review recent failures.
              </h3>

              <p className="mt-3">
                Include incidents customers reported, even if existing
                monitors showed the service as healthy.
              </p>
            </li>

            <li>
              <h3 className="text-xl font-semibold text-white">
                3. Set an initial measure and target.
              </h3>

              <p className="mt-3">
                Start with something tied to user success; refine it as your
                measurement improves.
              </p>
            </li>

            <li>
              <h3 className="text-xl font-semibold text-white">
                4. Agree on response ownership.
              </h3>

              <p className="mt-3">
                Write down coverage hours, severity levels, permissions,
                communication, and escalation.
              </p>
            </li>

            <li>
              <h3 className="text-xl font-semibold text-white">
                5. Review the first period of work.
              </h3>

              <p className="mt-3">
                Check whether the engagement improved visibility, response, and
                prevention. Expand its scope only where the evidence supports
                it.
              </p>
            </li>
          </ol>

          <p className="mt-9">
            This gives a CTO or engineering manager a concrete way to test an
            SRE partnership. It also gives founders and operations leaders a
            clearer view of what they are buying: protection for a customer
            journey, with responsibilities and results they can examine.
          </p>
        </section>

        {/* MAVI SOLUTIONS */}
        <section className="mt-16">
          <h2 className="mb-7 text-3xl font-bold leading-tight text-white md:text-4xl">
            How MaVi Solutions can help
          </h2>

          <p>
            MaVi Solutions’ website lists SRE and managed services, application
            and website monitoring, IT infrastructure monitoring, cloud and
            DevOps support, and engineering services. Its stated SRE scope
            includes incident management, observability dashboards, and on-call
            rotation.
          </p>

          <p className="mt-7">
            If you are assessing outside support, MaVi can be part of a
            discussion about which customer journeys need better monitoring,
            where your current response process breaks down, and what scope
            would fit your team. Any proposed coverage hours, access, response
            commitments, and deliverables should be confirmed in the
            engagement agreement.
          </p>
        </section>

        {/* FAQ */}
        <section className="mt-16">
          <h2 className="mb-8 text-3xl font-bold leading-tight text-white md:text-4xl">
            Frequently asked questions
          </h2>

          <div className="space-y-10">
            <div>
              <h3 className="text-xl font-semibold leading-relaxed text-white">
                Is SRE outsourcing the same as IT support?
              </h3>

              <p className="mt-4">
                They can overlap, but the scope may differ. IT support often
                handles user requests and technical issues. SRE focuses on the
                reliability of production services through measures, incident
                response, and engineering improvements. Ask a provider which of
                these activities its contract actually covers.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold leading-relaxed text-white">
                Do we need to outsource SRE to offer 24/7 service?
              </h3>

              <p className="mt-4">
                No. An internal team can provide coverage if it has enough
                people, a sustainable rotation, and the necessary skills.
                External support is one option when that capacity is missing or
                when the business needs additional coverage for particular
                services or hours.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold leading-relaxed text-white">
                Can an outsourced SRE team guarantee zero downtime?
              </h3>

              <p className="mt-4">
                No provider can remove every failure. A useful engagement
                defines realistic targets, improves detection and recovery,
                and reduces avoidable repeat incidents.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold leading-relaxed text-white">
                Should a small business use SRE practices?
              </h3>

              <p className="mt-4">
                Yes, when its digital service matters to customers or revenue.
                It does not need a large SRE department to identify a critical
                journey, measure whether it works, create a response plan, and
                learn from failures. The amount of support should match the
                service’s risk and complexity.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold leading-relaxed text-white">
                What should remain with our internal team?
              </h3>

              <p className="mt-4">
                Keep ownership of product priorities, customer promises,
                architecture decisions, and the level of reliability the
                business requires. An external team can operate within that
                direction and provide evidence for better decisions. Your
                developers should also stay involved where application
                knowledge or code changes are needed.
              </p>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="mt-16 rounded-3xl border border-blue-400/20 bg-gradient-to-br from-blue-500/10 via-slate-900 to-emerald-400/5 p-8 md:p-10">
          <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl">
            Make the decision around the service that matters most
          </h2>

          <p className="mt-7">
            SRE outsourcing makes sense when it closes a specific gap in how
            your business detects, responds to, and prevents customer-impacting
            failures.
          </p>

          <p className="mt-7">
            Begin with the journey customers rely on most, define what good
            service means, and decide which responsibilities your team can
            sustainably own.
          </p>

          <p className="mt-7 font-semibold text-white">
            Need to assess reliability support for your website or application?
          </p>

          <button
            type="button"
            onClick={goToContact}
            className="mt-7 inline-flex items-center rounded-xl bg-gradient-to-r from-emerald-400 to-cyan-400 px-7 py-3.5 text-sm font-bold text-slate-950 shadow-lg transition duration-300 hover:-translate-y-0.5 hover:shadow-xl"
          >
            Contact MaVi Solutions
          </button>
        </section>
      </div>
    </article>
  );

  /*
   * ============================================================
   * BLOG 2 ARTICLE
   * ============================================================
   */

  const renderPosterArticle = () => (
    <article className="mx-auto max-w-4xl">
      <div className="mb-6">
        <span className="inline-flex rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-xs font-semibold tracking-[0.16em] text-blue-400">
          24/7 SRE SUPPORT
        </span>
      </div>

      <h1 className="text-4xl font-bold leading-[1.12] text-white md:text-5xl">
        Extensive Offshore Support for Applications During Non-Business Hours
      </h1>

      <p className="mt-6 text-sm font-medium text-blue-300">
        September 2026
      </p>

      <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-2xl">
        <img
          src={BLOG_IMAGES.poster}
          alt="MaVi Solutions SRE and application support poster"
          className="block h-auto w-full"
        />
      </div>

      <div className="mt-12 text-[17px] leading-[1.9] text-slate-300">
        <p>
          Production systems do not stop operating when the business day ends.
          Customer transactions, integrations, background jobs, and
          infrastructure continue to run across evenings, weekends, and
          holidays.
        </p>

        <p className="mt-7">
          MaVi Solutions provides dedicated SRE and application support to help
          teams maintain production visibility and respond to operational
          issues outside normal business hours.
        </p>

        <h2 className="mt-16 mb-7 text-3xl font-bold text-white md:text-4xl">
          How we support your production stack
        </h2>

        <h3 className="text-2xl font-semibold text-white">
          Custom Observability Dashboards
        </h3>

        <p className="mt-4">
          Real-time visibility across critical golden signals, database query
          latency, and traffic trends using monitoring and observability
          platforms.
        </p>

        <h3 className="mt-10 text-2xl font-semibold text-white">
          High-Signal Alert Engineering
        </h3>

        <p className="mt-4">
          Application and infrastructure logs can be analysed to reduce noisy
          false alarms and create actionable alerts around meaningful
          production symptoms.
        </p>

        <h3 className="mt-10 text-2xl font-semibold text-white">
          24/7 Production Watch
        </h3>

        <p className="mt-4">
          Proactive monitoring, automated triage, and documented runbook
          execution can help teams respond during late nights, weekends, and
          holidays.
        </p>

        <h3 className="mt-10 text-2xl font-semibold text-white">
          Weekly Performance & Traffic Digests
        </h3>

        <p className="mt-4">
          Traffic patterns, latency trends, and recurring error logs can give
          engineering teams useful information for planning infrastructure
          improvements.
        </p>

        <div className="mt-14 rounded-3xl border border-blue-400/20 bg-blue-500/10 p-8">
          <p className="font-semibold text-white">
            Keep your developers focused on shipping features while your
            production reliability receives dedicated operational attention.
          </p>

          <button
            type="button"
            onClick={goToContact}
            className="mt-7 inline-flex rounded-xl bg-gradient-to-r from-emerald-400 to-cyan-400 px-7 py-3.5 text-sm font-bold text-slate-950"
          >
            Contact MaVi Solutions
          </button>
        </div>
      </div>
    </article>
  );

  /*
   * ============================================================
   * COMING SOON ARTICLE
   * ============================================================
   */

  const renderComingSoon = (post: BlogPost) => (
    <article className="mx-auto max-w-4xl">
      <div className="mb-6">
        <span className="inline-flex rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-xs font-semibold tracking-[0.16em] text-blue-400">
          {post.category}
        </span>
      </div>

      <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl">
        {post.title}
      </h1>

      <p className="mt-6 text-sm font-medium text-blue-300">
        Coming Soon
      </p>

      <div className="mt-10 rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950/30 p-10 text-center md:p-16">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-500/10 text-3xl">
          ✦
        </div>

        <h2 className="mt-7 text-2xl font-bold text-white md:text-3xl">
          MaVi Insights
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-400">
          This article is currently being prepared. Check back soon for more
          insights from MaVi Solutions.
        </p>
      </div>
    </article>
  );

  /*
   * ============================================================
   * FULL POST VIEW
   * ============================================================
   */

  if (selectedPost) {
    return (
      <main className="min-h-screen bg-[#020812] px-5 pb-24 pt-32 md:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          {/* Back Button */}
          <button
            type="button"
            onClick={goBack}
            className="mb-12 inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition hover:text-white"
          >
            <span className="text-lg">←</span>
            Back to Blog
          </button>

          {selectedPost.id === 1 &&
            renderSreOutsourcingArticle()}

          {selectedPost.id === 2 &&
            renderPosterArticle()}

          {(selectedPost.id === 3 || selectedPost.id === 4) &&
            renderComingSoon(selectedPost)}
        </div>
      </main>
    );
  }

  /*
   * ============================================================
   * BLOG LISTING PAGE
   * ============================================================
   */

  const featuredPost = blogPosts[0];
  const remainingPosts = blogPosts.slice(1);

  return (
    <main className="min-h-screen bg-[#020812] px-5 pb-24 pt-32 md:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">

        {/* Page Header */}
        <section className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-xs font-semibold tracking-[0.18em] text-blue-400">
            MAVI INSIGHTS
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            Engineering Insights for
            <span className="block bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Reliable Digital Systems
            </span>
          </h1>

          <p className="mt-6 text-base leading-8 text-slate-400 md:text-lg">
            Practical insights on SRE, application support, observability,
            cloud, DevOps, and production reliability from MaVi Solutions.
          </p>
        </section>

        {/* Featured Article */}
        <section className="mt-16">
          <button
            type="button"
            onClick={() => openPost(featuredPost)}
            className="group block w-full overflow-hidden rounded-3xl border border-white/10 bg-slate-950 text-left shadow-2xl transition duration-500 hover:-translate-y-1 hover:border-blue-400/30"
          >
            <div className="grid lg:grid-cols-2">

              {/* Featured Image */}
              <div className="relative min-h-[320px] overflow-hidden bg-slate-900 lg:min-h-[440px]">
                <img
                  src={featuredPost.image}
                  alt="Healthy monitoring dashboard beside a customer checkout showing a payment failure."
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                <div className="absolute left-6 top-6">
                  <span className="rounded-full bg-slate-950/80 px-4 py-2 text-xs font-semibold tracking-wide text-blue-300 backdrop-blur">
                    FEATURED
                  </span>
                </div>
              </div>

              {/* Featured Content */}
              <div className="flex flex-col justify-center p-8 md:p-10 lg:p-12">
                <span className="text-xs font-semibold tracking-[0.16em] text-blue-400">
                  {featuredPost.category}
                </span>

                <h2 className="mt-5 text-3xl font-bold leading-tight text-white transition group-hover:text-blue-300 md:text-4xl">
                  {featuredPost.title}
                </h2>

                <p className="mt-6 leading-8 text-slate-400">
                  {featuredPost.excerpt}
                </p>

                <div className="mt-8 flex items-center justify-between">
                  <span className="text-sm text-slate-500">
                    {featuredPost.date}
                  </span>

                  <span className="font-semibold text-blue-400">
                    Read Article →
                  </span>
                </div>
              </div>
            </div>
          </button>
        </section>

        {/* Blog Grid */}
        <section className="mt-16">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <span className="text-xs font-semibold tracking-[0.16em] text-blue-400">
                LATEST ARTICLES
              </span>

              <h2 className="mt-3 text-3xl font-bold text-white">
                More from MaVi
              </h2>
            </div>
          </div>

          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {remainingPosts.map((post) => (
              <button
                key={post.id}
                type="button"
                onClick={() => openPost(post)}
                className={`group overflow-hidden rounded-2xl border border-white/10 bg-slate-950 text-left transition duration-500 ${
                  post.date !== "Coming Soon"
                    ? "hover:-translate-y-1 hover:border-blue-400/30"
                    : "cursor-default"
                }`}
              >
                {/* Card Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-slate-900 to-blue-950/30">
                  {post.image ? (
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center">
                      <div className="text-4xl text-blue-400/40">
                        ✦
                      </div>
                    </div>
                  )}

                  {post.date === "Coming Soon" && (
                    <div className="absolute right-4 top-4 rounded-full bg-slate-950/80 px-3 py-1.5 text-xs font-semibold text-slate-300 backdrop-blur">
                      Coming Soon
                    </div>
                  )}
                </div>

                {/* Card Content */}
                <div className="p-7">
                  <span className="text-xs font-semibold tracking-[0.14em] text-blue-400">
                    {post.category}
                  </span>

                  <h3 className="mt-4 text-xl font-bold leading-snug text-white transition group-hover:text-blue-300">
                    {post.title}
                  </h3>

                  <p className="mt-4 line-clamp-3 text-sm leading-7 text-slate-400">
                    {post.excerpt}
                  </p>

                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-xs text-slate-500">
                      {post.date}
                    </span>

                    {post.date !== "Coming Soon" && (
                      <span className="text-sm font-semibold text-blue-400">
                        Read →
                      </span>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="mt-20 overflow-hidden rounded-3xl border border-blue-400/20 bg-gradient-to-br from-blue-500/10 via-slate-950 to-emerald-400/5 p-8 md:p-12">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold tracking-[0.16em] text-blue-400">
              TALK TO MAVI
            </span>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-white md:text-4xl">
              Need help improving your production reliability?
            </h2>

            <p className="mt-5 leading-8 text-slate-400">
              Talk to MaVi Solutions about SRE, application monitoring,
              observability, cloud, DevOps, and production support.
            </p>

            <button
              type="button"
              onClick={goToContact}
              className="mt-7 inline-flex rounded-xl bg-gradient-to-r from-emerald-400 to-cyan-400 px-7 py-3.5 text-sm font-bold text-slate-950 shadow-lg transition duration-300 hover:-translate-y-0.5"
            >
              Contact Us
            </button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Blog;