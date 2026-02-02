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
              Mahira Holdings is not a PE firm, not a VC, and does not operate with a blind pool of capital. We take concentrated positions in businesses we understand deeply and intend to hold for the long term.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-2xl font-medium text-foreground md:text-3xl">
              Operators, not investors.
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our founding team has stepped away from advisory roles to build from within. We believe in getting our hands dirty—working alongside management teams to solve problems and create value.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
