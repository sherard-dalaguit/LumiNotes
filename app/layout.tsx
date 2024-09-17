import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import React from "react";
import {ConvexClientProvider} from "@/components/providers/convex-provider";
import { Toaster } from "sonner"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: "LumiNotes",
    description: "The connected workspace where better, faster work happens.",
    icons: {
        icon: [
            {
                media: "(prefers-color-scheme: light)",
                url: "/LumiNotes_logo.png",
                href: "/LumiNotes_logo.png"
            }, 
            {
                media: "(prefers-color-scheme: dark)",
                url: "/LumiNotes_logo_dark.png",
                href: "/LumiNotes_logo_dark.png"
            }
        ]
    }
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={inter.className}>
                <ConvexClientProvider>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="system"
                        enableSystem
                        disableTransitionOnChange
                        storageKey="luminotes-theme"
                    >
                        <Toaster position="bottom-center" />
                        {children}
                    </ThemeProvider>
                </ConvexClientProvider>
            </body>
        </html>
    );
}
