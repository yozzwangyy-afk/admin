import './globals.css'

export const metadata = {
  title: 'Admin Dashboard',
  description: 'Pusat kendali utama untuk mengatur dan memantau seluruh aktivitas aplikasi dengan efisien dan real-time.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="bg-gray-50">
        {children}
      </body>
    </html>
  )
}
