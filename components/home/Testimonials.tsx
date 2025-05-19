import { Card, CardContent, CardHeader } from "@/components/ui/card";

const testimonials = [
  {
    name: "(Mr. Gary Upshaw)",
    content:
      "Hi, thanks for saving this recent divorcee, I f*up financially and lost nearly everything. Then you guys came along 2023 like a wave. These days I console myself with the thought that I was given a second chance to make good use the wealth your team made easy to call my own.Thanks again, I’ll be watching and rooting for your new project, you guys planted a bigger dream in me and I’m ready to move with y’all for betterment of myself",
  },
  {
    name: "(Mrs. Elise Cartwright)",
    content:
      "The commitment we took on your longterm plans was literally the best financial decision of 2024!! That one payment saved our necks years of debts we could’ve had to keep working our ass out to clear off lol",
  },
  {
    name: "(Mr. Toussaint Busque)",
    content:
      "Was never really a huge fan of crypto or trading in general. But somehow l ended last year one of those to benefit largely off Bitcoin hitting a 100k. Thanks to the daily returns I had saved on my wallet all through the year",
  },
  {
    name: "(The Bloom Family)",
    content:
      "September I got an account and had it split amongst my three kids in college. They came home last Christmas for holidays, I was cheered with praises for the daily credits they got all semester, i even got a ‘world‘s greatest dad’ mug from my princess. I’ve never been prouder! Rooting for the next version of you guys",
  },
  {
    name: "(Mr. Sam Soto)",
    content:
      "I started Sevenpoints more of a doubter than a believer, had already gone through scams twice Wasn't about to fully trust the third time, still as an aggressive diversifyer i was willing to try another supposed winning prospect. Took just three weeks to find myself wanting more from the system. 6 weeks in i committed to the compound journey, 12 weeks after that I am looking at nearly half my 401k sitting my wallet! 57 years of my life never had it this easy I tell you, spent the rest of that day dreaming real big! And just maybe I can see that youthful goal come true now. At the time of writing to you guys I already committed for a longer journey The question now is can I hit that millionaire goal before 60!",
  },
];

export function Testimonials() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-200 dark:text-gray-600">
      <div className=" px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              What Our Clients Say
            </h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-600">
              Don&apos;t just take our word for it. Here&apos;s what our
              community has to say about their experience.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="flex items-center space-x-4">
                  <div>
                    <h4 className="font-medium">{testimonial.name}</h4>
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
