import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Linkedin, Mail } from "lucide-react"

const team = [
  {
    name: "Shirsh",
    initials: "S",
    role: "Finance Lead",
    image: "/shirsh_linkedin.jpeg",
    description: "Ex-Bernstein professional. Deep expertise in business fundamentals, cash-flow analysis, and healthcare.",
  },
  {
    name: "Chirag",
    initials: "C",
    role: "Strategy Lead",
    image: "/chirag_linkedin.jpeg",
    description: "Ex-Bain & Company. Trained in structured problem-solving, strategic planning, and operational improvement.",
  },
  {
    name: "Bansal",
    initials: "B",
    role: "Operations Lead",
    image: "/bansal_linkedin.jpeg",
    description: "Operator from Minimalist Founder's Office. Experience in building processes and scaling consumer businesses.",
  },
  {
    name: "Lyric",
    initials: "L",
    role: "Technology Lead",
    image: "/lyric_linkedin.jpeg",
    description: "Tech specialist. Experience in Palantir-style enterprise tech and applied AI.",
  },
]

export function Team() {
  return (
    <section id="team" className="py-24 px-4 bg-muted/30">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-serif text-3xl font-medium text-foreground text-center md:text-4xl">
          The Founding Team
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
          A complementary team of operators with backgrounds in finance, strategy, operations, and technology.
        </p>
        <Separator className="my-12 mx-auto max-w-xs" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <Card key={member.name} className="border border-border bg-background">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={member.image} alt={member.name} className="object-cover" />
                    <AvatarFallback className="bg-muted text-muted-foreground font-medium">
                      {member.initials}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="mt-4 font-serif text-lg font-medium text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {member.description}
                  </p>
                  <div className="mt-4 flex items-center gap-3">
                    <a
                      href="#"
                      className="text-muted-foreground transition-colors hover:text-foreground"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                    <a
                      href="#"
                      className="text-muted-foreground transition-colors hover:text-foreground"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
