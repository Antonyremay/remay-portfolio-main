"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Target, Lightbulb, Cog, TrendingUp } from "lucide-react"

const githubProfileUrl = "https://github.com/Antonyremay"

export function Projects() {
  const [filter, setFilter] = useState("All")

  const projects = [
    {
      title: "ChurnIQ - Customer Churn Prediction & Analytics Platform",
      description:
        "Customer churn analytics platform using the IBM Telco Customer Churn dataset to support retention prioritization and KPI analysis.",
      problem:
        "Customer teams needed a consistent way to identify churn risk and prioritize retention efforts.",
      solution:
        "Built a Logistic Regression workflow with preprocessing, stratified train/test splitting, 5-fold cross-validation, churn probability scoring, segmentation, and feature engineering.",
      results:
        "Created a repeatable analytics workflow for customer retention prioritization and business KPI analysis.",
      role: "Data Scientist & Data Analyst",
      image: "/data-visualization-dashboard.png",
      technologies: ["React", "TypeScript", "Logistic Regression", "SQL", "Power BI", "Data Analytics"],
      githubUrl: "https://github.com/Antonyremay/churnsmart-insight",
      liveUrl: "https://churnsmart-insight.vercel.app/",
      featured: true,
      category: "Data Science",
    },
    {
      title: "Elite Weather - Weather Data Analytics Application",
      description:
        "Responsive weather application using AI-assisted development and the OpenWeather API for real-time, city-based data.",
      problem:
        "Users needed a simple way to retrieve current weather data for different cities.",
      solution:
        "Integrated REST API endpoints and implemented data validation and transformation workflows for downstream analysis.",
      results:
        "Gained hands-on experience in prompt engineering, API integration, deployment workflows, and real-time web data.",
      role: "Data Analyst & API Integrator",
      image: "/Elite_weather_image.png",
      technologies: ["OpenWeather API", "REST APIs", "JSON", "Web APIs", "Deployment Tools", "Lovable AI"],
      githubUrl: "https://github.com/Antonyremay/Elite-Weather",
      liveUrl: "https://eliteweather.lovable.app/home",
      featured: true,
    },
  ]

  const categories = ["All", "Data Science"]
  const featuredProjects = projects.filter((project) => project.featured)
  const filteredProjects = projects.filter(
    (project) => !project.featured && (filter === "All" || project.category === filter),
  )

  return (
    <section id="projects" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-foreground mb-4">Portfolio</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A collection of projects that showcase my skills in Data science and machine learning — from academic work
            to real-world applications. Each project reflects my ability to analyze problems, design effective
            solutions, and implement them using modern tools and technologies.
          </p>
        </div>

        {/* Featured Projects - Detailed Case Studies */}
        <div className="space-y-16 mb-20">
          {featuredProjects.map((project, index) => (
            <Card key={index} className="bg-card border-border overflow-hidden hover:shadow-xl transition-shadow">
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="aspect-video lg:aspect-square overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 lg:p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Badge variant="secondary">Featured Project</Badge>
                    <Badge variant="outline">{project.category}</Badge>
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-card-foreground mb-4">{project.title}</h3>

                  {/* Problem */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="h-4 w-4 text-destructive" />
                      <h4 className="font-semibold text-foreground">Problem</h4>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{project.problem}</p>
                  </div>

                  {/* Solution */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Lightbulb className="h-4 w-4 text-accent" />
                      <h4 className="font-semibold text-foreground">Solution</h4>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{project.solution}</p>
                  </div>

                  {/* Results */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="h-4 w-4 text-emerald-600" />
                      <h4 className="font-semibold text-foreground">Results & Impact</h4>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{project.results}</p>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Cog className="h-4 w-4 text-muted-foreground" />
                      <h4 className="font-semibold text-foreground">Technologies Used</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    {project.githubUrl && (
                      <Button variant="outline" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          View Code
                        </a>
                      </Button>
                    )}
                    {project.liveUrl ? (
                      <Button asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    ) : (
                      <Button disabled>
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              onClick={() => setFilter(category)}
              className="text-sm"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Other Projects - Filterable Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="text-xs">
                    {project.category}
                  </Badge>
                </div>
                <CardTitle className="text-lg font-heading font-bold text-card-foreground">{project.title}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>
                <div className="flex gap-2">
                  {project.githubUrl && (
                    <Button size="sm" variant="outline" className="flex-1 bg-transparent" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-1 h-3 w-3" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.liveUrl ? (
                    <Button size="sm" className="flex-1" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-1 h-3 w-3" />
                        Demo
                      </a>
                    </Button>
                  ) : (
                    <Button size="sm" className="flex-1" disabled>
                      <ExternalLink className="mr-1 h-3 w-3" />
                      Demo
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
