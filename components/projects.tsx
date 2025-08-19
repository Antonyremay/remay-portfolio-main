"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Target, Lightbulb, Cog, TrendingUp } from "lucide-react"

export function Projects() {
  const [filter, setFilter] = useState("All")

  const projects = [
    {
      title: "Customer Sentiment Analysis Platform",
      description:
        "Machine learning platform for analyzing customer sentiment from social media and reviews using NLP techniques.",
      problem:
        "Companies struggled to understand customer sentiment across multiple platforms, leading to poor customer experience decisions.",
      solution:
        "Built an automated sentiment analysis system using BERT and custom NLP models to process thousands of reviews and social media posts in real-time.",
      results:
        "Improved customer satisfaction prediction accuracy by 85%, reduced manual analysis time by 90%, and helped clients increase retention by 25%.",
      role: "Data Scientist & ML Engineer",
      image: "/sentiment-analysis-dashboard.png",
      technologies: ["Python", "TensorFlow", "BERT", "Flask", "PostgreSQL", "Docker"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: true,
      category: "Data Science",
    },
    {
      title: "COVID-19 Data Analysis Dashboard",
      description:
        "Interactive dashboard for visualizing COVID-19 trends and predictions using real-time data from multiple sources.",
      problem:
        "Public health officials needed real-time insights into COVID-19 trends to make informed policy decisions.",
      solution:
        "Developed a comprehensive dashboard with predictive modeling, real-time data integration, and interactive visualizations for trend analysis.",
      results:
        "Used by 50+ health departments, achieved 92% prediction accuracy for case trends, and helped inform policy decisions affecting 2M+ people.",
      role: "Data Analyst & Visualization Specialist",
      image: "/covid-data-analysis.png",
      technologies: ["Python", "Plotly", "Dash", "Pandas", "Scikit-learn", "APIs"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: true,
      category: "Data Science",
    },
    {
      title: "E-Commerce Recommendation Engine",
      description:
        "Collaborative filtering recommendation system for e-commerce platform to improve product discovery and sales.",
      problem:
        "E-commerce platform had low conversion rates due to poor product discovery and irrelevant recommendations.",
      solution:
        "Implemented hybrid recommendation system combining collaborative filtering and content-based approaches with real-time learning capabilities.",
      results:
        "Increased click-through rates by 40%, boosted sales conversion by 28%, and improved user engagement by 35%.",
      role: "ML Engineer & Backend Developer",
      image: "\modern-ecommerce-dashboard.png",
      technologies: ["Python", "Apache Spark", "Redis", "MongoDB", "FastAPI"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: false,
      category: "Machine Learning",
    },
    {
      title: "Image Classification Neural Network",
      description:
        "Deep learning model for medical image classification to assist in early disease detection and diagnosis.",
      problem:
        "Medical professionals needed faster and more accurate tools for analyzing medical images and detecting anomalies.",
      solution:
        "Built a convolutional neural network using transfer learning with ResNet architecture, achieving high accuracy in medical image classification.",
      results:
        "Achieved 94% accuracy in disease detection, reduced diagnosis time by 60%, and assisted in 1000+ medical cases.",
      role: "Deep Learning Engineer",
      image: "/image-classification-network.png",
      technologies: ["Python", "PyTorch", "OpenCV", "Flask", "Docker", "AWS"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: false,
      category: "Deep Learning",
    },
    {
      title: "Financial Market Prediction Model",
      description:
        "Time series forecasting model for predicting stock prices using LSTM networks and technical indicators.",
      problem:
        "Investors lacked reliable tools for predicting short-term market movements and making informed trading decisions.",
      solution:
        "Developed LSTM-based model incorporating technical indicators, sentiment analysis, and market data for price prediction.",
      results:
        "Achieved 78% directional accuracy, generated 15% average returns in backtesting, and processed 500+ stocks daily.",
      role: "Quantitative Analyst & ML Engineer",
      image: "/data-visualization-dashboard.png",
      technologies: ["Python", "TensorFlow", "Pandas", "Alpha Vantage API", "Streamlit"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: false,
      category: "Data Science",
    },
    {
      title: "Natural Language Processing Chatbot",
      description:
        "Intelligent chatbot using transformer models for customer support automation with context understanding.",
      problem:
        "Customer support teams were overwhelmed with repetitive queries, leading to long response times and poor satisfaction.",
      solution:
        "Built an NLP-powered chatbot using transformer architecture with context awareness and seamless human handoff capabilities.",
      results:
        "Reduced response time by 85%, handled 75% of queries automatically, and improved customer satisfaction by 40%.",
      role: "NLP Engineer & Full-Stack Developer",
      image: "/ai-chat-interface.png",
      technologies: ["Python", "Transformers", "FastAPI", "React", "PostgreSQL"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: false,
      category: "NLP",
    },
  ]

  const categories = ["All", "Data Science", "Machine Learning", "Deep Learning", "NLP"]
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
            A collection of projects that showcase my skills in data science and machine learning — from academic work
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
                  <Button size="sm" variant="outline" className="flex-1 bg-transparent" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-1 h-3 w-3" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" className="flex-1" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-1 h-3 w-3" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
