import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    quote: "Focalgrid transformed our legacy system into a modern cloud platform. Their team's expertise and dedication exceeded all expectations. The project was delivered on time and the results speak for themselves.",
    author: "Sarah Chen",
    role: "CTO",
    company: "TechStart India",
    rating: 5,
  },
  {
    quote: "Their AI integration increased our operational productivity by 40%. The team understood our challenges deeply and delivered solutions that truly made a difference to our bottom line.",
    author: "Michael Roberts",
    role: "Head of Operations",
    company: "E-commerce Brand",
    rating: 5,
  },
  {
    quote: "Exceeded all expectations. Professional, innovative, and always supportive. Focalgrid is not just a vendor—they're a true technology partner we can rely on for our growth journey.",
    author: "Ahmed Hassan",
    role: "CEO",
    company: "FinTech Startup",
    rating: 5,
  },
  {
    quote: "The enterprise software they built for us handles millions of transactions daily without a hitch. Their attention to scalability and security is unmatched in the industry.",
    author: "Jennifer Liu",
    role: "VP Engineering",
    company: "Global Retail Corp",
    rating: 5,
  },
  {
    quote: "From design to deployment, every phase was handled with exceptional professionalism. Our customers love the new interface, and our conversion rates have doubled.",
    author: "David Park",
    role: "Product Manager",
    company: "SaaS Platform",
    rating: 5,
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [autoPlay]);

  const goToPrev = () => {
    setAutoPlay(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setAutoPlay(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-20 lg:py-32 bg-secondary overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl lg:text-5xl font-display font-bold text-secondary-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-secondary-foreground/70">
            Real feedback from real partners across industries.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="relative p-8 lg:p-12 rounded-3xl bg-navy-light border border-secondary-foreground/10"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-8 left-8 w-12 h-12 text-primary/20" />

              {/* Stars */}
              <div className="flex gap-1 mb-6 justify-center">
                {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Quote Text */}
              <p className="text-lg lg:text-xl text-secondary-foreground/90 text-center mb-8 italic leading-relaxed">
                "{testimonials[currentIndex].quote}"
              </p>

              {/* Author */}
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-secondary-foreground">
                  {testimonials[currentIndex].author.charAt(0)}
                </div>
                <h4 className="font-display font-bold text-secondary-foreground">
                  {testimonials[currentIndex].author}
                </h4>
                <p className="text-sm text-primary">
                  {testimonials[currentIndex].role}
                </p>
                <p className="text-sm text-secondary-foreground/60">
                  {testimonials[currentIndex].company}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 w-12 h-12 rounded-full bg-card/80 backdrop-blur border border-border/50 flex items-center justify-center text-foreground hover:bg-card hover:border-primary/30 transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 w-12 h-12 rounded-full bg-card/80 backdrop-blur border border-border/50 flex items-center justify-center text-foreground hover:bg-card hover:border-primary/30 transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex gap-2 justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setAutoPlay(false);
                  setCurrentIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary w-8"
                    : "bg-secondary-foreground/30 hover:bg-secondary-foreground/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
