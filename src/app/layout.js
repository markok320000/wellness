'use client';
import localFont from "next/font/local";
import "./globals.css";
import ClientProvider from "@/app/providers/ClientProvider";
import BottomNav from "@/app/components/Navbar"; // If BottomNav is separate, make sure file name matches

// Load local variable fonts
const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <ClientProvider>
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased pb-20 bg-black text-white`}>
            <div className="max-w-[400px] w-full mx-auto min-h-screen flex flex-col">
                {children}
                <BottomNav />
            </div>
            </body>
        </ClientProvider>
        </html>
    );
}
