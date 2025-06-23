
import React from 'react';
import { Download, Github, Mail, User, Code, Server, Cloud, Award, Trophy, Linkedin, Twitter, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import Navigation from '@/components/Navigation';
import MobileNavigation from '@/components/MobileNavigation';

const Index = () => {
  const projects = [
    {
      title: "K8s Voting App on AKS",
      description: "Kubernetes voting app with React frontend, Go backend, and MongoDB, deployed on Azure Kubernetes Service (AKS). ",
      github: "https://github.com/chidhvilaskacham/k8s-voteapp"
    },
    {
      title: "AWS EKS Fargate Deployment",
      description: "Deploy the classic 2048 game on AWS EKS using AWS Fargate and ALB in a serverless Kubernetes environment.",
      github: "https://github.com/chidhvilaskacham/EKS_2048_game"
    },
    {
      title: "Automated CI/CD Pipeline",
      description: "Complete CI/CD pipeline for Java apps using Jenkins, SonarQube, Docker, and Argo CD with GitOps on Kubernetes.",
      github: "https://github.com/chidhvilaskacham/ultimate-cicd"
    },
    {
      title: "DevSecOps Pipeline for Tic Tac Toe Game",
      description: "Secure DevSecOps pipeline with GitHub Actions for a Tic Tac Toe React app with score tracking and game history.",
      github: "https://github.com/chidhvilaskacham/devsecops-pipeline"
    },
    {
      title: "LLM-based Dockerfile Generator",
      description: "A GenAI-powered tool that generates optimized Dockerfiles for programming languages using local & hosted LLMs via Ollama.",
      github: "https://github.com/chidhvilaskacham/LLMs"
    },
    {
      title: "CrewAI DevOps Research and Reporting",
      description: "Multi-agent AI system using CrewAI and local LLaMA 3.1 via Ollama to automate DevOps research and reporting through collaborative agents.",
      github: "https://github.com/chidhvilaskacham/crewai-ollama"
    }
  ];

  const techStack = {
    "Cloud Platforms": ["Azure", "AWS", "Google Cloud"],
    "Container & Orchestration": ["Docker", "Kubernetes", "Helm"],
    "Infrastructure as Code": ["Terraform", "Ansible", "ARM Templates"],
    "CI/CD & DevOps": ["GitHub Actions", "Jenkins", "GitLab CI", "Azure DevOps"],
    "Programming": ["Python", "Go", "JavaScript", "TypeScript"],
    "Monitoring & Observability": ["Prometheus", "Grafana", "ELK Stack", "Azure Monitor"],
    "Databases": ["PostgreSQL", "MongoDB", "Redis"],
    "Version Control": ["Git", "GitHub", "GitLab"]
  };

  const certifications = [
    {
      name: "Azure Solutions Architect Expert",
      icon: "☁️",
      color: "bg-blue-500/20 text-blue-300"
    },
    {
      name: "AWS Solutions Architect",
      icon: "🔶",
      color: "bg-orange-500/20 text-orange-300"
    },
    {
      name: "Certified Kubernetes Administrator (CKA)",
      icon: "⚙️",
      color: "bg-purple-500/20 text-purple-300"
    },
    {
      name: "HashiCorp Terraform Associate",
      icon: "🏗️",
      color: "bg-green-500/20 text-green-300"
    }
  ];

  const keyHighlights = [
    "Led migration of legacy applications to cloud-native architecture, reducing infrastructure costs by 40%",
    "Implemented automated CI/CD pipelines that decreased deployment time from hours to minutes",
    "Designed and deployed scalable Kubernetes clusters serving 100k+ daily active users",
    "Architected multi-region disaster recovery solutions with 99.9% uptime SLA",
    "Mentored junior developers in DevOps best practices and cloud technologies"
  ];

  const achievements = [
    {
      metric: "50+",
      description: "Successful Production Deployments",
      icon: "🚀"
    },
    {
      metric: "99.9%",
      description: "System Uptime Maintained",
      icon: "⚡"
    },
    {
      metric: "40%",
      description: "Cost Reduction Through Optimization",
      icon: "💰"
    },
    {
      metric: "Research Paper",
      description: "Published on Phishing Attack Detection",
      icon: "📄"
    }
  ];

  const blogPosts = [
    {
      title: "Kubernetes Best Practices for Production",
      excerpt: "Essential guidelines for running Kubernetes clusters in production environments...",
      date: "March 15, 2024",
      url: "#"
    },
    {
      title: "Infrastructure as Code with Terraform",
      excerpt: "How to structure and manage your infrastructure using Terraform modules...",
      date: "March 8, 2024",
      url: "#"
    },
    {
      title: "GitOps: The Future of DevOps",
      excerpt: "Implementing GitOps practices for automated and reliable deployments...",
      date: "February 28, 2024",
      url: "#"
    }
  ];

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    const mailtoLink = `mailto:kachamchidhvilas@gmail.com?subject=Contact from ${name}&body=${message}%0D%0A%0D%0AFrom: ${email}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* DevOps/Cloud Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-blue-400 rounded-lg rotate-12"></div>
        <div className="absolute top-32 right-20 w-16 h-16 border-2 border-green-400 rounded-full"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 border-2 border-purple-400 rounded-lg -rotate-12"></div>
        <div className="absolute bottom-20 right-40 w-12 h-12 border-2 border-yellow-400 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-blue-500 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-green-500 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/3 w-10 h-10 bg-purple-500 rounded-full animate-pulse delay-2000"></div>
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Header Section */}
      <header className="bg-white/10 backdrop-blur-sm border-b border-white/20 sticky top-0 z-10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-white">Chidhvilas Kacham</h1>
            <div className="flex items-center gap-6">
              <Navigation />
              <MobileNavigation />
              <Button 
                asChild 
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                <a 
                  href="https://github.com/chidhvilaskacham/resume/blob/main/Chidhvilas_Kacham_Resume.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Download size={16} />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 px-6 relative">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <img 
              src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=300&fit=crop&crop=face"
              alt="Chidhvilas Kacham - DevOps & Cloud Engineer"
              className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-white shadow-lg object-cover"
              loading="eager"
            />
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              DevOps & Cloud Engineer
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-6 max-w-3xl mx-auto">
              Transforming infrastructure with cloud-native solutions, automation, and scalable architectures
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-blue-100">
              <div className="flex items-center gap-2">
                <Server size={20} />
                <span>Infrastructure Automation</span>
              </div>
              <div className="flex items-center gap-2">
                <Cloud size={20} />
                <span>Cloud-Native Solutions</span>
              </div>
              <div className="flex items-center gap-2">
                <Code size={20} />
                <span>Full-Stack Development</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 px-6 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {certifications.map((cert, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:scale-105 transition-transform">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 rounded-full ${cert.color} flex items-center justify-center text-2xl mx-auto mb-4`}>
                    {cert.icon}
                  </div>
                  <h3 className="font-semibold text-sm">{cert.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Highlights Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Key Highlights</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-8">
                <ul className="space-y-4">
                  {keyHighlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Trophy className="text-yellow-400 mt-1 flex-shrink-0" size={20} />
                      <span className="text-blue-100">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16 px-6 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Tech Stack</h2>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(techStack).map(([category, tools], index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-300">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {tools.map((tool, toolIndex) => (
                      <Badge 
                        key={toolIndex} 
                        variant="secondary" 
                        className="bg-blue-500/20 text-blue-200 hover:bg-blue-500/30 transition-colors border-blue-400/20"
                      >
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {achievements.map((achievement, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-white text-center hover:scale-105 transition-transform">
                <CardContent className="p-6">
                  <div className="text-3xl mb-2">{achievement.icon}</div>
                  <div className="text-2xl font-bold text-blue-300 mb-2">{achievement.metric}</div>
                  <p className="text-sm text-blue-200">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-16 px-6 bg-white/10 backdrop-blur-sm">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">About Me</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <User className="text-blue-400 mt-1" size={24} />
                  <p className="text-lg text-blue-100 leading-relaxed">
                    Passionate about automating infrastructure and enabling smooth deployments. 
                    I build secure, scalable systems with cloud-native practices and modern tooling. 
                    With a strong foundation in both DevOps practices and full-stack development, 
                    I bridge the gap between development and operations to create efficient, 
                    reliable software delivery pipelines.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Experience</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:shadow-lg transition-shadow text-white">
              <CardHeader>
                <CardTitle className="text-xl text-white">DevOps Engineer</CardTitle>
                <p className="text-blue-400 font-semibold">Shrive Solutions LLC</p>
                <p className="text-blue-200">May 2025 – Present</p>
              </CardHeader>
              <CardContent>
                <p className="text-blue-100">
                  Built and managed AKS-based infrastructure, automated deployments using Helm and GitHub Actions, 
                  implemented observability solutions for monitoring and alerting.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:shadow-lg transition-shadow text-white">
              <CardHeader>
                <CardTitle className="text-xl text-white">DevOps Intern</CardTitle>
                <p className="text-blue-400 font-semibold">Rakirs Systems LLC</p>
                <p className="text-blue-200">May 2025</p>
              </CardHeader>
              <CardContent>
                <p className="text-blue-100">
                  Contributed to Terraform and Ansible automation in a CI/CD setup, 
                  gained hands-on experience with infrastructure as code practices.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-6 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="bg-white/10 backdrop-blur-sm border-white/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group text-white"
                onClick={() => window.open(project.github, '_blank')}
              >
                <CardHeader>
                  <CardTitle className="text-lg text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-200 text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-2 text-blue-400">
                    <Github size={16} />
                    <span className="text-sm">View on GitHub</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Latest Blog Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {blogPosts.map((post, index) => (
              <Card 
                key={index} 
                className="bg-white/10 backdrop-blur-sm border-white/20 hover:shadow-lg transition-shadow cursor-pointer text-white group"
                onClick={() => window.open(post.url, '_blank')}
              >
                <CardHeader>
                  <CardTitle className="text-lg text-white group-hover:text-blue-400 transition-colors flex items-center gap-2">
                    {post.title}
                    <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </CardTitle>
                  <p className="text-sm text-blue-300">{post.date}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-200 text-sm">{post.excerpt}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Contact Me</h2>
          <div className="max-w-2xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-8">
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-blue-200 mb-2">
                      Name
                    </label>
                    <Input 
                      id="name" 
                      name="name" 
                      type="text" 
                      required 
                      className="w-full bg-white/10 border-white/20 text-white placeholder:text-blue-300"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-blue-200 mb-2">
                      Email
                    </label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      required 
                      className="w-full bg-white/10 border-white/20 text-white placeholder:text-blue-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-blue-200 mb-2">
                      Message
                    </label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      required 
                      className="w-full min-h-[120px] bg-white/10 border-white/20 text-white placeholder:text-blue-300"
                      placeholder="Tell me about your project or opportunity..."
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center gap-2"
                  >
                    <Mail size={16} />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/30 text-white py-12 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Chidhvilas Kacham</h3>
              <p className="text-blue-200 mb-4">
                DevOps & Cloud Engineer passionate about building scalable, secure infrastructure.
              </p>
              <div className="flex gap-4">
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="bg-white/10 border-white/20 hover:bg-white/20"
                  asChild
                >
                  <a 
                    href="https://github.com/chidhvilaskacham" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                  >
                    <Github size={20} />
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="bg-white/10 border-white/20 hover:bg-white/20"
                  asChild
                >
                  <a 
                    href="https://linkedin.com/in/chidhvilas-kacham" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin size={20} />
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="bg-white/10 border-white/20 hover:bg-white/20"
                  asChild
                >
                  <a 
                    href="https://twitter.com/chidhvilas" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Twitter Profile"
                  >
                    <Twitter size={20} />
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="bg-white/10 border-white/20 hover:bg-white/20"
                  asChild
                >
                  <a 
                    href="mailto:kachamchidhvilas@gmail.com"
                    aria-label="Send Email"
                  >
                    <Mail size={20} />
                  </a>
                </Button>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Recent Articles</h3>
              <ul className="space-y-2">
                {blogPosts.slice(0, 3).map((post, index) => (
                  <li key={index}>
                    <a 
                      href={post.url} 
                      className="text-blue-200 hover:text-blue-400 transition-colors text-sm block"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {post.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="https://github.com/chidhvilaskacham/resume/blob/main/Chidhvilas_Kacham_Resume.pdf"
                    className="text-blue-200 hover:text-blue-400 transition-colors text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download Resume
                  </a>
                </li>
                <li>
                  <a 
                    href="https://github.com/chidhvilaskacham"
                    className="text-blue-200 hover:text-blue-400 transition-colors text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub Profile
                  </a>
                </li>
                <li>
                  <a 
                    href="mailto:kachamchidhvilas@gmail.com"
                    className="text-blue-200 hover:text-blue-400 transition-colors text-sm"
                  >
                    Email Me
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <Separator className="bg-white/20 mb-6" />
          
          <div className="text-center">
            <p className="text-blue-200">
              © 2024 Chidhvilas Kacham. Built with React, TypeScript, and Tailwind CSS. Deployed on GitHub Pages.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
