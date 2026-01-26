"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import {
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Github,
  Mail,
  MapPin,
  Phone,
  Code,
  Database,
  Cloud,
  Smartphone,
  Globe,
  Server,
} from "lucide-react"
import { ModeToggle } from "@/components/mode-toggle"
import useScrollPosition from "@/hooks/scrollPositionHook"

export default function Portfolio() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null)

  const  scrollPosition = useScrollPosition();
  const isScrolled = scrollPosition > 50;

  const toggleProject = (projectId: string) => {
    setExpandedProject(expandedProject === projectId ? null : projectId)
  }

  const skills = {
    "Programming Languages": {
      icon: Code,
      items: ["Python", "JavaScript", "TypeScript", "Kotlin", "SQL"],
    },
    "Frontend Development": {
      icon: Globe,
      items: ["React", "Next.js", "Angular", "HTML5", "CSS", "Responsive Design", "Tailwind CSS"],
    },
    "Backend Development": {
      icon: Server,
      items: ["Django", "Flask", "REST APIs", "Microservices", "Node.js", "Express", "RabbitMQ"],
    },
    "Databases": {
      icon: Database,
      items: ["PostgreSQL", "SQLite", "MongoDB", "Redis", "MySQL"],
    },
    "Cloud & DevOps": {
      icon: Cloud,
      items: ["AWS", "GCP", "Azure", "Docker", "Kubernetes", "GitHub Actions"],
    },
    "Mobile Development": {
      icon: Smartphone,
      items: ["Android", "Kotlin", "React Native"],
    },
  }

  const personalProjects = [
    {
      id: "omegs",
      title: "Omegs Nursing Services",
      description: "A comprehensive nursing service platform for a UK-based healthcare provider",
      technologies: ["React", "Django", "PostgreSQL", "AWS"],
      details:
        "Built a full-featured healthcare management system with patient scheduling, staff management, and service tracking. Implemented secure authentication, real-time notifications, and comprehensive reporting features.",
      link: "https://omegs-uk.netlify.app/",
    },
    {
      id: "shops-galore",
      title: "Shops Galore",
      description: "Multi-vendor ecommerce platform serving the Kenyan market",
      technologies: ["Angular", "Django", "PostgreSQL", "Redis"],
      details:
        "Developed a scalable multi-vendor marketplace with vendor onboarding, product management, order processing, and integrated payment systems. Features include inventory management, analytics dashboard, and mobile-responsive design.",
      link: "#",
      github: "#",
    },
    {
      id: "github-repos",
      title: "Open Source Contributions",
      description: "50+ working repositories showcasing various technologies and solutions",
      technologies: ["Various", "Python", "JavaScript", "Kotlin"],
      details:
        "Maintained an active GitHub profile with diverse projects ranging from web applications to mobile apps, utility scripts, and experimental technologies. Regular contributions to open source projects and personal learning experiments.",
      github: "https://github.com/Ken-mbira",
    },
  ]

  const professionalProjects = [
    {
      title: "Climate Tech Solutions at CYNK",
      period: "Jun 2022 - Present",
      description: "Designing cutting-edge solutions for IoT data collection and blockchain storage",
      technologies: ["IoT", "Blockchain", "Python", "Data Processing"],
      achievements: [
        "Developed data collection systems for various IoT devices",
        "Implemented publicly verifiable and immutable blockchain storage",
        "Created scalable architecture for climate data processing",
      ],
    },
    {
      title: "Enterprise Systems at Tamuwa",
      period: "Jun 2022 - Present",
      description: "Full-stack development of enterprise solutions and IoT integration",
      technologies: ["Django", "React", "PostgreSQL", "IoT", "Weather APIs"],
      achievements: [
        "Built ERP system actively used by 30+ users across operational areas",
        "Implemented digital identification system for 200+ employees",
        "Integrated 20+ IoT devices for real-time data insights",
        "Developed weather overlay system for operational planning",
        "Conducted comprehensive training sessions for team adoption",
      ],
    },
    {
      title: "Fintech Platform - Fuzupay",
      period: "Jan 2022 - Feb 2022",
      description: "Co-founded and developed payment platform for East African market",
      technologies: ["Payment APIs", "REST APIs", "Role-based Access", "Team Leadership"],
      achievements: [
        "Integrated multiple payment providers across East Africa",
        "Led team of 5 developers with code quality oversight",
        "Implemented role-based access controls",
        "Built REST API interface for mobile and web clients",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 p-4 transition-all duration-300 ${
            isScrolled ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
          }`}
        >
        <div className="bg-background/80 backdrop-blur-sm border rounded-xl max-w-6xl mx-auto">
          <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" className="text-xl font-bold hover:opacity-80 transition-opacity">
              Ken Mbira
            </Link>
            <div className="flex items-center gap-4">
              <Link
                href="/blog"
                className="text-sm font-medium hover:opacity-80 transition-opacity"
              >
                Blog
              </Link>
              <ModeToggle />
            </div>
          </div>
        </div>
      </header>
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 text-center bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Ken Mbira</h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">Software Engineer from Nairobi, Kenya</p>
          <p className="text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Passionate about leveraging technology to bring projects to life, with expertise spanning backend systems,
            frontend interfaces, and mobile applications. Focused on building scalable, efficient solutions that deliver
            exceptional user experiences.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground mb-6">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Nairobi, Kenya
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              devmbira@gmail.com
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              +254758926990
            </div>
          </div>
          <div className="flex justify-center">
            <Link
              href="/blog"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Blog →
            </Link>
          </div>
        </div>
      </section>

      {/* Skills & Tools Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Skills & Technologies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, { icon: Icon, items }]) => (
              <Card key={category} className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon className="w-5 h-5 text-primary" />
                    {category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      {/* Personal Projects Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Personal Projects</h2>
          <div className="grid gap-6">
            {personalProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <CardTitle className="flex items-center gap-2">
                        {project.title}
                        {project.link && (
                          <Button variant="ghost" size="sm" asChild>
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          </Button>
                        )}
                        {project.github && (
                          <Button variant="ghost" size="sm" asChild>
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                              <Github className="w-4 h-4" />
                            </a>
                          </Button>
                        )}
                      </CardTitle>
                      <CardDescription className="mt-2">{project.description}</CardDescription>
                    </div>
                    <Button variant="ghost" size="sm" onClick={() => toggleProject(project.id)}>
                      {expandedProject === project.id ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  {expandedProject === project.id && (
                    <div className="pt-4 border-t">
                      <p className="text-muted-foreground leading-relaxed">{project.details}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      {/* Professional Experience Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Professional Experience</h2>
          <div className="space-y-8">
            {professionalProjects.map((project, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{project.title}</CardTitle>
                      <CardDescription className="text-sm font-medium text-primary">{project.period}</CardDescription>
                    </div>
                  </div>
                  <p className="text-muted-foreground mt-2">{project.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <ul className="space-y-2">
                    {project.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <Separator />

      {/* Contact Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Let&apos;s Work Together</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            I&apos;m always interested in exciting projects. Let&apos;s discuss how we can bring your ideas to life.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <a href="mailto:devmbira@gmail.com">
                <Mail className="w-4 h-4 mr-2" />
                Get In Touch
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="https://github.com/Ken-mbira" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                View GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
