
import React from 'react';
import { Download, Github, Mail, User, Code, Server, Cloud } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

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
    },
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header Section */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-slate-800">Chidhvilas Kacham</h1>
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
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <img 
              src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=300&fit=crop&crop=face"
              alt="Chidhvilas Kacham"
              className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-white shadow-lg object-cover"
            />
            <h1 className="text-5xl font-bold text-slate-800 mb-4">
              DevOps & Cloud Engineer
            </h1>
            <p className="text-xl text-slate-600 mb-6 max-w-2xl mx-auto">
              Master's in Computer Science | Specializing in Kubernetes, Terraform, Docker, Azure, AWS, CI/CD
            </p>
            <div className="flex justify-center gap-4 text-slate-600">
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
      <section className="py-16 px-6 bg-white/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">About Me</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white/80 backdrop-blur-sm border-slate-200">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <User className="text-blue-600 mt-1" size={24} />
                  <p className="text-lg text-slate-700 leading-relaxed">
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
          <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">Experience</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="bg-white/80 backdrop-blur-sm border-slate-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-slate-800">DevOps Engineer</CardTitle>
                <p className="text-blue-600 font-semibold">Shrive Solutions LLC</p>
                <p className="text-slate-600">May 2025 – Present</p>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700">
                  Built and managed AKS-based infrastructure, automated deployments using Helm and GitHub Actions, 
                  implemented observability solutions for monitoring and alerting.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-slate-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-slate-800">DevOps Intern</CardTitle>
                <p className="text-blue-600 font-semibold">Nth Line Solutions LLC</p>
                <p className="text-slate-600">Jan 2024 – May 2025</p>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700">
                  Contributed to Terraform and Ansible automation in a CI/CD setup, 
                  gained hands-on experience with infrastructure as code practices.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-6 bg-white/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">Skills</h2>
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-3 justify-center">
              {skills.map((skill, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="px-4 py-2 text-sm bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="bg-white/80 backdrop-blur-sm border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group"
                onClick={() => window.open(project.github, '_blank')}
              >
                <CardHeader>
                  <CardTitle className="text-lg text-slate-800 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-2 text-blue-600">
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
      <section className="py-16 px-6 bg-white/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">Latest Blog Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {blogPosts.map((post, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm border-slate-200 hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-lg text-slate-800">{post.title}</CardTitle>
                  <p className="text-sm text-slate-500">{post.date}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-sm">{post.excerpt}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">Contact Me</h2>
          <div className="max-w-2xl mx-auto">
            <Card className="bg-white/80 backdrop-blur-sm border-slate-200">
              <CardContent className="p-8">
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                      Name
                    </label>
                    <Input 
                      id="name" 
                      name="name" 
                      type="text" 
                      required 
                      className="w-full"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      Email
                    </label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      required 
                      className="w-full"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                      Message
                    </label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      required 
                      className="w-full min-h-[120px]"
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
      <footer className="bg-slate-800 text-white py-8 px-6">
        <div className="container mx-auto text-center">
          <p className="text-slate-300">
            © 2024 Chidhvilas Kacham. Built with React and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
