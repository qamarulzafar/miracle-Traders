"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { 
  ShoppingBag, 
  Heart, 
  Share2, 
  Star, 
  Truck, 
  Shield, 
  RefreshCw, 
  Package,
  ChevronRight,
  Minus,
  Plus,
  Check,
  Filter,
  Grid,
  List,
  ChevronDown,
  ShoppingCart,
  Eye,
  Leaf,
  Award,
  Clock,
  Zap,
  Droplets,
  Scale,
  Tag
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function ProductsPage() {
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState("500g");
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [cart, setCart] = useState<string[]>([]);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceRange, setPriceRange] = useState([100, 5000]);
  const [sortBy, setSortBy] = useState("featured");
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [quickViewProduct, setQuickViewProduct] = useState<string | null>(null);

  // Product categories
  const categories = [
    { id: "all", name: "All Products", count: 156 },
    { id: "almonds", name: "Almonds", count: 24 },
    { id: "walnuts", name: "Walnuts", count: 18 },
    { id: "cashews", name: "Cashews", count: 32 },
    { id: "pistachios", name: "Pistachios", count: 28 },
    { id: "dates", name: "Dates", count: 16 },
    { id: "raisins", name: "Raisins", count: 12 },
    { id: "mix", name: "Mixed Nuts", count: 26 },
  ];

  // Filter options
  const filters = [
    {
      id: "origin",
      title: "Origin",
      options: ["California", "Kashmir", "Iran", "Afghanistan", "Australia"]
    },
    {
      id: "certifications",
      title: "Certifications",
      options: ["Organic", "Non-GMO", "USDA Certified", "ISO 22000"]
    },
    {
      id: "processing",
      title: "Processing",
      options: ["Raw", "Roasted", "Salted", "Flavored"]
    },
    {
      id: "benefits",
      title: "Health Benefits",
      options: ["High Protein", "Low Carb", "Heart Health", "Brain Boost"]
    }
  ];

  // Featured product
  const featuredProduct = {
    id: "prod-premium-almonds",
    name: "Premium California Almonds",
    category: "Almonds",
    rating: 4.9,
    reviews: 1248,
    price: 899,
    originalPrice: 1199,
    discount: 25,
    description: "Premium California almonds, known for their exceptional quality and rich nutritional profile. These almonds are non-GMO, pesticide-free, and packed with essential nutrients.",
    features: [
      "Rich in Vitamin E & Magnesium",
      "Supports heart health",
      "High protein content",
      "Gluten-free & vegan",
      "No artificial preservatives"
    ],
    variants: [
      { id: "250g", price: 499, label: "250g" },
      { id: "500g", price: 899, label: "500g (Most Popular)" },
      { id: "1kg", price: 1599, label: "1kg (Best Value)" },
      { id: "2kg", price: 2899, label: "2kg Family Pack" }
    ],
    images: [
      "/products/almonds-1.jpg",
      "/products/almonds-2.jpg",
      "/products/almonds-3.jpg",
      "/products/almonds-4.jpg"
    ],
    nutrition: {
      calories: 579,
      protein: "21g",
      carbs: "22g",
      fiber: "13g",
      fat: "50g"
    },
    tags: ["Premium", "Bestseller", "Organic", "High Protein"]
  };

  // Sample products
  const products = [
    {
      id: "1",
      name: "Kashmiri Walnuts",
      category: "Walnuts",
      price: 749,
      originalPrice: 999,
      discount: 25,
      rating: 4.8,
      reviews: 856,
      image: "/products/walnuts.jpg",
      tags: ["Premium", "Fresh", "Brain Food"],
      origin: "Kashmir",
      stock: 42,
      isNew: true
    },
    {
      id: "2",
      name: "Premium Cashews W320",
      category: "Cashews",
      price: 1099,
      originalPrice: 1399,
      discount: 21,
      rating: 4.9,
      reviews: 1234,
      image: "/products/cashews.jpg",
      tags: ["Premium", "Jumbo", "Buttery"],
      origin: "Vietnam",
      stock: 28,
      isNew: false
    },
    {
      id: "3",
      name: "Iranian Pistachios",
      category: "Pistachios",
      price: 1299,
      originalPrice: 1699,
      discount: 23,
      rating: 4.7,
      reviews: 987,
      image: "/products/pistachios.jpg",
      tags: ["Premium", "Roasted", "Salty"],
      origin: "Iran",
      stock: 35,
      isNew: true
    },
    {
      id: "4",
      name: "Medjool Dates",
      category: "Dates",
      price: 599,
      originalPrice: 799,
      discount: 25,
      rating: 4.9,
      reviews: 674,
      image: "/products/dates.jpg",
      tags: ["Organic", "Sweet", "Energy"],
      origin: "Saudi Arabia",
      stock: 56,
      isNew: false
    },
    {
      id: "5",
      name: "Premium Raisins",
      category: "Raisins",
      price: 349,
      originalPrice: 499,
      discount: 30,
      rating: 4.6,
      reviews: 432,
      image: "/products/raisins.jpg",
      tags: ["Natural", "Sweet", "Antioxidants"],
      origin: "Afghanistan",
      stock: 89,
      isNew: true
    },
    {
      id: "6",
      name: "Mixed Nut Box",
      category: "Mix",
      price: 1899,
      originalPrice: 2499,
      discount: 24,
      rating: 4.9,
      reviews: 1543,
      image: "/products/mixed-nuts.jpg",
      tags: ["Premium", "Gift", "Assorted"],
      origin: "Various",
      stock: 18,
      isNew: false
    },
    {
      id: "7",
      name: "Brazil Nuts",
      category: "Specialty",
      price: 899,
      originalPrice: 1199,
      discount: 25,
      rating: 4.5,
      reviews: 321,
      image: "/products/brazil-nuts.jpg",
      tags: ["Selenium Rich", "Premium", "Rare"],
      origin: "Brazil",
      stock: 24,
      isNew: true
    },
    {
      id: "8",
      name: "Pine Nuts",
      category: "Specialty",
      price: 1999,
      originalPrice: 2599,
      discount: 23,
      rating: 4.7,
      reviews: 456,
      image: "/products/pine-nuts.jpg",
      tags: ["Premium", "Gourmet", "Italian"],
      origin: "Mediterranean",
      stock: 15,
      isNew: false
    },
    {
      id: "9",
      name: "Macadamia Nuts",
      category: "Specialty",
      price: 2499,
      originalPrice: 3299,
      discount: 24,
      rating: 4.8,
      reviews: 289,
      image: "/products/macadamia.jpg",
      tags: ["Premium", "Buttery", "Luxury"],
      origin: "Australia",
      stock: 12,
      isNew: true
    },
    {
      id: "10",
      name: "Hazelnuts",
      category: "Specialty",
      price: 799,
      originalPrice: 1099,
      discount: 27,
      rating: 4.6,
      reviews: 398,
      image: "/products/hazelnuts.jpg",
      tags: ["Premium", "Chocolate", "Nutty"],
      origin: "Turkey",
      stock: 32,
      isNew: false
    },
    {
      id: "11",
      name: "Peanuts",
      category: "Budget",
      price: 199,
      originalPrice: 299,
      discount: 33,
      rating: 4.4,
      reviews: 876,
      image: "/products/peanuts.jpg",
      tags: ["Crunchy", "Affordable", "Protein"],
      origin: "India",
      stock: 156,
      isNew: false
    },
    {
      id: "12",
      name: "Sunflower Seeds",
      category: "Seeds",
      price: 249,
      originalPrice: 349,
      discount: 29,
      rating: 4.5,
      reviews: 543,
      image: "/products/sunflower.jpg",
      tags: ["Healthy", "Snack", "Vitamin E"],
      origin: "USA",
      stock: 78,
      isNew: true
    }
  ];

  // Related products
  const relatedProducts = products.slice(0, 4);

  const handleAddToCart = (productId: string) => {
    setCart([...cart, productId]);
  };

  const handleAddToWishlist = (productId: string) => {
    if (wishlist.includes(productId)) {
      setWishlist(wishlist.filter(id => id !== productId));
    } else {
      setWishlist([...wishlist, productId]);
    }
  };

  const handleQuantityChange = (action: "increase" | "decrease") => {
    if (action === "increase") {
      setQuantity(quantity + 1);
    } else if (action === "decrease" && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const filteredProducts = products.filter(product => {
    if (selectedCategory !== "all" && product.category.toLowerCase() !== selectedCategory.toLowerCase()) {
      return false;
    }
    if (product.price < priceRange[0] || product.price > priceRange[1]) {
      return false;
    }
    return true;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      case "newest":
        return a.isNew === b.isNew ? 0 : a.isNew ? -1 : 1;
      default:
        return 0;
    }
  });

  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 to-white pt-[140px] pb-24">
      
      {/* HERO BANNER */}
      <section className="relative bg-gradient-to-r from-emerald-900 via-emerald-800 to-amber-900 py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-300 text-white px-4 py-2 rounded-full mb-4">
              <Tag className="w-4 h-4" />
              <span className="text-sm font-semibold">Premium Collection</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Premium Dry Fruits
              <span className="text-amber-300"> Collection</span>
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Discover our exquisite collection of premium dry fruits, carefully sourced and selected for their exceptional quality and taste.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-amber-50 to-transparent" />
      </section>

      {/* BREADCRUMB & FILTER BAR */}
      <section className="container mx-auto px-6 pt-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
          <div className="flex items-center text-sm text-gray-600">
            <span className="text-emerald-700">Home</span>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-emerald-700">Shop</span>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-gray-500">All Products</span>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-600" />
              <span className="text-sm font-medium">Filters</span>
            </div>
            <div className="flex border border-gray-300 rounded-lg overflow-hidden">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 ${viewMode === "grid" ? "bg-emerald-100 text-emerald-700" : "bg-white text-gray-600"}`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 ${viewMode === "list" ? "bg-emerald-100 text-emerald-700" : "bg-white text-gray-600"}`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="featured">Featured</option>
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="grid lg:grid-cols-4 gap-8">
          {/* SIDEBAR FILTERS */}
          <div className="lg:col-span-1 space-y-8">
            {/* Price Range */}
            <Card className="border border-gray-200">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4 text-gray-900">Price Range</h3>
                <div className="space-y-4">
                  <Slider
                    defaultValue={[100, 5000]}
                    max={10000}
                    min={100}
                    step={100}
                    value={priceRange}
                    onValueChange={setPriceRange}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>₹{priceRange[0]}</span>
                    <span>₹{priceRange[1]}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Categories */}
            <Card className="border border-gray-200">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4 text-gray-900">Categories</h3>
                <div className="space-y-3">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`flex justify-between items-center w-full p-2 rounded-lg transition-colors ${
                        selectedCategory === category.id
                          ? "bg-emerald-50 text-emerald-700"
                          : "hover:bg-gray-50"
                      }`}
                    >
                      <span className="text-sm">{category.name}</span>
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Other Filters */}
            {filters.map((filter) => (
              <Card key={filter.id} className="border border-gray-200">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-4 text-gray-900">{filter.title}</h3>
                  <div className="space-y-2">
                    {filter.options.map((option) => (
                      <div key={option} className="flex items-center space-x-2">
                        <Checkbox
                          id={option}
                          checked={selectedFilters.includes(option)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              setSelectedFilters([...selectedFilters, option]);
                            } else {
                              setSelectedFilters(selectedFilters.filter(f => f !== option));
                            }
                          }}
                        />
                        <label
                          htmlFor={option}
                          className="text-sm text-gray-700 cursor-pointer"
                        >
                          {option}
                        </label>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Premium Features */}
            <Card className="border border-emerald-200 bg-gradient-to-br from-emerald-50 to-amber-50">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Award className="w-5 h-5 text-emerald-600" />
                  <h3 className="font-bold text-lg text-gray-900">Premium Features</h3>
                </div>
                <div className="space-y-3">
                  {[
                    "Direct Farm Sourcing",
                    "27-Point Quality Check",
                    "Organic Certified",
                    "Freshness Guaranteed",
                    "Vacuum Packed"
                  ].map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm text-gray-700">
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* PRODUCTS GRID */}
          <div className="lg:col-span-3">
            {/* Products Count */}
            <div className="mb-8">
              <p className="text-gray-600">
                Showing <span className="font-semibold text-emerald-700">{sortedProducts.length}</span> products
              </p>
            </div>

            {/* Products Grid/List */}
            {viewMode === "grid" ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedProducts.map((product) => (
                  <div
                    key={product.id}
                    className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-emerald-200"
                  >
                    {/* Product Image */}
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {/* Badges */}
                      <div className="absolute top-4 left-4 flex flex-col gap-2">
                        {product.discount > 0 && (
                          <Badge className="bg-gradient-to-r from-red-500 to-red-600 text-white border-0">
                            {product.discount}% OFF
                          </Badge>
                        )}
                        {product.isNew && (
                          <Badge className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white border-0">
                            NEW
                          </Badge>
                        )}
                      </div>
                      {/* Quick Actions */}
                      <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button
                          onClick={() => handleAddToWishlist(product.id)}
                          className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
                        >
                          <Heart className={`w-5 h-5 ${
                            wishlist.includes(product.id) ? "fill-red-500 text-red-500" : "text-gray-700"
                          }`} />
                        </button>
                        <button
                          onClick={() => setQuickViewProduct(product.id)}
                          className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
                        >
                          <Eye className="w-5 h-5 text-gray-700" />
                        </button>
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline" className="text-xs">
                          {product.category}
                        </Badge>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                          <span className="text-sm font-medium">{product.rating}</span>
                          <span className="text-xs text-gray-500">({product.reviews})</span>
                        </div>
                      </div>
                      
                      <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors">
                        {product.name}
                      </h3>
                      
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-emerald-900 font-bold text-xl">₹{product.price}</span>
                        {product.originalPrice > product.price && (
                          <span className="text-gray-500 line-through text-sm">
                            ₹{product.originalPrice}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="text-xs text-gray-500">
                          Origin: <span className="font-medium">{product.origin}</span>
                        </div>
                        <div className="text-xs text-gray-500">
                          Stock: <span className={`font-medium ${
                            product.stock < 10 ? "text-red-600" : "text-emerald-600"
                          }`}>
                            {product.stock} left
                          </span>
                        </div>
                      </div>

                      {/* Add to Cart Button */}
                      <button
                        onClick={() => handleAddToCart(product.id)}
                        className="mt-4 w-full bg-gradient-to-r from-emerald-600 to-emerald-800 text-white py-3 rounded-lg font-semibold hover:from-emerald-700 hover:to-emerald-900 transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        <ShoppingCart className="w-5 h-5" />
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              // List View
              <div className="space-y-6">
                {sortedProducts.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                  >
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/4 relative h-64 md:h-auto">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none"
                        />
                      </div>
                      <div className="md:w-3/4 p-6">
                        <div className="flex flex-col h-full">
                          <div className="flex justify-between items-start mb-3">
                            <div>
                              <Badge variant="outline" className="mb-2">
                                {product.category}
                              </Badge>
                              <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                              <div className="flex items-center gap-2 mb-3">
                                <div className="flex items-center gap-1">
                                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                                  <span className="font-medium">{product.rating}</span>
                                  <span className="text-gray-500">({product.reviews} reviews)</span>
                                </div>
                                <span className="text-gray-400">•</span>
                                <span className="text-gray-600">{product.origin}</span>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => handleAddToWishlist(product.id)}
                                className="p-2 hover:bg-gray-100 rounded-lg"
                              >
                                <Heart className={`w-5 h-5 ${
                                  wishlist.includes(product.id) ? "fill-red-500 text-red-500" : "text-gray-700"
                                }`} />
                              </button>
                              <button className="p-2 hover:bg-gray-100 rounded-lg">
                                <Share2 className="w-5 h-5 text-gray-700" />
                              </button>
                            </div>
                          </div>

                          <p className="text-gray-600 mb-4 flex-grow">
                            Premium quality {product.name.toLowerCase()} with exceptional taste and nutritional value.
                            Perfect for snacking, cooking, or gifting.
                          </p>

                          <div className="flex items-center justify-between">
                            <div className="space-y-1">
                              <div className="flex items-center gap-2">
                                <span className="text-2xl font-bold text-emerald-900">₹{product.price}</span>
                                {product.originalPrice > product.price && (
                                  <span className="text-gray-500 line-through">₹{product.originalPrice}</span>
                                )}
                              </div>
                              <div className="text-sm text-gray-500">
                                Stock: <span className={`font-medium ${
                                  product.stock < 10 ? "text-red-600" : "text-emerald-600"
                                }`}>
                                  {product.stock} units available
                                </span>
                              </div>
                            </div>
                            <div className="flex items-center gap-4">
                              <div className="flex items-center border border-gray-300 rounded-lg">
                                <button
                                  onClick={() => handleQuantityChange("decrease")}
                                  className="p-2 hover:bg-gray-100"
                                >
                                  <Minus className="w-4 h-4" />
                                </button>
                                <span className="px-4 py-2">{quantity}</span>
                                <button
                                  onClick={() => handleQuantityChange("increase")}
                                  className="p-2 hover:bg-gray-100"
                                >
                                  <Plus className="w-4 h-4" />
                                </button>
                              </div>
                              <button
                                onClick={() => handleAddToCart(product.id)}
                                className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-emerald-800 text-white rounded-lg font-semibold hover:from-emerald-700 hover:to-emerald-900 transition-all duration-300 flex items-center gap-2"
                              >
                                <ShoppingCart className="w-5 h-5" />
                                Add to Cart
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <div className="flex items-center gap-2">
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  Previous
                </button>
                {[1, 2, 3, 4, 5].map((num) => (
                  <button
                    key={num}
                    className={`w-10 h-10 rounded-lg ${
                      num === 1
                        ? "bg-gradient-to-r from-emerald-600 to-emerald-800 text-white"
                        : "border border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    {num}
                  </button>
                ))}
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCT SHOWCASE */}
      <section className="container mx-auto px-6 py-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1 bg-gradient-to-r from-amber-500 to-amber-300 text-white rounded-full text-sm font-semibold mb-4">
            Featured Product
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Premium California Almonds
          </h2>
          <p className="text-gray-600 text-lg">
            Our flagship product, carefully selected for exceptional quality
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid lg:grid-cols-2">
            {/* Product Images */}
            <div className="p-8">
              <div className="relative h-96 rounded-2xl overflow-hidden mb-4">
                <Image
                  src={featuredProduct.images[0]}
                  alt={featuredProduct.name}
                  fill
                  className="object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-red-600 text-white border-0">
                  {featuredProduct.discount}% OFF
                </Badge>
              </div>
              <div className="grid grid-cols-4 gap-4">
                {featuredProduct.images.slice(1).map((image, index) => (
                  <div key={index} className="relative h-24 rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity">
                    <Image src={image} alt={`${featuredProduct.name} ${index + 1}`} fill className="object-cover" />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div className="p-8 lg:p-12">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <Badge variant="outline" className="mb-2">
                    {featuredProduct.category}
                  </Badge>
                  <div className="flex items-center gap-2">
                    {featuredProduct.tags.map((tag) => (
                      <Badge key={tag} className="bg-amber-100 text-amber-800 hover:bg-amber-100">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => handleAddToWishlist(featuredProduct.id)}
                    className="p-2 hover:bg-gray-100 rounded-lg"
                  >
                    <Heart className={`w-6 h-6 ${
                      wishlist.includes(featuredProduct.id) ? "fill-red-500 text-red-500" : "text-gray-700"
                    }`} />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-lg">
                    <Share2 className="w-6 h-6 text-gray-700" />
                  </button>
                </div>
              </div>

              <h1 className="text-3xl font-bold text-gray-900 mb-4">{featuredProduct.name}</h1>
              
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="font-medium">{featuredProduct.rating}</span>
                <span className="text-gray-500">({featuredProduct.reviews} reviews)</span>
              </div>

              <p className="text-gray-600 mb-8">{featuredProduct.description}</p>

              {/* Variants */}
              <div className="mb-8">
                <h3 className="font-bold text-lg mb-4 text-gray-900">Select Weight</h3>
                <RadioGroup
                  value={selectedVariant}
                  onValueChange={setSelectedVariant}
                  className="grid grid-cols-2 md:grid-cols-4 gap-4"
                >
                  {featuredProduct.variants.map((variant) => (
                    <div key={variant.id}>
                      <RadioGroupItem
                        value={variant.id}
                        id={variant.id}
                        className="peer sr-only"
                      />
                      <Label
                        htmlFor={variant.id}
                        className={`flex flex-col items-center justify-center p-4 border-2 rounded-xl cursor-pointer transition-all ${
                          selectedVariant === variant.id
                            ? "border-emerald-600 bg-emerald-50"
                            : "border-gray-300 hover:border-gray-400"
                        }`}
                      >
                        <span className="font-bold text-gray-900">{variant.label}</span>
                        <span className="text-lg font-bold text-emerald-700">₹{variant.price}</span>
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h3 className="font-bold text-lg mb-4 text-gray-900">Key Features</h3>
                <div className="grid grid-cols-2 gap-3">
                  {featuredProduct.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-gray-700">
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Nutrition Info */}
              <div className="mb-8">
                <h3 className="font-bold text-lg mb-4 text-gray-900">Nutrition Facts (per 100g)</h3>
                <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
                  {Object.entries(featuredProduct.nutrition).map(([key, value]) => (
                    <div key={key} className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-sm text-gray-600 capitalize">{key}</div>
                      <div className="font-bold text-gray-900">{value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Add to Cart Section */}
              <div className="bg-gradient-to-r from-amber-50 to-emerald-50 rounded-2xl p-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-3xl font-bold text-emerald-900">
                        ₹{featuredProduct.variants.find(v => v.id === selectedVariant)?.price}
                      </span>
                      <span className="text-gray-500 line-through">₹{featuredProduct.originalPrice}</span>
                      <Badge className="bg-gradient-to-r from-red-500 to-red-600 text-white">
                        Save {featuredProduct.discount}%
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600">Free shipping on orders above ₹999</p>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="flex items-center border border-gray-300 rounded-xl bg-white">
                      <button
                        onClick={() => handleQuantityChange("decrease")}
                        className="p-3 hover:bg-gray-100 rounded-l-xl"
                      >
                        <Minus className="w-5 h-5" />
                      </button>
                      <span className="px-6 py-3 text-lg font-bold">{quantity}</span>
                      <button
                        onClick={() => handleQuantityChange("increase")}
                        className="p-3 hover:bg-gray-100 rounded-r-xl"
                      >
                        <Plus className="w-5 h-5" />
                      </button>
                    </div>
                    <button className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-800 text-white rounded-xl font-bold hover:from-emerald-700 hover:to-emerald-900 transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl">
                      <ShoppingBag className="w-6 h-6" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                {[
                  { icon: Truck, text: "Free Shipping", sub: "Above ₹999" },
                  { icon: Shield, text: "Quality Guarantee", sub: "100% Authentic" },
                  { icon: RefreshCw, text: "Easy Returns", sub: "30 Days Policy" },
                  { icon: Package, text: "Secure Packaging", sub: "Vacuum Sealed" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-lg">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{item.text}</div>
                      <div className="text-xs text-gray-500">{item.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT BENEFITS */}
      <section className="bg-gradient-to-b from-white to-amber-50 py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1 bg-gradient-to-r from-emerald-100 to-amber-100 text-emerald-800 rounded-full text-sm font-semibold mb-4">
              Health Benefits
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Our Dry Fruits Are Special
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Leaf,
                title: "100% Natural",
                description: "No preservatives or artificial additives",
                color: "from-emerald-500 to-emerald-700"
              },
              {
                icon: Award,
                title: "Premium Quality",
                description: "Hand-selected for size and perfection",
                color: "from-amber-500 to-amber-700"
              },
              {
                icon: Clock,
                title: "Freshness Locked",
                description: "Vacuum sealed for maximum freshness",
                color: "from-emerald-500 to-emerald-700"
              },
              {
                icon: Zap,
                title: "Energy Boost",
                description: "Natural source of vitamins and minerals",
                color: "from-amber-500 to-amber-700"
              },
              {
                icon: Droplets,
                title: "Low Moisture",
                description: "Perfectly dried for long shelf life",
                color: "from-emerald-500 to-emerald-700"
              },
              {
                icon: Scale,
                title: "Accurate Weight",
                description: "No short weighing guaranteed",
                color: "from-amber-500 to-amber-700"
              },
              {
                icon: Shield,
                title: "Safe & Hygienic",
                description: "Processed in certified facilities",
                color: "from-emerald-500 to-emerald-700"
              },
              {
                icon: Truck,
                title: "Fast Delivery",
                description: "Shipped within 24 hours",
                color: "from-amber-500 to-amber-700"
              },
            ].map((benefit, index) => (
              <div 
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-amber-100"
              >
                <div className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 bg-gradient-to-br ${benefit.color} rounded-2xl group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <div className="pt-8 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED PRODUCTS */}
      <section className="container mx-auto px-6 py-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            You May Also Like
          </h2>
          <p className="text-gray-600 text-lg">
            Discover more premium products from our collection
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-emerald-200"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {product.discount > 0 && (
                  <Badge className="absolute top-3 left-3 bg-gradient-to-r from-red-500 to-red-600 text-white border-0">
                    {product.discount}% OFF
                  </Badge>
                )}
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="outline" className="text-xs">
                    {product.category}
                  </Badge>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span className="text-sm font-medium">{product.rating}</span>
                  </div>
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">{product.name}</h3>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-emerald-900 font-bold text-xl">₹{product.price}</span>
                  {product.originalPrice > product.price && (
                    <span className="text-gray-500 line-through text-sm">₹{product.originalPrice}</span>
                  )}
                </div>
                <button className="w-full py-3 bg-gradient-to-r from-emerald-600 to-emerald-800 text-white rounded-lg font-semibold hover:from-emerald-700 hover:to-emerald-900 transition-all duration-300">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCT DETAILS TABS */}
      <section className="container mx-auto px-6 pb-24">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="w-full justify-start border-b p-0 bg-transparent rounded-none">
              <TabsTrigger
                value="description"
                className="px-8 py-4 data-[state=active]:border-b-2 data-[state=active]:border-emerald-600 data-[state=active]:text-emerald-700"
              >
                Description
              </TabsTrigger>
              <TabsTrigger
                value="nutrition"
                className="px-8 py-4 data-[state=active]:border-b-2 data-[state=active]:border-emerald-600 data-[state=active]:text-emerald-700"
              >
                Nutrition Facts
              </TabsTrigger>
              <TabsTrigger
                value="reviews"
                className="px-8 py-4 data-[state=active]:border-b-2 data-[state=active]:border-emerald-600 data-[state=active]:text-emerald-700"
              >
                Reviews (1,248)
              </TabsTrigger>
              <TabsTrigger
                value="shipping"
                className="px-8 py-4 data-[state=active]:border-b-2 data-[state=active]:border-emerald-600 data-[state=active]:text-emerald-700"
              >
                Shipping & Returns
              </TabsTrigger>
            </TabsList>

            <TabsContent value="description" className="p-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">Premium Quality California Almonds</h3>
                <p className="text-gray-600">
                  Our Premium California Almonds are sourced directly from certified organic farms in California's Central Valley, known for producing the world's finest almonds. Each almond undergoes a rigorous 27-point quality check to ensure superior size, color, and texture.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-lg mb-3 text-gray-900">Key Features:</h4>
                    <ul className="space-y-2">
                      {featuredProduct.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <Check className="w-5 h-5 text-emerald-600" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-3 text-gray-900">Storage Instructions:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Store in a cool, dry place away from direct sunlight</li>
                      <li>• Keep in an airtight container after opening</li>
                      <li>• Refrigerate for extended shelf life (up to 2 years)</li>
                      <li>• Avoid exposure to moisture</li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="nutrition" className="p-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">Nutritional Information</h3>
                <div className="bg-gray-50 rounded-xl p-6">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 font-bold text-gray-900">Nutrient</th>
                        <th className="text-right py-3 font-bold text-gray-900">Per 100g</th>
                        <th className="text-right py-3 font-bold text-gray-900">% Daily Value*</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      {[
                        ["Calories", "579 kcal", "29%"],
                        ["Protein", "21g", "42%"],
                        ["Total Fat", "50g", "64%"],
                        ["Saturated Fat", "3.8g", "19%"],
                        ["Carbohydrates", "22g", "7%"],
                        ["Dietary Fiber", "13g", "52%"],
                        ["Sugars", "4.4g", "9%"],
                        ["Vitamin E", "25.6mg", "171%"],
                        ["Magnesium", "268mg", "64%"],
                      ].map(([nutrient, value, daily], index) => (
                        <tr key={index}>
                          <td className="py-3 text-gray-700">{nutrient}</td>
                          <td className="py-3 text-right font-medium text-gray-900">{value}</td>
                          <td className="py-3 text-right text-emerald-700">{daily}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <p className="text-sm text-gray-500 mt-4">*Percent Daily Values are based on a 2,000 calorie diet.</p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="reviews" className="p-8">
              <div className="space-y-8">
                <div className="flex items-center gap-8">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-gray-900 mb-2">4.9</div>
                    <div className="flex items-center justify-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <div className="text-gray-600">1,248 reviews</div>
                  </div>
                  <div className="flex-1">
                    {[5, 4, 3, 2, 1].map((rating) => (
                      <div key={rating} className="flex items-center gap-3 mb-2">
                        <span className="w-10 text-gray-600">{rating} star</span>
                        <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-amber-500" style={{ width: `${(rating/5)*100}%` }} />
                        </div>
                        <span className="w-10 text-gray-600">84%</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sample Reviews */}
                <div className="space-y-6">
                  {[
                    { name: "Priya Sharma", rating: 5, date: "2 days ago", comment: "Exceptional quality! The almonds are fresh, crunchy, and perfectly sized. Will definitely order again." },
                    { name: "Rajesh Kumar", rating: 5, date: "1 week ago", comment: "Best almonds I've ever tasted. Premium packaging and fast delivery. Highly recommended!" },
                    { name: "Anita Patel", rating: 4, date: "2 weeks ago", comment: "Great quality product. Slightly expensive but worth it for the quality." },
                  ].map((review, index) => (
                    <div key={index} className="border-b pb-6">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <div className="font-bold text-gray-900">{review.name}</div>
                          <div className="flex items-center gap-1">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                            ))}
                          </div>
                        </div>
                        <span className="text-gray-500 text-sm">{review.date}</span>
                      </div>
                      <p className="text-gray-700">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="shipping" className="p-8">
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-lg mb-4 text-gray-900">Shipping Policy</h4>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-emerald-600" />
                        <span>Free shipping on orders above ₹999</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-emerald-600" />
                        <span>Same day dispatch for orders before 2 PM</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-emerald-600" />
                        <span>Delivery within 3-7 business days</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-emerald-600" />
                        <span>Real-time tracking available</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-4 text-gray-900">Return Policy</h4>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-emerald-600" />
                        <span>30-day return policy</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-emerald-600" />
                        <span>No questions asked return</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-emerald-600" />
                        <span>Free return shipping</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-emerald-600" />
                        <span>Full refund within 7 days</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="container mx-auto px-6 pb-24">
        <div className="relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900 via-emerald-800 to-amber-900" />
          <div className="relative z-10 p-12 md:p-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Experience Premium Quality?
            </h2>
            <p className="text-white/90 text-xl mb-10 max-w-2xl mx-auto">
              Shop our premium collection of dry fruits and nuts today. Free shipping on orders above ₹999.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-emerald-900 rounded-full font-semibold text-lg hover:bg-amber-50 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3">
                <ShoppingBag className="w-6 h-6" />
                Shop All Products
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white/10 hover:scale-105 transition-all duration-300">
                View Bestsellers
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}