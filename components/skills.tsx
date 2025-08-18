"use client"

import { useEffect, useState, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function Skills() {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedValues, setAnimatedValues] = useState<{ [key: string]: number }>({})
  const sectionRef = useRef<HTMLElement>(null)

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 80 },
        { name: "Java", level: 60 },
        { name: "C", level: 60 },
        { name: "HTML/CSS", level: 90 },
        { name: "SQL", level: 75 },
      ],
    },
    {
      title: "Data Science & Analytics",
      skills: [
        { name: "Data Analysis", level: 80 },
        { name: "Machine Learning", level: 75 },
        { name: "Statistical Modeling", level: 70 },
        { name: "Data Visualization", level: 80 },
        { name: "Excel", level: 80 },
      ],
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Git", level: 75 },
        { name: "LinkedIn", level: 85 },
        { name: "LeetCode", level: 70 },
        { name: "Photoshop", level: 55 },
        { name: "Prompt Engineering", level: 80 },
      ],
    },
    {
      title: "Academic Areas",
      skills: [
        { name: "Data Structures", level: 85 },
        { name: "Algorithms", level: 85 },
        { name: "Software Development", level: 80 },
        { name: "Web Technologies", level: 85 },
        { name: "Problem Solving", level: 90 },
      ],
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (isVisible) {
      skillCategories.forEach((category) => {
        category.skills.forEach((skill) => {
          const key = `${category.title}-${skill.name}`
          let start = 0
          const end = skill.level
          const duration = 2000
          const increment = end / (duration / 16)

          const counter = setInterval(() => {
            start += increment
            if (start >= end) {
              setAnimatedValues((prev) => ({ ...prev, [key]: end }))
              clearInterval(counter)
            } else {
              setAnimatedValues((prev) => ({ ...prev, [key]: Math.floor(start) }))
            }
          }, 16)
        })
      })
    }
  }, [isVisible])

  return (
    <section ref={sectionRef} id="skills" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-foreground mb-4">Skills & Technologies</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Passionate about leveraging data to solve real-world problems and create meaningful change through advanced
            analytics and machine learning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl font-heading font-bold text-card-foreground">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => {
                  const key = `${category.title}-${skill.name}`
                  const animatedValue = animatedValues[key] || 0
                  return (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-card-foreground">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{animatedValue}%</span>
                      </div>
                      <Progress value={animatedValue} className="h-2" />
                    </div>
                  )
                })}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
