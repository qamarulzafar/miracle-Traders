"use client";
import type { JSX } from "react";
import Image from "next/image";
import { Tag } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import useSWR from "swr";
import {
  Heart,
  Star,
  Truck,
  Shield,
  Package,
  Grid,
  List,
  Eye,
  Award,
  Clock,
  Mail,
  MessageSquare,
  Search,
  X,
  Check,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import productImg1 from "./../../public/images/product_home_1.jpg";
import productImg2 from "./../../public/images/product_home_2.webp";
import productImg3 from "./../../public/images/product_home_3.webp";
import productImg4 from "./../../public/images/product_home_4.webp";

interface ApiProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

interface ApiResponse {
  products: ApiProduct[];
  total: number;
  skip: number;
  limit: number;
}

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice: number;
  discount: number;
  rating: number;
  reviews: number;
  image: string;
  tags: string[];
  origin: string;
  stock: number;
  isNew: boolean;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function ProductsPage(): JSX.Element {
  const [quantity, setQuantity] = useState<number>(1);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState<string>("featured");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [showFilters, setShowFilters] = useState<boolean>(false);

  const {
    data: apiData,
    error,
    isLoading,
  } = useSWR<ApiResponse>("https://dummyjson.com/products", fetcher);

  const products: Product[] =
    apiData?.products.map((product) => ({
      id: product.id.toString(),
      name: product.title,
      category: product.category,
      price: Math.round(product.price * 83),
      originalPrice: Math.round(
        (product.price * 83) / (1 - product.discountPercentage / 100)
      ),
      discount: Math.round(product.discountPercentage),
      rating: product.rating,
      reviews: Math.floor(Math.random() * 1000) + 100,
      image: product.thumbnail,
      tags: [product.brand, "Premium"],
      origin: product.brand || "Various",
      stock: product.stock,
      isNew: Math.random() > 0.5,
    })) || [];

  const categories = [
    "all",
    ...Array.from(new Set(products.map((p) => p.category))),
  ];

  const WHATSAPP_NUMBER = "92XXXXXXXXXX";
  const CONTACT_EMAIL = "info@miracletraders.com";
  const router = useRouter();

  const openWhatsApp = (productName: string, productId: string, qty = 1) => {
    const text = encodeURIComponent(
      `Hello, I'm interested in ${productName} (ID: ${productId}). Quantity: ${qty}. Please provide bulk pricing details.`
    );
    if (typeof window !== "undefined") {
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
    }
  };

  const sendEmail = (productName: string, productId: string, qty = 1) => {
    const subject = `Inquiry: ${productName}`;
    const body = `Hello,%0D%0A%0D%0AI am interested in ${productName} (ID: ${productId}).%0D%0AQuantity: ${qty}%0D%0A%0D%0APlease share bulk pricing and shipping details.%0D%0A%0D%0AThanks,%0D%0A`;
    if (typeof window !== "undefined") {
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
        subject
      )}&body=${body}`;
    }
  };

  const handleAddToWishlist = (productId: string): void => {
    setWishlist((prevWishlist) => {
      if (prevWishlist.includes(productId)) {
        return prevWishlist.filter((id) => id !== productId);
      } else {
        return [...prevWishlist, productId];
      }
    });
  };

  const filteredProducts: Product[] = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedProducts: Product[] = [...filteredProducts].sort((a, b) => {
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

  const renderStars = (
    rating: number,
    size: "sm" | "md" = "md"
  ): JSX.Element[] => {
    const sizeClasses = size === "sm" ? "w-3.5 h-3.5" : "w-4 h-4";
    return Array.from({ length: 5 }, (_, i: number) => (
      <Star
        key={i}
        className={`${sizeClasses} ${
          i < rating ? "fill-amber-400 text-amber-400" : "text-neutral-300"
        }`}
      />
    ));
  };

  if (isLoading) {
    return (
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-foreground"></div>
          <p className="mt-4 text-muted-foreground">
            Loading premium products...
          </p>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <p className="text-destructive">
            Unable to load products. Please try again later.
          </p>
        </div>
      </main>
    );
  }

  // Image collage data used in the hero section
  const imageCollage = [
    { src: productImg1, alt: "product_homeImage1", width: 200, height: 160 },
    { src: productImg2, alt: "product_image2", width: 200, height: 160 },
    { src: productImg3, alt: "product_image3", width: 200, height: 160 },
    { src: productImg4, alt: "product_image4", width: 200, height: 160 },
  ]

  return (
    <main className="min-h-screen mt-50 bg-background">
      {/* HERO SECTION */}
      {/* HERO BANNER */}
      <section className="relative bg-white py-20">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          {/* LEFT — TEXT SECTION */}
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 bg-green-700 text-white px-4 py-1.5 rounded-full mb-6">
              <Tag className="w-4 h-4" />
              <span className="text-sm font-semibold tracking-wide">
                Premium Food Products
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 leading-tight mb-4">
              <span className="block text-green-700">
                <span className="text-gray-600">High-Quality Rice,</span> Daal
                and Premium Dry Fruits
              </span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              We deliver top-grade rice, handpicked pulses, and the finest dry
              fruits — sourced directly from trusted farms to ensure purity,
              taste, and freshness in every pack.
            </p>
          </div>

          {/* RIGHT — COLLAGE GRID */}
          <div className="relative w-full mx-auto px-4">
            {/* 4-Image Grid */}
            <div className="grid grid-cols-2 gap-4">
              {imageCollage.map((img, index) => (
                <div
                  key={index}
                  className="rounded-xl overflow-hidden shadow-md"
                >
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
      {/* PRODUCTS SECTION */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Search & Filters Bar */}
        <div className="mb-8 space-y-4">
          {/* Search */}
          <div className="relative max-w-xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                aria-label="Clear search"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Filters Row */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-border rounded-lg bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring capitalize"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat === "all" ? "All Categories" : cat}
                  </option>
                ))}
              </select>

              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-border rounded-lg bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option value="featured">Featured</option>
                <option value="newest">Newest First</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-2 border border-border rounded-lg overflow-hidden">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 transition-colors ${
                  viewMode === "grid"
                    ? "bg-foreground text-background"
                    : "bg-background text-foreground hover:bg-muted"
                }`}
                aria-label="Grid view"
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 transition-colors ${
                  viewMode === "list"
                    ? "bg-foreground text-background"
                    : "bg-background text-foreground hover:bg-muted"
                }`}
                aria-label="List view"
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Results Count */}
          <div className="text-sm text-muted-foreground">
            Showing {sortedProducts.length} of {products.length} products
          </div>
        </div>

        {/* Products Grid/List */}
        <div
          className={
            viewMode === "grid"
              ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              : "flex flex-col gap-4"
          }
        >
          {sortedProducts.map((product) => (
            <Card
              key={product.id}
              className={`group relative overflow-hidden border border-border hover:shadow-xl transition-all duration-300 ${
                viewMode === "list" ? "flex" : ""
              }`}
            >
              <CardContent
                className={`p-0 ${viewMode === "list" ? "flex w-full" : ""}`}
              >
                {/* Image */}
                <div
                  className={`relative ${
                    viewMode === "list" ? "w-64 flex-shrink-0" : "w-full"
                  } h-64 overflow-hidden`}
                >
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-2">
                    {product.isNew && (
                      <Badge className="bg-foreground text-background">
                        NEW
                      </Badge>
                    )}
                    {product.discount > 0 && (
                      <Badge className="bg-destructive text-destructive-foreground">
                        -{product.discount}%
                      </Badge>
                    )}
                  </div>

                  {/* Wishlist Button */}
                  <button
                    onClick={() => handleAddToWishlist(product.id)}
                    className="absolute top-3 right-3 w-10 h-10 bg-background/90 backdrop-blur-sm rounded-full flex items-center justify-center transition-all hover:bg-background hover:scale-110"
                    aria-label="Add to wishlist"
                  >
                    <Heart
                      className={`w-5 h-5 transition-all ${
                        wishlist.includes(product.id)
                          ? "fill-red-500 text-red-500"
                          : "text-foreground"
                      }`}
                    />
                  </button>

                  {/* Quick View Overlay */}
                  <div className="absolute inset-0 bg-foreground/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => router.push(`/product/${product.id}`)}
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      Quick View
                    </Button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 flex flex-col flex-1">
                  {/* Category & Rating */}
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs capitalize">
                      {product.category}
                    </Badge>
                    <div className="flex items-center gap-1">
                      {renderStars(Math.floor(product.rating), "sm")}
                      <span className="text-xs text-muted-foreground ml-1">
                        ({product.reviews})
                      </span>
                    </div>
                  </div>

                  {/* Product Name */}
                  <h3 className="font-semibold text-foreground mb-2 line-clamp-2 text-base leading-snug">
                    {product.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    Premium quality {product.category}, ideal for bulk export
                    and international distribution.
                  </p>

                  {/* Details */}
                  <div className="flex flex-wrap items-center gap-2 mb-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Package className="w-3.5 h-3.5" />
                      MOQ: 1 Container
                    </span>
                    <span>•</span>
                    <span>Origin: Pakistan</span>
                  </div>

                  {/* Stock Status */}
                  {product.stock > 0 ? (
                    <div className="flex items-center gap-1.5 mb-4 text-xs text-emerald-600">
                      <Check className="w-4 h-4" />
                      <span>In Stock ({product.stock} units)</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1.5 mb-4 text-xs text-destructive">
                      <X className="w-4 h-4" />
                      <span>Out of Stock</span>
                    </div>
                  )}

                  {/* Price */}
                  <div className="mb-4">
                    <div className="text-lg font-bold text-foreground">
                      Price: On Request
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Contact for bulk pricing
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 mt-auto">
                    <Button
                      onClick={() =>
                        openWhatsApp(product.name, product.id, quantity)
                      }
                      className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white"
                      size="sm"
                    >
                      <MessageSquare className="w-4 h-4 mr-2" />
                      WhatsApp
                    </Button>
                    <Button
                      onClick={() =>
                        sendEmail(product.name, product.id, quantity)
                      }
                      variant="outline"
                      size="sm"
                      className="flex-1"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Email
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {sortedProducts.length === 0 && (
          <div className="text-center py-16">
            <Package className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
            <h3 className="text-xl font-semibold mb-2">No products found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search or filters
            </p>
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Custom Bulk Orders?</h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Contact us for customized pricing, packaging solutions, and shipping
            arrangements for your specific requirements.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="bg-foreground text-background hover:bg-foreground/90"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Chat on WhatsApp
            </Button>
            <Button size="lg" variant="outline">
              <Mail className="w-5 h-5 mr-2" />
              Send Email Inquiry
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
