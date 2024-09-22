import { ChakraProvider } from "@chakra-ui/react";
import "../styles/sass/styles.scss";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ChakraProvider>
        <body>
          {children}
        </body>
      </ChakraProvider>
    </html>
  );
}