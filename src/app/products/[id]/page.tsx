import { notFound } from "next/navigation";

type ProductPageProps = {
  params: {
    id: string;
  };
};

export default function ProductPage({ params }: ProductPageProps) {
  const { id } = params;

  // Contoh data dummy
  const product = {
    1: { name: "Laptop", price: 1000 },
    2: { name: "Mouse", price: 50 },
    3: { name: "Keyboard", price: 75 },
  }[id];

  if (!product) {
    return notFound(); // Redirect ke app/not-found.tsx jika tidak ada data
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Detail Produk</h1>
      <p>
        <strong>Nama:</strong> {product.name}
      </p>
      <p>
        <strong>Harga:</strong> ${product.price}
      </p>
    </div>
  );
}
