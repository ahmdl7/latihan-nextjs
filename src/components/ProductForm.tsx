// src/components/ProductForm.tsx

import React, { useState } from "react";
import { Product } from "../types"; // kalau kamu pakai type global, sesuaikan path

// ✅ Letakkan interface di sini
interface ProductFormProps {
  onSubmit: (product: Product) => void | Promise<void>;
  initialData?: Product;
  isEdit?: boolean;
  onCancel?: () => void;
}

const ProductForm: React.FC<ProductFormProps> = ({
  onSubmit,
  initialData = { name: "", price: 0, id: 0 },
  isEdit = false,
  onCancel,
}) => {
  const [name, setName] = useState(initialData.name);
  const [price, setPrice] = useState<number | string>(initialData.price);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ name, price: Number(price), id: initialData.id });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input value={name} onChange={(e) => setName(e.target.value)} required />
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <button type="submit">{isEdit ? "Update" : "Add"}</button>
      {onCancel && <button onClick={onCancel}>Cancel</button>}
    </form>
  );
};

export default ProductForm;
