import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, MapPin, Calendar, Users, Code, Briefcase, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-md border-b border-cyan-500/30 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Portfolio
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="#about" className="text-gray-300 hover:text-cyan-400 transition-colors">
                About
              </Link>
              <Link href="#experience" className="text-gray-300 hover:text-cyan-400 transition-colors">
                Experience
              </Link>
              <Link href="#skills" className="text-gray-300 hover:text-cyan-400 transition-colors">
                Skills
              </Link>
              <Link href="#contact" className="text-gray-300 hover:text-cyan-400 transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-black via-gray-900 to-purple-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <div className="relative inline-block mb-8">
              <div className="w-32 h-32 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 p-1">
                <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                  <Code className="w-16 h-16 text-cyan-400" />
                </div>
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-lime-400 rounded-full border-4 border-black animate-pulse"></div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Full-Stack
              <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Developer
              </span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Passionate about creating impactful digital solutions and building communities. Experienced in project
              management and community leadership.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white px-8 py-3 rounded-full border-0 shadow-lg shadow-cyan-500/25"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-3 rounded-full border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black bg-transparent"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                View Projects
              </Button>
            </div>

            <div className="flex justify-center space-x-6">
              <Link
                href="https://github.com/Kaushik49"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Github className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Linkedin className="w-6 h-6" />
              </Link>
              <Link href="mailto:kaushal2061@gmail.com" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Mail className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white text-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-black mb-6">Building Digital Solutions with Purpose</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                I'm a passionate full-stack developer who believes in the power of technology to create positive change.
                My journey combines technical expertise with leadership experience in community building and project
                management.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Through my work with Engineer's Without Borders Nepal and Superteam Nepal, I've learned that the best
                solutions come from understanding people's needs and building communities around shared goals.
              </p>
              <div className="flex items-center text-gray-700 mb-4">
                <MapPin className="w-5 h-5 mr-2 text-cyan-600" />
                <span>Nepal</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Calendar className="w-5 h-5 mr-2 text-cyan-600" />
                <span>Available for new opportunities</span>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-cyan-100 to-purple-100 rounded-2xl p-8 h-80 flex items-center justify-center border-2 border-cyan-200">
                <Code className="w-32 h-32 text-gray-600" />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-black rounded-xl p-4 shadow-lg border-2 border-cyan-400">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-lime-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-white">Currently coding</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Experience</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Engineer's Without Borders Nepal */}
            <Card className="group hover:shadow-xl hover:shadow-lime-500/20 transition-all duration-300 border-2 border-lime-400/30 shadow-lg bg-black text-white">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-lime-400 to-emerald-500 rounded-xl flex items-center justify-center">
                      <Briefcase className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-white group-hover:text-lime-400 transition-colors">
                        Project Manager
                      </CardTitle>
                      <CardDescription className="text-gray-300 font-medium">
                        Engineer's Without Borders Nepal
                      </CardDescription>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Led cross-functional teams to deliver sustainable engineering solutions for underserved communities.
                  Managed project timelines, coordinated with stakeholders, and ensured successful project delivery.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="bg-lime-400 text-black hover:bg-lime-300">Project Management</Badge>
                  <Badge className="bg-lime-400 text-black hover:bg-lime-300">Team Leadership</Badge>
                  <Badge className="bg-lime-400 text-black hover:bg-lime-300">Stakeholder Management</Badge>
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <Users className="w-4 h-4 mr-2" />
                  <span>Social Impact • Engineering Solutions</span>
                </div>
              </CardContent>
            </Card>

            {/* Superteam Nepal */}
            <Card className="group hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 border-2 border-purple-400/30 shadow-lg bg-black text-white">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-xl flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-white group-hover:text-purple-400 transition-colors">
                        Community Manager
                      </CardTitle>
                      <CardDescription className="text-gray-300 font-medium">Superteam Nepal</CardDescription>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Built and nurtured a thriving community of developers, designers, and entrepreneurs. Organized events,
                  facilitated collaborations, and drove community engagement initiatives.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="bg-purple-400 text-white hover:bg-purple-300">Community Building</Badge>
                  <Badge className="bg-purple-400 text-white hover:bg-purple-300">Event Management</Badge>
                  <Badge className="bg-purple-400 text-white hover:bg-purple-300">Strategic Planning</Badge>
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <Users className="w-4 h-4 mr-2" />
                  <span>Web3 • Community Growth</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white text-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Skills & Technologies</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Frontend */}
            <Card className="text-center hover:shadow-lg hover:shadow-cyan-500/20 transition-shadow border-2 border-cyan-400 shadow-md bg-black text-white">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-white">Frontend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge className="bg-cyan-400 text-black hover:bg-cyan-300">React</Badge>
                  <Badge className="bg-cyan-400 text-black hover:bg-cyan-300">Next.js</Badge>
                  <Badge className="bg-cyan-400 text-black hover:bg-cyan-300">TypeScript</Badge>
                  <Badge className="bg-cyan-400 text-black hover:bg-cyan-300">Tailwind CSS</Badge>
                  <Badge className="bg-cyan-400 text-black hover:bg-cyan-300">Vue.js</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Backend */}
            <Card className="text-center hover:shadow-lg hover:shadow-lime-500/20 transition-shadow border-2 border-lime-400 shadow-md bg-black text-white">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-lime-400 to-emerald-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <Briefcase className="w-8 h-8 text-black" />
                </div>
                <CardTitle className="text-white">Backend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge className="bg-lime-400 text-black hover:bg-lime-300">Node.js</Badge>
                  <Badge className="bg-lime-400 text-black hover:bg-lime-300">Python</Badge>
                  <Badge className="bg-lime-400 text-black hover:bg-lime-300">PostgreSQL</Badge>
                  <Badge className="bg-lime-400 text-black hover:bg-lime-300">MongoDB</Badge>
                  <Badge className="bg-lime-400 text-black hover:bg-lime-300">Express.js</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Tools & Others */}
            <Card className="text-center hover:shadow-lg hover:shadow-purple-500/20 transition-shadow border-2 border-purple-400 shadow-md bg-black text-white">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-white">Tools & Leadership</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge className="bg-purple-400 text-white hover:bg-purple-300">Git</Badge>
                  <Badge className="bg-purple-400 text-white hover:bg-purple-300">Docker</Badge>
                  <Badge className="bg-purple-400 text-white hover:bg-purple-300">AWS</Badge>
                  <Badge className="bg-purple-400 text-white hover:bg-purple-300">Project Management</Badge>
                  <Badge className="bg-purple-400 text-white hover:bg-purple-300">Team Leadership</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-black via-purple-900 to-cyan-900 text-white"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full mb-8"></div>

          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            I'm always interested in new opportunities and exciting projects. Whether you need a full-stack developer or
            a project manager, let's connect!
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-400 to-purple-500 hover:from-cyan-300 hover:to-purple-400 text-white px-8 py-3 rounded-full shadow-lg shadow-cyan-500/25"
              asChild
            >
              <Link href="mailto:kaushal2061@gmail.com?subject=Let's Work Together&body=Hi! I found your portfolio and would like to discuss a potential opportunity.">
                <Mail className="w-5 h-5 mr-2" />
                Send Message
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-3 rounded-full bg-transparent"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
          </div>

          <div className="flex justify-center space-x-8">
            <Link
              href="https://github.com/Kaushik49"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <Github className="w-8 h-8" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
              <Linkedin className="w-8 h-8" />
            </Link>
            <Link href="mailto:kaushal2061@gmail.com" className="text-gray-400 hover:text-cyan-400 transition-colors">
              <Mail className="w-8 h-8" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-black text-gray-400 text-center border-t border-cyan-500/30">
        <p>&copy; {new Date().getFullYear()} Full-Stack Developer Portfolio. Built with passion and purpose.</p>
      </footer>
    </div>
  )
}
