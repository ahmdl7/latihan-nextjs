import { NextRequest, NextResponse } from "next/server";

const products = [
  { id: 1, name: "Laptop", price: 12000000 },
  { id: 2, name: "Mouse", price: 150000 },
  { id: 3, name: "Keyboard", price: 250000 },
];

// PUT: Update data
export async function PUT(
  req: NextRequest,
  { params }: { params: { id: number } }
) {
  const id = params.id;
  const body = await req.json();
  const { name, price } = body;

  const index = products.findIndex((p) => p.id === id);
  if (index === -1)
    return NextResponse.json({ message: "Not Found" }, { status: 404 });

  products[index] = { id, name, price };
  return NextResponse.json(products[index]);
}

// DELETE: Hapus data
export async function DELETE(
  _: NextRequest,
  { params }: { params: { id: number } }
) {
  const id = params.id;
  const index = products.findIndex((p) => p.id === id);
  if (index === -1)
    return NextResponse.json({ message: "Not Found" }, { status: 404 });

  const deleted = products.splice(index, 1)[0];
  return NextResponse.json(deleted);
}
