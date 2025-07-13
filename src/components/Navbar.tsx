"use client";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav
      style={{
        background: "#eee",
        padding: "1rem",
        display: "flex",
        gap: "1rem",
      }}
    >
      <Link href="/">Beranda</Link>
      <Link href="/about">Tentang</Link>
      <Link href="/profile">Profil</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/products/1">Produk 1</Link>
      <Link href="/products/2">Produk 2</Link>
    </nav>
  );
}
