import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DarkModeToggle } from "@/components/dark-mode-toggle";
import Testimonials from "@/components/testimonials";
import {
  PiggyBank,
  BarChart3,
  MessageSquare,
  ArrowRight,
  ArrowUpRight,
  CirclePlay,
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
        <div>
          <h2 className="text-center font-semibold text-4xl tracking-tight font-serif sm:text-5xl">
            Everything You Need to Manage Your Money
          </h2>
          <p className="mt-4 text-center text-lg text-muted-foreground max-w-2xl mx-auto">
            Just chat naturally. FinBot handles the rest.
          </p>
          <div className="mx-auto mt-10 grid max-w-7xl gap-6 px-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col rounded-xl border px-5 py-6">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <MessageSquare className="size-5 text-primary" />
              </div>
              <span className="font-semibold text-lg">Expense Logging</span>
              <p className="mt-1 text-[15px] text-foreground/80">
                Say &ldquo;Spent $45 on groceries&rdquo; and FinBot logs it instantly.
                No forms, no menus. Just natural language.
              </p>
            </div>
            <div className="flex flex-col rounded-xl border px-5 py-6">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <BarChart3 className="size-5 text-primary" />
              </div>
              <span className="font-semibold text-lg">Budget Tracking</span>
              <p className="mt-1 text-[15px] text-foreground/80">
                Set budgets per category and get friendly alerts when
                you&apos;re close to exceeding them.
              </p>
            </div>
            <div className="flex flex-col rounded-xl border px-5 py-6">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <PiggyBank className="size-5 text-primary" />
              </div>
              <span className="font-semibold text-lg">Savings Goals</span>
              <p className="mt-1 text-[15px] text-foreground/80">
                Define goals, track contributions, and celebrate milestones
                on your journey to financial freedom.
              </p>
            </div>
            <div className="flex flex-col rounded-xl border px-5 py-6">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <TrendingUp className="size-5 text-primary" />
              </div>
              <span className="font-semibold text-lg">AI Advice</span>
              <p className="mt-1 text-[15px] text-foreground/80">
                Get personalized, non-judgmental tips based on your actual
                spending patterns, not generic advice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Stats */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
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
