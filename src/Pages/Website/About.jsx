import React from 'react';
import { Button } from "@/components/ui/button"
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6">About Us</h1>
      <div className="prose max-w-3xl text-slate-600">
        <p className="mb-4">
          We are a team of passionate developers building great tools with React.
          This page demonstrates a simple route transition without reloading the browser.
        </p>
        <p className="mb-8">
          Our mission is to simplify web development using modern tools like Shadcn UI,
          Tailwind CSS, and React Router DOM.
        </p>
        
        <Link to="/">
          <Button variant="secondary">Back to Home</Button>
        </Link>
      </div>
    </div>
  );
};

export default About;