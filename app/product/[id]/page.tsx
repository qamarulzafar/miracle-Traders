"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { useParams } from "next/navigation"
import useSWR from "swr"
import {
  Heart,
  Star,
  Truck,
  Shield,
  Package,
  ChevronRight,
  Share2,
  Mail,
  MessageSquare,
  Award,
  Globe,
  BadgeCheck,
  CheckCircle2,
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

export default function ProductDetailPage() {
  const params = useParams()
  const id = params?.id as string | undefined
  const [selectedImage, setSelectedImage] = useState(0)
  const [isWishlisted, setIsWishlisted] = useState(false)

  const {
    data: product,
    error,
    isLoading,
  } = useSWR<ApiProduct>(id ? `https://dummyjson.com/products/${id}` : null, fetcher)

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${i < Math.floor(rating) ? "fill-amber-400 text-amber-400" : "text-gray-400"}`}
      />
    ))
  }

  if (isLoading) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20 pb-24">
        <div className="container mx-auto px-6 py-20 text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-green-700"></div>
          <p className="mt-4 text-gray-600 font-medium">Loading premium product details...</p>
        </div>
      </main>
    )
  }

  if (error || !product) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20 pb-24">
        <div className="container mx-auto px-6 py-20 text-center">
          <p className="text-red-600 font-semibold">Product not found or failed to load.</p>
          <Link href="/products">
            <Button className="mt-4 bg-green-700 hover:bg-green-800 text-white">Back to Products</Button>
          </Link>
        </div>
      </main>
    )
  }

  const WHATSAPP_NUMBER = "92XXXXXXXXXX"
  const CONTACT_EMAIL = "info@miracletraders.com"

  const openWhatsApp = (productTitle: string, productId: number | string) => {
    const text = encodeURIComponent(
      `Hello, I'm interested in ${productTitle} (ID: ${productId}). Please provide bulk pricing, specifications, and shipping information. - Miracle Traders (Pakistan)`,
    )
    if (typeof window !== "undefined") {
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank")
    }
  }

  const sendEmail = (productTitle: string, productId: number | string) => {
    const subject = `Bulk Inquiry: ${productTitle}`
    const body = `Hello,%0D%0A%0D%0AI am interested in ${productTitle} (ID: ${productId}) for bulk purchase.%0D%0A%0D%0APlease provide:%0D%0A- Bulk pricing and MOQ%0D%0A- Product specifications%0D%0A- Packaging options%0D%0A- Shipping terms and delivery timeline%0D%0A%0D%0ALooking forward to your response.%0D%0A%0D%0ABest regards`
    if (typeof window !== "undefined") {
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${body}`
    }
  }

  return (
    <main className="min-h-screen mt-40 bg-white">
      {/* Breadcrumb */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center text-sm text-gray-600">
            <Link href="/" className="text-green-700 hover:text-green-800 font-medium transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
            <Link href="/products" className="text-green-700 hover:text-green-800 font-medium transition-colors">
              Products
            </Link>
            <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
            <span className="text-gray-900 font-medium">{product.title}</span>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left - Images Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-50 border border-gray-200">
              <Image
                src={product.images[selectedImage] || product.thumbnail}
                alt={product.title}
                fill
                className="object-cover"
              />
              {product.discountPercentage > 0 && (
                <Badge className="absolute top-4 left-4 bg-red-600 text-white text-sm px-3 py-1.5 font-bold">
                  {Math.round(product.discountPercentage)}% OFF
                </Badge>
              )}
              <div className="absolute top-4 right-4 flex gap-2">
                <Badge className="bg-green-700 text-white text-xs px-2.5 py-1 font-semibold flex items-center gap-1">
                  <BadgeCheck className="w-3.5 h-3.5" />
                  Verified
                </Badge>
              </div>
            </div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-5 gap-2">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                    selectedImage === idx
                      ? "border-green-700 ring-2 ring-green-100"
                      : "border-gray-200 hover:border-green-400"
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
            {/* Category & Brand Badge */}
            <div className="flex items-center gap-2 flex-wrap">
              <Badge className="bg-green-700 text-white text-xs px-3 py-1 font-semibold capitalize">
                {product.category}
              </Badge>
              {product.brand && (
                <Badge variant="outline" className="text-gray-700 border-gray-300 text-xs px-3 py-1 font-semibold">
                  {product.brand}
                </Badge>
              )}
              <Badge className="bg-gray-100 text-gray-700 text-xs px-3 py-1 font-semibold flex items-center gap-1">
                <Globe className="w-3 h-3" />
                Origin: Pakistan
              </Badge>
            </div>

            {/* Title */}
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-3">{product.title}</h1>
              <p className="text-gray-600 text-base">
                Premium export-quality {product.category || "product"} for international bulk buyers
              </p>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-3 pb-2 border-b border-gray-200">
              <div className="flex gap-0.5">{renderStars(product.rating)}</div>
              <span className="text-lg font-bold text-gray-900">{product.rating.toFixed(1)}</span>
              <span className="text-gray-500">({Math.floor(Math.random() * 1000) + 100} reviews)</span>
            </div>

            {/* Stock Status */}
            <div className="flex items-center gap-2">
              {product.stock > 0 ? (
                <>
                  <CheckCircle2 className="w-5 h-5 text-green-700" />
                  <span className="text-gray-900 font-semibold">In Stock</span>
                  <span className="text-gray-500">— Ready for immediate dispatch</span>
                </>
              ) : (
                <Badge className="bg-red-100 text-red-800 text-sm px-3 py-1.5 font-semibold">Out of Stock</Badge>
              )}
            </div>

            {/* Price Section */}
            <Card className="border-2 border-green-700 bg-gradient-to-br from-green-50 to-emerald-50">
              <CardContent className="p-6">
                <div className="space-y-2">
                  <p className="text-green-700 text-xs font-bold uppercase tracking-wider">Bulk Pricing Available</p>
                  <p className="text-2xl font-bold text-gray-900">Contact for Quote</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Get competitive pricing tailored to your order volume. We offer flexible payment terms and custom
                    packaging solutions for international buyers.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Product Description */}
            <div className="space-y-3 py-2">
              <h3 className="text-lg font-bold text-gray-900">Product Description</h3>
              <p className="text-gray-700 leading-relaxed text-base">
                {product.description} This product is sourced and processed to meet international export standards,
                ensuring consistent quality, moisture control, and packaging suitable for long-distance shipping. Ideal
                for bulk buyers and distributors seeking reliable supply and competitive pricing.
              </p>
            </div>

            {/* Quick Specifications */}
            <Card className="border border-gray-200 bg-white">
              <CardContent className="p-6">
                <h3 className="text-base font-bold text-gray-900 mb-4">Product Specifications</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="space-y-1">
                    <p className="text-gray-600 font-medium">MOQ (Minimum Order)</p>
                    <p className="text-gray-900 font-semibold">1 Container (20ft/40ft)</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-gray-600 font-medium">Supply Capacity</p>
                    <p className="text-gray-900 font-semibold">50–100 Containers/Month</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-gray-600 font-medium">Packaging Options</p>
                    <p className="text-gray-900 font-semibold">25kg / 50kg PP Bags</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-gray-600 font-medium">Certification</p>
                    <p className="text-gray-900 font-semibold">ISO 9001:2015 Certified</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-gray-600 font-medium">Payment Terms</p>
                    <p className="text-gray-900 font-semibold">L/C, T/T, D/P</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-gray-600 font-medium">Delivery Time</p>
                    <p className="text-gray-900 font-semibold">15–30 Days</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-4">
              <Button
                className="flex-1 bg-green-700 hover:bg-green-800 text-white h-14 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                disabled={product.stock === 0}
                onClick={() => openWhatsApp(product.title, product.id)}
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                WhatsApp Inquiry
              </Button>
              <Button
                variant="outline"
                className="flex-1 h-14 text-lg font-semibold border-2 border-gray-600 text-gray-700 hover:bg-gray-100 shadow-md bg-transparent"
                onClick={() => sendEmail(product.title, product.id)}
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </Button>
              <Button
                variant="outline"
                size="lg"
                className={`h-14 w-14 border-2 shadow-md ${
                  isWishlisted
                    ? "bg-red-50 border-red-500 text-red-600 hover:bg-red-100"
                    : "border-gray-400 hover:bg-gray-100"
                }`}
                onClick={() => setIsWishlisted(!isWishlisted)}
              >
                <Heart className={`w-6 h-6 ${isWishlisted ? "fill-red-600" : ""}`} />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-14 w-14 border-2 border-gray-400 hover:bg-gray-100 shadow-md bg-transparent"
              >
                <Share2 className="w-6 h-6" />
              </Button>
            </div>

            {/* Trust Badges */}
            <Card className="bg-gradient-to-br from-gray-100 to-gray-50 border-2 border-gray-300 shadow-lg">
              <CardContent className="p-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-700 rounded-full flex items-center justify-center">
                      <Truck className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-sm text-gray-900">Global Shipping</p>
                      <p className="text-xs text-gray-600">Worldwide Delivery</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-700 rounded-full flex items-center justify-center">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-sm text-gray-900">Quality Guaranteed</p>
                      <p className="text-xs text-gray-600">100% Authentic</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-700 rounded-full flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-sm text-gray-900">ISO Certified</p>
                      <p className="text-xs text-gray-600">Export Standards</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-700 rounded-full flex items-center justify-center">
                      <Package className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-sm text-gray-900">Premium Packaging</p>
                      <p className="text-xs text-gray-600">Export Ready</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Customer Reviews Section */}
        {product.reviews && product.reviews.length > 0 && (
          <section className="mt-16 pt-12 border-t border-gray-200">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Customer Reviews</h2>
              <p className="text-gray-600">Trusted by international buyers worldwide</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {product.reviews.map((review, idx) => (
                <Card key={idx} className="border border-gray-200 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <p className="font-bold text-gray-900">{review.reviewerName}</p>
                        <p className="text-xs text-gray-500">{new Date(review.date).toLocaleDateString()}</p>
                      </div>
                      <div className="flex gap-0.5">{renderStars(review.rating)}</div>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">{review.comment}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}
      </section>

      {/* Bottom CTA Section */}
      <section className="bg-gradient-to-r from-green-700 to-green-800 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Ready to Place Your Bulk Order?</h2>
          <p className="text-lg text-green-100 mb-8 max-w-2xl mx-auto">
            Contact our export team for customized pricing, packaging solutions, and shipping arrangements tailored to
            your requirements.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="bg-white text-green-700 hover:bg-gray-100 font-semibold shadow-xl h-14 px-8"
              onClick={() => openWhatsApp(product.title, product.id)}
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Chat on WhatsApp
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-green-700 font-semibold h-14 px-8 bg-transparent"
              onClick={() => sendEmail(product.title, product.id)}
            >
              <Mail className="w-5 h-5 mr-2" />
              Send Email Inquiry
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
