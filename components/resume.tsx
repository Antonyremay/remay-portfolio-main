import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Briefcase, Award } from "lucide-react"

const education = [
  {
    degree: "Bachelor of Engineering in Computer Science",
    school: "University of California, Berkeley",
    period: "2022 - 2026",
    description:
      "Specializing in Data Science and Machine Learning. Relevant coursework: Algorithms, Data Structures, Statistics, Machine Learning, Deep Learning, Database Systems.",
    gpa: "3.8/4.0",
  },
  {
    degree: "High School Diploma",
    school: "Lincoln High School",
    period: "2018 - 2022",
    description:
      "Graduated Summa Cum Laude. President of Computer Science Club. Winner of Regional Science Fair for AI project.",
    gpa: "4.0/4.0",
  },
]

const experience = [
  {
    title: "Data Science Intern",
    company: "TechCorp Analytics",
    period: "Summer 2024",
    description: [
      "Developed predictive models using Python and scikit-learn, improving customer retention by 15%",
      "Created interactive dashboards with Tableau, reducing report generation time by 40%",
      "Collaborated with cross-functional teams to implement data-driven solutions for business problems",
    ],
  },
  {
    title: "Research Assistant",
    company: "UC Berkeley AI Lab",
    period: "2023 - Present",
    description: [
      "Conducting research on natural language processing and sentiment analysis",
      "Published 2 papers in peer-reviewed conferences on machine learning applications",
      "Mentoring undergraduate students in data science projects and methodologies",
    ],
  },
]

const certifications = [
  "AWS Certified Cloud Practitioner",
  "Google Data Analytics Professional Certificate",
  "TensorFlow Developer Certificate",
  "Microsoft Azure AI Fundamentals",
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
                      <span className="text-accent font-medium">{edu.school}</span>
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
                      <span className="text-accent font-medium">{exp.company}</span>
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
