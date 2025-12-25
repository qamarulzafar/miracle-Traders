"use client";

import React from "react";
import { useState } from "react";
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
  Tag,
  Percent,
  Gift,
  Zap,
  Headphones,
  BarChart,
  Target,
  Leaf,
  CreditCard,
  LucideIcon,
} from "lucide-react";

// Type Definitions
type ProductType = "export" | "vip" | "premium" | "bulk";
type CategoryId =
  | "dry-fruits"
  | "rice"
  | "masala"
  | "oil"
  | "pulses"
  | "snacks"
  | "sweets"
  | "beverages"
  | "all";

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
    {
      id: "dry-fruits",
      name: "Dry Fruits",
      count: 28,
      icon: "🥜",
      color:
        "bg-gradient-to-br from-amber-500/10 to-amber-600/10 border-amber-200",
    },
    {
      id: "rice",
      name: "Premium Rice",
      count: 12,
      icon: "🍚",
      color:
        "bg-gradient-to-br from-emerald-500/10 to-emerald-600/10 border-emerald-200",
    },
    {
      id: "masala",
      name: "Spices & Masala",
      count: 36,
      icon: "🌶️",
      color: "bg-gradient-to-br from-red-500/10 to-red-600/10 border-red-200",
    },
    {
      id: "oil",
      name: "Edible Oils",
      count: 8,
      icon: "🫒",
      color:
        "bg-gradient-to-br from-yellow-500/10 to-yellow-600/10 border-yellow-200",
    },
    {
      id: "pulses",
      name: "Pulses & Lentils",
      count: 15,
      icon: "🫘",
      color:
        "bg-gradient-to-br from-orange-500/10 to-orange-600/10 border-orange-200",
    },
    {
      id: "snacks",
      name: "Snacks",
      count: 22,
      icon: "🥨",
      color:
        "bg-gradient-to-br from-purple-500/10 to-purple-600/10 border-purple-200",
    },
    {
      id: "sweets",
      name: "Indian Sweets",
      count: 18,
      icon: "🍬",
      color:
        "bg-gradient-to-br from-pink-500/10 to-pink-600/10 border-pink-200",
    },
    {
      id: "beverages",
      name: "Beverages",
      count: 14,
      icon: "🥤",
      color:
        "bg-gradient-to-br from-blue-500/10 to-blue-600/10 border-blue-200",
    },
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
      description:
        "Premium California almonds, extra-large size, superior quality with 99% purity",
      specs: [
        "Size: 28-30mm",
        "Moisture: <5%",
        "Purity: 99%",
        "Color: Golden Brown",
      ],
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
      description:
        "Extra-long grain Basmati rice, aged for 1 year, minimum broken grains",
      specs: [
        "Grain Length: 8.5mm",
        "Broken: <2%",
        "Aroma: Premium",
        "Cooking Time: 15min",
      ],
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
      description:
        "Pure Kashmiri Mongra saffron, hand-picked, deep red color with superior aroma",
      specs: [
        "Color: Deep Red",
        "Crocin: >250",
        "Aroma: Strong",
        "Moisture: <10%",
      ],
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
      description:
        "First cold-pressed extra virgin olive oil, acidity <0.8%, premium quality",
      specs: [
        "Acidity: <0.8%",
        "Peroxide: <10",
        "Color: Green Gold",
        "Smoke Point: 210°C",
      ],
      image: "/products/olive-oil.jpg",
    },
  ];

  const exportCountries: ExportCountry[] = [
    { country: "USA", flag: "🇺🇸", volume: "1200 MT", growth: "+15%" },
    { country: "UAE", flag: "🇦🇪", volume: "800 MT", growth: "+22%" },
    { country: "UK", flag: "🇬🇧", volume: "650 MT", growth: "+18%" },
    { country: "Canada", flag: "🇨🇦", volume: "450 MT", growth: "+25%" },
    { country: "Australia", flag: "🇦🇺", volume: "380 MT", growth: "+20%" },
    { country: "Singapore", flag: "🇸🇬", volume: "320 MT", growth: "+28%" },
  ];

  const exportProcess: ExportProcessStep[] = [
    {
      step: 1,
      title: "Inquiry & Quotation",
      description:
        "Submit your requirements, receive detailed quotation with pricing, MOQ, and terms",
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
      description:
        "Sign contract, make advance payment, order enters production",
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
  ];

  const certificationsList: Certification[] = [
    {
      name: "FSSAI",
      description: "Food Safety and Standards Authority of India",
    },
    { name: "ISO 22000:2018", description: "Food Safety Management System" },
    {
      name: "USDA Organic",
      description: "United States Department of Agriculture",
    },
    { name: "HACCP", description: "Hazard Analysis Critical Control Point" },
    { name: "FDA Approved", description: "Food and Drug Administration (USA)" },
    { name: "EU Organic", description: "European Union Organic Certification" },
  ];

  const businessBenefits: BusinessBenefit[] = [
    {
      icon: Percent,
      title: "Competitive Pricing",
      description:
        "Direct sourcing from farms ensures best prices with volume discounts",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: Zap,
      title: "Fast Lead Time",
      description:
        "30% faster processing with dedicated export documentation team",
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: Headphones,
      title: "Dedicated Support",
      description:
        "24/7 export manager support with multi-language capabilities",
      color: "from-purple-500 to-violet-600",
    },
    {
      icon: Gift,
      title: "Free Samples",
      description:
        "Free product samples for quality approval before bulk orders",
      color: "from-pink-500 to-rose-600",
    },
    {
      icon: RefreshCw,
      title: "Flexible Payment",
      description:
        "Multiple payment options including LC, TT, and credit terms",
      color: "from-orange-500 to-amber-600",
    },
    {
      icon: BarChart,
      title: "Market Insights",
      description: "Regular market analysis and product trend reports",
      color: "from-indigo-500 to-blue-600",
    },
  ];

  const stats: StatItem[] = [
    {
      number: "5000+",
      label: "Export Clients",
      icon: Users,
      color: "text-emerald-600",
    },
    {
      number: "35+",
      label: "Countries Served",
      icon: Globe,
      color: "text-blue-600",
    },
    {
      number: "120+",
      label: "Products",
      icon: Package,
      color: "text-amber-600",
    },
    {
      number: "98%",
      label: "Client Retention",
      icon: TrendingUp,
      color: "text-green-600",
    },
  ];

  const handleQuoteRequest = (productId: number) => {
    const product = products.find((p) => p.id === productId);
    alert(
      `Quote request sent for ${product?.name}. Our team will contact you within 30 minutes.`
    );
  };

  const toggleProductDetails = (productId: string) => {
    setExpandedProduct(expandedProduct === productId ? null : productId);
  };

  const tabLabels: (ProductType | "all")[] = [
    "all",
    "vip",
    "premium",
    "bulk",
    "export",
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24">
      {/* HERO SECTION - Modern Design */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900 py-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-6 border border-white/20">
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium">
                Exporting to 35+ Countries Worldwide
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Premium Export
              <span className="block text-emerald-400">Quality Products</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto mb-8">
              Source premium quality dry fruits, rice, spices, and food products
              directly from producers. Trusted by businesses worldwide since
              2010.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                <Download className="w-5 h-5" />
                Download Catalog
              </button>
              <button className="px-6 py-3 bg-transparent border border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                Contact Export Team
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* STATISTICS - Clean Cards */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className={`${stat.color} mb-3`}>
                <stat.icon className="w-8 h-8" />
              </div>
              <div className="text-2xl font-bold text-gray-900">
                {stat.number}
              </div>
              <div className="text-gray-500 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCT CATEGORIES - Modern Grid */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Product Categories
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Explore our premium range of export-quality products from various
            categories
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`p-5 rounded-xl transition-all duration-300 ${
                selectedCategory === cat.id || selectedCategory === "all"
                  ? `ring-2 ring-emerald-500 ${cat.color} scale-105`
                  : "bg-white hover:bg-gray-50"
              } shadow-sm border border-gray-100 text-left`}
            >
              <div className="text-2xl mb-2">{cat.icon}</div>
              <div className="font-semibold text-gray-900 mb-1">{cat.name}</div>
              <div className="text-sm text-gray-500">{cat.count} Products</div>
            </button>
          ))}
        </div>
      </section>

      {/* PRODUCTS SECTION - Modern Table */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-100">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Export Products Catalog
                </h2>
                <p className="text-gray-500 mt-1">
                  Detailed specifications and pricing for bulk orders
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {tabLabels.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-3 py-1.5 rounded-lg font-medium text-sm capitalize ${
                      activeTab === tab
                        ? "bg-emerald-500 text-white"
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
                  <th className="p-4 text-left font-semibold text-gray-700 text-sm">
                    Product Details
                  </th>
                  <th className="p-4 text-left font-semibold text-gray-700 text-sm">
                    Grade
                  </th>
                  <th className="p-4 text-left font-semibold text-gray-700 text-sm">
                    MOQ
                  </th>
                  <th className="p-4 text-left font-semibold text-gray-700 text-sm">
                    Price
                  </th>
                  <th className="p-4 text-left font-semibold text-gray-700 text-sm">
                    Origin
                  </th>
                  <th className="p-4 text-left font-semibold text-gray-700 text-sm">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {products
                  .filter(
                    (p) =>
                      (selectedCategory === "all" ||
                        p.category === selectedCategory) &&
                      (activeTab === "all" || p.type === activeTab)
                  )
                  .map((product) => (
                    <React.Fragment key={product.id}>
                      {/* MAIN PRODUCT ROW */}
                      <tr className="border-t border-gray-100 hover:bg-gray-50/50 transition-colors">
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-lg flex items-center justify-center flex-shrink-0">
                              <Package className="w-6 h-6 text-emerald-600" />
                            </div>
                            <div>
                              <div className="font-semibold text-gray-900">
                                {product.name}
                              </div>
                              <div className="text-xs text-gray-500 flex items-center gap-2 mt-1">
                                <span
                                  className={`px-2 py-0.5 rounded-full font-medium ${
                                    product.type === "vip"
                                      ? "bg-purple-100 text-purple-700"
                                      : product.type === "premium"
                                      ? "bg-amber-100 text-amber-700"
                                      : "bg-blue-100 text-blue-700"
                                  }`}
                                >
                                  {product.type.toUpperCase()}
                                </span>
                                <span>{product.category}</span>
                              </div>
                            </div>
                          </div>
                        </td>

                        <td className="p-4">
                          <div className="flex items-center gap-2">
                            <Award className="w-4 h-4 text-amber-500" />
                            <span className="font-medium">{product.grade}</span>
                          </div>
                        </td>

                        <td className="p-4 font-medium">{product.moq}</td>

                        <td className="p-4">
                          <div className="font-semibold text-emerald-700">
                            {product.price}
                          </div>
                          <div className="text-xs text-gray-500">
                            {product.bulkPrice}
                          </div>
                        </td>

                        <td className="p-4">
                          <div className="flex items-center gap-2">
                            <Globe className="w-4 h-4 text-blue-500" />
                            <span>{product.origin}</span>
                          </div>
                        </td>

                        <td className="p-4">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => handleQuoteRequest(product.id)}
                              className="px-3 py-1.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg font-medium text-sm transition-colors"
                            >
                              Get Quote
                            </button>
                            <button
                              onClick={() =>
                                toggleProductDetails(product.id.toString())
                              }
                              className="p-1.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                            >
                              {expandedProduct === product.id.toString() ? (
                                <ChevronUp className="w-4 h-4" />
                              ) : (
                                <ChevronDown className="w-4 h-4" />
                              )}
                            </button>
                          </div>
                        </td>
                      </tr>

                      {/* EXPANDED DETAILS */}
                      {expandedProduct === product.id.toString() && (
                        <tr className="bg-gray-50/50">
                          <td colSpan={6} className="p-4">
                            <div className="grid md:grid-cols-2 gap-6">
                              <div>
                                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                                  <FileText className="w-4 h-4" />
                                  Product Specifications
                                </h4>
                                <ul className="space-y-2">
                                  {product.specs.map((spec, idx) => (
                                    <li
                                      key={idx}
                                      className="flex items-start gap-2 text-gray-700"
                                    >
                                      <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                                      <span>{spec}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                                  <Package className="w-4 h-4" />
                                  Packaging Details
                                </h4>
                                <div className="space-y-3">
                                  <div>
                                    <div className="text-sm text-gray-600">
                                      Packaging
                                    </div>
                                    <div className="font-medium">
                                      {product.packaging}
                                    </div>
                                  </div>
                                  <div>
                                    <div className="text-sm text-gray-600">
                                      Shelf Life
                                    </div>
                                    <div className="font-medium">
                                      {product.shelfLife}
                                    </div>
                                  </div>
                                  <div>
                                    <div className="text-sm text-gray-600">
                                      Description
                                    </div>
                                    <div className="text-gray-700 text-sm">
                                      {product.description}
                                    </div>
                                  </div>
                                  <button className="mt-2 px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-lg font-medium text-sm transition-colors w-full flex items-center justify-center gap-2">
                                    <ShoppingCart className="w-4 h-4" />
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

      {/* EXPORT PROCESS - Timeline */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Seamless Export Process
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              From inquiry to delivery - a streamlined process designed for
              efficiency
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute left-0 right-0 top-1/2 h-0.5 bg-gradient-to-r from-emerald-400 to-amber-400 transform -translate-y-1/2" />

            <div className="grid lg:grid-cols-6 gap-6">
              {exportProcess.map((step) => (
                <div key={step.step} className="relative">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="pt-10 bg-white rounded-lg p-5 shadow-sm border border-gray-100 mt-6 h-full">
                    <div className="text-center">
                      <div className="text-xs font-semibold text-emerald-600 mb-1">
                        Step {step.step}
                      </div>
                      <h3 className="font-semibold text-gray-900 text-sm mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-500 text-xs mb-3">
                        {step.description}
                      </p>
                      <div className="flex items-center justify-center gap-1 text-xs text-gray-400">
                        <Clock className="w-3 h-3" />
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

      {/* GLOBAL REACH */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Global Export Network
          </h2>
          <p className="text-gray-500">
            Serving clients across multiple countries worldwide
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {exportCountries.map((country) => (
            <div
              key={country.country}
              className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="text-2xl mb-2">{country.flag}</div>
              <div className="font-semibold text-gray-900 mb-1">
                {country.country}
              </div>
              <div className="text-xs text-gray-500 mb-1">Annual Volume</div>
              <div className="text-lg font-bold text-emerald-700">
                {country.volume}
              </div>
              <div
                className={`text-xs mt-1 ${
                  country.growth.startsWith("+")
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {country.growth} growth
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BUSINESS BENEFITS */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Why Partner With Us?
            </h2>
            <p className="text-gray-500">
              Premium benefits designed for business success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessBenefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all"
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${benefit.color} rounded-lg flex items-center justify-center mb-4`}
                >
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 text-lg mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-500 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Certifications & Compliance
          </h2>
          <p className="text-gray-500">
            Meeting international quality and safety standards
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {certificationsList.map((cert) => (
            <div
              key={cert.name}
              className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-semibold text-center text-gray-900 text-sm mb-1">
                {cert.name}
              </h3>
              <p className="text-gray-500 text-xs text-center">
                {cert.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-br from-emerald-900 to-emerald-800 rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Start Exporting?
            </h2>
            <p className="text-emerald-100 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied business clients worldwide. Get
              customized quotes, samples, and expert guidance for your export
              requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-white text-emerald-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Request Full Catalog
              </button>
              <button className="px-6 py-3 bg-transparent border border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Schedule a Call
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT INFO */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl p-6 text-white">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Export Sales</h3>
            <div className="text-xl font-bold mb-1">+91 98765 43210</div>
            <p className="text-emerald-100 text-sm">
              24/7 dedicated export helpline
            </p>
          </div>

          <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl p-6 text-white">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Email</h3>
            <div className="text-xl font-bold mb-1">
              export@dryfruithouse.com
            </div>
            <p className="text-amber-100 text-sm">Response within 2 hours</p>
          </div>

          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Head Office</h3>
            <div className="text-xl font-bold mb-1">Bangalore, India</div>
            <p className="text-blue-100 text-sm">HSR Layout, Sector 7</p>
          </div>
        </div>
      </section>
    </main>
  );
}
