import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Calendar, Users, Globe, Briefcase, Award } from "lucide-react";

const stats = [
  { icon: Calendar, value: 8, suffix: "+", label: "Years of Excellence" },
  { icon: Users, value: 50, suffix: "+", label: "Dedicated Engineers" },
  { icon: Globe, value: 150, suffix: "+", label: "Global Clients" },
  { icon: Briefcase, value: 500, suffix: "+", label: "Successful Projects" },
  { icon: Award, value: 98, suffix: "%", label: "Client Satisfaction" },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function TrustIndicators() {
  return (
    <section className="relative py-16 lg:py-20 bg-secondary">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-dark opacity-20" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                <stat.icon className="w-7 h-7 text-primary" />
              </div>
              <div className="text-4xl lg:text-5xl font-display font-bold text-primary mb-2">
                <CountUp target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm text-secondary-foreground/70 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
