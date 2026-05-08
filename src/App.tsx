/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { ProofBar } from './components/ProofBar';
import { FeaturedProjects } from './components/FeaturedProjects';
import { CaseStudies } from './components/CaseStudies';
import { SkillsBento } from './components/SkillsBento';
import { AboutStory } from './components/AboutStory';
import { LiveDemo } from './components/LiveDemo';
import { FooterCTA } from './components/FooterCTA';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-primary selection:bg-white/10 selection:text-white">
      <Navigation />
      
      <main>
        <Hero />
        <ProofBar />
        <FeaturedProjects />
        <CaseStudies />
        <SkillsBento />
        <LiveDemo />
        <AboutStory />
      </main>

      <FooterCTA />
    </div>
  );
}

