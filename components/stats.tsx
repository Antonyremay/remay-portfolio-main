"use client"

import { useEffect, useState, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Clock, Award, Users } from "lucide-react"

const stats = [
  { icon: BookOpen, label: "Projects Completed", value: 3, suffix: "" },
  { icon: Clock, label: "Hours of Training", value: 150, suffix: "+" },
  { icon: Award, label: "Certifications", value: 2, suffix: "" },
  { icon: Users, label: "Community Involvement", value: 1, suffix: "+" },
]

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false)
  const [counts, setCounts] = useState(stats.map(() => 0))
  const sectionRef = useRef<HTMLElement>(null)

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
      stats.forEach((stat, index) => {
        let start = 0
        const end = stat.value
        const duration = 2000
        const increment = end / (duration / 16)

        const counter = setInterval(() => {
          start += increment
          if (start >= end) {
            setCounts((prev) => {
              const newCounts = [...prev]
              newCounts[index] = end
              return newCounts
            })
            clearInterval(counter)
          } else {
            setCounts((prev) => {
              const newCounts = [...prev]
              newCounts[index] = Math.floor(start)
              return newCounts
            })
          }
        }, 16)

        return () => clearInterval(counter)
      })
    }
  }, [isVisible])

  return (
    <section ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="text-center border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-accent/10">
                    <stat.icon className="h-8 w-8 text-accent" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">
                  {counts[index]}
                  {stat.suffix}
                </div>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
