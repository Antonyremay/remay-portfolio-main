import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Briefcase, Award } from "lucide-react"

const education = [
  {
    degree: "B.E. Computer Science & Engineering",
    school: "Stella Mary's College of Engineering",
    schoolUrl: "https://www.stellamaryscoe.edu.in",
    period: "2022 - 2026",
    description:
      "Kalluketti Junction, Azhikkal Rd, Nagercoil, Kanyakumari. Focused on computer science, data analysis, machine learning, databases, and software development.",
    gpa: "7.6/10",
  },
]

const experience = [
  {
    title: "Relationship Manager",
    company: "Square Yards Pvt. Ltd., Bangalore",
    companyUrl: "https://www.squareyards.com",
    period: "May 2026 - Sept 2026",
    description: [
      "Analyzed customer and lead information to identify high-potential prospects and support data-driven customer engagement strategies.",
      "Monitored lead progression, customer interactions, and follow-ups to identify business trends and opportunities.",
      "Used customer and business information to support prioritization, reporting, and data-informed decision-making.",
    ],
  },
  {
    title: "Business Development Associate Intern",
    company: "Orvionar Tech Pvt. Ltd.",
    companyUrl: "https://www.orvionar.in",
    period: "Feb 2026 - May 2026",
    description: [
      "Supported business development activities and contributed to customer and market research.",
    ],
  },
]

const certifications = [
  "Python, Machine Learning & Deep Learning - Codenex Global Pvt. Ltd. (Jan 2026)",
  "Career Essentials in Software Development - Microsoft & LinkedIn (Jan 2026)",
  "Penetration Testing Professional Certificate - Cybrary and LinkedIn (Nov 2024)",
]

export default function Resume() {
  return (
    <section id="resume" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Resume</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My educational background, professional experience, and certifications that have shaped my journey in data
            science.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-accent/10">
                <GraduationCap className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Education</h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="border-border">
                  <CardHeader>
                    <CardTitle className="text-lg text-foreground">{edu.degree}</CardTitle>
                    <div className="flex justify-between items-center text-sm">
                      <a
                        href={edu.schoolUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-accent font-medium hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                      >
                        {edu.school}
                      </a>
                      <span className="text-muted-foreground">{edu.period}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-2">{edu.description}</p>
                    <p className="text-sm font-medium text-foreground">GPA: {edu.gpa}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Certifications */}
            <div className="mt-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-accent/10">
                  <Award className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Certifications</h3>
              </div>

              <Card className="border-border">
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    {certifications.map((cert, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-accent" />
                        <span className="text-foreground">{cert}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Experience */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-accent/10">
                <Briefcase className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Experience</h3>
            </div>

            <div className="space-y-6">
              {experience.map((exp, index) => (
                <Card key={index} className="border-border">
                  <CardHeader>
                    <CardTitle className="text-lg text-foreground">{exp.title}</CardTitle>
                    <div className="flex justify-between items-center text-sm">
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-accent font-medium hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                      >
                        {exp.company}
                      </a>
                      <span className="text-muted-foreground">{exp.period}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {exp.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3 text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}