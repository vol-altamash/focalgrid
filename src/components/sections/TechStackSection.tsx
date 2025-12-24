import { motion } from "framer-motion";

const techStack = {
  frontend: {
    title: "Frontend",
    technologies: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS"],
  },
  backend: {
    title: "Backend",
    technologies: ["Node.js", "Python", "PHP/Laravel", "Java", "Go"],
  },
  cloud: {
    title: "Cloud",
    technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes"],
  },
  databases: {
    title: "Databases",
    technologies: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "MySQL"],
  },
  ai: {
    title: "AI/ML",
    technologies: ["TensorFlow", "PyTorch", "OpenAI", "LangChain", "Hugging Face"],
  },
};

export function TechStackSection() {
  return (
    <section className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Technology
          </span>
          <h2 className="text-3xl lg:text-5xl font-display font-bold text-secondary-foreground mb-4">
            Built With Modern Technology
          </h2>
          <p className="text-lg text-secondary-foreground/70">
            Best-in-class tools and frameworks for scalable solutions.
          </p>
        </motion.div>

        {/* Tech Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {Object.entries(techStack).map(([key, category], categoryIndex) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="text-center"
            >
              <h3 className="text-lg font-display font-bold text-primary mb-6">
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: categoryIndex * 0.1 + techIndex * 0.05 }}
                    className="group px-4 py-3 rounded-xl bg-navy-light border border-secondary-foreground/10 hover:border-primary/30 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
                  >
                    <span className="text-sm font-medium text-secondary-foreground/80 group-hover:text-primary transition-colors">
                      {tech}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Partners/Integrations Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-secondary-foreground/50 text-sm">
            Plus integrations with 100+ platforms, APIs, and enterprise systems
          </p>
        </motion.div>
      </div>
    </section>
  );
}
