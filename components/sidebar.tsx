"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Home, User, FileText, FolderOpen, Mail, Menu, X, Github, Linkedin, Twitter, Instagram } from "lucide-react"

const navigation = [
  { name: "Home", href: "#hero", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Resume", href: "#resume", icon: FileText },
  { name: "Portfolio", href: "#projects", icon: FolderOpen },
  { name: "Contact", href: "#contact", icon: Mail },
]

const socialLinks = [
  { name: "GitHub", href: "https://github.com/Antonyremay", icon: Github },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/antonyremane/", icon: Linkedin },
  { name: "Twitter", href: "https://twitter.com/antonyremane", icon: Twitter },
  { name: "Instagram", href: "https://www.instagram.com/antonyremane/", icon: Instagram },
]


export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      {/* Mobile menu button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 lg:hidden bg-sidebar text-sidebar-foreground hover:bg-sidebar-accent"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-80 bg-sidebar text-sidebar-foreground transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <div className="flex flex-col h-full p-6">
          {/* Profile section */}
          <div className="text-center mb-8">
            <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-sidebar-primary">
              <img src="/antonyremay.jpg" alt="Antony Remane" className="w-full h-full object-cover" />
            </div>
            <h1 className="text-2xl font-bold mb-2">Antony Remane</h1>
            <p className="text-sidebar-foreground/80">Data Science Student</p>
          </div>

          {/* Navigation */}
          <nav className="flex-1">
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className="w-full flex items-center gap-3 px-4 py-3 text-left rounded-lg hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors"
                  >
                    <item.icon className="h-5 w-5" />
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social links */}
          <div className="mt-8">
            <div className="flex justify-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="p-2 rounded-lg hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors"
                  aria-label={link.name}
                >
                  <link.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && <div className="fixed inset-0 bg-black/50 z-30 lg:hidden" onClick={() => setIsOpen(false)} />}
    </>
  )
}
