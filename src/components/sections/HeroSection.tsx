import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const floatingShapes = [
  { size: 80, x: "10%", y: "20%", delay: 0 },
  { size: 60, x: "85%", y: "15%", delay: 1 },
  { size: 100, x: "75%", y: "60%", delay: 2 },
  { size: 40, x: "15%", y: "70%", delay: 0.5 },
  { size: 50, x: "50%", y: "80%", delay: 1.5 },
];

const gridDots = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  x: `${(i % 5) * 25 + 5}%`,
  y: `${Math.floor(i / 5) * 25 + 10}%`,
  delay: i * 0.1,
}));

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-dark opacity-30" />

      {/* Floating Geometric Shapes */}
      {floatingShapes.map((shape, index) => (
        <motion.div
          key={index}
          className="absolute rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5"
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.x,
            top: shape.y,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            delay: shape.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Grid Dots */}
      {gridDots.map((dot) => (
        <motion.div
          key={dot.id}
          className="absolute w-1.5 h-1.5 rounded-full bg-primary-foreground/20"
          style={{ left: dot.x, top: dot.y }}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.1, 0.4, 0.1] }}
          transition={{
            duration: 3,
            delay: dot.delay,
            repeat: Infinity,
          }}
        />
      ))}

      {/* Gradient Orb */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "2s" }} />

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm font-medium text-primary-foreground/80">
                Global Digital Software House
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-primary-foreground leading-tight mb-6"
            >
              Transform Your{" "}
              <span className="relative">
                Business
                <motion.span
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-accent rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                />
              </span>
              <br />
              with{" "}
              <span className="text-gradient-accent">Next-Generation</span>
              <br />
              Digital Solutions
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg lg:text-xl text-primary-foreground/70 mb-8 max-w-xl mx-auto lg:mx-0"
            >
              From custom software to AI integration, enterprise systems to creative design—Focalgrid Systems delivers complete digital transformation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <Button variant="hero" size="xl">
                Explore Solutions
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="heroOutline" size="xl">
                <Play className="w-5 h-5" />
                Watch Demo
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-4 justify-center lg:justify-start"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-secondary bg-gradient-to-br from-primary/40 to-accent/40 flex items-center justify-center text-xs font-bold text-primary-foreground"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <p className="text-sm text-primary-foreground/60">
                Trusted by <span className="font-semibold text-primary-foreground">150+</span> global businesses
              </p>
            </motion.div>
          </div>

          {/* Right Column - Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block relative"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Central Element */}
              <motion.div
                className="absolute inset-1/4 rounded-3xl bg-gradient-to-br from-primary/30 to-accent/20 backdrop-blur-xl border border-primary-foreground/10 shadow-2xl"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary flex items-center justify-center">
                      <div className="w-8 h-8 border-3 border-primary-foreground rounded-lg relative">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-3 h-3 bg-primary-foreground rounded-full" />
                        </div>
                      </div>
                    </div>
                    <p className="text-primary-foreground font-display font-bold text-lg">Focalgrid</p>
                    <p className="text-primary-foreground/60 text-sm">Systems</p>
                  </div>
                </div>
              </motion.div>

              {/* Orbiting Elements */}
              {[0, 1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  className="absolute w-12 h-12 rounded-xl bg-primary-foreground/10 backdrop-blur border border-primary-foreground/20 flex items-center justify-center"
                  style={{
                    top: `${20 + i * 20}%`,
                    left: i % 2 === 0 ? "5%" : "85%",
                  }}
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    delay: i * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div className="w-4 h-4 rounded bg-accent/60" />
                </motion.div>
              ))}

              {/* Connection Lines */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                <motion.path
                  d="M100,100 Q200,50 300,100 Q350,200 300,300 Q200,350 100,300 Q50,200 100,100"
                  fill="none"
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="1"
                  strokeDasharray="5,5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <motion.div
          className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex justify-center pt-2"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <motion.div
            className="w-1.5 h-3 rounded-full bg-primary-foreground/50"
            animate={{ opacity: [1, 0.3, 1], y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
