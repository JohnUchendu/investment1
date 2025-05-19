export function Features() {
  const features = [
    {
      title: "Real-time Data",
      description: "Access to live market prices and currency pair movements.",
    },
    {
      title: "Advanced Charts",
      description: "Professional trading charts with technical indicators.",
    },
    {
      title: "Secure Platform",
      description: "Bank-level security for all your transactions and data.",
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 text-gray-500 ">
      <div className=" px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Why Choose Us
            </h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Our aim is financial growth not stability. <br /> "We as humans
              always seek for more even at the best paying jobs... sevenpoints
              has just the path to follow"
              <br /><br />
              Our goal are aligned wuth finding the best jobs your money can
              work for <br /><br />"One common factor among the wealthy is they make money
              their servants, let's help you build that mindset"<br /><br /> Our Traders
              boost years of winning track record. <br />
              <br /> We have no interest hanging onto profits.
              <br /><br />
              "Probably the best part, you get your ROI directly back to
              whatever mode of payment suits you best"
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:grid-cols-3 mt-12">
          {features.map((feature, index) => (
            <div key={index} className="grid gap-1">
              <h3 className="text-lg font-bold">{feature.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
