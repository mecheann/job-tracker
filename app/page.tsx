import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase, CheckCircle2, TrendingUp } from "lucide-react";
import Link from "next/link";
import ImageTabs from "@/components/imagetabs";

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-32">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-black mb-6 text-6xl font-bold">
              Job App Tracker
            </h1>
            <p className="text-gray-700 mb-10 text-xl">
              Capture, organize, and manage your job search in one place
            </p>
            <div className="flex flex-col items-center gap-4">
              <Link href="/sign-up">
                <Button size={"lg"} className="h-10 px-6 text-lg font-medium">
                  Start for free <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <p className="text-muted-foreground">
                Free forever. No payment required
              </p>
            </div>
          </div>
        </section>
        {/* Hero Images Section /w  tabs */}
        <ImageTabs />
        <section className="border-t border-accent bg-secondary py-24">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 md:grid-cols-3">
              <div className="flex flex-col">
                <div className="mb-4 inline-flex h-12 w-12 items-center">
                  <Briefcase className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mb-3 text-2xl font-semibold text-black">
                  Organize Applications
                </h3>
                <p className="text-muted-primary">
                  Keep all your job applications in one place, organized by
                  status and date.
                </p>
              </div>
              <div className="flex flex-col">
                <div className="mb-4 inline-flex h-12 w-12 items-center">
                  <TrendingUp className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mb-3 text-2xl font-semibold text-black">
                  Track Progress
                </h3>
                <p className="text-muted-primary">
                  Monitor the status of each application and receive timely
                  reminders for follow-ups and interviews.
                </p>
              </div>
              <div className="flex flex-col">
                <div className="mb-4 inline-flex h-12 w-12 items-center">
                  <CheckCircle2 className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mb-3 text-2xl font-semibold text-black">
                  Stay Organized
                </h3>
                <p className="text-muted-primary">
                  Never lose track of important details with our intuitive
                  interface and powerful organization tools.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
