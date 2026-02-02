import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export function AcquisitionFocus() {
  return (
    <section id="focus" className="py-24 px-4 bg-muted/30">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-serif text-3xl font-medium text-foreground text-center md:text-4xl">
          What We Look For
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
          We seek high-quality Indian SMEs with strong fundamentals and growth potential.
        </p>
        <Separator className="my-12 mx-auto max-w-xs" />
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="border border-border bg-background">
            <CardHeader>
              <CardTitle className="font-serif text-xl font-medium">Transaction Parameters</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Buyouts</span>
                <Badge variant="secondary" className="font-mono text-sm">
                  ₹60–100 Cr EV
                </Badge>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Majority (51%+)</span>
                <Badge variant="secondary" className="font-mono text-sm">
                  ₹150–200 Cr EV
                </Badge>
              </div>
            </CardContent>
          </Card>
          <Card className="border border-border bg-background">
            <CardHeader>
              <CardTitle className="font-serif text-xl font-medium">Investment Structure</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                We structure each investment through single-asset SPVs (Special Purpose Vehicles), ensuring focused governance and clear accountability for each portfolio company.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
