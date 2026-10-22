import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Le BOSS — Organisez le travail, simplement", description: "Les projets, les tâches et les échéances de votre entreprise au même endroit." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="fr"><body>{children}</body></html>; }
