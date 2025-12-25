"use client"

import { use } from "react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import useSWR from "swr"
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
  ShoppingCart,
  Share2,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

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
  reviews?: Array<{
    rating: number
    comment: string
    reviewerName: string
    date: string
  }>
}

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const [isWishlisted, setIsWishlisted] = useState(false)

  const { data: product, error, isLoading } = useSWR<ApiProduct>(`https://dummyjson.com/products/${id}`, fetcher)

  const handleQuantityChange = (action: "increase" | "decrease") => {
    setQuantity((prev) => {
      if (action === "increase") return prev + 1
      if (action === "decrease" && prev > 1) return prev - 1
      return prev
    })
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${i < Math.floor(rating) ? "fill-amber-400 text-amber-400" : "text-gray-300"}`}
      />
    ))
  }

  if (isLoading) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-amber-50 to-white pt-[140px] pb-24">
        <div className="container mx-auto px-6 py-20 text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-700"></div>
          <p className="mt-4 text-gray-600">Loading product details...</p>
        </div>
      </main>
    )
  }

  if (error || !product) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-amber-50 to-white pt-[140px] pb-24">
        <div className="container mx-auto px-6 py-20 text-center">
          <p className="text-red-600">Product not found or failed to load.</p>
          <Link href="/product">
            <Button className="mt-4">Back to Products</Button>
          </Link>
        </div>
      </main>
    )
  }

  const priceInINR = Math.round(product.price * 83)
  const originalPriceInINR = Math.round((product.price * 83) / (1 - product.discountPercentage / 100))
  const discountAmount = originalPriceInINR - priceInINR

  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 to-white pt-[140px] pb-24">
      {/* Breadcrumb */}
      <section className="container mx-auto px-6 pt-8">
        <div className="flex items-center text-sm text-gray-600 mb-8">
          <Link href="/" className="text-emerald-700 hover:underline">
            Home
          </Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <Link href="/product" className="text-emerald-700 hover:underline">
            Products
          </Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-gray-500">{product.title}</span>
        </div>

        {/* Product Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left - Images */}
          <div className="space-y-4">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-white shadow-lg">
              <Image
                src={product.images[selectedImage] || product.thumbnail}
                alt={product.title}
                fill
                className="object-cover"
              />
              {product.discountPercentage > 0 && (
                <Badge className="absolute top-4 left-4 bg-red-500 text-white">
                  {Math.round(product.discountPercentage)}% OFF
                </Badge>
              )}
            </div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 gap-3">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === idx ? "border-emerald-600 scale-105" : "border-gray-200 hover:border-emerald-400"
                  }`}
                >
                  <Image
                    src={img || "/placeholder.svg"}
                    alt={`${product.title} ${idx + 1}`}
                    width={100}
                    height={100}
                    className="object-cover w-full h-full"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right - Product Info */}
          <div className="space-y-6">
            {/* Category Badge */}
            <Badge variant="outline" className="text-emerald-700 border-emerald-700">
              {product.category}
            </Badge>

            {/* Title */}
            <h1 className="text-4xl font-bold text-gray-800 leading-tight">{product.title}</h1>

            {/* Brand */}
            {product.brand && (
              <p className="text-lg text-gray-600">
                Brand: <span className="font-semibold text-gray-800">{product.brand}</span>
              </p>
            )}

            {/* Rating */}
            <div className="flex items-center gap-3">
              <div className="flex">{renderStars(product.rating)}</div>
              <span className="text-lg font-semibold text-gray-700">{product.rating.toFixed(1)}</span>
              <span className="text-gray-500">({Math.floor(Math.random() * 1000) + 100} reviews)</span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="text-4xl font-bold text-emerald-700">₹{priceInINR.toLocaleString()}</span>
              {product.discountPercentage > 0 && (
                <>
                  <span className="text-2xl text-gray-400 line-through">₹{originalPriceInINR.toLocaleString()}</span>
                  <Badge className="bg-red-100 text-red-700 hover:bg-red-100">
                    Save ₹{discountAmount.toLocaleString()}
                  </Badge>
                </>
              )}
            </div>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed">{product.description}</p>

            {/* Stock Status */}
            <div className="flex items-center gap-2">
              {product.stock > 0 ? (
                <>
                  <Badge className="bg-green-100 text-green-700">In Stock</Badge>
                  <span className="text-sm text-gray-600">({product.stock} units available)</span>
                </>
              ) : (
                <Badge className="bg-red-100 text-red-700">Out of Stock</Badge>
              )}
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center gap-4">
              <span className="font-semibold text-gray-700">Quantity:</span>
              <div className="flex items-center border border-gray-300 rounded-lg">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleQuantityChange("decrease")}
                  disabled={quantity <= 1}
                >
                  <Minus className="w-4 h-4" />
                </Button>
                <span className="px-6 py-2 font-semibold">{quantity}</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleQuantityChange("increase")}
                  disabled={quantity >= product.stock}
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <Button
                className="flex-1 bg-emerald-700 hover:bg-emerald-800 text-white h-14 text-lg"
                disabled={product.stock === 0}
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart
              </Button>
              <Button
                variant="outline"
                size="lg"
                className={`h-14 w-14 ${isWishlisted ? "bg-red-50 border-red-500 text-red-500" : ""}`}
                onClick={() => setIsWishlisted(!isWishlisted)}
              >
                <Heart className={`w-5 h-5 ${isWishlisted ? "fill-red-500" : ""}`} />
              </Button>
              <Button variant="outline" size="lg" className="h-14 w-14 bg-transparent">
                <Share2 className="w-5 h-5" />
              </Button>
            </div>

            {/* Trust Badges */}
            <Card className="bg-amber-50 border-amber-200">
              <CardContent className="p-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <Truck className="w-6 h-6 text-emerald-700" />
                    <div>
                      <p className="font-semibold text-sm text-gray-800">Free Shipping</p>
                      <p className="text-xs text-gray-600">Above ₹999</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="w-6 h-6 text-emerald-700" />
                    <div>
                      <p className="font-semibold text-sm text-gray-800">Quality Guarantee</p>
                      <p className="text-xs text-gray-600">100% Authentic</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <RefreshCw className="w-6 h-6 text-emerald-700" />
                    <div>
                      <p className="font-semibold text-sm text-gray-800">Easy Returns</p>
                      <p className="text-xs text-gray-600">30 Days Policy</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Package className="w-6 h-6 text-emerald-700" />
                    <div>
                      <p className="font-semibold text-sm text-gray-800">Secure Packaging</p>
                      <p className="text-xs text-gray-600">Vacuum Sealed</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Customer Reviews Section */}
        {product.reviews && product.reviews.length > 0 && (
          <section className="mt-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Customer Reviews</h2>
            <div className="grid gap-6">
              {product.reviews.map((review, idx) => (
                <Card key={idx}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <p className="font-semibold text-gray-800">{review.reviewerName}</p>
                        <p className="text-sm text-gray-500">{new Date(review.date).toLocaleDateString()}</p>
                      </div>
                      <div className="flex">{renderStars(review.rating)}</div>
                    </div>
                    <p className="text-gray-600">{review.comment}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}
      </section>
    </main>
  )
}
