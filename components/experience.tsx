import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      title: "Software Engineering Intern",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      period: "Jun 2024 - Aug 2024",
      type: "Internship",
      description: [
        "Developed and maintained React-based web applications serving 10,000+ users",
        "Collaborated with senior developers to implement new features and optimize performance",
        "Participated in code reviews and contributed to improving development workflows",
        "Built RESTful APIs using Node.js and integrated with PostgreSQL databases",
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Git"],
    },
    {
      title: "Full Stack Developer",
      company: "StartupXYZ",
      location: "Remote",
      period: "Jan 2024 - May 2024",
      type: "Part-time",
      description: [
        "Built a complete e-commerce platform from scratch using Next.js and TypeScript",
        "Implemented secure payment processing with Stripe integration",
        "Designed and developed responsive UI components with Tailwind CSS",
        "Set up CI/CD pipelines and deployed applications on Vercel",
      ],
      technologies: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS", "Vercel"],
    },
    {
      title: "Research Assistant",
      company: "University AI Lab",
      location: "University Campus",
      period: "Sep 2023 - Dec 2023",
      type: "Research",
      description: [
        "Conducted research on machine learning algorithms for natural language processing",
        "Implemented and tested various neural network architectures using TensorFlow",
        "Analyzed large datasets and presented findings to research team",
        "Co-authored a paper on sentiment analysis techniques",
      ],
      technologies: ["Python", "TensorFlow", "Pandas", "Jupyter", "NLTK"],
    },
    {
      title: "Web Development Freelancer",
      company: "Self-Employed",
      location: "Remote",
      period: "Jun 2023 - Present",
      type: "Freelance",
      description: [
        "Delivered custom web solutions for small businesses and startups",
        "Created responsive websites and web applications using modern frameworks",
        "Provided ongoing maintenance and support for client projects",
        "Managed project timelines and client communications effectively",
      ],
      technologies: ["React", "Vue.js", "WordPress", "PHP", "MySQL"],
    },
  ]

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Internship":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
      case "Part-time":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "Research":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
      case "Freelance":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
    }
  }

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-black text-foreground mb-4">Experience</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            My professional journey through internships, research, and freelance work, building real-world experience in
            software development and technology.
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((experience, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <CardTitle className="text-xl font-heading font-bold text-card-foreground">
                      {experience.title}
                    </CardTitle>
                    <CardDescription className="text-lg font-medium text-primary">{experience.company}</CardDescription>
                  </div>
                  <Badge className={getTypeColor(experience.type)}>{experience.type}</Badge>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {experience.period}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {experience.location}
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <ul className="space-y-2 mb-4">
                  {experience.description.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-muted-foreground flex items-start">
                      <span className="text-primary mr-2 mt-1.5">•</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
