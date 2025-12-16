"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { 
  BadgeCheck, 
  Truck, 
  RefreshCw, 
  Headphones, 
  Award, 
  Users, 
  Leaf, 
  Clock, 
  Package,
  Star,
  Shield,
  Heart,
  Globe,
  Target,
  ChevronLeft,
  ChevronRight,
  LucideIcon
} from "lucide-react";
import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";

// Type definitions
interface Review {
  text: string;
  name: string;
  role: string;
  rating: number;
}

interface Stat {
  number: string;
  label: string;
  icon: LucideIcon;
}

interface Value {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

interface Certification {
  name: string;
  desc: string;
}

interface ProcessStep {
  step: string;
  title: string;
  desc: string;
}

interface Feature {
  icon: LucideIcon;
  title: string;
  desc: string;
  gradient: string;
}

export default function AboutPage() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 50 });
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  const reviews: Review[] = [
    { 
      text: "Excellent quality dry fruits and chocolates! Fresh and flavorful. The packaging and customer service are exceptional.", 
      name: "Roshan Prajwal",
      role: "Regular Customer",
      rating: 5
    },
    { 
      text: "A delightful mix of premium dry fruits. Great quality and taste! Their attention to detail is remarkable.", 
      name: "Bilal Abdullah",
      role: "Corporate Client",
      rating: 5
    },
    { 
      text: "Top-notch quality with amazing flavor. Highly recommended! The freshness is maintained perfectly.", 
      name: "Prashanth Kumar",
      role: "Food Critic",
      rating: 5
    },
    { 
      text: "Very fresh and tasty dry fruits. Perfect for gifting! The premium packaging makes all the difference.", 
      name: "Anita Sharma",
      role: "Loyal Customer",
      rating: 5
    },
    { 
      text: "High-quality products with excellent customer service. They truly understand premium quality.", 
      name: "Rahul Verma",
      role: "Nutritionist",
      rating: 5
    },
  ];

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  const onScroll = useCallback(() => {
    if (!emblaApi) return;
    const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
    setScrollProgress(progress * 100);
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onScroll();
    emblaApi.on("scroll", onScroll);
    emblaApi.on("select", onScroll);

    return () => {
      emblaApi.off("scroll", onScroll);
      emblaApi.off("select", onScroll);
    };
  }, [emblaApi, onScroll]);

  const stats: Stat[] = [
    { number: "50K+", label: "Happy Customers", icon: Users },
    { number: "8+", label: "Years Experience", icon: Clock },
    { number: "100+", label: "Premium Products", icon: Package },
    { number: "15+", label: "Cities Served", icon: Globe },
  ];

  const values: Value[] = [
    {
      icon: Leaf,
      title: "Pure & Natural",
      description: "100% organic, chemical-free products sourced directly from farms"
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "Rigorous quality checks ensuring only the best reaches you"
    },
    {
      icon: Heart,
      title: "Health First",
      description: "Products curated for nutritional value and health benefits"
    },
    {
      icon: Shield,
      title: "Trust & Transparency",
      description: "Complete traceability from farm to your home"
    }
  ];

  const team: TeamMember[] = [
    { name: "Rajesh Kumar", role: "Founder & CEO", image: "/team-1.jpg" },
    { name: "Priya Sharma", role: "Quality Head", image: "/team-2.jpg" },
    { name: "Amit Patel", role: "Sourcing Expert", image: "/team-3.jpg" },
    { name: "Neha Gupta", role: "Customer Relations", image: "/team-4.jpg" },
  ];

  const certifications: Certification[] = [
    { name: "ISO 22000:2018", desc: "Food Safety Management" },
    { name: "USDA Organic", desc: "Organic Certification" },
    { name: "FSSAI Certified", desc: "Food Safety License" },
    { name: "HACCP Certified", desc: "Hazard Analysis" },
  ];

  const processSteps: ProcessStep[] = [
    { step: "01", title: "Direct Farm Sourcing", desc: "We partner with certified organic farms across premium growing regions" },
    { step: "02", title: "Rigorous Testing", desc: "27-point quality check for size, color, moisture, and purity" },
    { step: "03", title: "Expert Grading", desc: "Hand-sorted by experts into premium, superior, and select grades" },
    { step: "04", title: "Optimal Storage", desc: "Climate-controlled storage preserving freshness and nutrients" },
    { step: "05", title: "Premium Packaging", desc: "Vacuum-sealed packaging for maximum shelf life and freshness" },
    { step: "06", title: "Swift Delivery", desc: "Temperature-controlled logistics ensuring perfect condition delivery" },
  ];

  const features: Feature[] = [
    { 
      icon: BadgeCheck, 
      title: "Premium Quality", 
      desc: "100% Quality Guarantee with 27-point checks",
      gradient: "from-emerald-600 to-emerald-800"
    },
    { 
      icon: Truck, 
      title: "Swift Delivery", 
      desc: "Temperature-controlled delivery across India",
      gradient: "from-amber-500 to-amber-700"
    },
    { 
      icon: RefreshCw, 
      title: "Easy Returns", 
      desc: "30-day hassle-free return policy",
      gradient: "from-emerald-600 to-emerald-800"
    },
    { 
      icon: Headphones, 
      title: "24/7 Support", 
      desc: "Dedicated premium customer support",
      gradient: "from-amber-500 to-amber-700"
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 to-white pt-[140px]">

      {/* HERO SECTION - Enhanced */}
      <section className="relative w-full h-[500px] bg-gradient-to-r from-emerald-900 via-emerald-800 to-amber-900">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-300 text-white px-4 py-2 rounded-full mb-6">
              <Star className="w-4 h-4" />
              <span className="text-sm font-semibold">Premium Since 2016</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Crafting Excellence in Every
              <span className="text-amber-300"> Kernel</span>
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Where tradition meets innovation in delivering the world&apos;s finest dry fruits 
              and gourmet delights to your doorstep.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-amber-50 to-transparent" />
      </section>

      {/* STATISTICS BANNER */}
      <section className="container mx-auto px-6 -mt-16 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-2xl shadow-emerald-900/10 border border-amber-100 hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-xl">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-emerald-900">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* STORY SECTION */}
      <section className="container mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <div className="inline-block px-4 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-semibold mb-4">
                Our Journey
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                From Humble Beginnings to Premium Excellence
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Founded in 2016 in the heart of Bangalore&apos;s HSR Layout, Dry Fruit House began 
                as a passionate endeavor to bring authentic, high-quality dry fruits to discerning 
                customers. What started as a single outlet has blossomed into a premium brand 
                synonymous with trust, quality, and unparalleled customer experience.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Today, we source directly from organic farms across India and select international 
                regions, ensuring every product undergoes 27 quality checks before reaching you.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-4">
                <Target className="w-10 h-10 text-emerald-600" />
                <h3 className="font-bold text-gray-900">Our Vision</h3>
                <p className="text-gray-600 text-sm">
                  To redefine India&apos;s dry fruit industry through innovation, quality, and 
                  customer-centric excellence.
                </p>
              </div>
              <div className="space-y-4">
                <Award className="w-10 h-10 text-amber-600" />
                <h3 className="font-bold text-gray-900">Our Mission</h3>
                <p className="text-gray-600 text-sm">
                  To deliver premium quality dry fruits that nourish lives while setting 
                  new standards in the industry.
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <Image 
                src="/about-store.jpg" 
                alt="Premium Dry Fruit Store" 
                fill 
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-8 rounded-2xl shadow-xl max-w-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-300 rounded-full flex items-center justify-center">
                  <BadgeCheck className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">Certified Excellence</div>
                  <div className="text-sm text-gray-600">8+ Years of Trust</div>
                </div>
              </div>
              <p className="text-gray-600">
                Every product undergoes rigorous quality testing to ensure premium standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="bg-gradient-to-b from-white to-amber-50 py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1 bg-gradient-to-r from-emerald-100 to-amber-100 text-emerald-800 rounded-full text-sm font-semibold mb-4">
              Our Philosophy
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Core Values That Define Our Excellence
            </h2>
            <p className="text-gray-600 text-lg">
              We don&apos;t just sell dry fruits; we deliver experiences crafted with care, 
              integrity, and passion.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div 
                  key={index}
                  className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-amber-100"
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="p-4 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="pt-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 text-center">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* QUALITY PROCESS */}
      <section className="container mx-auto px-6 py-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1 bg-gradient-to-r from-amber-100 to-emerald-100 text-amber-800 rounded-full text-sm font-semibold mb-4">
            Premium Process
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            The Art of Premium Selection
          </h2>
        </div>
        
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-emerald-400 to-amber-400 hidden md:block" />
          
          <div className="space-y-12">
            {processSteps.map((process, index) => (
              <div 
                key={index}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className="md:w-1/2 flex justify-center">
                  <div className="relative w-64 h-64 rounded-2xl overflow-hidden shadow-xl">
                    <Image 
                      src={`/process-${index + 1}.jpg`} 
                      alt={process.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-1/2">
                  <div className="inline-flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">{process.step}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{process.title}</h3>
                  </div>
                  <p className="text-gray-600 text-lg">
                    {process.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS - Enhanced */}
      <section className="bg-gradient-to-b from-emerald-50 to-white py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1 bg-gradient-to-r from-emerald-600 to-emerald-800 text-white rounded-full text-sm font-semibold mb-4">
              Testimonials
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Stories of Trust & Satisfaction
            </h2>
            <p className="text-gray-600 text-lg">
              Join thousands of delighted customers who have made us their preferred choice
            </p>
          </div>
          
          <div className="relative">
            <div className="overflow-hidden rounded-3xl" ref={emblaRef}>
              <div className="flex">
                {reviews.map((item, index) => (
                  <div key={index} className="flex-none w-full md:w-1/2 lg:w-1/3 px-4">
                    <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 h-full border border-amber-100">
                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <p className="text-gray-700 text-lg italic mb-6">
                        &ldquo;{item.text}&rdquo;
                      </p>
                      <div className="flex items-center gap-4 pt-6 border-t">
                        <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-full flex items-center justify-center text-white font-bold">
                          {item.name.charAt(0)}
                        </div>
                        <div>
                          <div className="font-bold text-gray-900">{item.name}</div>
                          <div className="text-sm text-gray-600">{item.role}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-between items-center mt-12">
              <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-emerald-600 to-amber-500 transition-all duration-300"
                  style={{ width: `${scrollProgress}%` }}
                />
              </div>
              
              <div className="flex gap-3">
                <button
                  onClick={scrollPrev}
                  className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all hover:scale-105 border border-gray-200"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-700" />
                </button>
                <button
                  onClick={scrollNext}
                  className="p-3 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-800 text-white shadow-lg hover:shadow-xl transition-all hover:scale-105"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="flex justify-center mt-8 space-x-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollTo(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    selectedIndex === index 
                      ? "bg-gradient-to-r from-emerald-600 to-emerald-800 w-8" 
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="container mx-auto px-6 py-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Trusted & Certified Excellence
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-white to-amber-50 rounded-2xl p-8 border border-amber-200 hover:border-emerald-300 transition-all duration-300 hover:scale-105"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-center text-gray-900 mb-2">
                {cert.name}
              </h3>
              <p className="text-gray-600 text-center text-sm">
                {cert.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* MEET THE TEAM */}
      <section className="bg-gradient-to-b from-white to-emerald-50 py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1 bg-gradient-to-r from-amber-500 to-amber-300 text-white rounded-full text-sm font-semibold mb-4">
              Our Team
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              The Masterminds Behind Excellence
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div 
                key={index}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/50 to-transparent z-10" />
                  <Image 
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-emerald-600 font-semibold mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm">
                    Dedicated to ensuring premium quality and customer satisfaction.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO SECTION - Enhanced */}
      <section className="container mx-auto px-6 py-24">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          <div className="relative h-[600px]">
            <Image
              src="/about-video-placeholder.jpg"
              alt="Our Premium Facility Tour"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 via-emerald-900/40 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-8">
              <div className="inline-block px-6 py-2 bg-gradient-to-r from-amber-500 to-amber-300 text-white rounded-full text-sm font-semibold mb-6">
                Behind the Scenes
              </div>
              <h2 className="text-5xl font-bold text-white mb-6 max-w-3xl">
                Experience Our Premium Process
              </h2>
              <p className="text-white/90 text-xl mb-12 max-w-2xl">
                Take an exclusive tour of our state-of-the-art facility where quality meets passion
              </p>
              <button className="group relative" aria-label="Watch our story">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-300 rounded-full blur-lg group-hover:blur-xl transition-all duration-300" />
                <div className="relative flex items-center gap-3 bg-gradient-to-r from-amber-500 to-amber-300 text-white px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-transform duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  Watch Our Story
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* PREMIUM FEATURES */}
      <section className="bg-gradient-to-b from-amber-50 to-white py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Choose Dry Fruit House?
            </h2>
            <p className="text-gray-600 text-lg">
              Experience the difference that premium quality and exceptional service make
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="group relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-amber-100"
                >
                  <div className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 p-5 bg-gradient-to-br ${feature.gradient} rounded-2xl group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="pt-8 text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="container mx-auto px-6 py-24">
        <div className="relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900 via-emerald-800 to-amber-900" />
          <div className="relative z-10 p-12 md:p-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Experience Premium Quality?
            </h2>
            <p className="text-white/90 text-xl mb-10 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust us for their premium dry fruit needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-emerald-900 rounded-full font-semibold text-lg hover:bg-amber-50 hover:scale-105 transition-all duration-300">
                Explore Collection
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white/10 hover:scale-105 transition-all duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}