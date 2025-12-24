import { motion } from "framer-motion";
import { ArrowRight, Download, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden gradient-cta">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-dark opacity-20" />
      
      {/* Floating Shapes */}
      <motion.div
        className="absolute top-20 left-20 w-32 h-32 rounded-3xl border border-primary-foreground/10 bg-primary-foreground/5"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, 0],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-24 h-24 rounded-full border border-primary-foreground/10 bg-primary-foreground/5"
        animate={{
          y: [0, 20, 0],
          rotate: [0, -10, 0],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute top-1/2 left-10 w-16 h-16 rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5"
        animate={{
          x: [0, 15, 0],
          rotate: [0, 15, 0],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Gradient Orbs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-primary-glow/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-6xl font-display font-bold text-primary-foreground mb-6"
          >
            Ready to Transform
            <br />
            <span className="text-gradient-accent">Your Business?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-primary-foreground/70 mb-10 max-w-2xl mx-auto"
          >
            Let's discuss your next project. Schedule a free consultation with our experts and discover how we can accelerate your digital transformation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          >
            <Button variant="hero" size="xl">
              Schedule Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="xl">
              <Download className="w-5 h-5" />
              Download Case Studies
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-center gap-2 text-primary-foreground/60"
          >
            <Clock className="w-4 h-4" />
            <span className="text-sm">Response within 24 hours</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
