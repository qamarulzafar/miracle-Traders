"use client"
<<<<<<< HEAD
=======

import React, { JSX } from "react";
>>>>>>> a7622958ca6715e7c392634542ded1d8746b1b5d
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Check, Leaf, Shield, Truck, Award, Sparkles, ChevronRight, Star, 
  Package, Users, Clock, ShoppingBag, Heart, Eye, Search, Menu, X, 
  Phone, Mail, MapPin, ChefHat, Stethoscope, Smartphone, Nut, 
  Wheat, Coffee, Gift, Apple, Soup, FlaskConical, Utensils,
  LucideIcon
} from "lucide-react"
import { useState, ReactNode } from "react"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { jsx } from "react/jsx-runtime"

// Type definitions
interface Category {
  title: string;
  description: string;
  image: string;
  count: string;
  gradient: string;
}

interface FeaturedProduct {
  id: string;
  name: string;
  category: string;
  image: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  discount: number;
  tags: string[];
}

interface QualityHighlight {
  icon: LucideIcon;
  title: string;
  description: string;
  count: string;
}

interface Stat {
  label: string;
  value: string;
  icon: LucideIcon;
}

interface Testimonial {
  name: string;
  role: string;
  comment: string;
  rating: number;
}

interface ContactInfo {
  icon: LucideIcon;
  text: string;
  label: string;
}

export default function Sec1() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)
  const [wishlist, setWishlist] = useState<string[]>([])

  // Icon mapping for categories
  const categoryIcons: { [key: string]: LucideIcon } = {
    "Dry Fruits": Nut,
    "Rice": Wheat,
    "Daal (Lentils)": Soup,
    "Dry Fruit Powder": Coffee,
    "Curry Masalay": Utensils,
    "Specialty Items": Gift
  }

  // Icon mapping for testimonials
  const testimonialIcons: { [key: string]: LucideIcon } = {
    "Executive Chef": ChefHat,
    "Nutritionist": Stethoscope,
    "Home Chef & Food Blogger": Smartphone
  }

  const categories: Category[] = [
    {
      title: "Dry Fruits",
      description: "Premium quality almonds, cashews, walnuts, and more",
      image: "/assorted-premium-dry-fruits-almonds-cashews.jpg",
      count: "24 Products",
      gradient: "from-amber-100 to-emerald-50"
    },
    {
      title: "Rice",
      description: "Finest basmati and specialty rice varieties",
      image: "/premium-basmati-rice-grains.jpg",
      count: "18 Products",
      gradient: "from-emerald-50 to-amber-50"
    },
    {
      title: "Daal (Lentils)",
      description: "Pure and fresh lentils for healthy cooking",
      image: "/colorful-lentils-daal-varieties.jpg",
      count: "32 Products",
      gradient: "from-amber-100 to-emerald-50"
    },
    {
      title: "Dry Fruit Powder",
      description: "Ground to perfection for your recipes",
      image: "/dry-fruit-powder-in-bowl.jpg",
      count: "15 Products",
      gradient: "from-emerald-50 to-amber-50"
    },
    {
      title: "Curry Masalay",
      description: "Authentic spice blends for flavorful dishes",
      image: "/aromatic-curry-spices-masala.jpg",
      count: "28 Products",
      gradient: "from-amber-100 to-emerald-50"
    },
    {
      title: "Specialty Items",
      description: "Exclusive gourmet and organic products",
      image: "/specialty-dry-fruits.jpg",
      count: "42 Products",
      gradient: "from-emerald-50 to-amber-50"
    },
  ]

  const featuredProducts: FeaturedProduct[] = [
    {
      id: "1",
      name: "Premium California Almonds",
      category: "Dry Fruits",
      image: "/premium-whole-almonds.jpg",
      price: 899,
      originalPrice: 1199,
      rating: 4.9,
      reviews: 1248,
      discount: 25,
      tags: ["Bestseller", "Organic"]
    },
    {
      id: "2",
      name: "Royal Basmati Rice",
      category: "Rice",
      image: "/white-basmati-rice.jpg",
      price: 1299,
      originalPrice: 1699,
      rating: 4.8,
      reviews: 856,
      discount: 24,
      tags: ["Premium", "Long Grain"]
    },
    {
      id: "3",
      name: "Organic Mixed Lentils",
      category: "Daal",
      image: "/mixed-lentils-collection.jpg",
      price: 499,
      originalPrice: 699,
      rating: 4.7,
      reviews: 543,
      discount: 29,
      tags: ["Organic", "Fresh"]
    },
    {
      id: "4",
      name: "Premium Garam Masala",
      category: "Curry Masalay",
      image: "/garam-masala-blend.png",
      price: 299,
      originalPrice: 399,
      rating: 4.9,
      reviews: 987,
      discount: 25,
      tags: ["Authentic", "Fresh"]
    },
    {
      id: "5",
      name: "Cashew W320 Premium",
      category: "Dry Fruits",
      image: "/premium-cashews.jpg",
      price: 1499,
      originalPrice: 1999,
      rating: 4.9,
      reviews: 1234,
      discount: 25,
      tags: ["Jumbo", "Premium"]
    },
    {
      id: "6",
      name: "Saffron Zarda Rice",
      category: "Rice",
      image: "/saffron-rice.jpg",
      price: 1899,
      originalPrice: 2499,
      rating: 4.8,
      reviews: 432,
      discount: 24,
      tags: ["Aromatic", "Premium"]
    },
  ]

  const qualityHighlights: QualityHighlight[] = [
    {
      icon: Shield,
      title: "Quality Certified",
      description: "All products undergo rigorous quality checks",
      count: "27-Point Check"
    },
    {
      icon: Leaf,
      title: "100% Natural",
      description: "No artificial additives or preservatives",
      count: "Pure Ingredients"
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Fresh products delivered to your doorstep",
      count: "24-48 Hours"
    },
    {
      icon: Award,
      title: "Premium Grade",
      description: "Only the finest products make it to you",
      count: "A+ Selection"
    },
    {
      icon: Package,
      title: "Secure Packaging",
      description: "Vacuum sealed for maximum freshness",
      count: "Zero Compromise"
    },
    {
      icon: Clock,
      title: "Freshness Guarantee",
      description: "Direct from farms to your home",
      count: "15 Days Fresh"
    },
  ]

  const stats: Stat[] = [
    { label: "Happy Customers", value: "10K+", icon: Users },
    { label: "Products", value: "150+", icon: Package },
    { label: "Years Experience", value: "15+", icon: Award },
    { label: "Delivery Cities", value: "50+", icon: Truck },
  ]

  const testimonials: Testimonial[] = [
    {
      name: "Priya Sharma",
      role: "Executive Chef",
      comment: "The quality is exceptional! Fresh, premium ingredients that elevate my recipes.",
      rating: 5
    },
    {
      name: "Rajesh Kumar",
      role: "Nutritionist",
      comment: "As a nutritionist, I recommend these products to all my clients. Pure and premium quality!",
      rating: 5
    },
    {
      name: "Anita Patel",
      role: "Home Chef & Food Blogger",
      comment: "The freshness and quality are unmatched. My go-to source for premium ingredients!",
      rating: 5
    },
  ]

  const contactInfo: ContactInfo[] = [
    { icon: Phone, text: "+91 98765 43210", label: "Premium Support" },
    { icon: Mail, text: "premium@naturalgoods.com", label: "Email Us" },
    { icon: MapPin, text: "Mumbai, Delhi, Bangalore", label: "Showrooms" },
  ]

  const handleAddToWishlist = (productId: string): void => {
    if (wishlist.includes(productId)) {
      setWishlist(wishlist.filter(id => id !== productId))
    } else {
      setWishlist([...wishlist, productId])
    }
  }

  // Simple Progress Bar Component (replacement)
  const ProgressBar = ({ value, className = "" }: { value: number; className?: string }): JSX.Element => {
    return (
      <div className={`w-full bg-gray-200 rounded-full h-1 ${className}`}>
        <div 
          className="bg-gradient-to-r from-green-700 to-emerald-800 h-1 rounded-full transition-all duration-300"
          style={{ width: `${value}%` }}
        />
      </div>
    )
  }

  // List items for "Why Choose Us" section
  const whyChooseItems: string[] = [
    "Direct sourcing from certified organic farms worldwide",
    "27-point quality check for every single product",
    "Vacuum-sealed packaging for maximum freshness",
    "Competitive pricing with premium quality guarantee",
    "Personalized customer service and expert consultation",
    "Fast and reliable nationwide delivery network",
    "15+ years of industry expertise and trust",
    "Money-back satisfaction guarantee on all products"
  ]

  return (
    <div className="min-h-screen mt-30 bg-gradient-to-b from-white via-amber-50/20 to-white">
    
      {/* Hero Section - VIP Level */}
      <section className="relative overflow-hidden pt-8 md:pt-12 pb-16 md:pb-24">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-amber-50/30 to-white" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-green-100 to-transparent rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-gradient-to-tr from-amber-100 to-transparent rounded-full blur-3xl opacity-30" />
        
        <div className="container relative mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-700/10 to-emerald-800/10 border border-green-700/20 rounded-full">
                <Sparkles className="w-4 h-4 text-green-700" />
                <span className="text-sm font-semibold text-green-700">Premium Since 2008</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Taste the
                <span className="block text-gradient bg-gradient-to-r from-green-700 to-emerald-800 bg-clip-text text-transparent">
                  Premium Difference
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                Experience nature's finest selection of dry fruits, rice, lentils, and authentic spices. 
                Every product is handpicked and delivered with uncompromising quality standards.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-gradient-to-r from-green-700 to-emerald-800 hover:from-green-800 hover:to-emerald-900 text-white px-8 py-6 text-lg">
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  Shop Premium Collection
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-gray-300 hover:border-green-700 hover:bg-green-50 text-gray-800 px-8 py-6 text-lg"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Book Consultation
                </Button>
              </div>

              {/* Stats Bar */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
                {stats.map((stat, index) => {
                  const Icon = stat.icon
                  return (
                    <div key={index} className="text-center">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <Icon className="w-5 h-5 text-green-700" />
                        <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                      </div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  )
                })}
              </div>
            </div>
            
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <div className="aspect-square bg-gradient-to-br from-green-100 to-amber-100" />
              </div>
              
              {/* Floating Cards */}
              <div className="absolute -top-4 -left-4 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-700 to-emerald-800 flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Award Winning</div>
                    <div className="text-sm text-gray-600">Quality 2024</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-700">4.9/5</div>
                  <div className="flex items-center justify-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <div className="text-sm text-gray-600">Customer Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Categories */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Premium <span className="text-green-700">Product Categories</span>
            </h2>
            <p className="text-xl text-gray-600">
              Explore our meticulously curated collection of premium natural products
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category, index) => {
              const Icon = categoryIcons[category.title] || Package
              return (
                <Card 
                  key={index} 
                  className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-50`} />
                  <CardContent className="relative p-0">
                    <div className="p-8">
                      <div className="flex items-start justify-between mb-6">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-700/10 to-emerald-800/10 flex items-center justify-center">
                          <Icon className="w-8 h-8 text-green-700" />
                        </div>
                        <Badge className="bg-gradient-to-r from-green-700 to-emerald-800 text-white border-0">
                          {category.count}
                        </Badge>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{category.title}</h3>
                      <p className="text-gray-600 mb-6">{category.description}</p>
                      
                      <Button 
                        variant="ghost" 
                        className="group-hover:bg-gradient-to-r group-hover:from-green-700 group-hover:to-emerald-800 group-hover:text-white px-0"
                      >
                        Explore Collection
                        <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                      </Button>
                    </div>
                    
                    <div className="relative h-48 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10" />
                      <div className="w-full h-full bg-gradient-to-br from-green-100 to-amber-100" />
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Products - Premium Showcase */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Featured <span className="text-green-700">Premium Products</span>
              </h2>
              <p className="text-xl text-gray-600">Handpicked selections from our premium collection</p>
            </div>
            <Button variant="outline" className="border-2 border-gray-300 hover:border-green-700 hover:bg-green-50">
              View All Products
              <ChevronRight className="ml-2 w-4 h-4" />
            </Button>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map((product) => (
              <Card 
                key={product.id} 
                className="group relative overflow-hidden border border-gray-200 hover:border-green-300 transition-all duration-500 hover:shadow-2xl"
              >
                <CardContent className="p-0">
                  {/* Product Image */}
                  <div className="relative h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-amber-50" />
                    <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
                      {product.discount > 0 && (
                        <Badge className="bg-gradient-to-r from-red-500 to-red-600 text-white border-0">
                          {product.discount}% OFF
                        </Badge>
                      )}
                      {product.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="bg-white/90 backdrop-blur-sm">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="absolute top-4 right-4 z-20 flex flex-col gap-2">
                      <button
                        onClick={() => handleAddToWishlist(product.id)}
                        className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
                        aria-label={wishlist.includes(product.id) ? "Remove from wishlist" : "Add to wishlist"}
                      >
                        <Heart className={`w-4 h-4 ${
                          wishlist.includes(product.id) ? "fill-red-500 text-red-500" : "text-gray-700"
                        }`} />
                      </button>
                      <button 
                        className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
                        aria-label="Quick view"
                      >
                        <Eye className="w-4 h-4 text-gray-700" />
                      </button>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="outline" className="text-green-700 border-green-200">
                        {product.category}
                      </Badge>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                        <span className="font-medium">{product.rating}</span>
                        <span className="text-sm text-gray-500">({product.reviews})</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{product.name}</h3>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl font-bold text-gray-900">₹{product.price}</span>
                          <span className="text-gray-500 line-through">₹{product.originalPrice}</span>
                        </div>
                        <div className="text-sm text-gray-600">Free shipping above ₹999</div>
                      </div>
                      <Button className="bg-gradient-to-r from-green-700 to-emerald-800 hover:from-green-800 hover:to-emerald-900">
                        <ShoppingBag className="w-4 h-4 mr-2" />
                        Add
                      </Button>
                    </div>

                    {/* Stock Progress */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>Sold: {Math.floor(product.reviews / 2)}</span>
                        <span>Stock: {product.reviews % 100} left</span>
                      </div>
                      <ProgressBar value={70} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance - Premium */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-green-700 via-emerald-800 to-green-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <Award className="w-5 h-5" />
              <span className="font-semibold">Our Premium Promise</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Uncompromising <span className="text-amber-300">Quality Standards</span>
            </h2>
            <p className="text-xl text-green-100 opacity-90">
              We maintain the highest standards to ensure every product exceeds your expectations
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {qualityHighlights.map((highlight, index) => {
              const Icon = highlight.icon
              return (
                <div 
                  key={index} 
                  className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-amber-500/20 to-transparent rounded-full blur-xl" />
                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold">{highlight.title}</h3>
                      <Badge className="bg-white/20 text-white border-0">
                        {highlight.count}
                      </Badge>
                    </div>
                    <p className="text-green-100 opacity-90">{highlight.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Premium */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Why <span className="text-green-700">Choose Our Premium</span> Collection?
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  We go beyond ordinary to bring you an extraordinary experience with every product
                </p>
              </div>
              
              <div className="space-y-6">
                {whyChooseItems.map((item, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-green-700 to-emerald-800 flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-lg font-medium text-gray-800">{item}</p>
                      <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-green-700 to-emerald-800 transition-all duration-500 mt-2" />
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex items-center gap-4 pt-6">
                <Button size="lg" className="bg-gradient-to-r from-green-700 to-emerald-800 px-8">
                  <Phone className="w-5 h-5 mr-2" />
                  Schedule Consultation
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-gray-300 px-8">
                  View Certifications
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <div className="aspect-[4/5] bg-gradient-to-br from-green-100 to-amber-100" />
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -top-6 -left-6 bg-white rounded-2xl p-6 shadow-2xl border border-gray-100">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-700">99.7%</div>
                  <div className="text-sm text-gray-600">Customer Satisfaction</div>
                  <div className="flex items-center justify-center gap-1 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-green-700 to-emerald-800 rounded-2xl p-6 shadow-2xl">
                <div className="text-center text-white">
                  <div className="text-3xl font-bold">24/7</div>
                  <div className="text-sm opacity-90">Premium Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Our <span className="text-green-700">Premium Customers</span> Say
            </h2>
            <p className="text-xl text-gray-600">
              Join thousands of satisfied customers who trust our quality
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => {
              const Icon = testimonialIcons[testimonial.role] || Users
              return (
                <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-shadow">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-2 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < testimonial.rating ? "fill-amber-400 text-amber-400" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-gray-700 text-lg italic mb-8 leading-relaxed">
                      &ldquo;{testimonial.comment}&rdquo;
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-700/10 to-emerald-800/10 flex items-center justify-center">
                        <Icon className="w-8 h-8 text-green-700" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900 text-lg">{testimonial.name}</div>
                        <div className="text-green-700 font-medium">{testimonial.role}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Final CTA - Premium */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-700/20 to-emerald-800/20 border border-green-700/30 rounded-full mb-8">
              <Sparkles className="w-5 h-5 text-green-300" />
              <span className="font-semibold text-green-300">Premium Experience Awaits</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              Ready to Experience <span className="text-gradient bg-gradient-to-r from-amber-300 to-green-300 bg-clip-text text-transparent">Premium Quality?</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Get in touch with our premium consultants today. Let us help you select the perfect products for your needs with personalized recommendations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-green-700 to-emerald-800 hover:from-green-800 hover:to-emerald-900 px-10 py-7 text-lg">
                <ShoppingBag className="w-6 h-6 mr-3" />
                Shop Premium Collection
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white/10 px-10 py-7 text-lg"
              >
                <Phone className="w-6 h-6 mr-3" />
                Book Premium Consultation
              </Button>
            </div>
            
            {/* Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-12 border-t border-gray-700">
              {contactInfo.map((item, index) => {
                const Icon = item.icon
                return (
                  <div key={index} className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-green-700/20 to-emerald-800/20 mb-4">
                      <Icon className="w-6 h-6 text-green-300" />
                    </div>
                    <div className="font-bold text-lg">{item.text}</div>
                    <div className="text-gray-400 text-sm">{item.label}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-3 mb-6 md:mb-0">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-700 to-emerald-800 flex items-center justify-center">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-bold text-white text-xl">Premium Natural</div>
                <div className="text-sm">Since 2008 • Premium Quality Guaranteed</div>
              </div>
            </div>
            <div className="text-sm">
              © 2024 Premium Natural Goods. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
} 