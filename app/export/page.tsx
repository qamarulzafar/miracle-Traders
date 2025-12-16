"use client"

import React from "react"
import { useState } from "react"
import {
  Package,
  Globe,
  Truck,
  CheckCircle,
  Award,
  TrendingUp,
  Users,
  Shield,
  FileText,
  Download,
  Leaf,
  Clock,
  ChevronDown,
  ChevronUp,
  ShoppingCart,
  MessageSquare,
  Phone,
  Mail,
  MapPin,
  Factory,
  Warehouse,
  Nut,
  Wheat,
  Flame,
  Droplets,
  Cookie,
  Candy,
  Coffee,
} from "lucide-react"

export default function ExportBusinessPage() {
  const [quantity, setQuantity] = useState({})
  const [activeTab, setActiveTab] = useState("all")
  const [expandedProduct, setExpandedProduct] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = [
    { id: "dry-fruits", name: "Dry Fruits", count: 28, icon: Nut, color: "bg-green-600" },
    { id: "rice", name: "Premium Rice", count: 12, icon: Wheat, color: "bg-gray-700" },
    { id: "masala", name: "Spices & Masala", count: 36, icon: Flame, color: "bg-green-600" },
    { id: "oil", name: "Edible Oils", count: 8, icon: Droplets, color: "bg-gray-700" },
    { id: "pulses", name: "Pulses & Lentils", count: 15, icon: Leaf, color: "bg-green-600" },
    { id: "snacks", name: "Snacks", count: 22, icon: Cookie, color: "bg-gray-700" },
    { id: "sweets", name: "Indian Sweets", count: 18, icon: Candy, color: "bg-green-600" },
    { id: "beverages", name: "Beverages", count: 14, icon: Coffee, color: "bg-gray-700" },
  ]

  const products = [
    {
      id: 1,
      name: "Premium California Almonds",
      category: "dry-fruits",
      type: "export",
      grade: "AAA Premium",
      moq: "500 kg",
      price: "$12.5/kg",
      bulkPrice: "$11.2/kg (1000kg+)",
      origin: "California, USA",
      packaging: "25kg Vacuum Pack",
      shelfLife: "18 months",
      certifications: ["ISO 22000", "USDA Organic", "HACCP"],
      description: "Premium California almonds, extra-large size, superior quality with 99% purity",
      specs: ["Size: 28-30mm", "Moisture: <5%", "Purity: 99%", "Color: Golden Brown"],
      image: "/products/almonds.jpg",
    },
    {
      id: 2,
      name: "Basmati Rice 1121",
      category: "rice",
      type: "vip",
      grade: "Super Premium",
      moq: "1000 kg",
      price: "$3.8/kg",
      bulkPrice: "$3.4/kg (5000kg+)",
      origin: "Punjab, India",
      packaging: "50kg Jute Bags",
      shelfLife: "24 months",
      certifications: ["FSSAI", "ISO 9001", "Non-GMO"],
      description: "Extra-long grain Basmati rice, aged for 1 year, minimum broken grains",
      specs: ["Grain Length: 8.5mm", "Broken: <2%", "Aroma: Premium", "Cooking Time: 15min"],
      image: "/products/basmati.jpg",
    },
    {
      id: 3,
      name: "Kashmiri Saffron (Mongra)",
      category: "masala",
      type: "premium",
      grade: "Grade 1",
      moq: "100 gm",
      price: "$85/gm",
      bulkPrice: "$78/gm (500gm+)",
      origin: "Kashmir, India",
      packaging: "1gm, 5gm, 10gm Packs",
      shelfLife: "36 months",
      certifications: ["ISO 22000", "Geographical Indication"],
      description: "Pure Kashmiri Mongra saffron, hand-picked, deep red color with superior aroma",
      specs: ["Color: Deep Red", "Crocin: >250", "Aroma: Strong", "Moisture: <10%"],
      image: "/products/saffron.jpg",
    },
    {
      id: 4,
      name: "Extra Virgin Olive Oil",
      category: "oil",
      type: "export",
      grade: "Cold Pressed",
      moq: "200 liters",
      price: "$28/liter",
      bulkPrice: "$25/liter (1000L+)",
      origin: "Spain",
      packaging: "1L, 5L, 20L Tins",
      shelfLife: "24 months",
      certifications: ["EU Organic", "FDA Approved", "ISO 22000"],
      description: "First cold-pressed extra virgin olive oil, acidity <0.8%, premium quality",
      specs: ["Acidity: <0.8%", "Peroxide: <10", "Color: Green Gold", "Smoke Point: 210°C"],
      image: "/products/olive-oil.jpg",
    },
    {
      id: 5,
      name: "Toor Dal (Split Pigeon Peas)",
      category: "pulses",
      type: "bulk",
      grade: "Grade A",
      moq: "2000 kg",
      price: "$1.8/kg",
      bulkPrice: "$1.6/kg (10000kg+)",
      origin: "Maharashtra, India",
      packaging: "50kg PP Bags",
      shelfLife: "12 months",
      certifications: ["FSSAI", "AGMARK"],
      description: "Premium quality Toor Dal, uniform size, minimal broken, rich in protein",
      specs: ["Purity: 99.5%", "Moisture: <10%", "Protein: 22%", "Foreign Matter: <0.5%"],
      image: "/products/toor-dal.jpg",
    },
    {
      id: 6,
      name: "Premium Cashew W320",
      category: "dry-fruits",
      type: "vip",
      grade: "W320",
      moq: "300 kg",
      price: "$18.5/kg",
      bulkPrice: "$16.8/kg (1000kg+)",
      origin: "Vietnam",
      packaging: "25kg Vacuum Pack",
      shelfLife: "12 months",
      certifications: ["USDA", "FDA", "ISO 22000"],
      description: "Whole white cashew nuts, size 320 pieces per pound, premium export quality",
      specs: ["Size: 320/pound", "Color: White", "Broken: <3%", "Moisture: <5%"],
      image: "/products/cashew.jpg",
    },
    {
      id: 7,
      name: "Garam Masala Powder",
      category: "masala",
      type: "export",
      grade: "Premium Blend",
      moq: "100 kg",
      price: "$15/kg",
      bulkPrice: "$13.5/kg (500kg+)",
      origin: "Rajasthan, India",
      packaging: "1kg, 5kg, 25kg Packs",
      shelfLife: "18 months",
      certifications: ["FSSAI", "ISO 9001", "ISO 22000"],
      description: "Traditional blend of 12 spices, freshly ground, authentic aroma and flavor",
      specs: ["Mesh Size: 60", "Moisture: <8%", "Additives: None", "Aroma: Strong"],
      image: "/products/garam-masala.jpg",
    },
    {
      id: 8,
      name: "Black Pepper MG1",
      category: "masala",
      type: "bulk",
      grade: "MG1",
      moq: "500 kg",
      price: "$9.5/kg",
      bulkPrice: "$8.5/kg (2000kg+)",
      origin: "Kerala, India",
      packaging: "50kg PP Bags",
      shelfLife: "24 months",
      certifications: ["ASTA", "ISO 22000"],
      description: "Malabar Garbled 1 black pepper, bold size, pungency >5%, premium quality",
      specs: ["Size: >4mm", "Pungency: >5%", "Moisture: <11%", "Light Berries: <2%"],
      image: "/products/black-pepper.jpg",
    },
  ]

  const exportCountries = [
    { country: "USA", flag: "🇺🇸", volume: "1200 MT", growth: "+15%" },
    { country: "UAE", flag: "🇦🇪", volume: "800 MT", growth: "+22%" },
    { country: "UK", flag: "🇬🇧", volume: "650 MT", growth: "+18%" },
    { country: "Canada", flag: "🇨🇦", volume: "450 MT", growth: "+25%" },
    { country: "Australia", flag: "🇦🇺", volume: "380 MT", growth: "+20%" },
    { country: "Singapore", flag: "🇸🇬", volume: "320 MT", growth: "+28%" },
    { country: "Germany", flag: "🇩🇪", volume: "280 MT", growth: "+12%" },
    { country: "Japan", flag: "🇯🇵", volume: "220 MT", growth: "+30%" },
  ]

  const exportProcess = [
    {
      step: 1,
      title: "Inquiry & Quotation",
      description: "Submit your requirements, receive detailed quotation with pricing, MOQ, and terms",
      duration: "1-2 hours",
      icon: MessageSquare,
    },
    {
      step: 2,
      title: "Sample Approval",
      description: "Free samples sent for quality approval and testing",
      duration: "2-3 days",
      icon: Package,
    },
    {
      step: 3,
      title: "Order Confirmation",
      description: "Sign contract, make advance payment, order enters production",
      duration: "1 day",
      icon: FileText,
    },
    {
      step: 4,
      title: "Production & QC",
      description: "Production with 27 quality checks at different stages",
      duration: "7-15 days",
      icon: Factory,
    },
    {
      step: 5,
      title: "Packaging & Labeling",
      description: "Custom packaging as per destination country requirements",
      duration: "2-3 days",
      icon: Warehouse,
    },
    {
      step: 6,
      title: "Shipping & Tracking",
      description: "Documentation, customs clearance, real-time tracking",
      duration: "15-30 days",
      icon: Truck,
    },
  ]

  const certificationsList = [
    { name: "FSSAI", description: "Food Safety and Standards Authority of India" },
    { name: "ISO 22000:2018", description: "Food Safety Management System" },
    { name: "USDA Organic", description: "United States Department of Agriculture" },
    { name: "HACCP", description: "Hazard Analysis Critical Control Point" },
    { name: "FDA Approved", description: "Food and Drug Administration (USA)" },
    { name: "EU Organic", description: "European Union Organic Certification" },
    { name: "Kosher", description: "Kosher Certification" },
    { name: "Halal", description: "Halal Certification" },
  ]

  const handleQuoteRequest = (productId: number) => {
    const product = products.find((p) => p.id === productId)
    alert(`Quote request sent for ${product?.name}. Our team will contact you within 30 minutes.`)
  }

  const toggleProductDetails = (productId: string) => {
    setExpandedProduct(expandedProduct === productId ? null : productId)
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-[140px]">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-r from-emerald-900 via-emerald-800 to-amber-900 py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-6">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-6">
              <Globe className="w-4 h-4" />
              <span className="text-sm font-semibold">Exporting to 35+ Countries</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Global Export
              <span className="text-amber-300"> Excellence</span>
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mb-10">
              Premium quality dry fruits, rice, spices, and food products for global markets. Trusted by 500+ businesses
              worldwide.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-amber-500 text-white rounded-full font-semibold hover:bg-amber-600 transition-all hover:scale-105">
                <Download className="inline w-5 h-5 mr-2" />
                Download Export Catalog
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-all">
                <Phone className="inline w-5 h-5 mr-2" />
                Contact Export Manager
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* STATISTICS */}
      <section className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: "5000+", label: "Export Clients", icon: Users, color: "text-emerald-600" },
            { number: "35+", label: "Countries Served", icon: Globe, color: "text-blue-600" },
            { number: "120+", label: "Products", icon: Package, color: "text-amber-600" },
            { number: "98%", label: "Client Retention", icon: TrendingUp, color: "text-green-600" },
          ].map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <div className={`${stat.color} mb-3`}>
                <stat.icon className="w-8 h-8" />
              </div>
              <div className="text-3xl font-bold text-gray-900">{stat.number}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCT CATEGORIES */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Product Categories</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore our premium range of export-quality products
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {categories.map((cat) => {
            const IconComponent = cat.icon
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`p-6 rounded-2xl transition-all duration-300 ${
                  selectedCategory === cat.id || selectedCategory === "all"
                    ? `${cat.color} text-white scale-105`
                    : "bg-white text-gray-800 hover:bg-gray-50"
                } shadow-lg border border-gray-100`}
              >
                <div className="mb-3">
                  <IconComponent className="w-8 h-8 mx-auto" />
                </div>
                <div className="font-bold mb-1">{cat.name}</div>
                <div className="text-sm opacity-80">{cat.count} Products</div>
              </button>
            )
          })}
        </div>
      </section>

      {/* PRODUCTS TABLE */}
      <section className="container mx-auto px-6 py-16">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
          <div className="p-8 border-b border-gray-100">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Export Products</h2>
                <p className="text-gray-600 mt-2">Detailed specifications and pricing for bulk orders</p>
              </div>
              <div className="flex gap-2">
                {["all", "vip", "premium", "bulk", "export"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 rounded-full font-medium capitalize ${
                      activeTab === tab ? "bg-emerald-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {tab === "vip" ? "VIP" : tab}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="p-6 text-left font-bold text-gray-700">Product</th>
                  <th className="p-6 text-left font-bold text-gray-700">Grade</th>
                  <th className="p-6 text-left font-bold text-gray-700">MOQ</th>
                  <th className="p-6 text-left font-bold text-gray-700">Price</th>
                  <th className="p-6 text-left font-bold text-gray-700">Origin</th>
                  <th className="p-6 text-left font-bold text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {products
                  .filter(
                    (p) =>
                      (selectedCategory === "all" || p.category === selectedCategory) &&
                      (activeTab === "all" || p.type === activeTab),
                  )
                  .map((product) => (
                    <React.Fragment key={product.id}>
                      {/* MAIN PRODUCT ROW */}
                      <tr className="border-t border-gray-100 hover:bg-gray-50/50">
                        <td className="p-6">
                          <div className="flex items-center gap-4">
                            <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-amber-100 rounded-xl flex items-center justify-center">
                              <Package className="w-8 h-8 text-emerald-600" />
                            </div>
                            <div>
                              <div className="font-bold text-gray-900">{product.name}</div>

                              <div className="text-sm text-gray-600 flex items-center gap-2 mt-1">
                                <span
                                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                                    product.type === "vip"
                                      ? "bg-purple-100 text-purple-700"
                                      : product.type === "premium"
                                        ? "bg-amber-100 text-amber-700"
                                        : "bg-blue-100 text-blue-700"
                                  }`}
                                >
                                  {product.type.toUpperCase()}
                                </span>
                                <span className="text-gray-500">{product.category}</span>
                              </div>
                            </div>
                          </div>
                        </td>

                        <td className="p-6">
                          <div className="flex items-center gap-2">
                            <Award className="w-4 h-4 text-amber-500" />
                            <span className="font-medium">{product.grade}</span>
                          </div>
                        </td>

                        <td className="p-6 font-medium">{product.moq}</td>

                        <td className="p-6">
                          <div className="font-bold text-emerald-700">{product.price}</div>
                          <div className="text-sm text-gray-600">{product.bulkPrice}</div>
                        </td>

                        <td className="p-6">
                          <div className="flex items-center gap-2">
                            <Globe className="w-4 h-4 text-blue-500" />
                            <span>{product.origin}</span>
                          </div>
                        </td>

                        <td className="p-6">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => handleQuoteRequest(product.id)}
                              className="px-4 py-2 bg-gradient-to-r from-emerald-600 to-emerald-800 text-white rounded-lg font-medium hover:opacity-90 transition-all"
                            >
                              Get Quote
                            </button>

                            <button
                              onClick={() => toggleProductDetails(product.id.toString())}
                              className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all"
                            >
                              {expandedProduct === product.id.toString() ? (
                                <ChevronUp className="w-5 h-5" />
                              ) : (
                                <ChevronDown className="w-5 h-5" />
                              )}
                            </button>
                          </div>
                        </td>
                      </tr>

                      {/* EXPANDED DETAILS ROW */}
                      {expandedProduct === product.id.toString() && (
                        <tr className="bg-gradient-to-r from-gray-50/50 to-white">
                          <td colSpan={6} className="p-6">
                            <div className="grid md:grid-cols-2 gap-8">
                              {/* LEFT SIDE */}
                              <div>
                                <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                                  <FileText className="w-5 h-5" />
                                  Product Specifications
                                </h4>
                                <div className="space-y-3">
                                  <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                                    <span className="text-gray-600">Packaging</span>
                                    <span className="font-medium">{product.packaging}</span>
                                  </div>
                                  <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                                    <span className="text-gray-600">Shelf Life</span>
                                    <span className="font-medium">{product.shelfLife}</span>
                                  </div>
                                </div>

                                <h4 className="font-bold text-gray-900 mt-6 mb-4">Technical Specs</h4>
                                <ul className="space-y-2">
                                  {product.specs.map((spec, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-gray-700">
                                      <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                                      <span>{spec}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              {/* RIGHT SIDE */}
                              <div>
                                <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                                  <Shield className="w-5 h-5" />
                                  Certifications
                                </h4>
                                <div className="flex flex-wrap gap-2 mb-6">
                                  {product.certifications.map((cert, idx) => (
                                    <span
                                      key={idx}
                                      className="px-3 py-1 bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-800 rounded-full text-sm font-medium"
                                    >
                                      {cert}
                                    </span>
                                  ))}
                                </div>

                                <div className="p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl">
                                  <h4 className="font-bold text-gray-900 mb-2">Description</h4>
                                  <p className="text-gray-700">{product.description}</p>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* EXPORT COUNTRIES */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Export Destinations</h2>
          <p className="text-gray-600 text-lg">We ship to major countries worldwide</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {exportCountries.map((country, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all"
            >
              <div className="text-4xl mb-3">{country.flag}</div>
              <div className="font-bold text-gray-900 mb-2">{country.country}</div>
              <div className="text-2xl font-bold text-emerald-700 mb-1">{country.volume}</div>
              <div className="text-sm text-green-600 font-medium">{country.growth}</div>
            </div>
          ))}
        </div>
      </section>

      {/* EXPORT PROCESS */}
      <section className="container mx-auto px-6 py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Export Process</h2>
          <p className="text-gray-600 text-lg">Seamless 6-step process from inquiry to delivery</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {exportProcess.map((step) => {
            const IconComponent = step.icon
            return (
              <div key={step.step} className="relative">
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-emerald-600 to-green-700 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                    {step.step}
                  </div>
                  <div className="mt-4">
                    <IconComponent className="w-10 h-10 text-emerald-600 mb-4" />
                    <h3 className="font-bold text-gray-900 text-xl mb-2">{step.title}</h3>
                    <p className="text-gray-600 mb-4">{step.description}</p>
                    <div className="flex items-center gap-2 text-sm text-amber-600 font-medium">
                      <Clock className="w-4 h-4" />
                      <span>{step.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Quality Certifications</h2>
          <p className="text-gray-600 text-lg">Internationally recognized quality standards</p>
        </div>

        <div className="grid md:grid-cols-4 gap-4">
          {certificationsList.map((cert, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-emerald-50 p-6 rounded-2xl shadow-lg border border-emerald-100 hover:shadow-xl transition-all"
            >
              <div className="flex items-center gap-3 mb-2">
                <Shield className="w-6 h-6 text-emerald-600" />
                <div className="font-bold text-gray-900">{cert.name}</div>
              </div>
              <div className="text-sm text-gray-600">{cert.description}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="container mx-auto px-6 py-16">
        <div className="bg-gradient-to-r from-emerald-900 to-green-800 rounded-3xl p-12 text-center shadow-2xl">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Start Exporting?</h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied clients worldwide. Get instant quote and free samples.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-8 py-4 bg-amber-500 text-white rounded-full font-semibold hover:bg-amber-600 transition-all hover:scale-105 shadow-lg">
              <ShoppingCart className="inline w-5 h-5 mr-2" />
              Request Bulk Quote
            </button>
            <button className="px-8 py-4 bg-white text-emerald-900 rounded-full font-semibold hover:bg-gray-100 transition-all shadow-lg">
              <Phone className="inline w-5 h-5 mr-2" />
              Talk to Export Manager
            </button>
          </div>
        </div>
      </section>

      {/* CONTACT INFO */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center">
            <Phone className="w-8 h-8 text-emerald-600 mx-auto mb-4" />
            <h3 className="font-bold text-gray-900 mb-2">Phone</h3>
            <p className="text-gray-600">+91 98765 43210</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center">
            <Mail className="w-8 h-8 text-emerald-600 mx-auto mb-4" />
            <h3 className="font-bold text-gray-900 mb-2">Email</h3>
            <p className="text-gray-600">export@business.com</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center">
            <MapPin className="w-8 h-8 text-emerald-600 mx-auto mb-4" />
            <h3 className="font-bold text-gray-900 mb-2">Location</h3>
            <p className="text-gray-600">Mumbai, Maharashtra</p>
          </div>
        </div>
      </section>
    </main>
  )
}
 