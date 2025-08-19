import { Card, CardContent } from "@/components/ui/card"
import { Brain, Database, BarChart3, Code2 } from "lucide-react"

export function About() {
  const interests = [
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Deep learning, neural networks, and AI model development",
    },
    {
      icon: Database,
      title: "Data Engineering",
      description: "ETL pipelines, data warehousing, and big data processing",
    },
    {
      icon: BarChart3,
      title: "Data Visualization",
      description: "Interactive dashboards and statistical analysis",
    }
  ]

  return (
    <section id="about" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-foreground mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm Antony Remane, a final-year student with a strong passion for data science and a deep curiosity for
            uncovering insights through data. I am eager to expand my knowledge and sharpen my skills in data analysis,
            machine learning, and statistical modeling.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-heading font-bold text-foreground mb-6">My Journey in Data Science</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Currently pursuing my Bachelor of Engineering in Computer Science and Engineering at Stella Mary's
                    College of Engineering, I've developed a strong foundation in Python, SQL, and data visualization tools,
                along with experience in statistical analysis and machine learning.
              </p>
              <p>
                Driven by a commitment to continuous learning, I actively seek opportunities to apply my academic
                foundation to real-world problems, aiming to contribute meaningfully to data-driven decision-making. My
                expertise includes working on academic projects involving data preprocessing, model training, and
                evaluation.
              </p>
              <p>
                As an active member of the Byte-Bash-Blitz Technical Community, I participate in organizing technical
                workshops and hackathons, collaborate on projects that address real-world challenges, and engage in
                community outreach programs to promote STEM education.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="font-semibold text-foreground">Age:</span>
                <span className="text-muted-foreground ml-2">21</span>
              </div>
              <div>
                <span className="font-semibold text-foreground">Degree:</span>
                <span className="text-muted-foreground ml-2">B.E. Computer Science & Engineering</span>
              </div>
              <div>
                <span className="font-semibold text-foreground">Location:</span>
                <span className="text-muted-foreground ml-2">Kanyakumari, India</span>
              </div>
              <div>
                <span className="font-semibold text-foreground">Freelance:</span>
                <span className="text-muted-foreground ml-2">Available</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {interests.map((interest, index) => (
              <Card
                key={index}
                className="bg-card border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6 text-center">
                  <div className="p-3 rounded-full bg-accent/10 w-fit mx-auto mb-4">
                    <interest.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h4 className="font-heading font-bold text-card-foreground mb-2">{interest.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{interest.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
