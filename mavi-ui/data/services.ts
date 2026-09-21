/**
 * Canonical service catalogue.
 *
 * This is the single source of truth for: the ServicePortfolio cards, the
 * /services index, each /services/<slug> page, Service JSON-LD, the sitemap,
 * and llms.txt. Adding a service here automatically adds its route, its
 * sitemap entry and its schema.
 *
 * Previously this data lived inline in ServicePortfolio.tsx and the detail copy
 * was only reachable through a click-to-open modal, so it never appeared in the
 * DOM for crawlers.
 */

export interface ServiceDetail {
  overview: string;
  features: string[];
  benefits: string[];
}

export interface Offering {
  /** URL segment: /services/<slug> */
  slug: string;
  title: string;
  /** Card blurb and meta description source. */
  desc: string;
  /** Font Awesome icon class. */
  icon: string;
  color: 'blue' | 'green';
  /** Page <title> (kept under ~60 chars with the brand suffix). */
  metaTitle: string;
  details: ServiceDetail;
}

export const OFFERINGS: Offering[] = [
  {
    slug: 'sre-as-a-service',
    title: 'SRE as a Service',
    desc: 'Proactive incident management, 24/7 on-call response, and deep Root Cause Analysis to ensure maximum stability.',
    icon: 'fa-server',
    color: 'blue',
    metaTitle: 'SRE as a Service | 24/7 Incident Response',
    details: {
      overview:
        "Our SRE as a Service provides a comprehensive approach to reliability, combining engineering discipline with operational excellence. We don't just fix problems; we build systems that prevent them.",
      features: [
        '24/7 Incident Response & On-call',
        'Deep Root Cause Analysis (RCA)',
        'Service Level Objectives (SLOs) Management',
        'Error Budget Tracking & Management',
      ],
      benefits: [
        'Maximum System Stability',
        'Reduced Mean Time To Recovery (MTTR)',
        'Data-Driven Reliability Decisions',
        'Improved Engineering Velocity',
      ],
    },
  },
  {
    slug: 'monitoring-observability',
    title: 'Monitoring & Observability',
    desc: 'Building "single panes of glass" with real-time dashboards, distributed tracing, and intelligent logging.',
    icon: 'fa-eye',
    color: 'green',
    metaTitle: 'Monitoring & Observability Services',
    details: {
      overview:
        'We provide full-stack visibility into your systems, enabling you to understand not just IF something is broken, but WHY it happened and HOW it affects users.',
      features: [
        'Real-time Custom Dashboards',
        'Distributed Request Tracing',
        'Centralized Log Aggregation',
        'Intelligent Alerting & Anomaly Detection',
      ],
      benefits: [
        'Proactive Issue Detection',
        'Complete System Visibility',
        'Faster Troubleshooting',
        'Enhanced User Experience Insights',
      ],
    },
  },
  {
    slug: 'devops-automation',
    title: 'DevOps Automation',
    desc: 'Streamlining deployment cycles with high-performance CI/CD pipelines and Infrastructure as Code (IaC).',
    icon: 'fa-gears',
    color: 'blue',
    metaTitle: 'DevOps Automation & CI/CD Pipelines',
    details: {
      overview:
        'We automate the path from code to production, ensuring that every deployment is predictable, repeatable, and safe.',
      features: [
        'High-Performance CI/CD Pipelines',
        'Infrastructure as Code (Terraform, Ansible)',
        'Automated Security Scanning',
        'Container Orchestration (Kubernetes)',
      ],
      benefits: [
        'Faster Time-to-Market',
        'Consistent Environments',
        'Reduced Human Error',
        'Scalable Deployment Processes',
      ],
    },
  },
  {
    slug: 'cloudops',
    title: 'CloudOps',
    desc: 'Comprehensive cloud management including cost optimization, dynamic scaling, and robust disaster recovery.',
    icon: 'fa-cloud',
    color: 'blue',
    metaTitle: 'CloudOps | Cloud Cost Optimization & DR',
    details: {
      overview:
        'We manage your cloud infrastructure to ensure it is cost-effective, secure, and resilient enough to handle any load.',
      features: [
        'Cloud Cost Optimization & FinOps',
        'Multi-cloud & Hybrid Cloud Strategy',
        'Dynamic Auto-scaling Policies',
        'Robust Disaster Recovery Planning',
      ],
      benefits: [
        'Significant Cost Savings',
        'High Availability & Resilience',
        'Seamless Scalability',
        'Compliance & Security Alignment',
      ],
    },
  },
  {
    slug: 'performance-engineering',
    title: 'Performance Engineering',
    desc: 'Rigorous load testing, capacity planning, and fine-tuning to eliminate bottlenecks at the infrastructure layer.',
    icon: 'fa-gauge-high',
    color: 'green',
    metaTitle: 'Performance Engineering & Load Testing',
    details: {
      overview:
        'We ensure your systems can handle the pressure of growth by identifying and eliminating performance bottlenecks before they impact users.',
      features: [
        'Continuous Load & Stress Testing',
        'Accurate Capacity Planning',
        'Application Performance Tuning',
        'Database Optimization',
      ],
      benefits: [
        'Future-Proof Scalability',
        'Optimized Resource Usage',
        'Blazing Fast Response Times',
        'Reduced Infrastructure Over-provisioning',
      ],
    },
  },
  {
    slug: 'web-hosting-smb',
    title: 'Web Hosting for SMBs',
    desc: 'Reliable, high-speed hosting environments engineered for growing brands. Secure, fully managed, and optimized for conversion.',
    icon: 'fa-laptop-code',
    color: 'green',
    metaTitle: 'Managed Web Hosting for Small Business',
    details: {
      overview:
        'We provide enterprise-grade hosting solutions tailored for small and medium businesses, focusing on security, speed, and reliability.',
      features: [
        'Fully Managed Security & WAF',
        'Daily Automated Backups',
        'Global Content Delivery Network (CDN)',
        'Free SSL & Performance Optimization',
      ],
      benefits: [
        'Peace of Mind Security',
        'Improved SEO & Conversion Rates',
        'Zero-Maintenance Infrastructure',
        'Expert Technical Support',
      ],
    },
  },
  {
    slug: 'offshore-development-center',
    title: 'Offshore Development Center',
    desc: 'Dedicated engineering teams that integrate seamlessly with your organization, providing scalable and cost-effective development power.',
    icon: 'fa-building-user',
    color: 'blue',
    metaTitle: 'Offshore Development Center (ODC)',
    details: {
      overview:
        'Our Offshore Development Center (ODC) model provides you with a dedicated team of experts who work as an extension of your in-house engineering department. We handle the recruitment, infrastructure, and management while you maintain full control over the product roadmap.',
      features: [
        'Dedicated Full-Stack Engineering Teams',
        'Seamless Integration with In-House Workflows',
        'Scalable Resource Allocation',
        'End-to-End Project Management Support',
      ],
      benefits: [
        'Significant Reduction in Operational Costs',
        'Access to Global Talent Pool',
        'Faster Scaling of Development Capacity',
        'Focus on Core Business Objectives',
      ],
    },
  },
];

export const getOffering = (slug: string): Offering | undefined =>
  OFFERINGS.find((o) => o.slug === slug);
