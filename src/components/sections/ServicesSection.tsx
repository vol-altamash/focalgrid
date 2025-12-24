import { motion } from "framer-motion";
import { ArrowRight, Code, Bot, Palette, Shield, Wrench, Camera, ShoppingCart, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";

const serviceCategories = [
  {
    id: "engineering",
    title: "Core Engineering",
    subtitle: "Build Product-Grade Software",
    description: "Scalable, production-ready software that powers enterprise operations.",
    icon: Code,
    color: "from-primary to-teal-light",
    bgColor: "bg-muted",
    textDark: false,
    services: [
      { name: "Web / Mobile App Development", description: "Cross-platform applications" },
      { name: "Custom Software Development", description: "Tailored business solutions" },
      { name: "Enterprise Software", description: "Large-scale systems" },
    ],
    cta: "Explore Engineering Solutions",
  },
  {
    id: "ai",
    title: "AI & Automation",
    subtitle: "Unlock Intelligent, Autonomous Workflows",
    description: "Deploy cutting-edge AI agents and automation for competitive advantage.",
    icon: Bot,
    color: "from-accent to-gold-light",
    bgColor: "bg-secondary",
    textDark: true,
    services: [
      { name: "Custom AI Development & Integration", description: "Tailored AI solutions" },
      { name: "AI Agent & Virtual Assistant", description: "Intelligent assistants" },
      { name: "Automation", description: "Workflow optimization" },
      { name: "AI Marketing", description: "Smart campaigns" },
    ],
    cta: "Discover AI Solutions",
  },
  {
    id: "design",
    title: "Design & Creative",
    subtitle: "Visual Identity That Delights",
    description: "Stunning UI/UX, branding, and visual design that users love.",
    icon: Palette,
    color: "from-pink-500 to-purple-500",
    bgColor: "bg-muted",
    textDark: false,
    services: [
      { name: "UI / UX Design", description: "User-centered interfaces" },
      { name: "Branding & Identity", description: "Complete brand systems" },
      { name: "Specialty Designs", description: "Unique visual solutions" },
      { name: "Print Design", description: "Physical materials" },
    ],
    cta: "Design With Us",
  },
];

const additionalServices = [
  {
    icon: Layers,
    title: "Systems & Integration",
    description: "Seamlessly connect disparate systems, databases, and platforms.",
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Enterprise-grade security and regulatory compliance built from day one.",
  },
  {
    icon: Wrench,
    title: "Quality & Support",
    description: "Continuous testing, monitoring, and support for 24/7 uptime.",
  },
  {
    icon: Camera,
    title: "Media & Motion",
    description: "Professional photography, motion graphics, and video production.",
  },
  {
    icon: ShoppingCart,
    title: "Marketing & Commerce",
    description: "End-to-end marketing solutions and e-commerce platforms.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 lg:py-32">
      {/* Section Header */}
      <div className="container mx-auto px-4 lg:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Our Services
          </span>
          <h2 className="text-3xl lg:text-5xl font-display font-bold text-foreground mb-4">
            End-to-End Digital Solutions
          </h2>
          <p className="text-lg text-muted-foreground">
            From concept to deployment, we deliver comprehensive services that transform your business.
          </p>
        </motion.div>
      </div>

      {/* Main Service Categories */}
      {serviceCategories.map((category, categoryIndex) => (
        <div
          key={category.id}
          id={category.id}
          className={`py-16 lg:py-24 ${category.bgColor}`}
        >
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={categoryIndex % 2 === 1 ? "lg:order-2" : ""}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} mb-6`}>
                  <category.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className={`text-3xl lg:text-4xl font-display font-bold mb-2 ${category.textDark ? "text-secondary-foreground" : "text-foreground"}`}>
                  {category.title}
                </h3>
                <p className={`text-xl font-semibold mb-4 ${category.textDark ? "text-primary" : "text-primary"}`}>
                  {category.subtitle}
                </p>
                <p className={`text-lg mb-8 ${category.textDark ? "text-secondary-foreground/70" : "text-muted-foreground"}`}>
                  {category.description}
                </p>
                <Button variant={category.textDark ? "accent" : "default"} size="lg">
                  {category.cta}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </motion.div>

              {/* Service Cards */}
              <motion.div
                initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={`grid sm:grid-cols-2 gap-4 ${categoryIndex % 2 === 1 ? "lg:order-1" : ""}`}
              >
                {category.services.map((service, serviceIndex) => (
                  <motion.div
                    key={service.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * serviceIndex }}
                    className={`p-6 rounded-2xl hover-lift cursor-pointer group ${
                      category.textDark
                        ? "bg-secondary-foreground/5 border border-secondary-foreground/10 hover:bg-secondary-foreground/10"
                        : "bg-card border border-border/50 hover:border-primary/30"
                    }`}
                  >
                    <h4 className={`font-semibold mb-2 group-hover:text-primary transition-colors ${
                      category.textDark ? "text-secondary-foreground" : "text-foreground"
                    }`}>
                      {service.name}
                    </h4>
                    <p className={`text-sm ${category.textDark ? "text-secondary-foreground/60" : "text-muted-foreground"}`}>
                      {service.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      ))}

      {/* Additional Services Grid */}
      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl lg:text-3xl font-display font-bold text-foreground mb-4">
            More Services We Offer
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {additionalServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover-lift group text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h4>
              <p className="text-sm text-muted-foreground">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
