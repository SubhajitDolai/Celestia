import { Toaster } from "sonner";
import localFont from "next/font/local";
import type { Metadata } from "next";

import { ConvexClientProvider } from "@/components/providers/convex-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ModalProvider } from "@/components/providers/modal-provider";

import "./globals.css";
import { EdgeStoreProvider } from "@/lib/edgestore";

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

export const metadata: Metadata = {
  title: "Celestia",
  description: "An intuitive and customizable workspace for seamless note-taking, planning, and organization.",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/logo_dark.svg",
        href: "/logo_dark.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/logo_light.svg",
        href: "/logo_light.svg",
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ConvexClientProvider>
          <EdgeStoreProvider>

            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
              storageKey="celestia-theme-2"
            >
              <Toaster position="bottom-center" />
              <ModalProvider />
              {children}
            </ThemeProvider>
          </EdgeStoreProvider>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
