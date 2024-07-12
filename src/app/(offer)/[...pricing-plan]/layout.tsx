'use client'
import { Inter } from "next/font/google";
import ServicesOptions from "@/components/service-options";
import { useSearchParams } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function PricingLayoutBookmark({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const query = useSearchParams()
  const queryParam = query.get('plan') ;
    return (
        <>
            <ServicesOptions query={queryParam} />
            {children}
        </>
    );
}
