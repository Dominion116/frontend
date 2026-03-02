import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DarkModeToggle } from "@/components/dark-mode-toggle";
import {
  PiggyBank,
  BarChart3,
  MessageSquare,
  ArrowRight,
  ArrowUpRight,
  CirclePlay,
  Star,
  TrendingUp,
  Shield,
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Navbar */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold font-serif">FinBot</span>
            </div>
            <div className="flex items-center gap-2">
              <DarkModeToggle />
              <Link href="/chat">
                <Button>Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex min-h-[calc(100vh-4rem)] items-center justify-center">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-12 lg:grid-cols-2">
          <div>
            <Link href="#">
              <Badge
                className="rounded-full border-border py-1"
                variant="secondary"
              >
                AI-Powered Finance Assistant <ArrowUpRight className="ml-1 size-4" />
              </Badge>
            </Link>
            <h1 className="mt-6 max-w-[17ch] font-semibold text-4xl leading-[1.2]! tracking-[-0.035em] font-serif md:text-5xl lg:text-[2.75rem] xl:text-[3.25rem]">
              Take Control of Your{" "}
              <span className="text-primary">Financial Future</span>
            </h1>
            <p className="mt-6 max-w-[60ch] text-foreground/80 sm:text-lg">
              Log expenses in plain English, track budgets effortlessly, and get
              personalized advice. All through a simple chat interface powered by AI.
            </p>
            <div className="mt-12 flex items-center gap-4">
              <Link href="/chat">
                <Button className="rounded-full text-base" size="lg">
                  Start for Free <ArrowUpRight className="h-5! w-5!" />
                </Button>
              </Link>
              <a href="#features">
                <Button
                  className="rounded-full text-base shadow-none"
                  size="lg"
                  variant="outline"
                >
                  <CirclePlay className="h-5! w-5! mr-2" /> See How It Works
                </Button>
              </a>
            </div>
          </div>
          <div className="aspect-video w-full rounded-xl bg-accent overflow-hidden relative">
            <Image
              src="/images/heroimage.avif"
              alt="FinBot Dashboard Preview"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/35" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-serif">
              Everything You Need to Manage Your Money
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Just chat naturally. FinBot handles the rest.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Expense Logging</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Say &ldquo;Spent $45 on groceries&rdquo; and FinBot logs it instantly.
                  No forms, no menus. Just natural language.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Budget Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Set budgets per category and get friendly alerts when
                  you&apos;re close to exceeding them.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <PiggyBank className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Savings Goals</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Define goals, track contributions, and celebrate milestones
                  on your journey to financial freedom.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">AI Advice</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Get personalized, non-judgmental tips based on your actual
                  spending patterns, not generic advice.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials / Social Proof */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-serif">
              Loved by People Who Love Their Money
            </h2>
            <p className="text-lg text-muted-foreground">
              Join thousands already taking control of their finances.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border shadow-sm">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  &ldquo;I never tracked expenses before because it was too tedious. With FinBot,
                  I just type what I spent and it&apos;s done. Saved $400 in my first month!&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-sm font-semibold">SK</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Sarah K.</p>
                    <p className="text-xs text-muted-foreground">Freelance Designer</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border shadow-sm">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  &ldquo;The budget alerts are a game-changer. FinBot warned me I was
                  overspending on dining out, gently and without judgment. That&apos;s exactly what I needed.&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-sm font-semibold">MR</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Marcus R.</p>
                    <p className="text-xs text-muted-foreground">Software Engineer</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border shadow-sm">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  &ldquo;I set a savings goal for a vacation and FinBot kept me motivated
                  every step of the way. Hit my target two weeks early!&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-sm font-semibold">JL</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Jessica L.</p>
                    <p className="text-xs text-muted-foreground">Marketing Manager</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-primary">10,000+</p>
              <p className="text-muted-foreground mt-1">Active Users</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary">$2.5M+</p>
              <p className="text-muted-foreground mt-1">Expenses Tracked</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary">$500K+</p>
              <p className="text-muted-foreground mt-1">Savings Goals Reached</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Shield className="h-12 w-12 mx-auto mb-6 opacity-80" />
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-serif">
            Ready to Take Control?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto">
            Start chatting with FinBot today. No credit card required, no complex
            setup. Just smart money management.
          </p>
          <Link href="/chat">
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-6"
            >
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold font-serif">FinBot</span>
            </div>
            <div className="flex gap-8 text-sm text-muted-foreground">
              <a href="#features" className="hover:text-foreground transition-colors">Features</a>
              <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms</a>
              <a href="#" className="hover:text-foreground transition-colors">Contact</a>
            </div>
            <p className="text-sm text-muted-foreground">
              &copy; 2026 FinBot. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
