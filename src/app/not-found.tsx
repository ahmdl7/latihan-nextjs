// app/not-found.js
"use client";
import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ textAlign: "center", padding: "100px" }}>
      <h1 style={{ fontSize: "72px" }}>404</h1>
      <p style={{ fontSize: "24px" }}>Halaman tidak ditemukan 😢</p>
      <Link
        href="/"
        style={{ color: "blue", marginTop: "20px", display: "inline-block" }}
      >
        Kembali ke Beranda
      </Link>
    </div>
  );
}
