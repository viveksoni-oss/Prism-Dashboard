import React from 'react';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Layout, Zap, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="py-24 text-center container mx-auto px-4">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-6">
          Welcome to <span className="text-blue-600">MyBrand</span>
        </h1>
        <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
          We build digital experiences using the latest tech stack. 
          Navigate through our site to see React Router in action.
        </p>
        <div className="flex justify-center gap-4">
          <Link to="/contact">
            <Button size="lg" className="px-8">Contact Us</Button>
          </Link>
          <Link to="/about">
            <Button size="lg" variant="outline">About Us</Button>
          </Link>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <Zap className="w-8 h-8 text-blue-500 mb-2" />
              <CardTitle>Fast Performance</CardTitle>
            </CardHeader>
            <CardContent>
              Optimized for speed and efficiency using Vite.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Layout className="w-8 h-8 text-blue-500 mb-2" />
              <CardTitle>Modern UI</CardTitle>
            </CardHeader>
            <CardContent>
              Styled with Tailwind CSS and Shadcn components.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Globe className="w-8 h-8 text-blue-500 mb-2" />
              <CardTitle>Global Reach</CardTitle>
            </CardHeader>
            <CardContent>
              Accessible design that works everywhere.
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;