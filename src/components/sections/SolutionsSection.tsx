import { motion } from "framer-motion";
import { ArrowRight, Check, Database, Users, UserCheck, GraduationCap, Calculator, Package, CreditCard, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

const solutions = [
  {
    icon: Database,
    title: "ERP",
    description: "Unified financial, HR, inventory, and reporting",
    features: ["Finance", "HR", "Inventory", "Reporting"],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Users,
    title: "CRM",
    description: "Manage sales pipelines and customer relationships",
    features: ["Sales Pipeline", "Analytics", "Workflows"],
    gradient: "from-primary to-teal-light",
  },
  {
    icon: UserCheck,
    title: "HRM",
    description: "Employee lifecycle management and payroll",
    features: ["Recruitment", "Payroll", "Performance"],
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: GraduationCap,
    title: "LMS",
    description: "Create and deliver online courses",
    features: ["Course Creation", "Progress Tracking", "Certifications"],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Calculator,
    title: "Accounts",
    description: "Financial accounting and invoicing",
    features: ["General Ledger", "Invoicing", "Tax Compliance"],
    gradient: "from-orange-500 to-amber-500",
  },
  {
    icon: Package,
    title: "Inventory",
    description: "Real-time stock tracking across warehouses",
    features: ["Multi-Warehouse", "Auto-Reordering", "Sync"],
    gradient: "from-red-500 to-rose-500",
  },
  {
    icon: CreditCard,
    title: "POS",
    description: "Complete retail solution with analytics",
    features: ["Transactions", "Inventory Sync", "Analytics"],
    gradient: "from-indigo-500 to-violet-500",
  },
  {
    icon: BarChart3,
    title: "Custom AI Analytics",
    description: "Data visualization and predictive insights",
    features: ["Advanced Analytics", "ML Models", "Dashboards"],
    gradient: "from-accent to-gold-light",
  },
];

export function SolutionsSection() {
  return (
    <section id="solutions" className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Ready-Made Solutions
          </span>
          <h2 className="text-3xl lg:text-5xl font-display font-bold text-secondary-foreground mb-4">
            Enterprise Transformation Solutions
          </h2>
          <p className="text-lg text-secondary-foreground/70">
            Pre-built, customizable products to accelerate your digital transformation.
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative p-6 rounded-2xl bg-navy-light border border-secondary-foreground/10 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl overflow-hidden"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

              <div className="relative z-10">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${solution.gradient} mb-4`}>
                  <solution.icon className="w-7 h-7 text-secondary-foreground" />
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-display font-bold text-secondary-foreground mb-2 group-hover:text-primary transition-colors">
                  {solution.title}
                </h3>
                <p className="text-sm text-secondary-foreground/60 mb-4">
                  {solution.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-secondary-foreground/70">
                      <Check className="w-4 h-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button variant="glassDark" size="sm" className="w-full group/btn">
                  Request Demo
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
