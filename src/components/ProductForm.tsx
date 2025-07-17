"use client";
import { useState, useEffect } from "react";

type ProductFormProps = {
  initialData: {
    name: string;
    price: number;
    id?: number;
  };
  onSubmit: (data: {
    name: string;
    price: number;
    id?: number;
  }) => void | Promise<void>;
  onCancel?: () => void;
  isEdit?: boolean;
};

export default function ProductForm({
  initialData,
  onSubmit,
  onCancel,
  isEdit = false,
}: ProductFormProps) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState<number | string>(0);

  useEffect(() => {
    setName(initialData.name);
    setPrice(initialData.price);
  }, [initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ name, price: Number(price), id: initialData.id });
    setName("");
    setPrice(0);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "2rem" }}>
      <input
        type="text"
        value={name}
        placeholder="Nama Produk"
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="number"
        value={price}
        placeholder="Harga"
        onChange={(e) => setPrice(e.target.value)} // simpan sebagai string
        required
      />
      <button type="submit">{isEdit ? "Update" : "Tambah"} Produk</button>
      {isEdit && onCancel && (
        <button type="button" onClick={onCancel}>
          Batal
        </button>
      )}
    </form>
  );
}
