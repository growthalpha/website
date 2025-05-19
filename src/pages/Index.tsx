import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import NetworkGraph from '@/components/NetworkGraph';
import TypingText from '@/components/TypingText';
import FeatureCard from '@/components/FeatureCard';
import ComparisonItem from '@/components/ComparisonItem';
import TeamMemberCard from '@/components/TeamMemberCard';
import SectionHeading from '@/components/SectionHeading';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

// Partner logos (you'll need to add these to your public folder)
const partnerLogos = [
  { name: "Khatabook", logo: "/partner1.png" },
  { name: "StableMoney", logo: "/partner2.png" },
];

const Index = () => {
  const { toast } = useToast();
  const [networkEnabled, setNetworkEnabled] = useState(true);

  const handleEmailSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Request received!",
      description: "We'll be in touch soon.",
    });

    // Clear form
    const form = e.target as HTMLFormElement;
    form.reset();
  };

  // Toggle network background
  // To enable/disable the network, toggle the networkEnabled state variable
  // e.g. setNetworkEnabled(!networkEnabled)

  // Handle element animations on scroll
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    // Observe all elements with data-animate class
    document.querySelectorAll('[data-animate]').forEach((el) => {
      el.classList.add('opacity-0');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-navy text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-navy min-h-[85vh] flex items-center pt-32 md:pt-40 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium mb-6 leading-tight">
              Agentic AI that autonomously drives<br />
              <div className="inline-block min-w-[1em]">
                <TypingText 
                  words={['growth', 'conversion', 'retention', 'cross-sell', 'up-sell', 'repeat']} 
                />
              </div>
            </h1>
            
            <p className="text-xl md:text-2xl text-neon-text/80 mb-10 max-w-3xl mx-auto">
              GrowthAlpha autonomously analyzes user data, generates hypotheses, creates microsegments, and executes targeted interventions — helping growth teams 10× their LTV.
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button 
                className="bg-neon-blue hover:bg-neon-blue/90 hover:shadow-[0_0_15px_rgba(91,129,253,0.5)] transition-all text-white font-normal px-8 py-6 text-lg group"
                onClick={() => {
                  const ctaSection = document.getElementById('cta');
                  if (ctaSection) {
                    ctaSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Get Early Access
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 md:py-40 bg-navy relative">
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeading 
            title="How It Works"
            subtitle="The shift from static dashboards to autonomous decision-making"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 max-w-5xl mx-auto" data-animate>
            <div className="bg-navy-card p-8 rounded-lg">
              <div className="mb-6">
                <h3 className="text-xl font-medium text-neon-text/70 mb-2">Traditional Approach</h3>
                <h4 className="text-2xl font-medium">Data Dashboards</h4>
              </div>
              
              <div className="space-y-4">
                <ComparisonItem 
                  title="Human Interpretation Required"
                  description="Teams must manually analyze data, identify patterns, and develop hypotheses"
                />
                <ComparisonItem 
                  title="Limited Segmentation"
                  description="Broad segments miss opportunities hidden in microsegment behaviors"
                />
                <ComparisonItem 
                  title="Manual Execution"
                  description="Teams must manually implement and monitor each intervention"
                />
                <ComparisonItem 
                  title="Reactive Decision-Making"
                  description="Actions taken after analyzing historical data, often too late"
                />
              </div>
              
              <div className="mt-8 py-4 px-6 bg-navy-light/50 text-neon-text/70 rounded">
                <p className="text-sm font-medium">
                  <span className="text-neon-text font-bold">Outcome:</span> Slow iteration cycles, missed opportunities, team burnout
                </p>
              </div>
            </div>
            
            <div className="bg-navy-card p-8 rounded-lg">
              <div className="mb-6">
                <h3 className="text-xl font-medium text-neon-green mb-2">GrowthAlpha Approach</h3>
                <h4 className="text-2xl font-medium">Agentic AI</h4>
              </div>
              
              <div className="space-y-4">
                <ComparisonItem 
                  title="Autonomous Analysis"
                  description="AI continuously analyzes data and automatically generates hypotheses"
                  isPositive
                />
                <ComparisonItem 
                  title="Microsegmentation"
                  description="Dynamically creates precise user segments based on behavior patterns"
                  isPositive
                />
                <ComparisonItem 
                  title="Autonomous Execution"
                  description="AI implements, monitors, and adjusts interventions in real-time"
                  isPositive
                />
                <ComparisonItem 
                  title="Proactive Optimization"
                  description="Predicts user behavior and takes action before issues arise"
                  isPositive
                />
              </div>
              
              <div className="mt-8 py-4 px-6 bg-neon-green/10 text-neon-green rounded">
                <p className="text-sm font-medium">
                  <span className="text-neon-green font-bold">Outcome:</span> 10× faster iteration, automated optimization, team focus on strategy
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-16 bg-navy-card rounded-lg p-8 max-w-5xl mx-auto" data-animate>
            <h3 className="text-2xl font-medium mb-4 text-center">The Agentic Advantage</h3>
            <p className="text-center text-lg">
              GrowthAlpha shifts your team from reactive data analysis to <span className="bg-gradient-to-r from-neon-green to-neon-blue text-transparent bg-clip-text">strategic growth planning</span>, while AI handles the execution. Your team stays focused on creative strategy while our AI platform continuously optimizes user journeys and business outcomes.
            </p>
          </div>
        </div>
      </section>
      
      {/* Who It's For Section */}
      <section id="who-its-for" className="py-20 md:py-32 bg-navy relative">
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeading 
            title="Who It's For"
            subtitle="GrowthAlpha empowers teams to achieve growth goals without manual data work"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <FeatureCard
              title="Growth Product Managers"
              description="Optimize user journeys and drive core metrics without getting lost in data analysis or manual campaign execution."
              icon={
                <svg className="w-8 h-8 text-neon-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
              data-animate
            />
            
            <FeatureCard
              title="Growth Marketers"
              description="Create and deploy personalized user communications at scale without manual segment building or campaign management."
              icon={
                <svg className="w-8 h-8 text-neon-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              }
              data-animate
            />
            
            <FeatureCard
              title="CRM Teams"
              description="Automate the end-to-end lifecycle messaging process from audience identification to message optimization and delivery."
              icon={
                <svg className="w-8 h-8 text-neon-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                </svg>
              }
              data-animate
            />
          </div>
          
          <div className="mt-20 bg-navy-card rounded-lg p-8 max-w-5xl mx-auto" data-animate>
            <h3 className="text-2xl font-medium mb-4 text-center">Ideal for B2C Apps & Platforms</h3>
            <p className="text-center mb-8">GrowthAlpha works best for businesses with:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4 max-w-3xl mx-auto">
              {[
                "Large user bases with diverse behaviors",
                "Complex customer journeys or lifecycle stages",
                "Multiple marketing and communication channels",
                "Interest in automating repetitive growth workflows"
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-6 h-6 rounded-full bg-neon-blue/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-neon-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Design Partners Section */}
      <section id="design-partners" className="py-20 md:py-32 bg-navy relative">
        <div className="mt-20 bg-navy-card rounded-lg p-8 max-w-5xl mx-auto" data-animate>
          <div className="container mx-auto px-4 relative z-10">
            <SectionHeading 
              title="Design Partners"
              subtitle="We're working with leading companies to shape the future of growth"
            />
            
            <div className="flex flex-wrap justify-center items-center gap-12 max-w-5xl mx-auto" data-animate>
              {partnerLogos.map((partner, index) => (
                <div key={index} className="w-60 h-24 bg-navy-card rounded-md flex items-center justify-center p-4">
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="max-w-full max-h-full object-contain opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section id="team" className="py-20 md:py-32 bg-navy relative">
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeading 
            title="Founding Team"
            subtitle="Built by veterans from Growth, Data, and AI"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <TeamMemberCard
              name="Alex Chen"
              title="Founder & CEO"
              bio="Former Head of Growth at Spotify. Led teams that scaled user acquisition and retention initiatives across 30+ markets."
              color="indigo"
              data-animate
            />
            
            <TeamMemberCard
              name="Sasha Patel"
              title="CTO & Co-founder"
              bio="AI researcher with 10+ years experience. Previously led machine learning teams at Google working on recommendation systems."
              color="teal"
              data-animate
            />
            
            <TeamMemberCard
              name="Jordan Lee"
              title="CPO & Co-founder"
              bio="Former Director of Product at Stripe. Specialized in building data-driven products that drive business growth through automation."
              color="purple"
              data-animate
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section id="cta" className="py-20 md:py-32 bg-navy relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center" data-animate>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Ready to Transform Your Growth?</h2>
            <p className="text-xl mb-8 text-neon-text/80">
              Join our exclusive early access program and be among the first to experience autonomous growth.
            </p>
            
            <form onSubmit={handleEmailSubmit} className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                required 
                className="bg-navy border-neon-blue/50 h-12 text-white"
              />
              <Button 
                type="submit"
                className="bg-neon-blue hover:bg-neon-blue/90 hover:shadow-[0_0_15px_rgba(91,129,253,0.5)] transition-all text-white font-normal px-8 py-6 text-lg group"
              >
                Get Early Access
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-navy py-8 border-t border-neon-blue/20">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center">
            <p className="text-neon-text/50 text-sm">
              © 2025 GrowthAlpha. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Network Graph that spans the entire page */}
      <NetworkGraph enabled={networkEnabled} />
      
      {/* Background Animation Toggle (not visible on the website, only for development) */}
      {/* Uncomment this to see the toggle on the page
      <div className="fixed bottom-4 right-4 bg-navy-card p-2 rounded-md flex items-center space-x-2 z-50">
        <span className="text-sm text-neon-text">Background Animation</span>
        <Switch checked={networkEnabled} onCheckedChange={setNetworkEnabled} />
      </div>
      */}
    </div>
  );
};

export default Index;
