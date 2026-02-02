import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ExternalLink } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-24 px-4">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-serif text-3xl font-medium text-foreground md:text-4xl">
          Get in Touch
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Interested in learning more about Mahira Holdings or discussing a potential opportunity? We would love to hear from you.
        </p>
        <Separator className="my-10 mx-auto max-w-xs" />
        <Button variant="outline" size="lg" asChild>
          <a
            href="https://forms.gle/FXAZ6LU1bXqSCJfb7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2"
          >
            Contact Us
            <ExternalLink className="h-4 w-4" />
          </a>
        </Button>
        <p className="mt-4 text-sm text-muted-foreground">
          Opens Google Form in a new tab
        </p>
      </div>
    </section>
  )
}
