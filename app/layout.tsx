import "./globals.css"
import Navbar from "@/components/Navbar"
import "./globals.css"

export const metadata = {
  title: "Kanhafoundation NGO",
  description: "Empowering communities through education and support.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <Navbar />
        <main className="pt-20">
          {children}
        </main>
      </body>
    </html>
  )
}