import { NextRequest, NextResponse } from "next/server";

// Simpan data secara statis (sementara, akan hilang kalau server restart)
const products = [
  { id: 1, name: "Laptop", price: 12000000 },
  { id: 2, name: "Mouse", price: 150000 },
  { id: 3, name: "Keyboard", price: 250000 },
];

// GET: Ambil semua data
export async function GET() {
  return NextResponse.json(products);
}

// POST: Tambah data baru
export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, price } = body;

  const newProduct = {
    id: Date.now(), // id unik sederhana
    name,
    price,
  };

  products.push(newProduct);
  return NextResponse.json(newProduct, { status: 201 });
}
