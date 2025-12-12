import React from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-16 flex justify-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Get in Touch</CardTitle>
          <CardDescription>Send us a message and we'll reply ASAP.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Name</label>
            <Input placeholder="Your name" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Email</label>
            <Input type="email" placeholder="john@example.com" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Message</label>
            {/* Using Input as a textarea workaround since we didn't install Textarea component */}
            <Input className="h-24" placeholder="How can we help?" />
          </div>
          <Button className="w-full">Send Message</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Contact;