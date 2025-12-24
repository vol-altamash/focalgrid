import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, MapPin, Linkedin, Twitter, Github, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

const footerLinks = {
  solutions: [
    { name: "ERP", href: "#" },
    { name: "CRM", href: "#" },
    { name: "HRM", href: "#" },
    { name: "LMS", href: "#" },
    { name: "Accounts", href: "#" },
    { name: "Inventory", href: "#" },
    { name: "POS", href: "#" },
  ],
  services: [
    { name: "Core Engineering", href: "#" },
    { name: "AI & Automation", href: "#" },
    { name: "Systems Integration", href: "#" },
    { name: "Security & Compliance", href: "#" },
    { name: "Design & Creative", href: "#" },
    { name: "Media & Motion", href: "#" },
    { name: "Marketing & Commerce", href: "#" },
  ],
  company: [
    { name: "About Us", href: "#" },
    { name: "Our Team", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Partner Program", href: "#" },
  ],
  resources: [
    { name: "Documentation", href: "#" },
    { name: "API Reference", href: "#" },
    { name: "Support Portal", href: "#" },
    { name: "Status Page", href: "#" },
    { name: "Security", href: "#" },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="bg-secondary border-t-2 border-primary/30">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        {/* Top Section */}
        <div className="grid lg:grid-cols-6 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.a
              href="#"
              className="inline-flex items-center gap-3 mb-6"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <div className="w-4 h-4 border-2 border-primary-foreground rounded-sm relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-primary-foreground rounded-full" />
                  </div>
                </div>
              </div>
              <span className="text-xl font-display font-bold text-secondary-foreground">
                Focalgrid<span className="text-primary">.</span>
              </span>
            </motion.a>
            <p className="text-secondary-foreground/70 mb-6 max-w-sm">
              Transform your business with next-generation digital solutions. From custom software to AI integration, we deliver excellence.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-secondary-foreground/5 border border-secondary-foreground/10 flex items-center justify-center text-secondary-foreground/60 hover:text-primary hover:border-primary/30 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-display font-semibold text-secondary-foreground mb-4">Solutions</h4>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-secondary-foreground/60 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-secondary-foreground mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-secondary-foreground/60 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-secondary-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-secondary-foreground/60 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="font-display font-semibold text-secondary-foreground mb-4">Contact</h4>
            <ul className="space-y-3 mb-6">
              <li>
                <a href="mailto:hello@focalgrid.com" className="flex items-center gap-2 text-sm text-secondary-foreground/60 hover:text-primary transition-colors">
                  <Mail className="w-4 h-4" />
                  hello@focalgrid.com
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="flex items-center gap-2 text-sm text-secondary-foreground/60 hover:text-primary transition-colors">
                  <Phone className="w-4 h-4" />
                  +1 (234) 567-890
                </a>
              </li>
              <li>
                <span className="flex items-start gap-2 text-sm text-secondary-foreground/60">
                  <MapPin className="w-4 h-4 mt-0.5" />
                  Remote-First, Global Delivery
                </span>
              </li>
            </ul>

            {/* Newsletter */}
            <h4 className="font-display font-semibold text-secondary-foreground mb-3 text-sm">Newsletter</h4>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-secondary-foreground/5 border border-secondary-foreground/10 text-sm text-secondary-foreground placeholder:text-secondary-foreground/40 focus:outline-none focus:border-primary/50"
              />
              <Button variant="default" size="sm" className="shrink-0">
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-secondary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-secondary-foreground/50">
            © 2025 Focalgrid Systems. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-6">
            <a href="#" className="text-sm text-secondary-foreground/50 hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-secondary-foreground/50 hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-secondary-foreground/50 hover:text-primary transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
