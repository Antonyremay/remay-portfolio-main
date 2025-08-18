import Sidebar from "@/components/sidebar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import Stats from "@/components/stats"
import { Skills } from "@/components/skills"
import Resume from "@/components/resume"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <div className="flex min-h-screen bg-background text-foreground">
      <Sidebar />

      <main className="flex-1 w-full lg:ml-80 overflow-x-hidden">
        <div className="w-full">
          <Hero />
          <About />
          <Stats />
          <Skills />
          <Resume />
          <Projects />
          <Contact />
        </div>
      </main>
    </div>
  )
}
