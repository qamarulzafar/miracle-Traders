"use client"
import { useState, useEffect } from "react";

interface Category {
  id: number;
  name: string;
  slug: string;
}

interface Product {
  id: number;
  name: string;
  slug: string;
  image: string;
  price_on_request: boolean;
}

export default function Home() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null); 

  const API_BASE = "http://localhost:8000";

  // Fetch categories
  useEffect(() => {
    setLoading(true);
    setError(null);
    console.log("Fetching categories from:", `${API_BASE}/categories/`);
    
    fetch(`${API_BASE}/categories/`)
      .then(res => {
        console.log("Categories response status:", res.status);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then(data => {
        console.log("Categories data:", data);
        setCategories(data);
      })
      .catch(err => {
        console.error("Categories error:", err);
        setError(`Failed to load categories: ${err.message}`);
      })
      .finally(() => setLoading(false));
  }, []);

  // Fetch products when category changes
  useEffect(() => {
    if (selectedCategory !== null) {
      setLoading(true);
      setError(null);
      console.log("Fetching products for category:", selectedCategory);
      
      fetch(`${API_BASE}/products/?category_id=${selectedCategory}`)
        .then(res => {
          console.log("Products response status:", res.status);
          if (!res.ok) throw new Error(`HTTP ${res.status}`);
          return res.json();
        })
        .then(data => {
          console.log("Products data:", data);
          const withImages = data.map((p: any) => ({ ...p, image: "/dummy.jpg" }));
          setProducts(withImages);
        })
        .catch(err => {
          console.error("Products error:", err);
          setError(`Failed to load products: ${err.message}`);
        })
        .finally(() => setLoading(false));
    } else {
      setProducts([]);
    }
  }, [selectedCategory]);

  return (
    <div style={{ 
      padding: 20, 
      fontFamily: "Arial, sans-serif",
      backgroundColor: "white",
      minHeight: "100vh",
      marginTop: "80px" // Header ke liye space
    }}>
      <h1 style={{ color: "black" }}>Export Catalog</h1>

      {/* Error Display */}
      {error && (
        <div style={{ 
          backgroundColor: "#fee", 
          color: "#c00", 
          padding: 15, 
          marginBottom: 20,
          borderRadius: 5,
          border: "1px solid #fcc"
        }}>
          <strong>Error:</strong> {error}
          <br />
          <small>Check browser console (F12) for more details</small>
        </div>
      )}

      {/* Loading Display */}
      {loading && (
        <div style={{ 
          backgroundColor: "#eef", 
          padding: 10, 
          marginBottom: 20,
          borderRadius: 5 
        }}>
          Loading...
        </div>
      )}

      <h2 style={{ color: "black" }}>Categories</h2>
      {categories.length === 0 && !loading ? (
        <p style={{ color: "#666" }}>No categories found. Make sure backend is running on port 8000.</p>
      ) : (
        <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
          {categories.map(cat => (
            <button 
              key={cat.id} 
              onClick={() => setSelectedCategory(cat.id)}
              style={{
                padding: "10px 20px",
                backgroundColor: selectedCategory === cat.id ? "#007bff" : "#f0f0f0",
                color: selectedCategory === cat.id ? "white" : "black",
                border: "1px solid #ccc",
                borderRadius: 5,
                cursor: "pointer"
              }}
            >
              {cat.name}
            </button>
          ))}
        </div>
      )}

      <h2 style={{ color: "black" }}>Products</h2>
      {selectedCategory === null ? (
        <p style={{ color: "#999" }}>Please select a category to see products.</p>
      ) : products.length === 0 && !loading ? (
        <p style={{ color: "#999" }}>No products found in this category.</p>
      ) : (
        <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
          {products.map(prod => (
            <div
              key={prod.id}
              style={{ 
                border: "1px solid #ccc", 
                padding: 10, 
                width: 150,
                borderRadius: 5,
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
              }}
            >
              <img src={prod.image} alt={prod.name} style={{ width: "100%", borderRadius: 5 }} />
              <h3 style={{ fontSize: 16, margin: "10px 0 5px 0" }}>{prod.name}</h3>
              <p style={{ margin: 0, color: "#666" }}>
                Price: {prod.price_on_request ? "On Request" : "Available"}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}