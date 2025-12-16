"use client";

import React from "react";
import { useState } from "react";
import {
  Package,
  Globe,
  Truck,
  CheckCircle,
  Award,
  Star,
  TrendingUp,
  Users,
  Shield,
  FileText,
  Download,
  Calendar,
  CreditCard,
  Headphones,
  BarChart,
  Target,
  Leaf,
  Clock,
  RefreshCw,
  ChevronDown,
  ChevronUp,
  ShoppingCart,
  MessageSquare,
  Phone,
  Mail,
  MapPin,
  Factory,
  Warehouse,
  Scale,
  Tag,
  Percent,
  Gift,
  Zap,
  LucideIcon
} from "lucide-react";

// Type Definitions
type ProductType = "export" | "vip" | "premium" | "bulk";
type CategoryId = "dry-fruits" | "rice" | "masala" | "oil" | "pulses" | "snacks" | "sweets" | "beverages" | "all";

interface Category {
  id: CategoryId;
  name: string;
  count: number;
  icon: string;
  color: string;
}

interface Product {
  id: number;
  name: string;
  category: CategoryId;
  type: ProductType;
  grade: string;
  moq: string;
  price: string;
  bulkPrice: string;
  origin: string;
  packaging: string;
  shelfLife: string;
  certifications: string[];
  description: string;
  specs: string[];
  image: string;
}

interface ExportCountry {
  country: string;
  flag: string;
  volume: string;
  growth: string;
}

interface ExportProcessStep {
  step: number;
  title: string;
  description: string;
  duration: string;
  icon: LucideIcon;
}

interface Certification {
  name: string;
  description: string;
}

interface BusinessBenefit {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
}

interface StatItem {
  number: string;
  label: string;
  icon: LucideIcon;
  color: string;
}

export default function ExportBusinessPage() {
  const [quantity, setQuantity] = useState<Record<number, number>>({});
  const [activeTab, setActiveTab] = useState<ProductType | "all">("all");
  const [expandedProduct, setExpandedProduct] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>("all");

  const categories: Category[] = [
    { id: "dry-fruits", name: "Dry Fruits", count: 28, icon: "🥜", color: "from-amber-500 to-amber-700" },
    { id: "rice", name: "Premium Rice", count: 12, icon: "🍚", color: "from-emerald-500 to-emerald-700" },
    { id: "masala", name: "Spices & Masala", count: 36, icon: "🌶️", color: "from-red-500 to-red-700" },
    { id: "oil", name: "Edible Oils", count: 8, icon: "🫒", color: "from-yellow-500 to-yellow-700" },
    { id: "pulses", name: "Pulses & Lentils", count: 15, icon: "🫘", color: "from-orange-500 to-orange-700" },
    { id: "snacks", name: "Snacks", count: 22, icon: "🥨", color: "from-purple-500 to-purple-700" },
    { id: "sweets", name: "Indian Sweets", count: 18, icon: "🍬", color: "from-pink-500 to-pink-700" },
    { id: "beverages", name: "Beverages", count: 14, icon: "🥤", color: "from-blue-500 to-blue-700" },
  ];

  const products: Product[] = [
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
      image: "/products/almonds.jpg"
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
      image: "/products/basmati.jpg"
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
      image: "/products/saffron.jpg"
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
      image: "/products/olive-oil.jpg"
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
      image: "/products/toor-dal.jpg"
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
      image: "/products/cashew.jpg"
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
      image: "/products/garam-masala.jpg"
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
      image: "/products/black-pepper.jpg"
    },
  ];

  const exportCountries: ExportCountry[] = [
    { country: "USA", flag: "🇺🇸", volume: "1200 MT", growth: "+15%" },
    { country: "UAE", flag: "🇦🇪", volume: "800 MT", growth: "+22%" },
    { country: "UK", flag: "🇬🇧", volume: "650 MT", growth: "+18%" },
    { country: "Canada", flag: "🇨🇦", volume: "450 MT", growth: "+25%" },
    { country: "Australia", flag: "🇦🇺", volume: "380 MT", growth: "+20%" },
    { country: "Singapore", flag: "🇸🇬", volume: "320 MT", growth: "+28%" },
    { country: "Germany", flag: "🇩🇪", volume: "280 MT", growth: "+12%" },
    { country: "Japan", flag: "🇯🇵", volume: "220 MT", growth: "+30%" },
  ];

  const exportProcess: ExportProcessStep[] = [
    {
      step: 1,
      title: "Inquiry & Quotation",
      description: "Submit your requirements, receive detailed quotation with pricing, MOQ, and terms",
      duration: "1-2 hours",
      icon: MessageSquare
    },
    {
      step: 2,
      title: "Sample Approval",
      description: "Free samples sent for quality approval and testing",
      duration: "2-3 days",
      icon: Package
    },
    {
      step: 3,
      title: "Order Confirmation",
      description: "Sign contract, make advance payment, order enters production",
      duration: "1 day",
      icon: FileText
    },
    {
      step: 4,
      title: "Production & QC",
      description: "Production with 27 quality checks at different stages",
      duration: "7-15 days",
      icon: Factory
    },
    {
      step: 5,
      title: "Packaging & Labeling",
      description: "Custom packaging as per destination country requirements",
      duration: "2-3 days",
      icon: Warehouse
    },
    {
      step: 6,
      title: "Shipping & Tracking",
      description: "Documentation, customs clearance, real-time tracking",
      duration: "15-30 days",
      icon: Truck
    },
  ];

  const certificationsList: Certification[] = [
    { name: "FSSAI", description: "Food Safety and Standards Authority of India" },
    { name: "ISO 22000:2018", description: "Food Safety Management System" },
    { name: "USDA Organic", description: "United States Department of Agriculture" },
    { name: "HACCP", description: "Hazard Analysis Critical Control Point" },
    { name: "FDA Approved", description: "Food and Drug Administration (USA)" },
    { name: "EU Organic", description: "European Union Organic Certification" },
    { name: "Kosher", description: "Kosher Certification" },
    { name: "Halal", description: "Halal Certification" },
  ];

  const businessBenefits: BusinessBenefit[] = [
    {
      icon: Percent,
      title: "Competitive Pricing",
      description: "Direct sourcing from farms ensures best prices with volume discounts",
      color: "from-green-500 to-green-700"
    },
    {
      icon: Zap,
      title: "Fast Lead Time",
      description: "30% faster processing with dedicated export documentation team",
      color: "from-blue-500 to-blue-700"
    },
    {
      icon: Headphones,
      title: "Dedicated Support",
      description: "24/7 export manager support with multi-language capabilities",
      color: "from-purple-500 to-purple-700"
    },
    {
      icon: Gift,
      title: "Free Samples",
      description: "Free product samples for quality approval before bulk orders",
      color: "from-pink-500 to-pink-700"
    },
    {
      icon: RefreshCw,
      title: "Flexible Payment",
      description: "Multiple payment options including LC, TT, and credit terms",
      color: "from-orange-500 to-orange-700"
    },
    {
      icon: BarChart,
      title: "Market Insights",
      description: "Regular market analysis and product trend reports",
      color: "from-indigo-500 to-indigo-700"
    },
  ];

  const stats: StatItem[] = [
    { number: "5000+", label: "Export Clients", icon: Users, color: "text-emerald-600" },
    { number: "35+", label: "Countries Served", icon: Globe, color: "text-blue-600" },
    { number: "120+", label: "Products", icon: Package, color: "text-amber-600" },
    { number: "98%", label: "Client Retention", icon: TrendingUp, color: "text-green-600" },
  ];

  const handleQuoteRequest = (productId: number) => {
    const product = products.find(p => p.id === productId);
    alert(`Quote request sent for ${product?.name}. Our team will contact you within 30 minutes.`);
  };

  const toggleProductDetails = (productId: string) => {
    setExpandedProduct(expandedProduct === productId ? null : productId);
  };

  const tabLabels: (ProductType | "all")[] = ["all", "vip", "premium", "bulk", "export"];

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
              Premium quality dry fruits, rice, spices, and food products for global markets.
              Trusted by 500+ businesses worldwide.
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
          {stats.map((stat, index) => (
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
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`p-6 rounded-2xl transition-all duration-300 ${selectedCategory === cat.id || selectedCategory === "all"
                  ? `bg-gradient-to-r ${cat.color} text-white scale-105`
                  : "bg-white text-gray-800 hover:bg-gray-50"
                } shadow-lg border border-gray-100`}
            >
              <div className="text-3xl mb-3">{cat.icon}</div>
              <div className="font-bold mb-1">{cat.name}</div>
              <div className="text-sm opacity-80">{cat.count} Products</div>
            </button>
          ))}
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
                {tabLabels.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 rounded-full font-medium capitalize ${activeTab === tab
                        ? "bg-emerald-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
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
                      (activeTab === "all" || p.type === activeTab)
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
                                  className={`px-2 py-1 rounded-full text-xs font-medium ${product.type === "vip"
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
                              onClick={() =>
                                toggleProductDetails(product.id.toString())
                              }
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

                                <ul className="space-y-2">
                                  {product.specs.map((spec, idx) => (
                                    <li
                                      key={idx}
                                      className="flex items-center gap-2 text-gray-700"
                                    >
                                      <CheckCircle className="w-4 h-4 text-emerald-500" />
                                      {spec}
                                    </li>
                                  ))}
                                </ul>

                                <div className="mt-6">
                                  <h4 className="font-bold text-gray-900 mb-3">
                                    Certifications
                                  </h4>
                                  <div className="flex flex-wrap gap-2">
                                    {product.certifications.map((cert, idx) => (
                                      <span
                                        key={idx}
                                        className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm"
                                      >
                                        {cert}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              </div>

                              {/* RIGHT SIDE */}
                              <div>
                                <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                                  <Package className="w-5 h-5" />
                                  Packaging & Details
                                </h4>

                                <div className="space-y-4">
                                  <div>
                                    <div className="text-sm text-gray-600">Packaging</div>
                                    <div className="font-medium">{product.packaging}</div>
                                  </div>

                                  <div>
                                    <div className="text-sm text-gray-600">Shelf Life</div>
                                    <div className="font-medium">{product.shelfLife}</div>
                                  </div>

                                  <div>
                                    <div className="text-sm text-gray-600">Description</div>
                                    <div className="text-gray-700 mt-1">
                                      {product.description}
                                    </div>
                                  </div>

                                  <button className="mt-4 w-full py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-lg font-semibold hover:opacity-90 transition-all">
                                    <ShoppingCart className="inline w-5 h-5 mr-2" />
                                    Add to Inquiry List
                                  </button>
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

      {/* EXPORT PROCESS */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Export Process</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Seamless export experience from inquiry to delivery
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gradient-to-r from-emerald-400 to-amber-400 transform -translate-y-1/2 hidden lg:block" />

            <div className="grid lg:grid-cols-6 gap-8">
              {exportProcess.map((step) => (
                <div key={step.step} className="relative">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="w-16 h-16 bg-gradient-to-r from-emerald-600 to-emerald-800 rounded-2xl flex items-center justify-center shadow-xl">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="pt-12 bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mt-8 h-full">
                    <div className="text-center mb-4">
                      <div className="text-sm font-semibold text-emerald-600 mb-2">Step {step.step}</div>
                      <h3 className="font-bold text-gray-900 text-lg mb-3">{step.title}</h3>
                      <p className="text-gray-600 text-sm mb-4">{step.description}</p>
                      <div className="inline-flex items-center gap-1 text-sm text-gray-500">
                        <Clock className="w-4 h-4" />
                        {step.duration}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EXPORT DESTINATIONS */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Global Export Network</h2>
          <p className="text-gray-600 text-lg">Serving clients across 35+ countries</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {exportCountries.map((country) => (
            <div key={country.country} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="flex items-center justify-between mb-4">
                <div className="text-2xl">{country.flag}</div>
                <div className={`px-3 py-1 rounded-full text-sm font-medium ${country.growth.startsWith('+')
                    ? 'bg-green-100 text-green-700'
                    : 'bg-red-100 text-red-700'
                  }`}>
                  {country.growth}
                </div>
              </div>
              <div className="font-bold text-gray-900 text-lg mb-1">{country.country}</div>
              <div className="text-gray-600 text-sm">Annual Volume</div>
              <div className="text-2xl font-bold text-emerald-700">{country.volume}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="bg-gradient-to-r from-emerald-50 to-amber-50 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Certifications & Compliance</h2>
            <p className="text-gray-600 text-lg">Meeting global quality and safety standards</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {certificationsList.map((cert) => (
              <div key={cert.name} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-center text-gray-900 mb-2">{cert.name}</h3>
                <p className="text-gray-600 text-center text-sm">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BUSINESS BENEFITS */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Partner With Us?</h2>
          <p className="text-gray-600 text-lg">Premium benefits for our business partners</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {businessBenefits.map((benefit, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-2">
              <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mb-6`}>
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="container mx-auto px-6 py-20">
        <div className="relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900 via-emerald-800 to-amber-900" />
          <div className="relative z-10 p-12 md:p-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Start Your Export Journey Today
                </h2>
                <p className="text-white/90 text-lg mb-8">
                  Join 5000+ satisfied business clients worldwide. Get customized quotes,
                  samples, and expert guidance for your export requirements.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-white">
                    <CheckCircle className="w-5 h-5 text-amber-300" />
                    <span>Free product samples</span>
                  </div>
                  <div className="flex items-center gap-3 text-white">
                    <CheckCircle className="w-5 h-5 text-amber-300" />
                    <span>Competitive FOB/CIF prices</span>
                  </div>
                  <div className="flex items-center gap-3 text-white">
                    <CheckCircle className="w-5 h-5 text-amber-300" />
                    <span>End-to-end export documentation</span>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Request Export Catalog</h3>
                <div className="space-y-4">
                  <input
                    type="email"
                    placeholder="Your business email"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-amber-300"
                  />
                  <input
                    type="text"
                    placeholder="Company name"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-amber-300"
                  />
                  <select className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-amber-300">
                    <option value="">Select product interest</option>
                    <option value="dry-fruits">Dry Fruits</option>
                    <option value="rice">Rice</option>
                    <option value="spices">Spices</option>
                    <option value="all">All Products</option>
                  </select>
                  <button className="w-full py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-lg font-bold hover:opacity-90 transition-all">
                    Download Full Catalog
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT INFO */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-2xl p-8 text-white">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
              <Phone className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-3">Export Sales</h3>
            <div className="text-2xl font-bold mb-2">+91 98765 43210</div>
            <p className="opacity-90">24/7 dedicated export helpline</p>
          </div>

          <div className="bg-gradient-to-br from-amber-600 to-amber-800 rounded-2xl p-8 text-white">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
              <Mail className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-3">Email</h3>
            <div className="text-2xl font-bold mb-2">export@dryfruithouse.com</div>
            <p className="opacity-90">Response within 2 hours</p>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
              <MapPin className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-3">Export Office</h3>
            <div className="text-2xl font-bold mb-2">Bangalore, India</div>
            <p className="opacity-90">HSR Layout, Sector 7</p>
          </div>
        </div>
      </section>
    </main>
  );
}