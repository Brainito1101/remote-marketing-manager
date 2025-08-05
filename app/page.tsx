"use client"

import { Check, Phone, Star, Shield, ArrowRight } from "lucide-react"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import Link from "next/link";
import Image from "next/image";

export default function RemoteMarketingManagerPage() {
  const [showThankYou, setShowThankYou] = useState(false)
  const [form, setForm] = useState({
    full_name: '',
    phone: '',
    email: '',
    website: '',
    marketing_challenge: ''
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

const handleSubmit = async (e) => {
  e.preventDefault()

  const response = await fetch('https://ai.brainito.com/api/remote-manager/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(form)
  })

  if (response.ok) {
    // Reset form
    setForm({
      full_name: '',
      phone: '',
      email: '',
      website: '',
      marketing_challenge: ''
    });

    // Show thank you message
    setShowThankYou(true);

    // Hide it after 5 seconds
    setTimeout(() => {
      setShowThankYou(false);
    }, 10000);
  } else {
    alert("Submission failed.")
  }
}



  return (
    <div className="min-h-screen bg-white">
      {/* Simple Header */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="https://www.brainito.com/" legacyBehavior>
            <a target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3">
    <Image src="icon.png" alt="Logo" width={50} height={50} />
    <span className="text-3xl font-bold text-purple-700">Brainito</span>
  </a>
            </Link>
          </div>
        </div>
      </header>

      {/* Clean Hero Section */}
      <section className="py-12 md:py-20 px-4 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Simple Message */}
            <div className="text-center lg:text-left">
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Get a Dedicated Marketing Manager Who Actually
                <span className="text-purple-600"> Gets Results</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                Stop juggling freelancers and expensive agencies. Get one expert who works like your in-house team
                member.
              </p>

              {/* Simple Benefits */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center justify-center lg:justify-start space-x-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-gray-700">Daily execution, no hand-holding needed</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start space-x-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-gray-700">Full-time dedication for $3,000/month</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start space-x-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-gray-700">Start with 5-day free trial</span>
                </div>
              </div>

              {/* Mobile CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 lg:hidden">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                  Start Free Trial
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-purple-200 text-purple-600 hover:bg-purple-50 bg-transparent"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Book a Call
                </Button>
              </div>
            </div>

            {/* Right Side - Clean Lead Form */}
            <div className="mt-8 lg:mt-0">
              <Card className="shadow-lg border-0 bg-white">
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-2xl text-gray-900">Get Your Free Growth Plan</CardTitle>
                  <CardDescription className="text-gray-600">
                    We'll call you within 24 hours with a custom strategy
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {showThankYou && (
  <div className="bg-green-100 border border-green-300 text-green-800 px-4 py-3 rounded text-sm mb-4 text-center">
    🎉 Thank you! Your growth plan request has been received.
  </div>
)}
                  <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        name="full_name" onChange={handleChange}
                        value={form.full_name}
                        placeholder="Full Name" required
                        className="mt-1 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                        Phone *
                      </Label>
                      <Input
                        id="phone"
                        name="phone" type="number" onChange={handleChange}
                        placeholder="Number" required
                        value={form.phone}
                        className="mt-1 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      value={form.email}
                      name="email" type="email" onChange={handleChange}
                      placeholder="Email Address" required
                      className="mt-1 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                    />
                  </div>

                  <div>
                    <Label htmlFor="website" className="text-sm font-medium text-gray-700">
                      Website
                    </Label>
                    <Input
                      value={form.website}
                      id="website"
                      placeholder="https://yourwebsite.com"
                      name="website" type="url" onChange={handleChange} required
                      className="mt-1 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                    />
                  </div>

                  <div className="pb-3">
                    <Label htmlFor="challenges" className="text-sm font-medium text-gray-700">
                      Biggest Marketing Challenge
                    </Label>
                    <Textarea
                      value={form.marketing_challenge}
                      id="challenges"
                      name="marketing_challenge" onChange={handleChange}
                      placeholder="e.g., Not getting enough leads, ads not converting..."
                      className="mt-1 min-h-[80px] border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                    required/>
                  </div>

                  <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 text-lg pt-2">
                    Get My Free Growth Plan
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  </form>

                  <p className="text-xs text-gray-500 text-center">
                    <Shield className="w-3 h-3 inline mr-1" />
                    No spam. We respect your privacy.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Problem Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Marketing shouldn't feel like babysitting
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl mb-4">👻</div>
              <h3 className="font-semibold text-gray-900 mb-2">Freelancers Ghost You</h3>
              <p className="text-gray-600 text-sm">Inconsistent work, missed deadlines, poor communication</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl mb-4">💸</div>
              <h3 className="font-semibold text-gray-900 mb-2">Agencies Drain Budget</h3>
              <p className="text-gray-600 text-sm">Expensive retainers, endless meetings, slow execution</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl mb-4">😵</div>
              <h3 className="font-semibold text-gray-900 mb-2">You're Still Stuck</h3>
              <p className="text-gray-600 text-sm">Doing half the work, getting half the results</p>
            </div>
          </div>

          <div className="bg-purple-600 text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">We cut the fluff</h3>
            <p className="text-lg opacity-90">
              One skilled marketing manager. Daily execution. No hand-holding. Just results.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do - Simple Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Your Manager Will Do</h2>
            <p className="text-lg text-gray-600">All handled by one expert, no vendor juggling</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🎯", title: "SEO & Search", desc: "Get found online" },
              { icon: "📱", title: "Paid Ads", desc: "Google & Facebook ads" },
              { icon: "📧", title: "Email Marketing", desc: "Nurture your leads" },
              { icon: "📱", title: "Social Media", desc: "Engage your audience" },
              { icon: "🤖", title: "AI Content", desc: "Blogs, copy, landing pages" },
              { icon: "🔄", title: "Lead Funnels", desc: "Convert visitors to customers" },
              { icon: "📊", title: "Analytics", desc: "Track what works" },
              { icon: "⚡", title: "Daily Updates", desc: "Stay in the loop" },
            ].map((service, index) => (
              <div key={index} className="text-center p-4">
                <div className="text-3xl mb-3">{service.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Simple Pricing */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Simple Pricing</h2>
            <p className="text-lg text-gray-600">No contracts. Cancel anytime.</p>
          </div>

          <Card className="max-w-2xl mx-auto shadow-lg border-0">
            <CardHeader className="text-center bg-purple-50">
              <div className="text-4xl font-bold text-purple-600 mb-2">$3,000</div>
              <div className="text-gray-600">per month</div>
              <Badge className="bg-green-100 text-green-700 mt-2">5-Day Free Trial</Badge>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-4 mb-8">
                {[
                  "Dedicated full-time marketing manager",
                  "Monday–Friday availability",
                  "All marketing channels covered",
                  "Daily updates & weekly reports",
                  "Cancel with 1-month notice",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mb-6">
                <p className="text-sm text-yellow-800">
                  <strong>Note:</strong> Ad spend and tools are separate. We optimize your budget.
                </p>
              </div>

              <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-4 text-lg">
                Start Your Free Trial
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Clean Testimonials */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Dinesh S.",
                role: "eCommerce Founder",
                quote:
                  "After 3 agencies and 2 freelancers, Brainito finally gave me consistency. My manager feels like part of the team.",
              },
              {
                name: "Jessica K.",
                role: "SaaS CEO",
                quote: "I stopped managing marketing myself. We now run proper campaigns without me lifting a finger.",
              },
              {
                name: "Yusuf A.",
                role: "Consultant",
                quote: "More responsive than my in-house team ever was. Highly recommend the daily execution model.",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4">"{testimonial.quote}"</p>
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className="bg-purple-100 text-purple-600 text-sm">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">{testimonial.name}</div>
                      <div className="text-xs text-gray-600">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Simple Final CTA */}
      <section className="py-16 px-4 bg-purple-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg mb-8 opacity-90">
            One call. No sales pitch. Just a real conversation about growing your business.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              Start Free Trial
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-purple-600 bg-transparent"
            >
              <Phone className="w-4 h-4 mr-2" />
              Book a Call
            </Button>
          </div>

          <p className="text-sm opacity-75 mt-6">No credit card required • 5-day free access • Cancel anytime</p>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="text-xl font-bold text-purple-400 mb-2">🧠 Brainito</div>
          <p className="text-gray-400 text-sm mb-4">Marketing managers who get results</p>
          <div className="flex justify-center space-x-6 text-xs text-gray-500">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms
            </a>
            <a href="#" className="hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
