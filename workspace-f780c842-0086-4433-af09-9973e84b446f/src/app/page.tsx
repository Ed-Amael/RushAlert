"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [why, setWhy] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log({ name, email, role, why });
    alert("Thank you for joining the waitlist! We'll be in touch soon.");
    // Reset form
    setName("");
    setEmail("");
    setRole("");
    setWhy("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Sticky CTA Bar */}
      <div className="fixed top-0 left-0 right-0 bg-red-600 text-white py-3 px-4 z-50 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <span className="font-semibold">🚀 Limited Beta Access Available</span>
          <Button 
            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-red-600 hover:bg-gray-100 font-bold"
          >
            Get Early Access
          </Button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-orange-500 text-white mb-4">Beta Launching Q1 2026</Badge>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                RushAlert: Never Miss a Critical Moment Again
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Real-time alerts that cut through the noise—delivering urgent notifications to your team or device in seconds, so you act fast and stay safe.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 text-lg"
                  onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get Early Access
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white font-bold py-3 px-8 text-lg"
                >
                  Watch Demo
                </Button>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <span>🔒 Built for high-stakes pros</span>
                <span>•</span>
                <span>🚀 Beta Launching Q1 2026</span>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-red-600/20 to-orange-500/20 p-8 rounded-2xl">
                <div className="bg-gray-800 rounded-xl p-6 shadow-2xl">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-3 bg-red-900/30 rounded-lg border border-red-700">
                      <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                      <div>
                        <div className="font-semibold">Emergency Alert</div>
                        <div className="text-sm text-gray-400">Downtown - Response Required</div>
                      </div>
                      <div className="ml-auto text-sm text-red-400">2s ago</div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-orange-900/30 rounded-lg border border-orange-700">
                      <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
                      <div>
                        <div className="font-semibold">Market Alert</div>
                        <div className="text-sm text-gray-400">BTC volatility detected</div>
                      </div>
                      <div className="ml-auto text-sm text-orange-400">15s ago</div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gray-700/50 rounded-lg">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <div>
                        <div className="font-semibold">Team Update</div>
                        <div className="text-sm text-gray-400">Daily sync reminder</div>
                      </div>
                      <div className="ml-auto text-sm text-gray-400">1m ago</div>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-gray-900 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-400">Alert Status</span>
                      <span className="text-green-400 text-sm">● All Systems Operational</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 w-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 px-4 bg-gray-800/50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Fragmented Alerts Are Costing You Time and Lives
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                In fast-moving worlds like emergency response, trading, or remote ops, delayed info means disaster. Siloed apps, slow emails, and unreliable pushes leave you reactive—not proactive.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">70%</span>
                  </div>
                  <div>
                    <div className="font-semibold text-white">of incidents escalate due to missed warnings</div>
                    <div className="text-sm text-gray-400">Source: industry reports</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">5+</span>
                  </div>
                  <div>
                    <div className="font-semibold text-white">tools teams waste hours chasing updates across</div>
                    <div className="text-sm text-gray-400">Fragmented communication systems</div>
                  </div>
                </div>
              </div>
              <Button 
                variant="outline"
                className="border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white"
                onClick={() => document.getElementById('solution')?.scrollIntoView({ behavior: 'smooth' })}
              >
                See How We Fix This →
              </Button>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-red-600/10 to-orange-500/10 p-8 rounded-2xl">
                <div className="bg-gray-800 rounded-xl p-6">
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white mb-2">Time to Alert</div>
                      <div className="text-sm text-gray-400">Legacy vs RushAlert</div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-400">Legacy Systems</span>
                          <span className="text-red-400">15-30 minutes</span>
                        </div>
                        <div className="h-4 bg-gray-700 rounded-full overflow-hidden">
                          <div className="h-full bg-red-500 w-4/5"></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-400">RushAlert</span>
                          <span className="text-green-400">2-5 seconds</span>
                        </div>
                        <div className="h-4 bg-gray-700 rounded-full overflow-hidden">
                          <div className="h-full bg-green-500 w-1/6"></div>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div className="p-3 bg-red-900/30 rounded-lg">
                        <div className="text-2xl">⚠️</div>
                        <div className="text-xs text-gray-400">Delayed</div>
                      </div>
                      <div className="p-3 bg-orange-900/30 rounded-lg">
                        <div className="text-2xl">🔄</div>
                        <div className="text-xs text-gray-400">Fragmented</div>
                      </div>
                      <div className="p-3 bg-gray-700 rounded-lg">
                        <div className="text-2xl">❌</div>
                        <div className="text-xs text-gray-400">Unreliable</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              RushAlert: Unified, Instant Alerts That Empower Action
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              RushAlert is your single hub for customizable, AI-powered notifications. Integrate once, alert everywhere—SMS, app, email, Slack. Tailored for urgency, with zero false positives.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-gray-800/50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-gray-300 mb-6">
                  Bridge the gap in real-time comms to save time, reduce risks, and boost outcomes in critical environments.
                </p>
                
                <h3 className="text-xl font-bold text-white mb-4">Key Differentiators</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">🤖</span>
                    </div>
                    <div>
                      <div className="font-semibold text-white">AI filters noise for hyper-relevant alerts</div>
                      <div className="text-sm text-gray-400">Smart algorithms ensure only critical notifications get through</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">📱</span>
                    </div>
                    <div>
                      <div className="font-semibold text-white">Cross-platform sync (iOS, Android, web)</div>
                      <div className="text-sm text-gray-400">Seamless experience across all your devices</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">🚀</span>
                    </div>
                    <div>
                      <div className="font-semibold text-white">Scalable for solo users to enterprise teams</div>
                      <div className="text-sm text-gray-400">Grow with us from individual to organization-wide deployment</div>
                    </div>
                  </div>
                </div>
              </div>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8">
                Start Your Free Trial
              </Button>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-600/20 to-red-500/20 p-8 rounded-2xl">
                <div className="bg-gray-800 rounded-xl p-6 shadow-2xl">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between pb-4 border-b border-gray-700">
                      <span className="font-semibold text-white">Alert Dashboard</span>
                      <Badge className="bg-green-600">Live</Badge>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="p-3 bg-gray-700 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium">System Status</span>
                          <span className="text-xs text-green-400">Operational</span>
                        </div>
                        <div className="h-2 bg-gray-600 rounded-full">
                          <div className="h-full bg-green-500 w-full"></div>
                        </div>
                      </div>
                      
                      <div className="p-3 bg-gray-700 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium">Active Channels</span>
                          <span className="text-xs text-blue-400">4/4</span>
                        </div>
                        <div className="flex gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        </div>
                      </div>
                      
                      <div className="p-3 bg-gray-700 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium">Response Rate</span>
                          <span className="text-xs text-orange-400">98%</span>
                        </div>
                        <div className="h-2 bg-gray-600 rounded-full">
                          <div className="h-full bg-orange-500 w-11/12"></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-gray-700">
                      <div className="text-sm text-gray-400 mb-2">Recent Activity</div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-gray-300">Alert delivered to all channels</span>
                          <span className="text-xs text-gray-500 ml-auto">30s ago</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-gray-300">Team acknowledgment received</span>
                          <span className="text-xs text-gray-500 ml-auto">1m ago</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gray-800/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Alerts That Work Smarter, Not Harder
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Powerful features designed to keep you ahead of critical moments
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-gray-800 border-gray-700 hover:border-orange-500 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white text-xl">📍</span>
                </div>
                <CardTitle className="text-white">Real-Time Geo-Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 mb-4">
                  Pinpoint alerts by location (e.g., weather, traffic).
                </CardDescription>
                <div className="text-sm text-orange-400 font-medium">
                  Respond locally, faster—cut response time by 50%
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800 border-gray-700 hover:border-orange-500 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white text-xl">⚙️</span>
                </div>
                <CardTitle className="text-white">Custom Triggers</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 mb-4">
                  Set rules for events like market dips or team check-ins.
                </CardDescription>
                <div className="text-sm text-orange-400 font-medium">
                  Personalize without overwhelm; automate what matters
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800 border-gray-700 hover:border-orange-500 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white text-xl">📢</span>
                </div>
                <CardTitle className="text-white">Multi-Channel Delivery</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 mb-4">
                  Push to phone, email, voice call, or integrations.
                </CardDescription>
                <div className="text-sm text-orange-400 font-medium">
                  Reach everyone, everywhere—no one left in the dark
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800 border-gray-700 hover:border-orange-500 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white text-xl">📊</span>
                </div>
                <CardTitle className="text-white">Analytics Dashboard</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 mb-4">
                  Track alert performance and user engagement.
                </CardDescription>
                <div className="text-sm text-orange-400 font-medium">
                  Data-driven decisions; prove ROI to your team
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800 border-gray-700 hover:border-orange-500 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white text-xl">🔒</span>
                </div>
                <CardTitle className="text-white">Secure & Compliant</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 mb-4">
                  End-to-end encryption; GDPR/HIPAA ready.
                </CardDescription>
                <div className="text-sm text-orange-400 font-medium">
                  Trust built-in for sensitive ops
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800 border-gray-700 hover:border-orange-500 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white text-xl">🤖</span>
                </div>
                <CardTitle className="text-white">AI-Powered Filtering</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 mb-4">
                  Smart algorithms eliminate false positives.
                </CardDescription>
                <div className="text-sm text-orange-400 font-medium">
                  Focus on what truly matters, reduce noise by 90%
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8">
              Explore Features
            </Button>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Trusted by Teams Who Can't Afford Delays
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">AR</span>
                  </div>
                  <div>
                    <div className="font-semibold text-white">Alex R.</div>
                    <div className="text-sm text-gray-400">Emergency Coordinator</div>
                  </div>
                </div>
                <p className="text-gray-300 italic">
                  "RushAlert turned our chaotic shifts into seamless ops. Saved us hours daily."
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">JL</span>
                  </div>
                  <div>
                    <div className="font-semibold text-white">Jordan L.</div>
                    <div className="text-sm text-gray-400">Trader at FinTech Co.</div>
                  </div>
                </div>
                <p className="text-gray-300 italic">
                  "Instant market alerts mean we never miss a trade window. Game-changer."
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">SK</span>
                  </div>
                  <div>
                    <div className="font-semibold text-white">Sam K.</div>
                    <div className="text-sm text-gray-400">Remote Ops Lead</div>
                  </div>
                </div>
                <p className="text-gray-300 italic">
                  "Integrated perfectly with our Slack—team response time down 40%."
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center">
            <div className="flex flex-wrap justify-center gap-8 text-lg text-gray-300 mb-8">
              <div className="flex items-center gap-2">
                <span className="text-2xl">👥</span>
                <span>500+ Beta Users</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">⚡</span>
                <span>98% Uptime</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">⭐</span>
                <span>4.9/5 Rating</span>
              </div>
            </div>
            
            <Button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8">
              Join the Beta
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing/CTA Section */}
      <section id="pricing" className="py-16 px-4 bg-gray-800/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Get Started in Minutes—Free to Try
            </h2>
            <p className="text-xl text-gray-300 mb-4">
              No credit card needed. Cancel anytime. 14-day money-back guarantee.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-gray-800 border-gray-700 hover:border-orange-500 transition-colors">
              <CardHeader className="text-center">
                <CardTitle className="text-white text-2xl">Starter</CardTitle>
                <div className="text-3xl font-bold text-white">Free</div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    <span className="text-gray-300">50 alerts/mo</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    <span className="text-gray-300">Basic integrations</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    <span className="text-gray-300">Email support</span>
                  </div>
                </div>
                <Button className="w-full bg-gray-700 hover:bg-gray-600 text-white">
                  Sign Up Free
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800 border-orange-500 hover:border-orange-400 transition-colors relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-orange-500 text-white">Most Popular</Badge>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-white text-2xl">Pro</CardTitle>
                <div className="text-3xl font-bold text-white">$19<span className="text-lg font-normal">/user/mo</span></div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    <span className="text-gray-300">Unlimited alerts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    <span className="text-gray-300">AI filters</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    <span className="text-gray-300">Priority support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    <span className="text-gray-300">Advanced analytics</span>
                  </div>
                </div>
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                  Start Pro Trial
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800 border-gray-700 hover:border-orange-500 transition-colors">
              <CardHeader className="text-center">
                <CardTitle className="text-white text-2xl">Enterprise</CardTitle>
                <div className="text-3xl font-bold text-white">Custom</div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    <span className="text-gray-300">Full custom</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    <span className="text-gray-300">API access</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    <span className="text-gray-300">Dedicated manager</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    <span className="text-gray-300">SLA guarantee</span>
                  </div>
                </div>
                <Button className="w-full bg-gray-700 hover:bg-gray-600 text-white">
                  Contact Sales
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white text-center">Get Early Access</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-gray-300">Name</Label>
                      <Input
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="bg-gray-700 border-gray-600 text-white"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-gray-300">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-gray-700 border-gray-600 text-white"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="role" className="text-gray-300">Role</Label>
                    <Input
                      id="role"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      className="bg-gray-700 border-gray-600 text-white"
                      placeholder="e.g., Emergency Coordinator, Trader, Ops Manager"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="why" className="text-gray-300">Why RushAlert?</Label>
                    <Textarea
                      id="why"
                      value={why}
                      onChange={(e) => setWhy(e.target.value)}
                      className="bg-gray-700 border-gray-600 text-white"
                      placeholder="Tell us about your alert needs..."
                      rows={3}
                    />
                  </div>
                  <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3">
                    Join Waitlist
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-12 px-4 bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Terms</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Cookie Policy</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Contact</h3>
              <div className="space-y-2 text-gray-400">
                <div>📧 hello@rushalert.com</div>
                <div>🐦 @RushAlertHQ</div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Stay Alert</h3>
              <p className="text-gray-400 mb-4">Weekly tips on real-time comms</p>
              <div className="flex gap-2">
                <Input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-gray-800 border-gray-700 text-white flex-1"
                />
                <Button className="bg-orange-500 hover:bg-orange-600">Subscribe</Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© 2025 RushAlert. All rights reserved. Built with ❤️ for urgent minds.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}