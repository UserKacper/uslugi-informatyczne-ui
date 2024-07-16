'use client'
import ServicesOptions from "@/components/service-options";

export default function PricingLayoutBookmark({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
  
    return (
        <>
            <ServicesOptions/>
            {children}
        </>
    );
}
