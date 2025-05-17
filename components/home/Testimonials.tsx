import { Card, CardContent, CardHeader } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Professional Trader",
    content: "Seven Point Trading has transformed my trading experience. The platform&apos;s intuitive interface and advanced tools have helped me increase my profits by 30% in just three months.",
    avatar: "/avatars/sarah.jpg" // You can replace with actual images
  },
  {
    name: "Michael Chen",
    role: "Investment Manager",
    content: "The real-time data and analysis tools are unparalleled. I've been able to make more informed decisions and reduce my risk exposure significantly.",
    avatar: "/avatars/michael.jpg"
  },
  {
    name: "Emma Rodriguez",
    role: "Day Trader",
    content: "As someone who trades daily, I need a reliable platform. Seven Ppoint Trading has never let me down, even during high volatility periods.",
    avatar: "/avatars/emma.jpg"
  }
];

export function Testimonials() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">What Our Clients Say</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Don&apos;t just take our word for it. Here&apos;s what our community has to say about their
              experience.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                    <span className="text-xl font-medium">
                      {testimonial.name.split(" ").map(n => n[0]).join("")}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-medium">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <blockquote className="text-gray-500 dark:text-gray-400">
                  "{testimonial.content}"
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}