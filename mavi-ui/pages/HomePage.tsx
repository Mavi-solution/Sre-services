import React from 'react';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { SREPhilosophy } from '../components/SREPhilosophy';
import { ServicePortfolio } from '../components/ServicePortfolio';
import { ClientsSection } from '../components/ClientsSection';
import { ServicesTable } from '../components/ServicesTable';
import { AIAdvantage } from '../components/AIAdvantage';
import { CaseStudy } from '../components/CaseStudy';
import { TechStack } from '../components/TechStack';
import { ContactSection } from '../components/ContactSection';

export const HomePage: React.FC = () => (
  <>
    <Hero />
    <About />
    <SREPhilosophy />
    <section id="what-we-do">
      <ServicePortfolio />
      <ClientsSection />
      <ServicesTable />
      <AIAdvantage />
    </section>
    <CaseStudy />
    <TechStack />
    <ContactSection />
  </>
);
