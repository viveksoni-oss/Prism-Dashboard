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
  LogIn, // Added Icon
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import GradientText from "@/components/GradientText";
import FloatingLines from "@/components/FloatingLines";
import { useNavigate } from "react-router-dom"; // 1. Import useNavigate

function Home() {
  const navigate = useNavigate(); // 2. Initialize hook
  const gradientLight = ["#60a5fa", "#38bdf8", "#818cf8", "#22d3ee"];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 overflow-hidden transition-colors duration-300 relative">
      {/* 3. LOGIN BUTTON - Fixed to top right */}
      <div className="absolute top-6 right-6 z-50">
        <Button
          onClick={() => navigate("/login")}
          variant="ghost"
          className="group flex items-center gap-2 text-slate-600 hover:text-sky-600 dark:text-slate-300 dark:hover:text-sky-400 font-medium transition-all"
        >
          <span>Log in</span>
          <LogIn className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </Button>
      </div>

      {/* ========== HERO SECTION ========== */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 py-20 bg-gradient-to-b from-white via-sky-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        {/* Floating background animation - ONLY VISIBLE IN DARK MODE */}
        <div className="absolute inset-0 z-10 overflow-hidden hidden dark:block">
          <FloatingLines
            linesGradient={gradientLight}
            enabledWaves={["top", "bottom"]}
            lineCount={[10, 15, 20]}
            lineDistance={[8, 6, 4]}
            bendRadius={5.0}
            bendStrength={-0.5}
            interactive={true}
            parallax={true}
          />
        </div>

        {/* Lighter Gradient blurs */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-sky-400/10 dark:bg-sky-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-400/10 dark:bg-blue-400/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-cyan-400/10 dark:bg-cyan-400/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-5xl mx-auto text-center space-y-10 relative z-10">
          {/* Main heading */}
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-tight">
              <GradientText
                colors={["#38bdf8", "#60a5fa", "#22d3ee"]}
                animationSpeed={1.5}
              >
                PRISM
              </GradientText>
            </h1>

            {/* FULL FORM SECTION */}
            <div className="space-y-2">
              <h2 className="text-xl md:text-3xl font-bold text-slate-700 dark:text-slate-200 tracking-tight">
                Promoting Innovations in Individuals, Start-ups and MSMEs
              </h2>
              <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 font-light">
                Supported by Department of Scientific and Industrial Research
                (DSIR)
              </p>
            </div>

            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed font-light pt-6">
              Transform groundbreaking ideas into market-ready solutions.
              Supporting innovators from concept to commercialization.
            </p>
          </div>

          {/* CTA Buttons - Lighter Gradients */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-sky-500 to-blue-500 hover:from-sky-600 hover:to-blue-600 text-white gap-2 px-8 py-6 text-base font-semibold shadow-lg hover:shadow-sky-500/25 transition-all duration-300"
            >
              Apply Now <ArrowRight className="w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-transparent hover:bg-slate-50 dark:hover:bg-slate-800/50 text-slate-900 dark:text-slate-100 backdrop-blur-sm px-8 py-6 text-base font-semibold transition-all duration-300"
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
                className="space-y-2 backdrop-blur-md bg-white/60 dark:bg-slate-800/30 border border-slate-200 dark:border-slate-700/50 rounded-lg p-4 shadow-sm dark:shadow-none"
              >
                <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-sky-500 to-blue-500 dark:from-sky-400 dark:to-blue-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wide">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ... (Rest of the sections: Journey, Features, Stories, Footer remain exactly the same) ... */}

      {/* I have hidden the rest of the code for brevity, but include everything from your previous snippet below this line starting with the Journey Section */}
      {/* ========== JOURNEY SECTION ========== */}
      <section className="py-24 px-4 bg-gradient-to-b from-transparent via-sky-50/50 dark:via-slate-900/50 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight text-slate-900 dark:text-slate-50">
              Your Innovation Journey
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
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
                color: "from-cyan-400 to-sky-400",
              },
              {
                icon: Target,
                title: "Development",
                desc: "Build and refine your prototype with expert guidance",
                color: "from-sky-400 to-blue-400",
              },
              {
                icon: Rocket,
                title: "Commercialization",
                desc: "Scale to market with investor and partner support",
                color: "from-blue-400 to-indigo-400",
              },
              {
                icon: Award,
                title: "Growth",
                desc: "Access networks and expand globally",
                color: "from-indigo-400 to-violet-400",
              },
            ].map((stage, idx) => (
              <div key={stage.title} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur-xl" />
                <Card className="relative bg-white dark:bg-slate-800/40 border-slate-200 dark:border-slate-700/50 hover:border-sky-400/50 dark:hover:border-sky-400/50 shadow-sm dark:shadow-none hover:shadow-md transition-all duration-300 h-full overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-sky-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <CardHeader>
                    <div
                      className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${stage.color} w-fit mb-4 shadow-md`}
                    >
                      <stage.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-slate-900 dark:text-slate-50">
                      {stage.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
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
            <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight text-slate-900 dark:text-slate-50">
              Comprehensive Support
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
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
                className="bg-white dark:bg-slate-800/40 border-slate-200 dark:border-slate-700/50 hover:border-sky-400/50 hover:shadow-md transition-all duration-300 group shadow-sm dark:shadow-none"
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl">{feature.icon}</div>
                    <CheckCircle className="w-5 h-5 text-sky-500 dark:text-sky-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900 dark:text-slate-50">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                    {feature.desc}
                  </p>
                  <ul className="space-y-2">
                    {feature.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-sky-500 dark:bg-sky-400" />
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
      <section className="py-24 px-4 bg-gradient-to-b from-slate-50 via-sky-50/50 to-transparent dark:from-slate-900/50 dark:via-slate-900/80 dark:to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight text-slate-900 dark:text-slate-50">
              Success Stories
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
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
                className="overflow-hidden bg-white dark:bg-slate-800/40 border-slate-200 dark:border-slate-700/50 hover:border-sky-400/50 hover:shadow-lg transition-all duration-300 group cursor-pointer backdrop-blur-sm shadow-sm dark:shadow-none"
              >
                <div className="relative h-56 overflow-hidden bg-slate-100 dark:bg-slate-700">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Dark gradient for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />

                  <div className="absolute top-3 right-3">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-sky-500/20 border border-sky-500/50 text-sky-200 backdrop-blur-md">
                      {story.sector}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3">
                    <p className="text-2xl font-black text-sky-400">
                      {story.metric}
                    </p>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-lg font-bold text-slate-900 dark:text-slate-50">
                    {story.name}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
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
            <div className="absolute inset-0 bg-gradient-to-r from-sky-400/20 to-blue-400/20 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-300" />
            <div className="relative bg-white/80 dark:bg-slate-800/60 border border-slate-200 dark:border-sky-500/30 rounded-2xl p-12 md:p-16 text-center space-y-8 backdrop-blur-sm shadow-xl dark:shadow-none">
              <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-tight text-slate-900 dark:text-slate-50">
                Ready to transform your idea?
              </h2>
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                Join 500+ innovators shaping the future with PRISM. Apply now
                and get your innovation journey started.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-sky-500 to-blue-500 hover:from-sky-600 hover:to-blue-600 text-white gap-2 px-8 py-6 text-base font-semibold shadow-lg hover:shadow-sky-500/25"
                >
                  Apply Now <ArrowRight className="w-5 h-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/50 px-8 py-6 text-base font-semibold"
                >
                  Download Guidelines
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="border-t border-slate-200 dark:border-slate-800/50 py-16 px-4 bg-slate-50 dark:bg-slate-950/50 backdrop-blur-sm">
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
                <h3 className="font-bold text-sky-600 dark:text-sky-400 mb-4 text-sm uppercase tracking-wide">
                  {col.title}
                </h3>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-slate-500 hover:text-sky-500 dark:text-slate-400 dark:hover:text-sky-400 transition text-sm"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-slate-200 dark:border-slate-800/50 pt-8 text-center">
            <p className="text-slate-500 dark:text-slate-500 text-sm">
              &copy; 2024 PRISM Program by DSIR. All rights reserved. |
              Promoting Innovations in Individuals, Start-ups and MSMEs
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
