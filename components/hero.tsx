import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="flex min-h-[80vh] items-center justify-center px-4 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="font-serif text-4xl font-medium leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl text-balance">
          Ownership over advisory. Execution over abstraction.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl text-pretty">
          Mahira Holdings is an Owner-Operator platform formed to acquire, operate, and scale high-quality cash generating Indian SMEs through direct ownership and hands-on execution.
        </p>
        <div className="mt-10">
          <Button variant="outline" size="lg" asChild>
            <a href="#philosophy">Our Philosophy</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
