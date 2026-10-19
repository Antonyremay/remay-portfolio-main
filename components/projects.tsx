"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Target, Lightbulb, Cog, TrendingUp } from "lucide-react"

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
      image: "/ChurnIQ%20Neon%20Retention%20Dashboardd.png",
      technologies: ["React", "TypeScript", "Logistic Regression", "SQL", "Power BI", "Data Analytics"],
      githubUrl: "https://github.com/Antonyremay/churnsmart-insight",
      liveUrl: "https://churnsmart-insight.vercel.app/",
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
      category: "Data Science",
    },
    {
      title: "Retail ETL Pipeline & Sales Insights",
      description:
        "Built a retail ETL pipeline to transform raw retail data into structured, analysis-ready data and support sales insights through Power BI.",
      problem:
        "Raw retail data needs to be cleaned, transformed, and organized before it can be used reliably for sales reporting and business analysis.",
      solution:
        "Developed a retail ETL workflow to extract, transform, and load data, preparing it for downstream analysis and Power BI reporting.",
      results:
        "Created a data pipeline and interactive sales dashboard to support exploration of retail performance and business insights.",
      role: "Data Engineer & Data Analyst",
      image: "/Retail%20ETL%20Pipeline%20%26%20Sales%20Insights.png",
      technologies: ["Python", "Pandas", "MySQL", "SQL", "Power BI"],
      githubUrl: "https://github.com/Antonyremay/retail-etl-pipeline",
      liveUrl:
        "https://app.powerbi.com/groups/me/reports/8b937f24-11c6-448a-b1af-04ddaf027277/d1a562e65c0bf2b37de8?experience=power-bi",
      category: "Data Engineering",
    },
  ]

  const categories = ["All", "Data Science", "Data Engineering"]
  const visibleProjects = projects.filter((project) => filter === "All" || project.category === filter)

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

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              type="button"
              variant={filter === category ? "default" : "outline"}
              onClick={() => setFilter(category)}
              className="text-sm"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Projects - Detailed Case Studies */}
        <div className="space-y-16">
          {visibleProjects.map((project) => (
            <Card key={project.title} className="bg-card border-border overflow-hidden hover:shadow-xl transition-shadow">
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="aspect-video lg:aspect-square overflow-hidden">
                  <img
                    src={project.image}
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
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">{project.description}</p>

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

                  <p className="text-sm text-muted-foreground mb-6">
                    <span className="font-semibold text-foreground">Role:</span> {project.role}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Cog className="h-4 w-4 text-muted-foreground" />
                      <h4 className="font-semibold text-foreground">Technologies Used</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button variant="outline" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        View Code
                      </a>
                    </Button>
                    <Button asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
