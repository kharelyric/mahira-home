import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Separator } from "@/components/ui/separator"

const philosophyItems = [
  {
    value: "ownership",
    title: "Direct Ownership",
    content: "We take meaningful equity stakes in the businesses we partner with. This alignment ensures our interests are fully tied to the long-term success of each company, not short-term metrics or exit timelines.",
  },
  {
    value: "operational",
    title: "Operational Involvement",
    content: "We don't sit on the sidelines. Our team works directly with management on strategic initiatives, operational improvements, and day-to-day problem-solving. We believe value is created through execution, not just capital allocation.",
  },
  {
    value: "financial",
    title: "Disciplined Financial Management",
    content: "We focus on businesses with strong unit economics, sustainable cash flows, and clear paths to profitability. Financial discipline is not just a screening criterion—it's an operating principle we bring to every company.",
  },
  {
    value: "systems",
    title: "Systems-Driven Execution",
    content: "We build repeatable processes and frameworks that can scale. From financial reporting to operational playbooks, we invest in systems that create lasting competitive advantages.",
  },
]

export function Philosophy() {
  return (
    <section id="philosophy" className="py-24 px-4">
      <div className="mx-auto max-w-3xl">
        <h2 className="font-serif text-3xl font-medium text-foreground text-center md:text-4xl">
          Our Philosophy & Operating Model
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
          The principles that guide how we identify, acquire, and operate businesses.
        </p>
        <Separator className="my-12 mx-auto max-w-xs" />
        <Accordion type="single" collapsible className="w-full">
          {philosophyItems.map((item) => (
            <AccordionItem key={item.value} value={item.value}>
              <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline">
                {item.title}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
