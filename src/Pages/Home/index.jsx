import React from "react";
import {
  ArrowRight,
  Zap,
  TrendingUp,
  Users,
  Target,
  Lightbulb,
  Rocket,
  Award,
  CheckCircle,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import GradientText from "@/components/GradientText";
import FloatingLines from "@/components/FloatingLines";

function Home() {
  const gradient4 = [" #10b981", "#06b6d4", "#3b82f6", "#0ea5e9 "];
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-50 overflow-hidden">
      {/* ========== HERO SECTION ========== */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 py-20">
        {/* Floating background animation */}
        <div className="absolute inset-0 z-10 overflow-hidden">
          <FloatingLines
            linesGradient={gradient4}
            enabledWaves={["top", "bottom"]}
            lineCount={[10, 15, 20]}
            lineDistance={[8, 6, 4]}
            bendRadius={5.0}
            bendStrength={-0.5}
            interactive={true}
            parallax={true}
          />
        </div>

        {/* Gradient blurs */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-5xl mx-auto text-center space-y-10 relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 backdrop-blur-sm">
            <Zap className="w-4 h-4 text-emerald-400" />
            <span className="text-sm font-medium bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent">
              Empowering Innovation Across India
            </span>
          </div>

          {/* Main heading */}
          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl lg:text-8xl font-black tracking-tighter leading-tight">
              <GradientText
                colors={["#4ade80", "#06b6d4", "#0ea5e9"]}
                animationSpeed={1.5}
              >
                PRISM Program
              </GradientText>
              <br />
              <span className="text-2xl md:text-4xl text-slate-400 font-light mt-4 block">
                by DSIR
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
              Transform groundbreaking ideas into market-ready solutions.
              Supporting startups and innovators at every stage of their journey
              from concept to commercialization.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white gap-2 px-8 py-6 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Apply Now <ArrowRight className="w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-slate-600 hover:bg-slate-800/50 backdrop-blur-sm px-8 py-6 text-base font-semibold transition-all duration-300"
            >
              Learn More
            </Button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-6 md:gap-10 pt-12">
            {[
              { value: "500+", label: "Startups Supported" },
              { value: "₹250 Cr", label: "Total Grants" },
              { value: "95%", label: "Success Rate" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="space-y-2 backdrop-blur-sm bg-slate-800/30 border border-slate-700/50 rounded-lg p-4"
              >
                <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <p className="text-xs md:text-sm text-slate-400 font-medium uppercase tracking-wide">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== JOURNEY SECTION ========== */}
      <section className="py-24 px-4 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
              Your Innovation Journey
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              We support you through every stage of development with tailored
              resources and mentorship
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Lightbulb,
                title: "Idea Stage",
                desc: "Validate your concept and secure initial seed funding",
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: Target,
                title: "Development",
                desc: "Build and refine your prototype with expert guidance",
                color: "from-cyan-500 to-emerald-500",
              },
              {
                icon: Rocket,
                title: "Commercialization",
                desc: "Scale to market with investor and partner support",
                color: "from-emerald-500 to-teal-500",
              },
              {
                icon: Award,
                title: "Growth",
                desc: "Access networks and expand globally",
                color: "from-teal-500 to-blue-500",
              },
            ].map((stage, idx) => (
              <div key={stage.title} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur-xl" />
                <Card className="relative bg-gradient-to-br from-slate-800/60 to-slate-900/30 border-slate-700/50 hover:border-emerald-500/50 backdrop-blur-sm transition-all duration-300 h-full overflow-hidden group-hover:bg-slate-800/80">
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-emerald-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <CardHeader>
                    <div
                      className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${stage.color} w-fit mb-4`}
                    >
                      <stage.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold">
                      {stage.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {stage.desc}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FEATURES SECTION ========== */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
              Comprehensive Support
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Everything you need to succeed, from funding to mentorship
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: "💰",
                title: "Financial Support",
                desc: "Grants up to ₹50 lakhs for validation and prototyping",
                features: [
                  "Seed funding",
                  "Project grants",
                  "Milestone-based disbursement",
                ],
              },
              {
                icon: "👥",
                title: "Expert Mentorship",
                desc: "Learn from industry leaders and technical experts",
                features: ["1-on-1 mentoring", "Workshops", "Peer networking"],
              },
              {
                icon: "🏢",
                title: "Incubation Facilities",
                desc: "Access state-of-the-art labs across India",
                features: [
                  "Shared workspace",
                  "Lab equipment",
                  "High-speed internet",
                ],
              },
              {
                icon: "🤝",
                title: "Market Access",
                desc: "Connect with investors, partners, and customers",
                features: [
                  "Investor connects",
                  "B2B partnerships",
                  "Customer discovery",
                ],
              },
              {
                icon: "🛡️",
                title: "IP Protection",
                desc: "Legal support for patents and intellectual property",
                features: [
                  "Patent filing",
                  "Legal guidance",
                  "IP registration",
                ],
              },
              {
                icon: "📅",
                title: "Networking Events",
                desc: "Pitch days, demos, and investor conferences",
                features: ["Monthly pitch days", "Annual summit", "Demo day"],
              },
            ].map((feature) => (
              <Card
                key={feature.title}
                className="bg-gradient-to-br from-slate-800/40 to-slate-900/20 border-slate-700/50 hover:border-emerald-500/50 backdrop-blur-sm transition-all duration-300 group"
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl">{feature.icon}</div>
                    <CheckCircle className="w-5 h-5 text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <CardTitle className="text-xl font-bold">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 text-sm mb-4">{feature.desc}</p>
                  <ul className="space-y-2">
                    {feature.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-2 text-xs text-slate-400"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SUCCESS STORIES ========== */}
      <section className="py-24 px-4 bg-gradient-to-b from-slate-900/50 via-slate-900/80 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
              Success Stories
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Startups transforming industries with PRISM support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "AgriSense Labs",
                sector: "Agritech",
                image:
                  "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400&h=300&fit=crop",
                impact: "Helping 10,000+ farmers increase yield by 30%",
                metric: "+30% yield",
              },
              {
                name: "MedPulse Analytics",
                sector: "Healthtech",
                image:
                  "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=300&fit=crop",
                impact: "AI diagnostic platform used in 50+ hospitals",
                metric: "50+ hospitals",
              },
              {
                name: "CleanGrid Energy",
                sector: "Cleantech",
                image:
                  "https://images.unsplash.com/photo-1509391366360-2e938d440220?w=400&h=300&fit=crop",
                impact: "Reduced energy costs by 40% for 5,000+ users",
                metric: "-40% costs",
              },
              {
                name: "NeuroTech Solutions",
                sector: "Deeptech",
                image:
                  "https://images.unsplash.com/photo-1677442d019cecf3da4991854202b7f9?w=400&h=300&fit=crop",
                impact: "Brain-computer interface raising $5M Series A",
                metric: "$5M Series A",
              },
              {
                name: "WaterFlow Systems",
                sector: "Sustainability",
                image:
                  "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop",
                impact: "Saving 1M liters of water daily",
                metric: "1M L/day",
              },
              {
                name: "FoodTech Innovations",
                sector: "FoodTech",
                image:
                  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
                impact: "Reducing food waste by 35% in supply chain",
                metric: "-35% waste",
              },
            ].map((story) => (
              <Card
                key={story.name}
                className="overflow-hidden bg-slate-800/40 border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300 group cursor-pointer backdrop-blur-sm"
              >
                <div className="relative h-56 overflow-hidden bg-slate-700">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                  <div className="absolute top-3 right-3">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 border border-emerald-500/50 text-emerald-300">
                      {story.sector}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3">
                    <p className="text-2xl font-black text-emerald-400">
                      {story.metric}
                    </p>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-lg font-bold">
                    {story.name}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {story.impact}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA SECTION ========== */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-300" />
            <div className="relative bg-gradient-to-br from-slate-800/60 to-slate-900/40 border border-emerald-500/30 rounded-2xl p-12 md:p-16 text-center space-y-8 backdrop-blur-sm">
              <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
                Ready to transform your idea?
              </h2>
              <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
                Join 500+ innovators shaping the future with PRISM. Apply now
                and get your innovation journey started.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white gap-2 px-8 py-6 text-base font-semibold shadow-lg"
                >
                  Apply Now <ArrowRight className="w-5 h-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-600 hover:bg-slate-800/50 px-8 py-6 text-base font-semibold"
                >
                  Download Guidelines
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="border-t border-slate-800/50 py-16 px-4 bg-slate-950/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {[
              {
                title: "Program",
                links: ["About PRISM", "Eligibility", "Apply"],
              },
              {
                title: "Resources",
                links: ["Documentation", "FAQs", "Blog"],
              },
              {
                title: "Connect",
                links: ["Twitter", "LinkedIn", "Facebook"],
              },
              {
                title: "Legal",
                links: ["Privacy", "Terms", "Disclaimer"],
              },
            ].map((col) => (
              <div key={col.title}>
                <h3 className="font-bold text-emerald-400 mb-4 text-sm uppercase tracking-wide">
                  {col.title}
                </h3>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-slate-400 hover:text-emerald-400 transition text-sm"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-slate-800/50 pt-8 text-center">
            <p className="text-slate-500 text-sm">
              &copy; 2024 PRISM Program by DSIR. All rights reserved. |
              Empowering India's Innovation Ecosystem
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
