import React, { useState } from 'react';

interface BlogPost {
  id: number;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  image?: string;
  content: React.ReactNode;
}

const Blog: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      category: 'SRE & APPLICATION SUPPORT',
      title:
        'SRE Outsourcing in 2026: When Does Your Business Actually Need It?',
      excerpt:
        'When should a growing business outsource SRE? Learn how to identify reliability gaps, compare in-house, hybrid and managed support models, and choose a practical starting point.',
      date: 'September 2026',
      content: (
        <>
          <p>
            Your monitoring dashboard says the application is up. Customers
            say they cannot complete a purchase.
          </p>

          <p>
            For a growing business, that gap matters more than a server uptime
            chart. A failed checkout can interrupt revenue. A slow customer
            portal can increase support requests. Repeated incidents can pull
            engineers away from the next release.
          </p>

          <p>
            Site reliability engineering (SRE) helps teams measure and improve
            the experience their services deliver. SRE outsourcing brings in
            an external team to handle a defined part of that work. The
            decision is whether that team can close a reliability gap your
            business cannot address effectively today.
          </p>

          <h2>The Quick Answer</h2>

          <p>
            Outsource SRE when a customer-facing service is important enough
            to need dependable monitoring and incident response, but your
            internal team lacks the coverage, capacity, or specialist skills
            to provide them consistently.
          </p>

          <p>
            You might need help with after-hours incidents, recurring outages,
            application observability, or a cloud migration. You might instead
            need a short engagement to establish reliability practices before
            your own team takes over.
          </p>

          <p>
            If your engineers already meet agreed reliability targets, respond
            sustainably to incidents, and have time to prevent repeat failures,
            a new outsourced arrangement may add little value. The right scope
            follows the problem.
          </p>

          <h2>What Is SRE Outsourcing?</h2>

          <p>
            Site reliability engineering applies engineering practices to
            production operations. Rather than asking only whether a server is
            running, an SRE team asks whether users can complete important
            tasks, how reliably they can do so, and what should happen when
            the experience degrades.
          </p>

          <p>
            An outsourced SRE team may support monitoring, alerting, on-call
            response, incident investigation, infrastructure automation, and
            reliability improvements. The exact responsibilities depend on the
            agreement.
          </p>

          <p>
            A provider that watches dashboards but cannot investigate an
            application failure offers a different service from one that can
            diagnose an incident and help prevent its recurrence.
          </p>

          <h3>Three Terms Make the Work Easier to Assess</h3>

          <p>
            <strong>Service Level Indicator (SLI):</strong> An SLI measures an
            aspect of service performance, such as the share of checkouts
            completed successfully.
          </p>

          <p>
            <strong>Service Level Objective (SLO):</strong> An SLO sets an
            agreed target for that indicator over a defined period.
          </p>

          <p>
            <strong>Error Budget:</strong> An error budget describes how much
            performance below the target the service can tolerate during that
            period.
          </p>

          <p>
            SLOs help product and engineering leaders decide which reliability
            issues deserve work. They should reflect the user experience and be
            refined as the team learns, rather than chosen simply because a
            percentage sounds impressive.
          </p>

          <p>
            For example, a homepage loading successfully is useful to know.
            For an ecommerce business, successful checkout may be the more
            important measure.
          </p>

          <h2>When Does an External SRE Team Make Sense?</h2>

          <h3>1. Customers Report Problems Before Your Alerts Do</h3>

          <p>
            A basic uptime check may pass while sign-in, payment, search, or a
            third-party integration fails. If support teams regularly discover
            incidents first, your business needs better visibility into
            critical user journeys.
          </p>

          <p>
            An SRE engagement could begin by identifying those journeys,
            adding appropriate measurements, and defining who receives an
            alert. Good alerting should help an on-call person act on
            significant user impact, rather than send every infrastructure
            fluctuation to a crowded channel.
          </p>

          <h3>2. The Same Engineers Build the Product and Handle Every Incident</h3>

          <p>
            Developers often know the application better than anyone. Their
            involvement remains essential when a problem requires a code fix.
            But if a small group also handles every production alert, routine
            check, and night-time escalation, it may have too little time to
            improve the system.
          </p>

          <p>
            Outside support can add operational capacity. Before assigning the
            pager, define what the provider can investigate or change
            independently, when a developer must join, and who communicates
            with customers.
          </p>

          <p>
            Coverage without a workable escalation path simply moves the alert
            to another inbox.
          </p>

          <h3>3. Incidents Are Restored but Keep Returning</h3>

          <p>
            Restarting a service may get customers moving again. If the same
            failure returns next week, the business is still carrying the
            risk.
          </p>

          <p>
            SRE work should include time to examine incidents, update runbooks,
            improve alerts, and reduce repetitive manual tasks.
          </p>

          <p>
            An external partner is useful here only if its scope includes
            improvement work. Ask what happens after service is restored: Who
            records the cause? Who proposes a lasting fix? Who has authority to
            prioritize it?
          </p>

          <h3>4. A Launch or Migration Has Created a Temporary Skills Gap</h3>

          <p>
            A new customer-facing application, cloud migration, or change in
            traffic patterns can expose problems the current team has not had
            to solve before.
          </p>

          <p>
            Hiring a permanent specialist may be sensible over time, but the
            immediate need could be narrower: a production readiness review,
            improved observability, safer deployments, or help during a
            defined launch window.
          </p>

          <p>
            In that situation, consider a time-limited SRE engagement with
            clear deliverables and knowledge transfer. It gives your team a
            way to address the current risk while deciding what capability it
            needs long term.
          </p>

          <h3>5. You Need Support Across Multiple Operating Hours</h3>

          <p>
            A business serving customers in India, the UAE, Singapore, and
            Malaysia should examine when its users are active and when its own
            engineers can respond.
          </p>

          <p>
            These markets span several time zones; an incident late in one
            team's working day may affect another market during an active
            period.
          </p>

          <p>
            That does not mean every application needs round-the-clock cover.
            Start with the hours when failure would have the greatest customer
            or commercial impact. Then decide whether extended on-call
            support, a shared rotation, or continuous coverage is justified.
          </p>

          <h2>Outsourced, In-House, or Hybrid: Which Model Fits?</h2>

          <div className="my-8 overflow-x-auto rounded-2xl border border-slate-200 dark:border-white/10">
            <table className="w-full min-w-[700px] text-sm">
              <thead className="bg-slate-100 dark:bg-white/5">
                <tr>
                  <th className="p-4 text-left font-black">
                    Situation
                  </th>
                  <th className="p-4 text-left font-black">
                    Likely Starting Model
                  </th>
                  <th className="p-4 text-left font-black">
                    What to Protect
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-t border-slate-200 dark:border-white/10">
                  <td className="p-4">
                    A capable internal team needs help during certain hours
                  </td>
                  <td className="p-4">
                    Hybrid support
                  </td>
                  <td className="p-4">
                    Clear handoffs and an escalation route to application
                    owners
                  </td>
                </tr>

                <tr className="border-t border-slate-200 dark:border-white/10">
                  <td className="p-4">
                    The team needs a specific improvement, such as SLOs or
                    incident runbooks
                  </td>
                  <td className="p-4">
                    Time-limited SRE engagement
                  </td>
                  <td className="p-4">
                    Documented deliverables and knowledge transfer
                  </td>
                </tr>

                <tr className="border-t border-slate-200 dark:border-white/10">
                  <td className="p-4">
                    Critical services need ongoing monitoring and response
                    capacity the business cannot staff internally
                  </td>
                  <td className="p-4">
                    Managed SRE support
                  </td>
                  <td className="p-4">
                    Defined service scope, authority, access, and response
                    expectations
                  </td>
                </tr>

                <tr className="border-t border-slate-200 dark:border-white/10">
                  <td className="p-4">
                    The internal team meets reliability goals with a
                    sustainable workload
                  </td>
                  <td className="p-4">
                    Keep SRE in-house
                  </td>
                  <td className="p-4">
                    Continue measuring user experience and reviewing incidents
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            This table is a starting point, not a purchasing rule. A provider
            cannot set a meaningful reliability target alone. Business and
            product leaders need to say which customer journeys matter and
            what level of disruption is acceptable.
          </p>

          <p>
            Engineers and the provider can then agree on how to measure and
            defend those targets.
          </p>

          <h2>What Should You Ask an SRE Outsourcing Provider?</h2>

          <p>
            A list of tools or a promise of "24/7 monitoring" is not enough.
            Ask the provider to walk through a plausible incident involving
            your service.
          </p>

          <h3>1. What Exactly Is Monitored?</h3>

          <p>
            Does the scope include customer transactions and application
            behaviour, or only server and network health?
          </p>

          <h3>2. Who Responds, and When?</h3>

          <p>
            Identify coverage hours, alert ownership, escalation steps, and
            how response is measured.
          </p>

          <h3>3. What Can the Team Do During an Incident?</h3>

          <p>
            Confirm access levels, permitted changes, rollback authority, and
            the point at which your engineers join.
          </p>

          <h3>4. What Happens After Recovery?</h3>

          <p>
            Ask how incident findings become runbook updates, monitoring
            changes, or engineering work.
          </p>

          <h3>5. How Will Your Team Retain Knowledge?</h3>

          <p>
            Dashboards, alert rules, runbooks, and incident records should
            remain available to your business.
          </p>

          <h3>6. How Will You Judge Value?</h3>

          <p>
            Agree on measures relevant to your starting problem, such as
            fewer missed customer-impacting incidents, faster detection,
            fewer repeat failures, or reduced alert noise.
          </p>

          <p>
            Incident response works best when teams prepare the alerting and
            on-call process before a failure occurs.
          </p>

          <p>
            Price should be evaluated against that agreed scope. A low-cost
            service that forwards alerts may be sufficient for one business
            and inadequate for another that needs application investigation
            and hands-on recovery.
          </p>

          <p>
            Ask for a written description of what is included, excluded, and
            charged separately.
          </p>

          <h2>How to Begin Without Handing Over Everything at Once</h2>

          <p>
            Choose one important service or user journey. For a retailer, it
            might be checkout. For a SaaS business, it might be sign-in or
            the action customers pay to perform.
          </p>

          <h3>1. Map the Journey</h3>

          <p>
            Identify its application components, integrations, and the team
            members who understand them.
          </p>

          <h3>2. Review Recent Failures</h3>

          <p>
            Include incidents customers reported, even if existing monitors
            showed the service as healthy.
          </p>

          <h3>3. Set an Initial Measure and Target</h3>

          <p>
            Start with something tied to user success; refine it as your
            measurement improves.
          </p>

          <h3>4. Agree on Response Ownership</h3>

          <p>
            Write down coverage hours, severity levels, permissions,
            communication, and escalation.
          </p>

          <h3>5. Review the First Period of Work</h3>

          <p>
            Check whether the engagement improved visibility, response, and
            prevention. Expand its scope only where the evidence supports it.
          </p>

          <p>
            This gives a CTO or engineering manager a concrete way to test an
            SRE partnership. It also gives founders and operations leaders a
            clearer view of what they are buying: protection for a customer
            journey, with responsibilities and results they can examine.
          </p>

          <h2>How MaVi Solutions Can Help</h2>

          <p>
            MaVi Solutions' website lists SRE and managed services, application
            and website monitoring, IT infrastructure monitoring, cloud and
            DevOps support, and engineering services. Its stated SRE scope
            includes incident management, observability dashboards, and
            on-call rotation.
          </p>

          <p>
            If you are assessing outside support, MaVi can be part of a
            discussion about which customer journeys need better monitoring,
            where your current response process breaks down, and what scope
            would fit your team.
          </p>

          <p>
            Any proposed coverage hours, access, response commitments, and
            deliverables should be confirmed in the engagement agreement.
          </p>

          <h2>Frequently Asked Questions</h2>

          <h3>Is SRE outsourcing the same as IT support?</h3>

          <p>
            They can overlap, but the scope may differ. IT support often
            handles user requests and technical issues. SRE focuses on the
            reliability of production services through measures, incident
            response, and engineering improvements.
          </p>

          <p>
            Ask a provider which of these activities its contract actually
            covers.
          </p>

          <h3>Do we need to outsource SRE to offer 24/7 service?</h3>

          <p>
            No. An internal team can provide coverage if it has enough people,
            a sustainable rotation, and the necessary skills.
          </p>

          <p>
            External support is one option when that capacity is missing or
            when the business needs additional coverage for particular
            services or hours.
          </p>

          <h3>Can an outsourced SRE team guarantee zero downtime?</h3>

          <p>
            No provider can remove every failure. A useful engagement defines
            realistic targets, improves detection and recovery, and reduces
            avoidable repeat incidents.
          </p>

          <h3>Should a small business use SRE practices?</h3>

          <p>
            Yes, when its digital service matters to customers or revenue. It
            does not need a large SRE department to identify a critical
            journey, measure whether it works, create a response plan, and
            learn from failures.
          </p>

          <p>
            The amount of support should match the service's risk and
            complexity.
          </p>

          <h3>What Should Remain With Our Internal Team?</h3>

          <p>
            Keep ownership of product priorities, customer promises,
            architecture decisions, and the level of reliability the business
            requires.
          </p>

          <p>
            An external team can operate within that direction and provide
            evidence for better decisions. Your developers should also stay
            involved where application knowledge or code changes are needed.
          </p>

          <div className="my-10 rounded-2xl border border-green-500/20 bg-slate-100 dark:bg-white/5 p-6">
            <h3 className="!mt-0">
              Make the Decision Around the Service That Matters Most
            </h3>

            <p className="!mb-0">
              SRE outsourcing makes sense when it closes a specific gap in
              how your business detects, responds to, and prevents
              customer-impacting failures. Begin with the journey customers
              rely on most, define what good service means, and decide which
              responsibilities your team can sustainably own.
            </p>
          </div>

          <h2>Need to Assess Reliability Support?</h2>

          <p>
            Need to assess reliability support for your website or application?
            Contact MaVi Solutions to discuss the service, its current risks,
            and the support scope you need.
          </p>

          <p>
            <strong>Email:</strong>{' '}
            <a
              href="mailto:support@mavisolution.com"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              support@mavisolution.com
            </a>
          </p>

          <p>
            <strong>Website:</strong>{' '}
            <a
              href="https://mavisolution.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              mavisolution.com
            </a>
          </p>
        </>
      ),
    },

    {
      id: 2,
      category: '24/7 SRE SUPPORT',
      title:
        'Extensive Offshore Support for Applications During Non-Business Hours',
      excerpt:
        'Dedicated SRE and application support to help businesses maintain production reliability beyond standard working hours.',
      date: 'September 2026',
      image: '/blog/mavi-sre-support-poster.png',
      content: (
        <>
          <p>
            Modern applications operate around the clock. Production issues,
            infrastructure events and application failures do not always wait
            for business hours.
          </p>

          <p>
            MaVi Solutions provides offshore SRE and application support to
            help businesses monitor, troubleshoot and maintain their production
            environments during non-business hours.
          </p>

          <h2>MaVi's Key Support Areas</h2>

          <h3>24/7 Product Support & L1/L2</h3>

          <p>
            Non-stop production watch across nights, weekends and holidays,
            helping teams identify and respond to operational issues.
          </p>

          <h3>Cloud Infrastructure Maintenance</h3>

          <p>
            Proactive infrastructure monitoring and maintenance designed to
            support application availability and operational stability.
          </p>

          <h3>Dev Applications & Web Services</h3>

          <p>
            Full-stack engineering and application support for web services
            and production workloads.
          </p>

          <h3>Deep Log Parsing & Monitoring</h3>

          <p>
            Application and infrastructure logs can provide important signals
            about production health. MaVi helps identify actionable issues from
            operational log data.
          </p>

          <h3>Tailored Observability Dashboards</h3>

          <p>
            Custom dashboards using observability technologies such as
            Grafana, Splunk and Prometheus can provide teams with better
            visibility into critical production metrics.
          </p>

          <h3>Tool Audit & Automation</h3>

          <p>
            Automation can reduce repetitive operational tasks and help teams
            spend more time on high-value engineering activities.
          </p>

          <div className="my-10 rounded-2xl border border-green-500/20 bg-slate-100 dark:bg-white/5 p-6">
            <h3 className="!mt-0">
              Need additional production support?
            </h3>

            <p className="!mb-0">
              Contact MaVi Solutions to discuss SRE and application support
              requirements for your production workloads.
            </p>
          </div>

          <p>
            <strong>Email:</strong>{' '}
            <a
              href="mailto:support@mavisolution.com"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              support@mavisolution.com
            </a>
          </p>

          <p>
            <strong>Website:</strong>{' '}
            <a
              href="https://mavisolution.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              mavisolution.com
            </a>
          </p>
        </>
      ),
    },

    {
      id: 3,
      category: 'OBSERVABILITY',
      title:
        'Why Observability Matters for Modern Production Applications',
      excerpt:
        'Understand how metrics, logs and application signals can help engineering teams gain better visibility into production systems.',
      date: 'Coming Soon',
      content: (
        <>
          <p>
            Modern applications generate large amounts of operational data.
            Without the right visibility, identifying the cause of a
            production issue can become difficult.
          </p>

          <p>
            Observability brings together important signals from applications
            and infrastructure to help engineering teams understand what is
            happening inside their production environments.
          </p>

          <h2>Key Observability Signals</h2>

          <h3>Metrics</h3>

          <p>
            Metrics help teams monitor system performance, traffic patterns,
            resource usage and other measurable production indicators.
          </p>

          <h3>Logs</h3>

          <p>
            Logs provide detailed information about application and
            infrastructure events and can help identify recurring errors and
            operational problems.
          </p>

          <h3>Traces</h3>

          <p>
            Distributed tracing can help teams understand how requests move
            through different services in a modern application architecture.
          </p>

          <p>
            A well-designed observability strategy can help teams detect,
            investigate and respond to production issues more effectively.
          </p>
        </>
      ),
    },

    {
      id: 4,
      category: 'CLOUD & DEVOPS',
      title:
        'How Proactive Production Monitoring Helps Reduce Operational Risk',
      excerpt:
        'A proactive monitoring strategy can help teams identify production signals before they become larger operational problems.',
      date: 'Coming Soon',
      content: (
        <>
          <p>
            Production monitoring is an important part of maintaining
            reliable digital services. Teams need visibility into application
            health, infrastructure performance and traffic behaviour.
          </p>

          <p>
            Proactive monitoring focuses on identifying signals early so that
            teams can investigate potential issues before they significantly
            affect users.
          </p>

          <h2>What Should Teams Monitor?</h2>

          <ul>
            <li>Application availability</li>
            <li>Response time and latency</li>
            <li>Error rates</li>
            <li>Infrastructure resources</li>
            <li>Database performance</li>
            <li>Traffic patterns</li>
            <li>Critical application workflows</li>
          </ul>

          <p>
            Combining monitoring, alert engineering and documented operational
            processes can help create a more structured approach to production
            reliability.
          </p>
        </>
      ),
    },
  ];

  /* =========================
     FULL ARTICLE VIEW
  ========================= */

  if (selectedPost) {
    return (
      <section className="min-h-screen bg-slate-50 dark:bg-[#050B14] py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">

          <button
            onClick={() => {
              setSelectedPost(null);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="mb-10 inline-flex items-center gap-2 text-sm font-bold text-blue-600 dark:text-blue-400 hover:underline"
          >
            ← Back to Blog
          </button>

          <div className="mb-8">
            <span className="inline-block px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 text-xs font-black tracking-widest">
              {selectedPost.category}
            </span>

            <h1 className="mt-6 text-3xl md:text-5xl font-black leading-tight text-slate-900 dark:text-white">
              {selectedPost.title}
            </h1>

            <p className="mt-5 text-sm text-slate-500 dark:text-slate-400">
              {selectedPost.date}
            </p>
          </div>

          {selectedPost.image && (
            <div className="mb-10 overflow-hidden rounded-3xl border border-slate-200 dark:border-white/10 shadow-xl">
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                className="w-full h-auto"
              />
            </div>
          )}

          <article className="blog-article text-slate-700 dark:text-slate-300">
            {selectedPost.content}
          </article>

          <div className="mt-14 pt-8 border-t border-slate-200 dark:border-white/10">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Interested in MaVi SRE and application support?
            </p>

            <a
              href="mailto:support@mavisolution.com"
              className="inline-block mt-3 font-bold text-blue-600 dark:text-blue-400 hover:underline"
            >
              support@mavisolution.com
            </a>
          </div>

        </div>
      </section>
    );
  }

  /* =========================
     BLOG LISTING VIEW
  ========================= */

  return (
    <section className="min-h-screen bg-slate-50 dark:bg-[#050B14] py-16 md:py-24">

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Hero */}
        <div className="max-w-3xl">

          <span className="inline-block px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 text-xs font-black tracking-[0.2em]">
            MaVi INSIGHTS
          </span>

          <h1 className="mt-6 text-4xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-white">
            SRE, Cloud &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066CC] to-[#65D249]">
              Observability
            </span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400 max-w-2xl">
            Practical insights into site reliability engineering, cloud
            infrastructure, observability, application support and production
            operations from MaVi Solutions.
          </p>

        </div>

        {/* Featured Blog */}
        <div className="mt-14">

          <div className="rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.03] shadow-xl">

            <div className="grid lg:grid-cols-2">

              <div className="min-h-[300px] bg-gradient-to-br from-[#0066CC] via-[#12365F] to-[#65D249] flex items-center justify-center p-10">

                <div className="text-center text-white">

                  <div className="text-7xl mb-5">
                    ⚙
                  </div>

                  <p className="text-sm font-black tracking-[0.25em]">
                    SITE RELIABILITY ENGINEERING
                  </p>

                  <p className="mt-2 text-white/70">
                    PRODUCTION SUPPORT
                  </p>

                </div>

              </div>

              <div className="p-8 md:p-12">

                <span className="text-xs font-black tracking-[0.2em] text-green-600 dark:text-green-400">
                  FEATURED ARTICLE
                </span>

                <h2 className="mt-5 text-3xl md:text-4xl font-black leading-tight text-slate-900 dark:text-white">
                  {blogPosts[0].title}
                </h2>

                <p className="mt-5 leading-7 text-slate-600 dark:text-slate-400">
                  {blogPosts[0].excerpt}
                </p>

                <button
                  onClick={() => {
                    setSelectedPost(blogPosts[0]);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="mt-8 px-7 py-3 rounded-xl bg-gradient-to-r from-[#42E695] to-[#3BB2B8] text-slate-950 font-black text-sm hover:scale-105 transition-transform"
                >
                  READ ARTICLE →
                </button>

              </div>

            </div>

          </div>

        </div>

        {/* Blog Grid */}
        <div className="mt-20">

          <div className="flex items-end justify-between gap-6 mb-8">

            <div>

              <p className="text-xs font-black tracking-[0.2em] text-blue-600 dark:text-blue-400">
                LATEST INSIGHTS
              </p>

              <h2 className="mt-3 text-3xl md:text-4xl font-black text-slate-900 dark:text-white">
                From the MaVi Team
              </h2>

            </div>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">

            {blogPosts.slice(1).map((post) => (

              <article
                key={post.id}
                className="group rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.03] hover:border-blue-500/40 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-xl"
              >

                {post.image ? (

                  <div className="aspect-[16/9] overflow-hidden bg-slate-100 dark:bg-white/5">

                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                  </div>

                ) : (

                  <div className="aspect-[16/9] bg-gradient-to-br from-slate-800 via-blue-900 to-slate-950 flex items-center justify-center">

                    <span className="text-5xl">
                      ◈
                    </span>

                  </div>

                )}

                <div className="p-7">

                  <span className="text-[10px] font-black tracking-[0.18em] text-green-600 dark:text-green-400">
                    {post.category}
                  </span>

                  <h3 className="mt-4 text-xl font-black leading-snug text-slate-900 dark:text-white">
                    {post.title}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-400">
                    {post.excerpt}
                  </p>

                  <div className="mt-6 flex items-center justify-between">

                    <span className="text-xs text-slate-500 dark:text-slate-500">
                      {post.date}
                    </span>

                    <button
                      onClick={() => {
                        setSelectedPost(post);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="text-sm font-black text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      READ MORE →
                    </button>

                  </div>

                </div>

              </article>

            ))}

          </div>

        </div>

        {/* CTA */}
        <div className="mt-20 rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.03] p-8 md:p-12 text-center">

          <p className="text-xs font-black tracking-[0.2em] text-green-600 dark:text-green-400">
            NEED PRODUCTION SUPPORT?
          </p>

          <h2 className="mt-4 text-3xl md:text-4xl font-black text-slate-900 dark:text-white">
            Keep your team focused on building.
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-slate-600 dark:text-slate-400">
            Let MaVi specialists help monitor, support and maintain your
            production workloads.
          </p>

          <a
            href="mailto:support@mavisolution.com"
            className="inline-block mt-7 px-8 py-3 rounded-xl bg-gradient-to-r from-[#42E695] to-[#3BB2B8] text-slate-950 font-black hover:scale-105 transition-transform"
          >
            TALK TO OUR TEAM
          </a>

        </div>

      </div>

    </section>
  );
};

export default Blog;