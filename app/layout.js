export const metadata = {
  title: 'Frank Grimes - LinkedIn Profile',
  description: 'Professional profile of Frank Grimes',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
