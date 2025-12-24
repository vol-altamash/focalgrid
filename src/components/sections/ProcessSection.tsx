import { motion } from "framer-motion";
import { Search, PenTool, Code, Rocket, Headphones } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discovery & Strategy",
    description: "Understand business, goals, constraints; craft a winning strategy tailored to your needs.",
    duration: "Weeks 1-2",
  },
  {
    icon: PenTool,
    title: "Design & Architecture",
    description: "Design scalable solutions with clear technical roadmaps and stunning interfaces.",
    duration: "Weeks 3-4",
  },
  {
    icon: Code,
    title: "Development & Integration",
    description: "Build robust, tested code using best practices and modern technologies.",
    duration: "Weeks 5-12+",
  },
  {
    icon: Rocket,
    title: "Deployment & Launch",
    description: "Ensure smooth production rollout with comprehensive training and documentation.",
    duration: "Weeks 13-14",
  },
  {
    icon: Headphones,
    title: "Support & Optimization",
    description: "Ongoing support, monitoring, and continuous improvement for lasting success.",
    duration: "Ongoing",
  },
];

export function ProcessSection() {
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
            Our Process
          </span>
          <h2 className="text-3xl lg:text-5xl font-display font-bold text-foreground mb-4">
            How We Transform Your Vision Into Reality
          </h2>
          <p className="text-lg text-muted-foreground">
            A proven, collaborative approach to software excellence.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-0.5 bg-border lg:-translate-x-0.5" />

          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex items-start gap-8 mb-12 last:mb-0 ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
            >
              {/* Icon Circle */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                className="absolute left-8 lg:left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg z-10"
              >
                <step.icon className="w-7 h-7 text-primary-foreground" />
              </motion.div>

              {/* Content Card */}
              <div className={`ml-24 lg:ml-0 lg:w-5/12 ${index % 2 === 0 ? "lg:pr-16 lg:text-right" : "lg:pl-16"}`}>
                <div className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-colors hover-lift">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3">
                    {step.duration}
                  </span>
                  <h3 className="text-xl font-display font-bold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Spacer for opposite side */}
              <div className="hidden lg:block lg:w-5/12" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
