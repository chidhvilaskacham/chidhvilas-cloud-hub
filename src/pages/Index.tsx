
import React from 'react';
import { Download, Github, Mail, User, Code, Server, Cloud } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Navigation from '@/components/Navigation';
import MobileNavigation from '@/components/MobileNavigation';

const Index = () => {
  const projects = [
    {
      title: "AKS Deployment Pipeline",
      description: "End-to-end CI/CD pipeline deploying React + Go apps to Azure Kubernetes Service using Helm and GitHub Actions.",
      github: "https://github.com/chidhvilaskacham/aks-deployment"
    },
    {
      title: "Spacelift Blend",
      description: "GitOps setup using Terraform and Spacelift to manage infrastructure with automated policy checks.",
      github: "https://github.com/chidhvilaskacham/spacelift_blend"
    },
    {
      title: "Portfolio Website",
      description: "HTML/CSS-based static site hosted on GitHub Pages.",
      github: "https://github.com/chidhvilaskacham/chidhvilaskacham.github.io"
    },
    {
      title: "DevOps Job Tracker",
      description: "A simple full-stack app to track DevOps job applications using React, Node.js, and MongoDB.",
      github: "https://github.com/chidhvilaskacham/devops-job-tracker"
    },
    {
      title: "Dockerized Flask App",
      description: "A Flask-based REST API containerized with Docker, ready for deployment on Kubernetes.",
      github: "https://github.com/chidhvilaskacham/flask-docker"
    },
    {
      title: "Terraform Azure Setup",
      description: "Automated provisioning of Azure resources using Terraform modules for scalable deployments.",
      github: "https://github.com/chidhvilaskacham/terraform-azure"
    },
    {
      title: "CI/CD with GitHub Actions",
      description: "Sample project demonstrating build/test/deploy workflows with GitHub Actions and Docker.",
      github: "https://github.com/chidhvilaskacham/ci-cd-actions"
    }
  ];

  const skills = [
    "Kubernetes", "Docker", "Terraform", "Helm", "Azure", "AWS", 
    "GitHub Actions", "Jenkins", "Python", "Golang", "React", 
    "SQL", "Prometheus", "Grafana", "Ansible", "GitOps"
  ];

  const blogPosts = [
    {
      title: "Kubernetes Best Practices for Production",
      excerpt: "Essential guidelines for running Kubernetes clusters in production environments...",
      date: "March 15, 2024"
    },
    {
      title: "Infrastructure as Code with Terraform",
      excerpt: "How to structure and manage your infrastructure using Terraform modules...",
      date: "March 8, 2024"
    },
    {
      title: "GitOps: The Future of DevOps",
      excerpt: "Implementing GitOps practices for automated and reliable deployments...",
      date: "February 28, 2024"
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
              alt="Chidhvilas Kacham"
              className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-white shadow-lg object-cover"
            />
            <h1 className="text-5xl font-bold text-white mb-4">
              DevOps & Cloud Engineer
            </h1>
            <p className="text-xl text-blue-100 mb-6 max-w-2xl mx-auto">
              Master's in Computer Science | Specializing in Kubernetes, Terraform, Docker, Azure, AWS, CI/CD
            </p>
            <div className="flex justify-center gap-4 text-blue-100">
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

      {/* Skills Section */}
      <section className="py-16 px-6 bg-white/10 backdrop-blur-sm">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Skills</h2>
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-3 justify-center">
              {skills.map((skill, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="px-4 py-2 text-sm bg-blue-500/20 text-blue-200 hover:bg-blue-500/30 transition-colors border-blue-400/20"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-6">
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
                  <p className="text-blue-200 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
      <section id="blog" className="py-16 px-6 bg-white/10 backdrop-blur-sm">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Latest Blog Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {blogPosts.map((post, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:shadow-lg transition-shadow cursor-pointer text-white">
                <CardHeader>
                  <CardTitle className="text-lg text-white">{post.title}</CardTitle>
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
      <section id="contact" className="py-16 px-6">
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
      <footer className="bg-black/20 text-white py-8 px-6">
        <div className="container mx-auto text-center">
          <p className="text-blue-200">
            © 2024 Chidhvilas Kacham. Built with React and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
