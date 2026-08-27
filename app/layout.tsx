export const metadata = {
  title: "Wallet Risk Checker",
  description: "Analyze wallet risk across multiple blockchain networks",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
