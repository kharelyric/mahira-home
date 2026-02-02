import { Separator } from "@/components/ui/separator"

export function WhoWeAre() {
  return (
    <section id="who-we-are" className="py-24 px-4">
      <div className="mx-auto max-w-6xl">
        <Separator className="mb-16" />
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <h2 className="font-serif text-2xl font-medium text-foreground md:text-3xl">
              Not a traditional fund.
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We are operators, not investors. Mahira is built by four founders who step directly into the businesses we acquire, taking day-to-day responsibility for operations, people, cash flows, and growth. We create value through execution and ownership, not capital deployment or portfolio management.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-2xl font-medium text-foreground md:text-3xl">
              Operators, not investors.
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We are a group of 4 IIT Bombay alumni with skill-sets which provide perfect synergy to scale any business and are ready to devote the prime years of our career on scaling 1-2 Indian SMEs to larger scale. We believe in getting our hands dirty, working directly on-ground to create value.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
