"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Download, Instagram } from "lucide-react"

const roles = ["Data Scientist", "Computer Science Major", "Tech Enthusiast", "Machine Learning Engineer","Predictive Modeler"]

export function Hero() {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const role = roles[currentRole]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < role.length) {
            setDisplayText(role.slice(0, displayText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1))
          } else {
            setIsDeleting(false)
            setCurrentRole((prev) => (prev + 1) % roles.length)
          }
        }
      },
      isDeleting ? 50 : 100,
    )

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentRole])

  const handleContactClick = () => {
    const contactSection = document.querySelector("#contact")
    contactSection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <img
            src="antonyremay.jpg"
            alt="Antony Remane"
            className="w-64 h-64 rounded-full mx-auto mb-8 border-4 border-accent/20 shadow-2xl"
          />
        </div>

        <h1 className="text-4xl sm:text-6xl font-heading font-bold text-foreground mb-6">Antony Remane</h1>

        <div className="text-2xl sm:text-3xl text-accent mb-8 h-12 flex items-center justify-center">
          <span>I'm a </span>
          <span className="ml-2 font-semibold">
            {displayText}
            <span className="animate-pulse">|</span>
          </span>
        </div>

        <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          A highly motivated and creative final-year Computer Science student with a strong passion for data science and
          a deep curiosity for uncovering insights through data. Passionate about expanding technical expertise,
          refining problem-solving abilities, and contributing to innovative projects in a dynamic environment.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button size="lg" className="w-full sm:w-auto" onClick={handleContactClick}>
            <Mail className="mr-2 h-5 w-5" />
            Get In Touch
          </Button>
          <Button variant="outline" size="lg" className="w-full sm:w-auto bg-transparent">
            <Download className="mr-2 h-5 w-5" />
            Download Resume
          </Button>
        </div>

        <div className="flex justify-center space-x-8">
          <a
            href="https://github.com/Antonyremay"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-110"
          >
            <Github className="h-7 w-7" />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/antonyremane/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-110"
          >
            <Linkedin className="h-7 w-7" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a
            href="https://www.instagram.com/_remay__"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-110"
          >
            <Instagram className="h-7 w-7" />
            <span className="sr-only">Instagram</span>
          </a>
          <a
            href="mailto:antonyremane13@gmail.com"
            className="text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-110"
          >
            <Mail className="h-7 w-7" />
            <span className="sr-only">Email</span>
          </a>
        </div>
      </div>
    </section>
  )
}
