import { ChakraProvider } from "@chakra-ui/react";
import DrawerDashboard from "@/components/Drawer";

export default function AccountLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ChakraProvider>
            <DrawerDashboard />
            <main className="px-16 mt-4">
                {children}
            </main>
        </ChakraProvider>
    );
}