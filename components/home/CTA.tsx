// import { Button } from "../ui/button";
// import Link from "next/link";

export function CTA() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className=" px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to Start Trading?
            </h2>
            <p className="max-w-[700px] md:text-xl">
              Join thousands of traders who are already maximizing their profits with our platform.
            </p>
          </div>
          <div className="space-x-4">
            {/* <Link href="/login">
              <Button variant="secondary" size="lg">
                Get Started Now
              </Button>
            </Link>
            <Link href="/login">
              <Button variant="outline" size="lg" className="text-primary-foreground">
                Demo Account
              </Button>
            </Link> */}
          </div>
        </div>
      </div>
    </section>
  );
}