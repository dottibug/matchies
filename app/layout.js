// NextJS 13 root layout
import './global.css';
import Body from '@/components/body/body';

/* 
TS
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
*/

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Body>{children}</Body>
    </html>
  );
}
