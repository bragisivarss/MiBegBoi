import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components";
import { StoreProvider } from "./ProviderStore";

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
    title: "Bara leikaser",
    description: "Flottur kall ad leikaser",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) 
  {
    return (
        <StoreProvider>
            <html lang="en">
                <body className={inter.className}>
                    <Header />
                    {children}
                </body>
            </html>
            </StoreProvider>
    );
}
