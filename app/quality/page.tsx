"use client";

import Image from "next/image";
import { 
  BadgeCheck, 
  Award, 
  Shield, 
  CheckCircle, 
  Eye, 
  Microscope,
  Thermometer,
  Scale,
  Droplets,
  Filter,
  Package,
  Truck,
  Users,
  Star,
  Leaf,
  Clock,
  Zap,
  Target,
  BarChart3,
  ChevronLeft,
  ChevronRight,
  Beaker,
  TestTube,
  ShieldCheck,
  Heart,
  TruckIcon as TruckIconNew,
  Globe
} from "lucide-react";
import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";

export default function QualityPage() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 50 });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  const qualityMetrics = [
    { number: "27", label: "Quality Checks", icon: CheckCircle, suffix: "+" },
    { number: "100", label: "Parameters Tested", icon: Microscope, suffix: "+" },
    { number: "99.7", label: "Purity Standard", icon: Award, suffix: "%" },
    { number: "0", label: "Chemical Residue", icon: Shield, suffix: "%" },
  ];

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

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
  }, [emblaApi, onScroll]);

  const qualityStandards = [
    {
      icon: Microscope,
      title: "Microbiological Testing",
      description: "Comprehensive testing for bacteria, yeast, mold, and pathogens",
      checks: ["E. coli", "Salmonella", "Total Plate Count", "Yeast & Mold"]
    },
    {
      icon: Beaker,
      title: "Chemical Analysis",
      description: "Advanced lab testing for chemical composition and purity",
      checks: ["Pesticide Residue", "Heavy Metals", "Aflatoxins", "Moisture Content"]
    },
    {
      icon: Thermometer,
      title: "Temperature Control",
      description: "Maintaining optimal storage conditions throughout the supply chain",
      checks: ["15-18°C Storage", "Humidity Control", "Real-time Monitoring", "Cold Chain"]
    },
    {
      icon: Scale,
      title: "Physical Inspection",
      description: "Manual and automated physical quality assessment",
      checks: ["Size Grading", "Color Sorting", "Texture Analysis", "Defect Detection"]
    }
  ];

  const qualityProcess = [
    {
      stage: "01",
      title: "Farm Selection & Audit",
      description: "Rigorous screening and certification of farming partners",
      icon: Leaf,
      details: [
        "Soil quality testing",
        "Water source analysis",
        "Sustainable farming practices",
        "Organic certification verification"
      ]
    },
    {
      stage: "02",
      title: "Harvest Quality Control",
      description: "Monitoring harvest conditions and initial quality assessment",
      icon: CheckCircle,
      details: [
        "Optimal harvest timing",
        "Hand-picking standards",
        "Initial moisture testing",
        "Immediate post-harvest treatment"
      ]
    },
    {
      stage: "03",
      title: "Laboratory Testing",
      description: "Comprehensive analysis in our ISO-certified labs",
      icon: TestTube,
      details: [
        "27+ parameter testing",
        "Nutritional analysis",
        "Purity verification",
        "Shelf life testing"
      ]
    },
    {
      stage: "04",
      title: "Processing Standards",
      description: "State-of-the-art processing with minimal intervention",
      icon: Filter,
      details: [
        "Chemical-free cleaning",
        "Low-temperature drying",
        "UV treatment",
        "Gentle sorting & grading"
      ]
    },
    {
      stage: "05",
      title: "Packaging Excellence",
      description: "Advanced packaging to preserve freshness and quality",
      icon: Package,
      details: [
        "Vacuum sealing",
        "Nitrogen flushing",
        "Light-proof materials",
        "Tamper-evident seals"
      ]
    },
    {
      stage: "06",
      title: "Storage & Distribution",
      description: "Climate-controlled storage and intelligent logistics",
      icon: Truck,
      details: [
        "Temperature monitoring",
        "Humidity control",
        "First-expiry-first-out",
        "Real-time tracking"
      ]
    }
  ];

  const certifications = [
    {
      name: "ISO 22000:2018",
      desc: "Food Safety Management System",
      icon: ShieldCheck,
      validity: "Valid through 2026"
    },
    {
      name: "USDA Organic",
      desc: "100% Organic Certification",
      icon: Leaf,
      validity: "Annual Renewal"
    },
    {
      name: "FSSAI License",
      desc: "Food Safety & Standards Authority of India",
      icon: ShieldCheck,
      validity: "Valid through 2025"
    },
    {
      name: "HACCP Certified",
      desc: "Hazard Analysis Critical Control Point",
      icon: Target,
      validity: "Valid through 2026"
    },
    {
      name: "GMP Certified",
      desc: "Good Manufacturing Practices",
      icon: Award,
      validity: "Valid through 2025"
    },
    {
      name: "Non-GMO Project",
      desc: "Verified Non-GMO Products",
      icon: BadgeCheck,
      validity: "Annual Verification"
    }
  ];

  const qualityTeam = [
    {
      name: "Dr. Priya Sharma",
      role: "Chief Quality Officer",
      qualification: "PhD in Food Science",
      experience: "15+ years",
      image: "/quality-team-1.jpg"
    },
    {
      name: "Rajesh Kumar",
      role: "Lab Director",
      qualification: "MSc in Microbiology",
      experience: "12+ years",
      image: "/quality-team-2.jpg"
    },
    {
      name: "Anjali Mehta",
      role: "Quality Assurance Head",
      qualification: "MSc in Chemistry",
      experience: "10+ years",
      image: "/quality-team-3.jpg"
    },
    {
      name: "Vikram Singh",
      role: "Supply Chain Quality",
      qualification: "MBA in Operations",
      experience: "8+ years",
      image: "/quality-team-4.jpg"
    }
  ];

  const testimonials = [
    {
      text: "The quality consistency is remarkable. Every batch meets the same high standards. Their transparency in quality reports is commendable.",
      name: "Dr. Anil Kapoor",
      role: "Nutrition Expert",
      rating: 5
    },
    {
      text: "As a healthcare professional, I recommend Dry Fruit House for their pure, chemical-free products. The lab reports speak for themselves.",
      name: "Dr. Sunita Reddy",
      role: "Clinical Dietitian",
      rating: 5
    },
    {
      text: "We source premium dry fruits for our 5-star hotel. Dry Fruit House consistently delivers superior quality with complete traceability.",
      name: "Chef Arvind Patel",
      role: "Executive Chef",
      rating: 5
    }
  ];

  const technology = [
    {
      icon: Microscope,
      title: "Digital Microscopy",
      description: "200x magnification for detailed inspection",
      benefit: "Detects imperfections invisible to naked eye"
    },
    {
      icon: Zap,
      title: "AI Sorting",
      description: "Computer vision powered quality sorting",
      benefit: "99.9% accuracy in defect detection"
    },
    {
      icon: Thermometer,
      title: "IoT Sensors",
      description: "Real-time temperature & humidity monitoring",
      benefit: "Continuous quality assurance in storage"
    },
    {
      icon: BarChart3,
      title: "Quality Analytics",
      description: "Predictive analytics for quality trends",
      benefit: "Proactive quality improvement"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-emerald-50 pt-[140px]">
      
      {/* HERO SECTION */}
      <section className="relative w-full h-[500px] bg-gradient-to-r from-emerald-900 via-emerald-800 to-emerald-950">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-emerald-300 text-white px-4 py-2 rounded-full mb-6">
              <BadgeCheck className="w-4 h-4" />
              <span className="text-sm font-semibold">Certified Excellence</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Where Every Kernel Meets
              <span className="text-emerald-300"> Uncompromising Quality</span>
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              27 quality checks, 100+ parameters tested, and 0% compromise on purity. 
              Discover the science behind our premium dry fruits.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* QUALITY METRICS */}
      <section className="container mx-auto px-6 -mt-16 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {qualityMetrics.map((metric, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-2xl shadow-emerald-900/10 border border-emerald-100 hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-xl">
                  <metric.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-emerald-900">
                    {metric.number}<span className="text-emerald-600">{metric.suffix}</span>
                  </div>
                  <div className="text-sm text-gray-600">{metric.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* OUR QUALITY PHILOSOPHY */}
      <section className="container mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <div className="inline-block px-4 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm font-semibold mb-4">
                Our Commitment
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Quality Is Not Just a Process, It&apos;s Our Promise
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                At Dry Fruit House, quality is embedded in every step of our journey. 
                From selecting the perfect soil conditions to the final delivery, 
                we maintain stringent standards that often exceed global benchmarks.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Our quality philosophy is simple: If we won&apos;t serve it to our own families, 
                it won&apos;t reach yours. This unwavering commitment has earned us the trust 
                of 50,000+ families across India.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-emerald-100 rounded-lg">
                  <Target className="w-6 h-6 text-emerald-700" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Zero Compromise Policy</h3>
                  <p className="text-gray-600">
                    We reject 15% of all incoming produce that doesn&apos;t meet our premium standards.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-emerald-100 rounded-lg">
                  <Eye className="w-6 h-6 text-emerald-700" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Complete Transparency</h3>
                  <p className="text-gray-600">
                    Access detailed lab reports for every batch with our QR code traceability system.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <Image 
                src="/quality-lab.jpg" 
                alt="Quality Testing Laboratory" 
                fill 
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-8 rounded-2xl shadow-xl max-w-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-full flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">ISO Certified Labs</div>
                  <div className="text-sm text-gray-600">27+ Parameter Testing</div>
                </div>
              </div>
              <p className="text-gray-600">
                Every product batch undergoes comprehensive testing in our state-of-the-art laboratories.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* QUALITY STANDARDS */}
      <section className="bg-gradient-to-b from-white to-emerald-50 py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1 bg-gradient-to-r from-emerald-600 to-emerald-800 text-white rounded-full text-sm font-semibold mb-4">
              Testing Standards
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Comprehensive Quality Testing
            </h2>
            <p className="text-gray-600 text-lg">
              Our multi-layered testing approach ensures every product meets the highest standards
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {qualityStandards.map((standard, index) => (
              <div 
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-emerald-100"
              >
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                    <standard.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {standard.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {standard.description}
                    </p>
                    <div className="space-y-2">
                      {standard.checks.map((check, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-emerald-600" />
                          <span className="text-sm text-gray-700">{check}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUALITY PROCESS TIMELINE */}
      <section className="container mx-auto px-6 py-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Our 6-Stage Quality Process
          </h2>
          <p className="text-gray-600 text-lg">
            From farm to your home, quality is monitored at every step
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line for desktop */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-emerald-400 to-emerald-600 hidden lg:block" />
          
          <div className="space-y-12 lg:space-y-24">
            {qualityProcess.map((process, index) => (
              <div 
                key={index}
                className={`relative flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
              >
                {/* Timeline node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 lg:left-1/2 lg:-translate-x-1/2 w-12 h-12 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-full flex items-center justify-center z-10">
                  <span className="text-white font-bold text-sm">{process.stage}</span>
                </div>
                
                <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'} ${index % 2 === 0 ? 'lg:text-right' : ''} mt-6 lg:mt-0`}>
                  <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-emerald-100">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-emerald-100 rounded-xl">
                        <process.icon className="w-6 h-6 text-emerald-700" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">{process.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-6">
                      {process.description}
                    </p>
                    <ul className="space-y-2">
                      {process.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-gray-700">
                          <CheckCircle className="w-4 h-4 text-emerald-600" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Empty div for spacing on the other side */}
                <div className="lg:w-1/2 hidden lg:block" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS GRID */}
      <section className="bg-gradient-to-b from-emerald-50 to-white py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1 bg-gradient-to-r from-emerald-100 to-emerald-200 text-emerald-800 rounded-full text-sm font-semibold mb-4">
              Certifications
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Internationally Recognized Standards
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl p-8 border border-emerald-200 hover:border-emerald-300 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-2xl">
                    <cert.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {cert.name}
                    </h3>
                    <p className="text-gray-600 mb-3">
                      {cert.desc}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-emerald-700 font-medium">
                        {cert.validity}
                      </span>
                      <BadgeCheck className="w-5 h-5 text-emerald-600" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY & INNOVATION */}
      <section className="container mx-auto px-6 py-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Technology-Driven Quality Assurance
          </h2>
          <p className="text-gray-600 text-lg">
            Leveraging cutting-edge technology to maintain consistent quality
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technology.map((tech, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="p-5 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <tech.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="pt-12 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {tech.title}
                </h3>
                <p className="text-gray-600 mb-3">
                  {tech.description}
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full">
                  <span className="text-sm font-medium text-emerald-700">
                    {tech.benefit}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* QUALITY TEAM */}
      <section className="bg-gradient-to-b from-white to-emerald-50 py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1 bg-gradient-to-r from-emerald-600 to-emerald-800 text-white rounded-full text-sm font-semibold mb-4">
              Our Experts
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Meet Our Quality Guardians
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualityTeam.map((member, index) => (
              <div 
                key={index}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-64">
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/30 to-transparent z-10" />
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
                  <p className="text-emerald-600 font-semibold mb-2">
                    {member.role}
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Award className="w-4 h-4" />
                      {member.qualification}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="w-4 h-4" />
                      {member.experience} experience
                    </div>
                  </div>
                  <div className="pt-4 border-t">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-emerald-400 text-emerald-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS - Enhanced */}
      <section className="container mx-auto px-6 py-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Trusted by Experts
          </h2>
          <p className="text-gray-600 text-lg">
            What healthcare professionals and industry experts say about our quality standards
          </p>
        </div>
        
        <div className="relative">
          <div className="overflow-hidden rounded-3xl" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((item, index) => (
                <div key={index} className="flex-none w-full md:w-1/2 lg:w-1/3 px-4">
                  <div className="bg-gradient-to-br from-white to-emerald-50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 h-full border border-emerald-100">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="text-gray-700 text-lg italic mb-6">
                      &ldquo;{item.text}&rdquo;
                    </p>
                    <div className="flex items-center gap-4 pt-6 border-t border-emerald-100">
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
                className="h-full bg-gradient-to-r from-emerald-600 to-emerald-800 transition-all duration-300"
                style={{ width: `${scrollProgress}%` }}
              />
            </div>
            
            <div className="flex gap-3">
              <button
                onClick={scrollPrev}
                className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all hover:scale-105 border border-gray-200"
              >
                <ChevronLeft className="w-5 h-5 text-gray-700" />
              </button>
              <button
                onClick={scrollNext}
                className="p-3 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-800 text-white shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  selectedIndex === index 
                    ? "bg-gradient-to-r from-emerald-600 to-emerald-800 w-8" 
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* QUALITY ASSURANCE CTA */}
      <section className="container mx-auto px-6 py-24">
        <div className="relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900 via-emerald-800 to-emerald-950" />
          <div className="relative z-10 p-12 md:p-16 text-center">
            <div className="inline-block p-4 bg-white/10 backdrop-blur-sm rounded-2xl mb-8">
              <ShieldCheck className="w-12 h-12 text-white mx-auto" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Experience Assured Quality
            </h2>
            <p className="text-white/90 text-xl mb-10 max-w-2xl mx-auto">
              Every product comes with detailed quality reports and complete traceability. 
              Scan the QR code to view the journey of your dry fruits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-emerald-900 rounded-full font-semibold text-lg hover:bg-emerald-50 hover:scale-105 transition-all duration-300">
                Download Quality Reports
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white/10 hover:scale-105 transition-all duration-300">
                Request Lab Analysis
              </button>
            </div>
            <div className="mt-12 pt-8 border-t border-white/20">
              <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">24/7</div>
                  <div className="text-white/80">Quality Monitoring</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">100%</div>
                  <div className="text-white/80">Traceability</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">30-Day</div>
                  <div className="text-white/80">Freshness Guarantee</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}