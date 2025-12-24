import { motion } from "framer-motion";
import { Award, Globe, Shield, Cpu, Users, Heart } from "lucide-react";

const reasons = [
  {
    icon: Users,
    title: "Expert Team",
    description: "50+ engineers with 8+ years of experience delivering enterprise solutions.",
  },
  {
    icon: Globe,
    title: "Global Delivery",
    description: "24/7 support across all timezones with seamless communication.",
  },
  {
    icon: Award,
    title: "Proven Track Record",
    description: "150+ clients, 500+ projects, and 98% client satisfaction rate.",
  },
  {
    icon: Cpu,
    title: "Cutting-Edge Tech",
    description: "AI, cloud, modern frameworks, and emerging technologies expertise.",
  },
  {
    icon: Shield,
    title: "Security First",
    description: "ISO certified, GDPR-ready, SOC 2 compliant security practices.",
  },
  {
    icon: Heart,
    title: "Client-Centric",
    description: "Your success is our primary metric. We grow when you grow.",
  },
];

export function WhyChooseSection() {
  return (
    <section className="py-20 lg:py-32 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Why Focalgrid
          </span>
          <h2 className="text-3xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Why Choose Focalgrid Systems?
          </h2>
          <p className="text-lg text-muted-foreground">
            What sets us apart from the rest.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl overflow-hidden"
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 mb-6 group-hover:bg-primary/20 transition-colors">
                  <reason.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
