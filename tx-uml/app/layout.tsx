import React from 'react';
import NewHeader from './components/landingpage/newHeader';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NewHeader />
        {children}
      </body>
    </html>
  );
}