"use client"

import type React from "react"
import type { JSX } from "react"
import Image from "next/image"
import { useState } from "react"
import useSWR from "swr"
import Link from "next/link"
import {
  Heart,
  Star,
  Truck,
  Shield,
  RefreshCw,
  Package,
  ChevronRight,
  Minus,
  Plus,
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
  Tag,
  type LucideIcon,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

// Import images with type definitions
import productImg1 from "./../../public/images/product_home_1.jpg"
import productImg2 from "./../../public/images/product_home_2.webp"
import productImg3 from "./../../public/images/product_home_3.webp"
import productImg4 from "./../../public/images/product_home_4.webp"

interface ApiProduct {
  id: number
  title: string
  description: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  brand: string
  category: string
  thumbnail: string
  images: string[]
}

interface ApiResponse {
  products: ApiProduct[]
  total: number
  skip: number
  limit: number
}

// Type definitions
interface Category {
  id: string
  name: string
  count: number
}

interface FilterOption {
  id: string
  title: string
  options: string[]
}

interface ProductVariant {
  id: string
  price: number
  label: string
}

interface ProductNutrition {
  calories: number
  protein: string
  carbs: string
  fiber: string
  fat: string
}

interface FeaturedProduct {
  id: string
  name: string
  category: string
  rating: number
  reviews: number
  price: number
  originalPrice: number
  discount: number
  description: string
  features: string[]
  variants: ProductVariant[]
  images: string[]
  nutrition: ProductNutrition
  tags: string[]
}

interface Product {
  id: string
  name: string
  category: string
  price: number
  originalPrice: number
  discount: number
  rating: number
  reviews: number
  image: string
  tags: string[]
  origin: string
  stock: number
  isNew: boolean
}

interface Benefit {
  icon: LucideIcon
  title: string
  description: string
  color: string
}

interface Review {
  name: string
  rating: number
  date: string
  comment: string
}

interface TrustBadge {
  icon: LucideIcon
  text: string
  sub: string
}

interface ImageCollage {
  src: typeof productImg1 | typeof productImg2 | typeof productImg3 | typeof productImg4
  alt: string
  width: number
  height: number
}

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function ProductsPage(): JSX.Element {
  const [quantity, setQuantity] = useState<number>(1)
  const [selectedVariant, setSelectedVariant] = useState<string>("500g")
  const [wishlist, setWishlist] = useState<string[]>([])
  const [cart, setCart] = useState<string[]>([])
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000])
  const [sortBy, setSortBy] = useState<string>("featured")
  const [selectedFilters, setSelectedFilters] = useState<string[]>([])
  const [quickViewProduct, setQuickViewProduct] = useState<string | null>(null)

  const { data: apiData, error, isLoading } = useSWR<ApiResponse>("https://dummyjson.com/products", fetcher)

  const products: Product[] =
    apiData?.products.map((product) => ({
      id: product.id.toString(),
      name: product.title,
      category: product.category,
      price: Math.round(product.price * 83), // Convert USD to INR approx
      originalPrice: Math.round((product.price * 83) / (1 - product.discountPercentage / 100)),
      discount: Math.round(product.discountPercentage),
      rating: product.rating,
      reviews: Math.floor(Math.random() * 1000) + 100,
      image: product.thumbnail,
      tags: [product.brand, "Premium"],
      origin: product.brand || "Various",
      stock: product.stock,
      isNew: Math.random() > 0.5,
    })) || []

  const categories: Category[] = [
    { id: "all", name: "All Products", count: products.length },
    ...Array.from(new Set(products.map((p) => p.category))).map((cat) => ({
      id: cat,
      name: cat.charAt(0).toUpperCase() + cat.slice(1),
      count: products.filter((p) => p.category === cat).length,
    })),
  ]

  // Filter options
  const filters: FilterOption[] = [
    {
      id: "origin",
      title: "Origin",
      options: ["California", "Kashmir", "Iran", "Afghanistan", "Australia"],
    },
    {
      id: "certifications",
      title: "Certifications",
      options: ["Organic", "Non-GMO", "USDA Certified", "ISO 22000"],
    },
    {
      id: "processing",
      title: "Processing",
      options: ["Raw", "Roasted", "Salted", "Flavored"],
    },
    {
      id: "benefits",
      title: "Health Benefits",
      options: ["High Protein", "Low Carb", "Heart Health", "Brain Boost"],
    },
  ]

  const featuredProduct: FeaturedProduct | null =
    products.length > 0
      ? {
          id: products[0].id,
          name: products[0].name,
          category: products[0].category,
          rating: products[0].rating,
          reviews: products[0].reviews,
          price: products[0].price,
          originalPrice: products[0].originalPrice,
          discount: products[0].discount,
          description: apiData?.products[0]?.description || "",
          features: [
            "Rich in Vitamin E & Magnesium",
            "Supports heart health",
            "High protein content",
            "Gluten-free & vegan",
            "No artificial preservatives",
          ],
          variants: [
            { id: "250g", price: Math.round(products[0].price * 0.6), label: "250g" },
            { id: "500g", price: products[0].price, label: "500g (Most Popular)" },
            { id: "1kg", price: Math.round(products[0].price * 1.8), label: "1kg (Best Value)" },
            { id: "2kg", price: Math.round(products[0].price * 3.2), label: "2kg Family Pack" },
          ],
          images: apiData?.products[0]?.images || [],
          nutrition: {
            calories: 579,
            protein: "21g",
            carbs: "22g",
            fiber: "13g",
            fat: "50g",
          },
          tags: products[0].tags,
        }
      : null

  // Image collage data
  const imageCollage: ImageCollage[] = [
    { src: productImg1, alt: "product_homeImage1", width: 200, height: 160 },
    { src: productImg2, alt: "product_image2", width: 200, height: 160 },
    { src: productImg3, alt: "product_image3", width: 200, height: 160 },
    { src: productImg4, alt: "product_image4", width: 200, height: 160 },
  ]

  // Related products
  const relatedProducts: Product[] = products.slice(0, 4)

  // Trust badges for featured product
  const trustBadges: TrustBadge[] = [
    { icon: Truck, text: "Free Shipping", sub: "Above ₹999" },
    { icon: Shield, text: "Quality Guarantee", sub: "100% Authentic" },
    { icon: RefreshCw, text: "Easy Returns", sub: "30 Days Policy" },
    { icon: Package, text: "Secure Packaging", sub: "Vacuum Sealed" },
  ]

  // Product benefits
  const productBenefits: Benefit[] = [
    {
      icon: Leaf,
      title: "100% Natural",
      description: "No preservatives or artificial additives",
      color: "from-emerald-500 to-emerald-700",
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "Hand-selected for size and perfection",
      color: "from-amber-500 to-amber-700",
    },
    {
      icon: Clock,
      title: "Freshness Locked",
      description: "Vacuum sealed for maximum freshness",
      color: "from-emerald-500 to-emerald-700",
    },
    {
      icon: Zap,
      title: "Energy Boost",
      description: "Natural source of vitamins and minerals",
      color: "from-amber-500 to-amber-700",
    },
    {
      icon: Droplets,
      title: "Low Moisture",
      description: "Perfectly dried for long shelf life",
      color: "from-emerald-500 to-emerald-700",
    },
    {
      icon: Scale,
      title: "Accurate Weight",
      description: "No short weighing guaranteed",
      color: "from-amber-500 to-amber-700",
    },
    {
      icon: Shield,
      title: "Safe & Hygienic",
      description: "Processed in certified facilities",
      color: "from-emerald-500 to-emerald-700",
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Shipped within 24 hours",
      color: "from-amber-500 to-amber-700",
    },
  ]

  // Sample reviews
  const reviews: Review[] = [
    {
      name: "Priya Sharma",
      rating: 5,
      date: "2 days ago",
      comment: "Exceptional quality! The almonds are fresh, crunchy, and perfectly sized. Will definitely order again.",
    },
    {
      name: "Rajesh Kumar",
      rating: 5,
      date: "1 week ago",
      comment: "Best almonds I've ever tasted. Premium packaging and fast delivery. Highly recommended!",
    },
    {
      name: "Anita Patel",
      rating: 4,
      date: "2 weeks ago",
      comment: "Great quality product. Slightly expensive but worth it for the quality.",
    },
  ]

  const handleAddToCart = (productId: string): void => {
    setCart((prevCart) => [...prevCart, productId])
  }

  const handleAddToWishlist = (productId: string): void => {
    setWishlist((prevWishlist) => {
      if (prevWishlist.includes(productId)) {
        return prevWishlist.filter((id) => id !== productId)
      } else {
        return [...prevWishlist, productId]
      }
    })
  }

  const handleQuantityChange = (action: "increase" | "decrease"): void => {
    setQuantity((prevQuantity) => {
      if (action === "increase") {
        return prevQuantity + 1
      } else if (action === "decrease" && prevQuantity > 1) {
        return prevQuantity - 1
      }
      return prevQuantity
    })
  }

  const handleFilterChange = (option: string, checked: boolean): void => {
    setSelectedFilters((prevFilters) => {
      if (checked) {
        return [...prevFilters, option]
      } else {
        return prevFilters.filter((f) => f !== option)
      }
    })
  }

  const filteredProducts: Product[] = products.filter((product) => {
    if (selectedCategory !== "all" && product.category.toLowerCase() !== selectedCategory.toLowerCase()) {
      return false
    }
    if (product.price < priceRange[0] || product.price > priceRange[1]) {
      return false
    }
    // Add filter by selectedFilters
    if (selectedFilters.length > 0) {
      // This is a simplified example; real-world filtering might need more complex logic
      // For now, let's assume we're filtering by product tags that match selected filters
      const matchesAnyFilter = selectedFilters.some(
        (filter) =>
          product.tags.some((tag) => tag.toLowerCase().includes(filter.toLowerCase())) ||
          product.category.toLowerCase().includes(filter.toLowerCase()), // Example: filtering by category
      )
      if (!matchesAnyFilter) {
        return false
      }
    }
    return true
  })

  // Sort products
  const sortedProducts: Product[] = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price
      case "price-high":
        return b.price - a.price
      case "rating":
        return b.rating - a.rating
      case "newest":
        return a.isNew === b.isNew ? 0 : a.isNew ? -1 : 1
      case "featured": // Default case to keep order if no specific sort is selected
      default:
        return 0
    }
  })

  const renderStars = (rating: number): JSX.Element[] => {
    return Array.from({ length: 5 }, (_, i: number) => (
      <Star key={i} className={`w-4 h-4 ${i < rating ? "fill-amber-400 text-amber-400" : "text-gray-300"}`} />
    ))
  }

  const renderRatingStars = (rating: number, size: "sm" | "md" | "lg" = "md"): JSX.Element[] => {
    const sizeClasses = {
      sm: "w-3 h-3",
      md: "w-4 h-4",
      lg: "w-5 h-5",
    }

    return Array.from({ length: 5 }, (_, i: number) => (
      <Star
        key={i}
        className={`${sizeClasses[size]} ${i < Math.floor(rating) ? "fill-amber-400 text-amber-400" : "text-gray-300"}`}
      />
    ))
  }

  const getCurrentVariantPrice = (): number => {
    if (!featuredProduct) return 0
    const variant = featuredProduct.variants.find((v) => v.id === selectedVariant)
    return variant ? variant.price : featuredProduct.price
  }

  if (isLoading) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-amber-50 to-white pt-[140px] pb-24">
        <div className="container mx-auto px-6 py-20 text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-700"></div>
          <p className="mt-4 text-gray-600">Loading products...</p>
        </div>
      </main>
    )
  }

  if (error) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-amber-50 to-white pt-[140px] pb-24">
        <div className="container mx-auto px-6 py-20 text-center">
          <p className="text-red-600">Error loading products. Please try again later.</p>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 to-white pt-[140px] pb-24">
      {/* HERO BANNER */}
      <section className="relative bg-white py-20">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          {/* LEFT — TEXT SECTION */}
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 bg-green-700 text-white px-4 py-1.5 rounded-full mb-6">
              <Tag className="w-4 h-4" />
              <span className="text-sm font-semibold tracking-wide">Premium Food Products</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 leading-tight mb-4">
              <span className="block text-green-700">
                <span className="text-gray-600">High-Quality Rice,</span> Daal and Premium Dry Fruits
              </span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              We deliver top-grade rice, handpicked pulses, and the finest dry fruits — sourced directly from trusted
              farms to ensure purity, taste, and freshness in every pack.
            </p>
          </div>

          {/* RIGHT — COLLAGE GRID */}
          <div className="relative w-full mx-auto px-4">
            {/* 4-Image Grid */}
            <div className="grid grid-cols-2 gap-4">
              {imageCollage.map((img, index) => (
                <div key={index} className="rounded-xl overflow-hidden shadow-md">
                  <Image
                    src={img.src || "/placeholder.svg"}
                    alt={img.alt}
                    width={img.width}
                    height={img.height}
                    className="object-cover w-full h-full"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gray-200"></div>
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
                aria-label="Grid view"
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 ${viewMode === "list" ? "bg-emerald-100 text-emerald-700" : "bg-white text-gray-600"}`}
                aria-label="List view"
              >
                <List className="w-5 h-5" />
              </button>
            </div>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSortBy(e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                aria-label="Sort products by"
              >
                <option value="featured">Featured</option>
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
              <ChevronDown className="w-4 h-4 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-gray-600" />
            </div>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* SIDEBAR FILTERS */}
          <aside className="lg:col-span-1">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 sticky top-24">
              {/* Categories */}
              <div className="mb-8">
                <h3 className="font-bold text-lg mb-4 text-gray-800">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-sm transition-all ${
                        selectedCategory === category.id
                          ? "bg-emerald-100 text-emerald-700 font-semibold"
                          : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      <span>{category.name}</span>
                      <span
                        className={`text-xs ${selectedCategory === category.id ? "text-emerald-600" : "text-gray-500"}`}
                      >
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-8">
                <h3 className="font-bold text-lg mb-4 text-gray-800">Price Range</h3>
                <Slider
                  value={priceRange}
                  onValueChange={(value) => setPriceRange(value as [number, number])}
                  min={0}
                  max={2000}
                  step={50}
                  className="mb-4"
                />
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>₹{priceRange[0]}</span>
                  <span>₹{priceRange[1]}</span>
                </div>
              </div>

              {/* Additional Filters */}
              {filters.map((filter) => (
                <div key={filter.id} className="mb-6">
                  <h3 className="font-bold text-sm mb-3 text-gray-800">{filter.title}</h3>
                  <div className="space-y-2">
                    {filter.options.map((option) => (
                      <div key={option} className="flex items-center gap-2">
                        <Checkbox
                          id={`${filter.id}-${option}`}
                          checked={selectedFilters.includes(option)}
                          onCheckedChange={(checked) => handleFilterChange(option, checked as boolean)}
                        />
                        <Label htmlFor={`${filter.id}-${option}`} className="text-sm text-gray-700 cursor-pointer">
                          {option}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              {/* Clear Filters */}
              <Button
                variant="outline"
                className="w-full mt-6 bg-transparent"
                onClick={() => {
                  setSelectedCategory("all")
                  setPriceRange([0, 2000])
                  setSelectedFilters([])
                }}
              >
                Clear All Filters
              </Button>
            </div>
          </aside>

          {/* PRODUCTS GRID */}
          <div className="lg:col-span-3">
            <div className="mb-6 text-sm text-gray-600">
              Showing {sortedProducts.length} of {products.length} products
            </div>

            <div
              className={
                viewMode === "grid" ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" : "flex flex-col gap-4"
              }
            >
              {sortedProducts.map((product) => (
                <Card
                  key={product.id}
                  className={`group relative overflow-hidden cursor-pointer transition-all hover:shadow-xl hover:scale-[1.02] ${
                    viewMode === "list" ? "flex" : ""
                  }`}
                >
                  <CardContent className="p-0">
                    {/* Product Image */}
                    <Link href={`/product/${product.id}`}>
                      <div className="relative aspect-square overflow-hidden bg-gray-100">
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        {product.isNew && (
                          <Badge className="absolute top-3 left-3 bg-emerald-700 text-white">NEW</Badge>
                        )}
                        {product.discount > 0 && (
                          <Badge className="absolute top-3 right-3 bg-red-600 text-white">-{product.discount}%</Badge>
                        )}

                        {/* Quick Actions */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-2">
                          <Button
                            size="icon"
                            variant="secondary"
                            className="rounded-full bg-white hover:bg-emerald-700 hover:text-white"
                            onClick={(e) => {
                              e.preventDefault()
                              e.stopPropagation()
                              setQuickViewProduct(product.id)
                            }}
                          >
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button
                            size="icon"
                            variant="secondary"
                            className="rounded-full bg-white hover:bg-emerald-700 hover:text-white"
                            onClick={(e) => {
                              e.preventDefault()
                              e.stopPropagation()
                              handleAddToWishlist(product.id)
                            }}
                          >
                            <Heart
                              className={`w-4 h-4 ${wishlist.includes(product.id) ? "fill-red-500 text-red-500" : ""}`}
                            />
                          </Button>
                        </div>
                      </div>
                    </Link>

                    {/* Product Info */}
                    <Link href={`/product/${product.id}`}>
                      <div className="p-4">
                        <div className="flex items-center gap-1 mb-2">
                          {renderRatingStars(product.rating, "sm")}
                          <span className="text-xs text-gray-600 ml-1">({product.reviews})</span>
                        </div>

                        <h3 className="font-semibold text-gray-800 mb-1 line-clamp-2 min-h-[48px]">{product.name}</h3>

                        <p className="text-sm text-gray-600 mb-3">{product.category}</p>

                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-2xl font-bold text-emerald-700">₹{product.price}</span>
                          {product.originalPrice > product.price && (
                            <span className="text-sm text-gray-500 line-through">₹{product.originalPrice}</span>
                          )}
                        </div>

                        {product.stock < 20 && (
                          <p className="text-xs text-orange-600 mt-2">Only {product.stock} left in stock!</p>
                        )}
                      </div>
                    </Link>

                    <div className="px-4 pb-4">
                      <Button
                        className="w-full bg-emerald-700 hover:bg-emerald-800"
                        onClick={(e) => {
                          e.preventDefault()
                          e.stopPropagation()
                          handleAddToCart(product.id)
                        }}
                      >
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Add to Cart
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCT SHOWCASE */}
      <FeaturedProductSection
        featuredProduct={featuredProduct}
        selectedVariant={selectedVariant}
        quantity={quantity}
        wishlist={wishlist}
        trustBadges={trustBadges}
        onVariantChange={setSelectedVariant}
        onQuantityChange={handleQuantityChange}
        onAddToWishlist={handleAddToWishlist}
        onAddToCart={() => handleAddToCart(featuredProduct?.id || "")}
      />

      {/* PRODUCT BENEFITS */}
      <section className="bg-gradient-to-b from-white to-amber-50 py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1 bg-gradient-to-r from-emerald-100 to-amber-100 text-emerald-800 rounded-full text-sm font-semibold mb-4">
              Health Benefits
            </div>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Why Choose Our Premium Products?</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Discover the difference quality makes. We are committed to providing you with the best natural
              ingredients, packed with flavor and nutrition, to elevate your everyday meals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {productBenefits.map((benefit, index) => (
              <div key={index} className={`p-6 rounded-xl shadow-lg bg-gradient-to-r ${benefit.color} text-white`}>
                <benefit.icon className="w-10 h-10 mb-4 opacity-70" />
                <h3 className="font-bold text-xl mb-2">{benefit.title}</h3>
                <p className="text-sm opacity-80 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

// Placeholder for FeaturedProductSection component, as it's not provided in the snippet
// In a real application, this would be imported from another file.
const FeaturedProductSection = ({
  featuredProduct,
  selectedVariant,
  quantity,
  wishlist,
  trustBadges,
  onVariantChange,
  onQuantityChange,
  onAddToWishlist,
  onAddToCart,
}: {
  featuredProduct: FeaturedProduct | null
  selectedVariant: string
  quantity: number
  wishlist: string[]
  trustBadges: TrustBadge[]
  onVariantChange: (variant: string) => void
  onQuantityChange: (action: "increase" | "decrease") => void
  onAddToWishlist: (productId: string) => void
  onAddToCart: () => void
}) => {
  if (!featuredProduct) return null

  const renderStars = (rating: number): JSX.Element[] => {
    return Array.from({ length: 5 }, (_, i: number) => (
      <Star key={i} className={`w-4 h-4 ${i < rating ? "fill-amber-400 text-amber-400" : "text-gray-300"}`} />
    ))
  }

  const getCurrentVariantPrice = (): number => {
    const variant = featuredProduct.variants.find((v) => v.id === selectedVariant)
    return variant ? variant.price : featuredProduct.price
  }

  return (
    <section className="bg-gradient-to-b from-amber-50 to-white py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Product Gallery */}
          <div className="relative">
            <Image
              src={featuredProduct.images[0] || "/placeholder.svg"}
              alt={featuredProduct.name}
              width={700}
              height={700}
              className="rounded-xl shadow-2xl border border-gray-200 object-cover w-full"
            />
            <div className="flex gap-4 mt-6 absolute -bottom-12 left-1/2 -translate-x-1/2">
              {featuredProduct.images.slice(1, 4).map((img, index) => (
                <button
                  key={index}
                  className="w-24 h-24 rounded-lg overflow-hidden border-2 hover:border-emerald-500 transition-all duration-300 bg-white p-1 shadow"
                  onClick={() =>
                    onVariantChange(featuredProduct.variants.find((v) => v.id === selectedVariant)?.id || "500g")
                  }
                >
                  <img
                    src={img || "/placeholder.svg"}
                    alt={`${featuredProduct.name} variant`}
                    className="w-full h-full object-cover rounded-md"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              {renderStars(featuredProduct.rating)}
              <span className="text-sm text-gray-600 ml-1">({featuredProduct.reviews} Reviews)</span>
            </div>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">{featuredProduct.name}</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">{featuredProduct.description}</p>

            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl font-bold text-emerald-700">₹{getCurrentVariantPrice()}</span>
              {featuredProduct.originalPrice > getCurrentVariantPrice() && (
                <span className="text-xl text-gray-500 line-through">₹{featuredProduct.originalPrice}</span>
              )}
              <Badge className="bg-red-600 text-white text-lg font-bold">-{featuredProduct.discount}%</Badge>
            </div>

            {/* Variants */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Select Size:</h3>
              <div className="flex flex-wrap gap-3">
                {featuredProduct.variants.map((variant) => (
                  <Button
                    key={variant.id}
                    variant={selectedVariant === variant.id ? "default" : "outline"}
                    className={`rounded-full ${
                      selectedVariant === variant.id
                        ? "bg-emerald-700 hover:bg-emerald-800 text-white"
                        : "border-gray-300 text-gray-700 hover:bg-gray-100"
                    }`}
                    onClick={() => onVariantChange(variant.id)}
                  >
                    {variant.label}
                  </Button>
                ))}
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                <Button size="icon" variant="ghost" className="w-12 h-12" onClick={() => onQuantityChange("decrease")}>
                  <Minus className="w-4 h-4 text-gray-600" />
                </Button>
                <span className="w-16 h-12 flex items-center justify-center font-bold text-lg">{quantity}</span>
                <Button size="icon" variant="ghost" className="w-12 h-12" onClick={() => onQuantityChange("increase")}>
                  <Plus className="w-4 h-4 text-gray-600" />
                </Button>
              </div>
              <Button className="flex-1 bg-emerald-700 hover:bg-emerald-800 h-12 px-8" onClick={onAddToCart}>
                <ShoppingCart className="w-4 h-4 mr-2" />
                Add to Cart
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="h-12 w-12 rounded-lg bg-transparent"
                onClick={() => onAddToWishlist(featuredProduct.id)}
              >
                <Heart
                  className={`w-5 h-5 ${
                    wishlist.includes(featuredProduct.id) ? "fill-red-500 text-red-500" : "text-gray-600"
                  }`}
                />
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-8 border-t border-gray-200">
              {trustBadges.map((badge, index) => (
                <div key={index} className="flex items-center gap-3">
                  <badge.icon className="w-6 h-6 text-emerald-600" />
                  <div>
                    <p className="font-semibold text-gray-800">{badge.text}</p>
                    <p className="text-xs text-gray-500">{badge.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
