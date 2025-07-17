"use client";
import { useEffect, useState } from "react";
import ProductForm from "../../components/ProductForm";

type Product = {
  id: number;
  name: string;
  price: number;
};

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [editing, setEditing] = useState<Product | null>(null);

  // Ambil data saat load awal
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const res = await fetch("/api/products");
    const data = await res.json();
    setProducts(data);
  };

  const handleAdd = async (product: Omit<Product, "id">) => {
    const res = await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });
    const data = await res.json();
    setProducts([...products, data]);
  };

  const handleUpdate = async (product: Product) => {
    const res = await fetch(`/api/products/${product.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });
    const data = await res.json();
    setProducts(products.map((p) => (p.id === product.id ? data : p)));
    setEditing(null);
  };

  const handleDelete = async (id: number) => {
    await fetch(`/api/products/${id}`, { method: "DELETE" });
    setProducts(products.filter((p) => p.id !== id));
  };

  const defaultProduct: Product = { id: 0, name: "", price: 0 };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Daftar Produk</h1>

      <ProductForm
        onSubmit={editing ? handleUpdate : handleAdd}
        initialData={editing || defaultProduct}
        isEdit={!!editing}
        onCancel={() => setEditing(null)}
      />

      <ul>
        {products.map((product) => (
          <li key={product.id} style={{ marginBottom: "1rem" }}>
            {product.name} - Rp {product.price.toLocaleString()}
            <div>
              <button onClick={() => setEditing(product)}>Edit</button>
              <button onClick={() => handleDelete(product.id)}>Hapus</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
